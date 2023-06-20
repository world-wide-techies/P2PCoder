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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2714 9.18005C20.9814 8.72005 20.6714 8.29005 20.3514 7.89005C19.9814 7.42005 19.2814 7.38005 18.8614 7.80005L15.8614 10.8001C16.0814 11.4601 16.1214 12.2201 15.9214 13.0101C15.5714 14.4201 14.4314 15.5601 13.0214 15.9101C12.2314 16.1101 11.4714 16.0701 10.8114 15.8501C10.8114 15.8501 9.38141 17.2801 8.35141 18.3101C7.85141 18.8101 8.01141 19.6901 8.68141 19.9501C9.75141 20.3601 10.8614 20.5701 12.0014 20.5701C13.7814 20.5701 15.5114 20.0501 17.0914 19.0801C18.7014 18.0801 20.1514 16.61 21.3214 14.74C22.2714 13.23 22.2214 10.6901 21.2714 9.18005Z"
              fill="#5F5BD7"
            />
            <path
              d="M14.0206 9.98001L9.98062 14.02C9.47062 13.5 9.14062 12.78 9.14062 12C9.14062 10.43 10.4206 9.14001 12.0006 9.14001C12.7806 9.14001 13.5006 9.47001 14.0206 9.98001Z"
              fill="#5F5BD7"
            />
            <path
              d="M18.25 5.75005L14.86 9.14005C14.13 8.40005 13.12 7.96005 12 7.96005C9.76 7.96005 7.96 9.77005 7.96 12.0001C7.96 13.1201 8.41 14.1301 9.14 14.8601L5.76 18.2501H5.75C4.64 17.3501 3.62 16.2001 2.75 14.8401C1.75 13.2701 1.75 10.7201 2.75 9.15005C3.91 7.33005 5.33 5.90005 6.91 4.92005C8.49 3.96005 10.22 3.43005 12 3.43005C14.23 3.43005 16.39 4.25005 18.25 5.75005Z"
              fill="#5F5BD7"
            />
            <path
              d="M14.8581 12C14.8581 13.57 13.5781 14.86 11.9981 14.86C11.9381 14.86 11.8881 14.86 11.8281 14.84L14.8381 11.83C14.8581 11.89 14.8581 11.94 14.8581 12Z"
              fill="#5F5BD7"
            />
            <path
              d="M21.7689 2.23C21.4689 1.93 20.9789 1.93 20.6789 2.23L2.22891 20.69C1.92891 20.99 1.92891 21.48 2.22891 21.78C2.37891 21.92 2.56891 22 2.76891 22C2.96891 22 3.15891 21.92 3.30891 21.77L21.7689 3.31C22.0789 3.01 22.0789 2.53 21.7689 2.23Z"
              fill="#5F5BD7"
            />
          </svg>
        );
      } else {
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
              fill="#5F5BD7"
            />
            <path
              d="M11.9984 9.14001C10.4284 9.14001 9.14844 10.42 9.14844 12C9.14844 13.57 10.4284 14.85 11.9984 14.85C13.5684 14.85 14.8584 13.57 14.8584 12C14.8584 10.43 13.5684 9.14001 11.9984 9.14001Z"
              fill="#5F5BD7"
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
      <div className="absolute inset-y-0 right-0 px-3 flex items-center">
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



