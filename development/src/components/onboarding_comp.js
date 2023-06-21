import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

function Onboarding() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-y-6 flex flex-col w-full items-start font-nohemi">
      <div className="text-[#5F5BD7] dark:text-white text-5xl mb-6 font-semibold w-full">
        Get Started With Carai
      </div>
      <ul className="text-[#9190AD] text-2xl space-y-8 font-normal">
        <li className="flex w-fit  dark:hover:text-white group items-center">
          <p className="text-[#9190AD]">
            {" "}
            Share, Review and Improve your Code.
          </p>
        </li>
        <li className="flex w-fit dark:hover:text-white  group items-center">
          {" "}
          <p> Connect and code with peers.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center">
          {" "}
          <p>Communicate in real-time.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center">
          {" "}
          <p> Keep track of changes.</p>
        </li>
        <li className="flex w-fit dark:hover:text-white group items-center">
          {" "}
          <p> Start collaborating today.</p>
        </li>
      </ul>
      <div className="flex flex-col space-y-3">
        <Link
          href={"/?view=signup"}
          className="bg-[#5F5BD7] mt-10 hover:bg-[#4b45ff] text-white px-10 py-3 rounded-md dark:bg-[#5F5BD7] dark:hover:bg-[#4b45ff] flex flex-row w-auto flex-nowrap justify-center"
        >
          Create an Account
        </Link>
        <Link
          href={"/?view=login"}
          className="px-56 py-3 bg-[#DCDCE5] dark:text-black rounded-md border flex justify-center"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Onboarding;
