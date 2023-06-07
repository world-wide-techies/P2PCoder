export const OnboardingHeader = ({ h1, p }) => {
  return (
    <div>
      <h1 className="text-violet-800 font-extrabold text-3xl mb-3 dark:text-white">
        {h1}
      </h1>
      <p className=" text-neutral-800 font-medium text-sm   dark:text-white">
        {p}
      </p>
    </div>
  );
};
