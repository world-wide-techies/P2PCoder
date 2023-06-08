import Image from "next/image";
import arrowIconDark from "../../public/assets/onboardingIcons/arrow_dark.png";
import arrowIconLight from "../../public/assets/onboardingIcons/arrow_light.png";
import Link from "next/link";
import { useTheme } from "next-themes";

function Onboarding() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-y-6 flex flex-col w-full items-start font-nohemi">
      <div className="text-[#5F5BD7] dark:text-white text-5xl font-extrabold">
        Get Started With Carai
      </div>
      <ul className="dark:text-gray-400 space-y-6 font-semibold ">
        <li className="flex w-fit  dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            width={26}
            height={26}
            src={theme === "dark" ? arrowIconLight : arrowIconDark}
            alt="arrowIcon"
            className=" hidden transition ease-in-out group-hover:translate-x-0  duration-500 group-hover:block"
          />
          <p> Share, Review & Improve your Code.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white  group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            width={26}
            height={26}
            src={theme === "dark" ? arrowIconLight : arrowIconDark}
            alt="arrowIcon"
            className=" hidden transition ease-in-out group-hover:translate-x-0  duration-500 group-hover:block"
          />{" "}
          <p> Connect with peers and code together.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            width={26}
            height={26}
            src={theme === "dark" ? arrowIconLight : arrowIconDark}
            alt="arrowIcon"
            className=" hidden transition ease-in-out group-hover:translate-x-0  duration-500 group-hover:block"
          />{" "}
          <p>Communicate with peers and code together.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            width={26}
            height={26}
            src={theme === "dark" ? arrowIconLight : arrowIconDark}
            alt="arrowIcon"
            className=" hidden transition ease-in-out group-hover:translate-x-0  duration-500 group-hover:block"
          />{" "}
          <p> Keep track of changes with code versioning.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-14 hover:scale-150  duration-500  ">
          <Image
            width={26}
            height={26}
            src={theme === "dark" ? arrowIconLight : arrowIconDark}
            alt="arrowIcon"
            className=" hidden transition ease-in-out group-hover:translate-x-0  duration-500 group-hover:block"
          />{" "}
          <p> Stop coding alone and start collaborating today.</p>
        </li>
      </ul>
      <div className="flex flex-col space-y-3">
        <Link
          href={"/?view=signup"}
          className="bg-[#5F5BD7] hover:bg-[#4b45ff] text-white px-6 py-3 rounded-md dark:bg-[#5F5BD7] dark:hover:bg-[#4b45ff] flex flex-row w-auto flex-nowrap justify-center"
        >
          Create an Account
        </Link>
        <Link
          href={"/?view=login"}
          className="px-6 py-3 hover:bg-[#5F5BD7] border-[#5F5BD7] hover:text-white dark:text-white dark:bg-[#1E1E2A] dark:hover:text-white dark:hover:bg-[#5F5BD7] dark:border-[#5F5BD7] rounded-md border flex justify-center"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
