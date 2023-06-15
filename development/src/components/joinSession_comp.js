import { useState } from "react";
import { joinPeerSession } from "@/composables/sessionManagementFunction";
import { toast } from "react-toastify";
function JoinSession() {
  const [sessionId, setSessionId] = useState("");

  const handleJoinSession = (e) => {
    e.preventDefault();
    if (!sessionId) {
      toast.error("Session ID is required");
    } else {
      joinPeerSession(sessionId);
    }
  };
  return (
    <div className="w-[456px] h-[283px] bg-white  dark:bg-[#2F2F3A] rounded-2xl border-[#504F5F] border-solid font-bold ">
      <div className="p-[32px] gap-[32px] font-nohemi dark:text-white">
        <h1 className="text-3xl leading-8 mb-8">Join Peer Session</h1>

        <div>
          <div className="text-base font-semibold">Session ID</div>
          <input
            type="text"
            name="sessionId"
            id="sessionId"
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            placeholder="Enter Session ID"
            className="py-3 mt-2 mb-4 px-4 h-12 w-full font-normal text-sm bg-[#EBEBF0] rounded-lg"
          />
          <button
            onClick={handleJoinSession}
            className="w-full py-[10px] px-[29px] text-white mt-[15px] rounded-lg bg-blue-500 text-center font-medium text-lg active:opacity-[0.8]"
          >
            Join Peer Session
          </button>
        </div>
      </div>
    </div>
  );
}
export default JoinSession;
