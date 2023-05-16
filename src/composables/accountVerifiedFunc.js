function IsAccountVerified(currentUser) {
  if (currentUser) {
    return currentUser.emailVerified;
  }
  return false;
}

export { IsAccountVerified };
