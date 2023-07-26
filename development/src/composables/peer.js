function createPeer(userID) {
  const peer = new RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.stunprotocol.org",
      },
      {
        urls: "turn:numb.viagenie.ca",
        credential: "muazkh",
        username: "webrtc@live.com",
      },
    ],
  });

  peer.onicecandidate = handleICECandidateEvent;
  peer.ontrack = handleTrackEvent;
  peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

  return peer;
}


function handleNegotiationNeededEvent(userID) {
    peerRef.current.createOffer().then(offer => {
        return peerRef.current.setLocalDescription(offer);
    }).then(() => {
        const payload = {
            target: userID,
            caller: socketRef.current.id,
            sdp: peerRef.current.localDescription
        };
        socketRef.current.emit("offer", payload);
    }).catch(e => console.log(e));
}

export { createPeer, handleNegotiationNeededEvent};
