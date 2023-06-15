import { SessionManager } from "./sessionManagerComp";
import { PeerSession } from "./PeerOverlay_comp";
import { Modal } from "./modal";
import { useRouter, useSearchParams } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

function SessionComp() {
  const router = useRouter();
  const view = useSearchParams().get("view");

  return (
    <div>
      {view == "createSession" ? (
        <Modal
          onClose={() => {
            router.push("/collaborate");
          }}
        >
          <PeerSession />
        </Modal>
      ) : (
        <div></div>
      )}

      <div className="flex w-full justify-center items-end mx-auto">
        <SessionManager />
      </div>
    </div>
  );
}

export default SessionComp;
