import Link from "next/link";
function SessionManager() {
  return (
    <div className="space-y-6 w-full dark:bg-[#1E1E2A] font-nohemi p-8">
      <div className="dark:text-white font-extrabold text-4xl">
        Ready to start collaborating?
      </div>
      <div className="space-x-6 font-normal">
        <Link
          href={"?view=createSession"}
          className="text-white bg-blue-500 active:bg-blue-600 rounded-md px-6 py-3"
        >
          New Peer Session
        </Link>

        <Link
          href={"?view=joinSession"}
         className="px-6 py-3 font-normal border border-[#1E1E2A] dark:border-white dark:text-white rounded-md active:text-blue-500">
          Join Peer Session
        </Link>
      </div>
    </div>
  );
}

export { SessionManager };
