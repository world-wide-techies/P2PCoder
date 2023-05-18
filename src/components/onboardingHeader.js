export const OnboardingHeader = ({ h1, p }) => {
  return (
    <div>
      <h1 className="text-violet-800 font-extrabold text-3xl mb-3 dark:text-violet-200">
        {h1}
      </h1>
      <p className="text-neutral-800 font-medium text-sm dark:text-neutral-200">{p}</p>
    </div>
  );
};
