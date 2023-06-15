import React, { useState } from "react";
import CodingEditor from "./codingEditor";

const Collab = () => {
  const [isVideoOn, setIsVideoOn] = useState(false);

  return (
    <div className="w-full flex">
      <div className={isVideoOn ? "w-2/3" : "w-[95vw]"}>
        <CodingEditor />
      </div>
      {isVideoOn && (
        <div className="w-1/3">
          <h1>Video Component here</h1>
        </div>
      )}
    </div>
  );
};

export default Collab;
