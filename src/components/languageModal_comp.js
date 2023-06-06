import Image from 'next/image';
import React, { useState } from 'react';
import HTML from '../../public/assets/languageIcons/HTML.png';
import CSS from '../../public/assets/languageIcons/CSS3.png';
import JS from '../../public/assets/languageIcons/Javascript.png';
import { useTabContext } from '@/composables/tabContext';

export const LanguageModal = ({ onClose }) => {
  const { handleLanguage } = useTabContext();
  const [activeLanguage, setActiveLanguage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeLanguage) {
      handleLanguage(activeLanguage);
      setActiveLanguage('');
      onClose();
    }
  };
  return (
    <div className="w-[456px] h-[328px] bg-white  dark:bg-[#2F2F3A] rounded-2xl border-[#504F5F] border-solid font-bold ">
      <div className="p-8">
        <h1 className="text-3xl leading-8 mb-8">Choose A Language</h1>
        <div className="flex gap-3 text-[#5F5BD7] dark:text-white">
          <div
            onClick={() => setActiveLanguage('html')}
            className={` w-32 h-32 flex justify-center items-center flex-col  rounded-md ${
              activeLanguage === 'html'
                ? 'bg-blue-500 text-white'
                : '  bg-gray-200 dark:bg-[#3D3D48]'
            }`}>
            <Image src={HTML} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">HTML</p>
          </div>
          <div
            onClick={() => setActiveLanguage('css')}
            className={` w-32 h-32 flex justify-center items-center flex-col rounded-md ${
              activeLanguage === 'css'
                ? 'bg-blue-500 text-white '
                : ' bg-gray-200 dark:bg-[#3D3D48]'
            }`}>
            <Image src={CSS} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">CSS</p>
          </div>
          <div
            onClick={() => setActiveLanguage('js')}
            className={` w-32 h-32 flex justify-center items-center flex-col rounded-md ${
              activeLanguage === 'js'
                ? 'bg-blue-500 text-white'
                : ' bg-gray-200 dark:bg-[#3D3D48]'
            }`}>
            <Image src={JS} alt="language-icon" className="mb-4" />
            <p className="leading-tight text-sm">JS</p>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#5F5BD7] text-white rounded-lg py-3 px-36 self-stretch mt-8 flex-grow-0 order-none flex-none justify-center items-center w-[393px] h-12">
          Start Coding
        </button>
      </div>
    </div>
  );
};
