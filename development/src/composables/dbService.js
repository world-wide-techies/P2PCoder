import { appFirestore, appAuth, app } from "./firebaseConfig/config";
import { setDoc, doc, addDoc, updateDoc, getDoc } from "firebase/firestore";

//const p2pCoder = doc(appFirestore, "P2PCoder");

const users = doc(appFirestore, "Users/usersId");

const coders = doc(users, "CODERS/codersId");
const session = doc(coders, "SESSION/sessionId");

async function addCodeEditor(codeEditorData) {
  try {
    const codeEditorData = {
      codes: "Html",
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    };

    const docRef = await setDoc(coders, codeEditorData, { merge: true });
    console.log("value added");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function getUser(codeEditorData) {
  try {
    const user = await getDoc(coders);
    if (user.exists()) {
      const docData = user.data();
    }

    console.log(`value added : ${docData}`);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function addSession(codeEditorData) {
  try {
    const codeEditorData = {
      codes: "Html",
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    };

    const docRef = await getDoc(session, codeEditorData, { merge: true });
    console.log("value added");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

//const collabSession = doc(appFirestore, "collaboration/session");

/*async function addCollabSessionToFirestore(sessionData) {
  try {
    const docRef = await setDoc(collabSession, sessionData, { merge: true });
    console.log(docRef);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function addCollabSessionToFirestore(sessionData) {
  try {
    const docRef = await updateDoc(collabSession, sessionData,);
    console.log(docRef);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
*/

const fulfilOrder = async (session) => {
  /* console.log("fulfilling order", session);*/

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(
        `SUCCESS: Order ${session.id} is stored successfully in the database`
      );
    });
};

export { addCodeEditorToFirestore };
