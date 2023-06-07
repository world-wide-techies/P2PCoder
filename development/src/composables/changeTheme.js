function handleThemeChange(theme) {
  if (theme == 'light') {
    localStorage.setItem('appTheme', 'dark');
  } else {
    localStorage.setItem('appTheme', 'light');
  }
}

export { handleThemeChange };
