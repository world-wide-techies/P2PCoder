import Link from "next/link";

function sessionManager() {
  return (
    <div className="space-y-6 p-6 w-full dark:bg-[#2F2F3A] font-nohemi">
      <div className="dark:text-white font-extrabold text-4xl">
        Ready to start collaborating?
      </div>
      <div className="space-x-6 flex-col font-normal">
        <Link
          href={"#"}
          className="text-white bg-blue-500 active:bg-blue-600 rounded-md px-6 py-3"
        >
          New Peer Session
        </Link>

        <Link
          href="#"
          className="px-6 py-3 font-normal border border-black dark:border-white dark:text-white rounded-md active:text-blue-500"
        >
          Join Peer Session
        </Link>
      </div>
    </div>
  );
}

export { sessionManager };
