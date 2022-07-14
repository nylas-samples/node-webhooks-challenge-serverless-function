export default function handler(request, response) {

 if (request.query.challenge) {
  console.log(`Received challenge code! - ${request.query.challenge}`);
  console.log(`Now returning challenge code! - ${request.query.challenge}`);
  return response.send(request.query.challenge);
 }

 response.status(200).end();
}