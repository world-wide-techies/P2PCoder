import { ForgotPassword } from "@/components/ForgotPassword";

function TestPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {/* <h1 className="text-6xl font-bold">Test Page {"==>"} Visit /tests</h1> */}
        <ForgotPassword />
      </div>
    </>
  );
}

export default TestPage;
