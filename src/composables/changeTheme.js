function handleThemeChange(theme, setTheme) {
  if (theme == 'light') {
    localStorage.setItem('appTheme', 'dark');
    setTheme('dark');
  } else {
    localStorage.setItem('appTheme', 'light');
    setTheme('light');
  }
}

export { handleThemeChange };
