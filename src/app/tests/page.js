import SignUpComponent from "@/components/signup_comp";

function TestPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Test Page {"==>"} Visit /tests</h1>
        <SignUpComponent />
      </div>
    </>
  );
}

export default TestPage;
