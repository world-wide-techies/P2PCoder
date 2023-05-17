export const OnboardingHeader = ({ h1, p }) => {
  return (
    <header className="bg-white">
      <h1 className="text-violet-800 font-extrabold text-3xl mb-3">
        Create an account with us
      </h1>
      <p className=" text-neutral-800 font-medium text-sm">{p}</p>
    </header>
  );
};
