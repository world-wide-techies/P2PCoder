import { useCallback, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { useSessionContext } from "@/composables/sessionContext";

export default function WebCamRecorder({
  onBlobChanged,
  peername,
  peerDetails,
  isUser,
}) {
  const socket = io.connect("http://localhost:3001");
  const myVideoRef = useRef(null);
  const userVideoRef = useRef(null);
  const connectionRef = useRef(null);
  const [videoStream, setVideoStream] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [isSession, setIsSession] = useState(false);
  const [blob, setBlob] = useState(false);
  const [name, setName] = useState("");
  const [caller, setCaller] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [call, setCall] = useState({});
  const [recievingCall, setRecievingCall] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState(false);
  const [me, setMe] = useState(false);
  const { sessionData } = useSessionContext();

  const stopAudio = () => {
    try {
      audioStream.getTracks().forEach((track) => track.stop());
      setAudioStream(null);
      setAudioEnabled(false);
    } catch (error) {
      console.log(error);
    }
  };
  const micActivate = () => {
    try {
      if (audioStream && audioEnabled) {
        stopAudio();
      } else {
        if (audioStream == null) {
          setAudioEnabled(true);
        } else if (!audioEnabled) {
          stopAudio();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const stopVideoCam = () => {
    try {
      videoStream.getTracks().forEach((track) => track.stop());
      setVideoStream(null);
    } catch (error) {
      console.log(error);
    }
  };

  const videoActivate = () => {
    try {
      if (videoStream && videoEnabled) {
        stopVideoCam();
        setVideoEnabled(!videoEnabled);
        setVideoStream(null);
      } else {
        startVideoStream();
        setVideoEnabled(!videoEnabled);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const startAudioStream = useCallback(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setAudioStream(stream);
      })
      .catch((err) => console.error(err));
  }, []);
  const startVideoStream = useCallback(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        myVideoRef.current.srcObject = stream;
        setVideoStream(stream);
      })
      .catch((err) => console.error(err));
  }, [videoEnabled]);
  const makeRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  const startRecording = () => {
    if (audioStream && videoStream) {
      let mediaStream = new MediaStream();
      videoStream.getTracks().forEach((track) => mediaStream.addTrack(track));
      audioStream.getTracks().forEach((track) => mediaStream.addTrack(track));

      const options = { mimeType: "video/webm" };
      const newRecorder = new MediaRecorder(mediaStream, options);
      setRecorder(newRecorder);
      setIsRecording(true);

      const chunks = [];
      newRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      newRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        onBlobChanged(blob);
        setBlob(true);
        setAudioEnabled(false);
        setVideoEnabled(false);
      };
      newRecorder.start();
    } else {
      console.log(audioStream, videoStream);
      console.log("one or more streams are not active");
    }
  };

  const stopRecording = () => {
    if (recorder && recorder.state !== "inactive") {
      recorder.stop();
      setIsRecording(false);
    }
  };

  async function getCall() {
    await callPeer(sessionData.peerSessionId);
  }

  handleJoinRoom(sessionData)

  useEffect(() => {
    socket.emit("join-room", sessionData.peerSessionId);
    
    // socket.on("me", (id) => setMe(id));

    socket.on("callpeer", ({ from, signal }) => {
      setCall({ isReceivingCall: true, from, signal });
    });
  }, []);

  useEffect(() => {
    // console.log(socket);
    // console.log(sessionData);
    // console.log(peerDetails);

    // socket.emit("join-call", sessionData.peerSessionId);
    // getCall();

    // socket.on("callpeer", ({ from, signal }) => {
    //   setCall({ isReceivingCall: true, from, signal });
    // });
    // socket.on("callpeer", (data) => {
    //   console.log(data);
    //   setCall(data);
    //   setRecievingCall(true);
    //   setCaller(data.from);
    //   setName(data.name);
    //   setCallerSignal(data.signal);
    // });

    // socket.on("me", (id) => {
    //   setMe(id);
    // });

    if (audioEnabled) {
      startAudioStream();
    } else {
      if (audioStream != null) {
        stopAudio();
      }
    }
    if (videoEnabled) {
      console.log("Enabled");
      startVideoStream();

      // socket.on("me", (id) => {
      //   setMe(id);
      // });
    } else {
      if (videoStream != null) {
        stopVideoCam();
      }
    }
    if (audioEnabled && videoEnabled) {
      setIsSession(true);
    } else {
      setIsSession(false);
    }

    // socket.on("callpeer", ({ from, signal }) => {
    //   setCall({ isReceivingCall: true, from, signal });
    // });

    // if (peerDetails.collaboratorsName) {
    //   // answerCall();
    // }
  }, [audioEnabled, videoEnabled, peerDetails]);

  // const callPeer = async (id) => {
  //   try {
  //     console.log(id);
  //     const peer = new Peer({
  //       initiator: true,
  //       trickle: false,

  //       stream: videoStream,
  //     });

  //     peer.on("signal", (data) => {
  //       socket.emit("callPeer", {
  //         userToCall: id,
  //         signalData: data,
  //         from: sessionData.sessionName,
  //       });
  //       console.log(data);
  //       console.log(sessionData.sessionName);
  //     });

  //     peer.on("stream", (videoStream) => {
  //       userVideoRef.current.srcObject = videoStream;
  //     });

  //     socket.on("callAccepted", (signal) => {
  //       setCallAccepted(true);
  //       peer.signal(signal);
  //     });

  //     connectionRef.current = peer;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const answerCall = () => {
  //   console.log("call answered");
  //   setCallAccepted(true);

  //   const peer = new Peer({
  //     initiator: false,
  //     trickle: false,

  //     stream: videoStream,
  //   });

  //   peer.on("signal", (data) => {
  //     socket.emit("answerCall", { signal: data, to: caller });
  //   });

  //   peer.on("stream", (currentVideoStream) => {
  //     userVideoRef.current.srcObject = currentVideoStream;
  //   });
  //   console.log(call.signal);
  //   peer.signal(call.signal);
  //   connectionRef.current = peer;
  // };

  // const endCall = () => {
  //   setCallEnded(true);
  //   connectionRef.current.destroy();
  // };

  return (
    <div className="w-full relative flex items-center align-middle bg-black rounded-3xl shadow-gray-800">
      <video
        style={{
          width: callAccepted ? `50%` : `100%`,
          height: `350px`,
          objectFit: "cover",
        }}
        ref={myVideoRef}
        autoPlay
        muted
        className="top-0 left-0 w-full h-full aspect-video rounded-2xl shadow-gray-800"
      />
      {callAccepted && !callEnded && (
        <video
          style={{
            width: `50%`,
            height: `350px`,
            objectFit: "cover",
          }}
          ref={userVideoRef}
          autoPlay
          className="top-0 left-0 w-full h-full aspect-video rounded-2xl shadow-gray-800"
        />
      )}

      <div className="absolute z-50 inset-0 bg-opacity-5 w-full">
        <div className="bottom-0 absolute flex justify-between text-center items-center w-[80%] mb-3 ml-12">
          {isUser ? (
            <div className=" flex justify-start text-center items-center space-x-4">
              <button
                className={
                  audioEnabled
                    ? `border-white border-[1px] p-2 rounded-full hover:bg-gray-200 group`
                    : `border-white border-[1px] p-2 rounded-full hover:bg-gray-200 bg-red-600 group`
                }
                onClick={micActivate}
              >
                {audioEnabled ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white group-hover:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white group-hover:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                    />
                  </svg>
                )}
              </button>
              <button
                className={
                  videoEnabled
                    ? `border-white border-[1px] p-2 rounded-full hover:bg-gray-200 group`
                    : `border-white border-[1px] p-2 rounded-full hover:bg-gray-200 bg-red-600 group`
                }
                onClick={videoActivate}
              >
                {!videoEnabled ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white group-hover:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white group-hover:text-black"
                  >
                    <path
                      strokeLinecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                )}
              </button>
              {isSession ? (
                <button
                  className={
                    !isRecording
                      ? `border-white border-[1px] p-3 rounded-full hover:bg-gray-200 group`
                      : `border-white border-[1px] p-3 rounded-full hover:bg-gray-200 bg-red-600`
                  }
                  onClick={() => {
                    makeRecording();
                  }}
                >
                  {isRecording ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-7 h-7 text-white group-hover:text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  )}
                </button>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
          <div //className="bg-gray-500 p-3 py-1 rounded-2xl"
            className={`bg-gray-500 p-3 py-1 rounded-2xl ${
              !peername && `italic text-sm  font-extralight  text-gray-300`
            }`}
          >
            <p>
              {peerDetails.codersName
                ? peerDetails.codersName
                : "Awaiting user..."}
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                callPeer(sessionData.peerSessionId);
              }}
            >
              create call
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                answerCall();
              }}
            >
              Answer call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
