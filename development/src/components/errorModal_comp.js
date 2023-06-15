'use client';

import closeIcon from '../../public/assets/githubGoogleError/closecircle.svg';
import Image from 'next/image';
import errorIcons from '../../public/assets/githubGoogleError/error.svg';

function ErrorModal({ onClose, errorMessage, style }) {
  if (!errorMessage) {
    return null;
  }

  return (
    <div className={style}>
      <div className="w-full transition ease-in-out delay-150 bg-[#FCE9E9] font-nohemi flex items-center justify-center border border-[#E42721] h-14 rounded-md">
        <Image
          src={errorIcons}
          alt="close icon"
          className="w-6 h-6 mx-2"
          priority
        />

        <h1 className="text-[#E42721] mx-2">{errorMessage}</h1>

        <button
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}>
          <Image
            src={closeIcon}
            alt="close icon"
            className="w-6 h-6 mx-2"
            priority
          />
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
