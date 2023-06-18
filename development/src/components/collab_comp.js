import React from 'react';
import CodingEditor from './codingEditor';
import { useSessionContext } from '@/composables/sessionContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Collab = () => {
  const { sessionData } = useSessionContext();
  const [isVideoOn, setIsVideoOn] = useState(false);

  useEffect(() => {
    setIsVideoOn(sessionData.peerSessionId ? true : false);
  }, [sessionData]);

  return (
    <div className="w-full flex">
      <div className={isVideoOn ? 'w-2/3' : 'w-[95vw]'}>
        <CodingEditor />
      </div>
      {isVideoOn && (
        <div className="w-1/3">
          <h1>Video Component here</h1>
          <h2>PeerID: {sessionData.peerSessionId}</h2>
        </div>
      )}
    </div>
  );
};

export default Collab;
