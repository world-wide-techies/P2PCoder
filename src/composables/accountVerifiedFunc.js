export const IsAccountVerifiedFunc = (currentUser) => {
  if (currentUser) {
    return currentUser.emailVerified;
  }
  return false;
};
