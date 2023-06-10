export const OnboardingHeader = ({ h1, p }) => {
  return (
    <div>
      <h1 className="text-[#5f5bd7] font-bold text-4xl mb-3  dark:text-white">
        {h1}
      </h1>
      <p className=" text-[#3D3C49] font-normal text-base mb-5  dark:text-white">
        {p}
      </p>
    </div>
  );
};
