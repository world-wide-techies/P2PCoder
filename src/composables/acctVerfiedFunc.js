import { auth } from 'firebase';

const IsAcctVerifiedFunc = () => {
  return auth.currentUser?.emailVerified;
};

export default IsAcctVerifiedFunc;
