import SessionManager from "./sessionManagerComp";
import PeerSession from "./PeerOverlay_comp";
import JoinSession from "./joinSession_comp";
import { useSearchParams, useRouter } from "next/navigation";
import { Modal } from "./modal";
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
      ) : view == "joinSession" ? (
        <Modal
          onClose={() => {
            router.push("/collaborate");
          }}
        >
          <JoinSession />
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
