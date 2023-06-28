import { useEffect } from "react";
import { addUserToExistingSession } from "@/composables/dbService";
import { useState } from "react";
import ErrorModal from "./errorModal_comp";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTabContext } from "@/composables/tabContext";

function JoinSession() {
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState("");
  const [isUserAdded, setIsUserAdded] = useState(false);
  const router = useRouter();
  const { handleLanguage } = useTabContext();

  useEffect(() => {
    if (error !== "") {
      setTimeout(() => {
        setError("");
      }, 6000);
    }
  }, [error]);

  const handleErrorClose = () => {
    setError("");
  };

  const handleJoinSession = async (e) => {
    e.preventDefault();
    setIsUserAdded(false);

    if (!sessionId) {
      setError("Session ID is required");
    } else {
      const result = await addUserToExistingSession(sessionId);
      if (!result.success) {
        setError(result.message);
      } else {
        setIsUserAdded(true);
        await handleLanguage(result.sessionLanguage, true);
        router.push("/");
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
          <Link href={isUserAdded ? "/Collab" : "#"}>
            <button
              onClick={handleJoinSession}
              className="w-full py-[10px] px-[29px] text-white mt-[15px] rounded-lg bg-blue-500 text-center font-medium text-lg active:opacity-[0.8]"
            >
              Join Peer Session
            </button>
          </Link>
        </div>
      </div>

      <ErrorModal
        errorMessage={error}
        style={"fixed  top-0 right-0 mr-2 "}
        onClose={() => handleErrorClose()}
      />
    </div>
  );
}

export default JoinSession;
