import { addUserToSession } from "@/composables/addUserToSession";
import { useState } from "react";
function JoinSession() {
  const [sessionId, setSessionId] = useState("");

  const handleJoinSession = async (e) => {
    e.preventDefault();
    if (!sessionId) {
      console.log("Session ID is required");
    } else {
      const user = {
        name: "Janet Smith",
        email: "janetsmith@gmail.com",
      };

      const hardcodedSessionId = "76cH5HyEWEhglasWBLl9";
      console.log(`Adding user to session: ${hardcodedSessionId}`);

      const result = await addUserToSession(user, hardcodedSessionId);
      if (result.success) {
        console.log(result.message);
      } else {
        console.log(result.message);
      }
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
            className="py-3 mt-2 mb-4 px-4 h-12 w-full font-normal dark:bg-[#1E1E2A] text-sm rounded-lg"
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
