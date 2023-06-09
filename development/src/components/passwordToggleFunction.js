"use client";
import { useEffect, useState } from "react";

const PasswordToggle = ({
  inputId,
  inputValue,
  handleInputChange,
  placeholder,
  customClass,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDefaultPassword, setIsDefaultPassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState(null);

  const handleToggleClick = () => {
    if (inputValue !== "") {
      setIsPasswordVisible(!isPasswordVisible);
      setIsDefaultPassword(false);
    } else if (isPasswordVisible) {
      setIsPasswordVisible(false);
      setIsDefaultPassword(true);
    }
  };

  useEffect(() => {
    setEyeIcon(() => {
      if (isPasswordVisible) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 dark:text-[#DCDCE5] text-[#5F5BD7]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 dark:text-[#DCDCE5] text-[#5F5BD7]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        );
      }
    });
  }, [isPasswordVisible]);

  const passwordInputType = isDefaultPassword
    ? "password"
    : isPasswordVisible
    ? "text"
    : "password";

  return (
    <div className="relative w-full">
      <input
        type={passwordInputType}
        name={inputId}
        id={inputId}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={customClass}
      />
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <button
          type="button"
          onClick={handleToggleClick}
          disabled={!inputValue}
        >
          {eyeIcon}
        </button>
      </div>
    </div>
  );
};

export { PasswordToggle };
