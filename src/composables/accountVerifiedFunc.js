import { auth } from 'firebase';

const IsAccountVerifiedFunc = () => {
  return auth.currentUser?.emailVerified;
};

export default IsAccountVerifiedFunc;
