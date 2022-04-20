const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info(`Event body: ${JSON.stringify(request.body)}`, {structuredData: true});
    response.send("successfully did stuff with metric event");
});
