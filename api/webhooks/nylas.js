export default function handler(request, response) {

 if (request.method === "GET" && request.query.challenge) {
  console.log(`Received challenge code! - ${request.query.challenge}`);
  console.log(`Now returning challenge code! - ${request.query.challenge}`);
  return response.send(request.query.challenge);
 }

 if (request.method === "POST") {
   console.log('==========BODY DELTAS START==========');
   console.log(request.body);
   if (request.body.deltas[0].metadata) {
       for (key in request.body.deltas[0].metadata) {
           console.log(key + ": " + request.body.deltas[0].metadata[key])
       }
   }
   console.log('==========BODY DELTAS START==========\n');
 }

  // Responding to Nylas is important to prevent the webhook from retrying
  response.status(200).end();
}