export default function handler(request, response) {

  console.log('==========BODY DELTAS START==========');
  console.log(request.body);
  if (request.body.deltas[0].metadata) {
    for (key in request.body.deltas[0].metadata) {
      console.log(key + ": " + request.body.deltas[0].metadata[key])
    }
  }

  console.log('==========BODY DELTAS START==========\n');

  // Responding to Nylas is important to prevent the webhook from retrying
  response.status(200).end();
}