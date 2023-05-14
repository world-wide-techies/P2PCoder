"use client";

import { useCallback, useEffect, useState } from "react";

function NameFinder() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);

  const nameChanged = (event) => {
    setName(event.target.value);
  };
  const onClick = useCallback(
    (e) => {
      e.preventDefault(); // Prevent page from reloading after button is clicked
      console.log(name);
      setShowName(true);
    },
    [name]
  );
  return (
    <div>
      <form onSubmit={onClick} className="w-full flex space-x-3 items-end ">
        <div className="flex flex-col items-start">
          <label htmlFor="userName" className="text-sm text-gray-600">
            Full Name:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={name}
            onChange={nameChanged}
            placeholder="jane doe"
            className="p-3 border-[1px] border-gray-700 placeholder:text-sm"
          />
        </div>
        <button
          type="submit"
          className="flex space-x-3 bg-blue-500 p-3 text-white hover:bg-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span>Find Name</span>
        </button>
      </form>
      {showName ? <p>{name}</p> : <p></p>}
    </div>
  );
}

export default NameFinder;
