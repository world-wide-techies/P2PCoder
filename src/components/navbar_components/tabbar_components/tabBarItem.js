"use client";
function TabBarItems({ title, onClose, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={
        active
          ? "flex justify-between items-center bg-white dark:bg-white space-x-6 h-14 p-3 cursor-pointer"
          : "flex justify-between items-center  dark:bg-black dark:text-white space-x-6 h-14 p-3 cursor-pointer"
      }
    >
      <span
        className={
          active ? "text-black dark:text-black" : "text-black dark:text-white"
        }
      >
        {title}
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
              ? "w-5 h-5 text-[#5F5BD7] dark:text-black "
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
