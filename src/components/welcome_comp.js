import Onboarding from './onboarding_comp';
import Image from 'next/image';
import welcome from '../../public/assets/dashboard/welcome_comp.svg';

const Welcome = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-2/3">
        <Onboarding />
      </div>
      <div className="w-1/3  self-center">
        <Image alt="welcome" src={welcome} />
      </div>
    </div>
  );
};

export default Welcome;
