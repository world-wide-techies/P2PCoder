// A function to verify if user is singed in or not

function SignedIn(){

//Fetches the current user from firebase 

	const user = firebase.auth().currentUser;

	if(user){
		return true; //Returns true if user is signedd in
	}
	else{
		return false; //Returns false if user is notsigned in
	}
