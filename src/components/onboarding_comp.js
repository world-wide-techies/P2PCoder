function Onboarding() {
  return (
    <div className="space-y-6">
      <div className="text-[#6D6AEC] text-[43px] font-bold">
        Get Started With Carai
      </div>
      <ul className="marker:text-[#6D6AEC] list-disc px-6 space-y-6 font-bold text-lg">
        <li>Share, Review & Improve your Code.</li>
        <li>Connect with peers and code together.</li>
        <li>Communicate with peers and code together.</li>
        <li>Keep track of changes with code versionong.</li>
        <li>Stop coding alone and start collaborating today.</li>
      </ul>
      <div className="flex flex-col space-y-6 ">
        <button className="bg-[#5D59D7] hover:bg-[#4F52B2] text-white px-6 py-3 rounded-md">
          Create an Account
        </button>
        <button className="px-6 py-3 hover:bg-[#4F52B2] hover:text-white rounded-md border-[1px]">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
