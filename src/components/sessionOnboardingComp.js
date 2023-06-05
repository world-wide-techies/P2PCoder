import { handleClick } from "@/composables/sessionManagement";
import Link from "next/link";
import peerIdOverlay from "./peer_Id_Overlay";
const generatePeerId = handleClick();
function collaboraOnboarding() {
  return (
    <div className=" space-y-6 flex flex-col w-full">
      <div className="dark:text-white font-bold text-4xl">
        Ready to start collaborating?
      </div>
      <div className="space-x-6 w-full">
        <Link
          href={"#"}
          className="px-6 py-3 text-white font-medium bg-blue-500 active:bg-blue-600 rounded-md"
          onClick={() => generatePeerId}
        >
          New Peer Session
        </Link>

        <Link
          href="#"
          className="px-6 py-3 font-medium bg-blue-500 text-white rounded-md active:bg-blue-600"
        >
          Join Peer Session
        </Link>
      </div>
    </div>
  );
}

export { collaboraOnboarding, generatePeerId };
