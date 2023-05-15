//A 10-character peer ID generator

function generatePeerIdCharacter(number) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charac = characters.length;

  let peerId = "";

  for (let i = 0; i < number; i++)
    peerId += characters.charAt(Math.floor(Math.random() * charac));

  //Check if generated peerId exists
  if (idAlreadyExists(peerId)) {
    console.log("oops! id already exists!");
    // id exist? generate a new peerId recursively
    return generatePeerIdCharacter(number);
  }

  console.log(`Hi anonymousauthority, here you go! your peerId is ${peerId}`);
}

// Ensures not to generate existing id
function idAlreadyExists(peerId) {
  /*
      Case - id is stored in DB? 
          res = query database to find id by (peerId)
          if(res) return true
      
      */
  return false;
}

//Call the function below to generate a unique peerId
generatePeerIdCharacter(10);
