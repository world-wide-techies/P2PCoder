function handleThemeChange() {
  if (theme == "light") {
    localStorage.setItem("appTheme", "dark");
    callback("dark");
  } else {
    localStorage.setItem("appTheme", "light");
    callback("light");
  }
}

export { handleThemeChange };
