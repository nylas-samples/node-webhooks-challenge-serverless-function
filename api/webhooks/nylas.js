// example callback_url: https://node-webhooks-challenge-serverless-function.vercel.app/api/webhooks/nylas
export default function handler(request, response) {
  
  // /api/webhooks/nylas?challenge={{CHALLENGE_STRING}}
  if (request.method === "GET" && request.query.challenge) {
    console.log(`Received challenge code! - ${request.query.challenge}`);
    console.log(`Now returning challenge code! - ${request.query.challenge}`);
    // we need to enable the webhook by responding with the challenge parameter
    // CHALLENGE_STRING
    return response.send(request.query.challenge);
  }

 if (request.method === "POST") {
   console.log('==========Message updated start==========');
   request.body.deltas.map(deltas => console.log(JSON.stringify(deltas)));
   console.log('==========Message updated end==========\n');
   // Responding to Nylas is important to prevent the webhook from retrying
   return response.status(200).end();
 }

}