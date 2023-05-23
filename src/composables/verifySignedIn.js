import { appAuth } from "./firebaseConfig/config";

const user = appAuth.currentUser;

export { user };
