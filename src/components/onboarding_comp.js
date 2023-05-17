function Onboarding() {
  return (
    <div className="space-y-6">
      <div className="text-blue-500 text-xl font-extrabold">
        Get Started With Carai
      </div>
      <ul className="marker:text-blue-500 list-disc px-6 space-y-6 font-bold text-lg">
        <li>Share, Review & Improve your Code.</li>
        <li>Connect with peers and code together.</li>
        <li>Communicate with peers and code together.</li>
        <li>Keep track of changes with code versionong.</li>
        <li>Stop coding alone and start collaborating today.</li>
      </ul>
      <div className="flex flex-col space-y-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
          Create an Account
        </button>
        <button className="px-6 py-3 hover:bg-blue-600 hover:text-white rounded-md border-[1px]">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
