import { appAuth } from './firebaseConfig/config';

export const IsAccountVerifiedFunc = () => {
  return appAuth.currentUser?.emailVerified;
};
