import Image from "next/image";
import arrowIcon from "../../public/assets/onboardingIcons/arrow_dark.png";

function Onboarding() {
  return (
    <div className="space-y-6 flex flex-col w-full items-start">
      <div className="text-blue-500 dark:text-white  text-5xl font-extrabold">
        Get Started With Carai
      </div>
      <ul className="dark:text-gray-400 space-y-6 font-bold ">
        <li className="flex w-fit  dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            src={arrowIcon}
            alt="arrowIconarrowIcon"
            className=" transition group-hover:block"
          />{" "}
          <p> Share, Review & Improve your Code.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white  group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            src={arrowIcon}
            alt="arrowIcon"
            className="transition  group-hover:block"
          />{" "}
          <p> Connect with peers and code together.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            src={arrowIcon}
            alt="arrowIcon"
            className="transition  group-hover:block"
          />{" "}
          <p>Communicate with peers and code together.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-12 hover:scale-150  duration-500  ">
          <Image
            src={arrowIcon}
            alt="arrowIcon"
            className="transition  group-hover:block"
          />{" "}
          <p> Keep track of changes with code versioning.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center transition ease-in-out scale-100 translate-x-0 hover:translate-x-14 hover:scale-150  duration-500  ">
          <Image
            src={arrowIcon}
            alt="arrowIcon"
            className="transition  group-hover:block"
          />{" "}
          <p> Stop coding alone and start collaborating today.</p>
        </li>
      </ul>
      <div className="flex flex-col  space-y-3 w-1/3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
          Create an Account
        </button>
        <button className="px-6 py-3 hover:bg-blue-600 hover:text-white dark:bg-white dark:hover:bg-gray-200 dark:hover:text-blue-500 dark:border-0 rounded-md border">
          Log In
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
