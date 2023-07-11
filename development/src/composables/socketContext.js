import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();

const socket = io.connect("http://localhost:3001");

const SocketContextProvider = ({ children }) => {
  const [caller, setCaller] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [call, setCall] = useState({});
  const [recievingCall, setRecievingCall] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState(false);
  const [me, setMe] = useState(false);

  const connectionRef = useRef(null);
  useEffect(() => {
    socket.emit("join-call", sessionData.peerSessionId);
    // getCall();
    // socket.on("me", (id) => setMe(id));

    socket.on("callpeer", ({ from, signal }) => {
      setCall({ isReceivingCall: true, from, signal });
    });
  }, []);

  const callPeer = async (data) => {
    const {id, sessionName,  videoStream} = data
    try {
      console.log(id);
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: videoStream,
      });

      peer.on("signal", (data) => {
        socket.emit("callPeer", {
          userToCall: id,
          signalData: data,
          from: sessionName,
        });
       
      });

      peer.on("stream", (videoStream) => {
        userVideoRef.current.srcObject = videoStream;
      });

      socket.on("callAccepted", (signal) => {
        setCallAccepted(true);
        peer.signal(signal);
      });

      connectionRef.current = peer;
    } catch (error) {
      console.log(error);
    }
  };

  const answerCall = (data) => {
   const {videoStream, userVideoRef} = data
    console.log("call answered");
    setCallAccepted(true);

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: videoStream,
    });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });

    peer.on("stream", (videoStream) => {
      userVideoRef.current.srcObject = videoStream;
    });
    console.log(call.signal);
    peer.signal(call.signal);
    connectionRef.current = peer;
  };

  const endCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  
  return (
    <SocketContext.Provider
      value={{
        call,
        setCall,
        callAccepted,
        callEnded,
        me,
        callPeer,
        leaveCall,
        answerCall,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

const useSocketContext = () => {
  return useContext(SocketContext);
};

export { SocketContextProvider, useSocketContext };
