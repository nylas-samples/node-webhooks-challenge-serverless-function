export default function handler(request, response) {

 if (request.method === "GET" && request.query.challenge) {
  console.log(`Received challenge code! - ${request.query.challenge}`);
  console.log(`Now returning challenge code! - ${request.query.challenge}`);
  return response.send(request.query.challenge);
 }

 if (request.method === "POST") {
   console.log('==========Message Updated Start==========');
   request.body.deltas.map(deltas => console.log(JSON.stringify(deltas)));
   console.log('==========Message Updated End==========\n');
 }

  // Responding to Nylas is important to prevent the webhook from retrying
  return response.status(200).end();
}