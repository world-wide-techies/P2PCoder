const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

function tokenGenerator(identity, room) {
    const token = new AccessToken(
        process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
        process.env.NEXT_PUBLIC_TWILIO_API_KEY,
        process.env.NEXT_PUBLIC_TWILIO_API_SECRET
    );

    token.identity = identity;

    const grant = new VideoGrant();
    grant.room = room;
    token.addGrant(grant);

    const jwtToken = token.toJwt();
    console.log(jwtToken);

    return jwtToken;
}

module.exports = tokenGenerator;