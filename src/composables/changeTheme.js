function useThemeChange() {
  if (theme == "light") {
    localStorage.setItem("appTheme", "dark");
    () => "dark";
  } else {
    localStorage.setItem("appTheme", "light");
    () => "light";
  }
}

export { useThemeChange };
