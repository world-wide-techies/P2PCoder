import { useState } from "react";

function useThemeChange() {
  const [theme, setTheme] = useState(
    localStorage.getItem("appTheme") || "light"
  );
  const handleThemeChange = () => {
    if (theme == "light") {
      localStorage.setItem("appTheme", "dark");
      setTheme(localStorage.getItem("appTheme"));
    } else {
      localStorage.setItem("appTheme", "light");
      setTheme(localStorage.getItem("appTheme"));
    }
  };
  return {theme, handleThemeChange}
}

export { useThemeChange };
