import Onboarding from "./onboarding_comp";
import Image from "next/image";
import welcome from "../../public/assets/dashboard/welcome_comp.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  const view = useSearchParams().get("view");
  return (
    <div>
      <div className="flex w-full justify-center items-end mx-auto">
        <div className="w-1/3 flex justify-center mx-auto">
          <Onboarding />
        </div>
        <div className="w-auto flex justify-end items-center mx-auto">
          <Image
            alt="welcome"
            src={welcome}
            width={600}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
