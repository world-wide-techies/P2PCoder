'use client';
import Image from 'next/image';
import css from '../../../../public/assets/languageIcons/CSS3.png';
import html from '../../../../public/assets/languageIcons/HTML.png';
import js from '../../../../public/assets/languageIcons/Javascript.png';

function TabBarItems({ title, ext, onClose, active, onClick, onDoubleClick }) {
  return (
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={
        active
          ? 'flex justify-between items-center bg-white border-[#5F5BD7] dark:border-gray-400 dark:bg-[#1E1E2A] border-t-2 space-x-4 h-14 p-3 cursor-pointer'
          : 'flex justify-between items-center  dark:bg-[#2F2F3A] dark:text-white space-x-4 h-14 p-3 cursor-pointer'
      }>
      {ext && (
        <Image
          src={
            ext === '.js'
              ? js
              : ext === '.css'
              ? css
              : ext === '.html'
              ? html
              : ''
          }
          width={20}
          height={20}
          priority
          alt={ext}
        />
      )}
      <span
        className={`tab-title
          ${active ? "text-black dark:text-white" : "text-black dark:text-white"}
        `}
      >
        {title}
        <span
          className={
            ext === '.js'
              ? 'text-yellow-500'
              : ext === '.css'
              ? 'text-blue-500'
              : ext === '.html'
              ? 'text-orange-500'
              : 'untitled'
          }>
          {ext}
        </span>
      </span>
      <button onClick={onClose} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className={
            active
              ? "w-5 h-5 text-[#5F5BD7] dark:text-white "
              : "w-5 h-5 text-[#5F5BD7] dark:text-white "
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default TabBarItems;
