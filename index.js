// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

// Initialize express and define a port
const app = express();
const PORT = 3000;

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json());

app.all("/", (request, response) => {
    console.log(request);
    if (request.method === "GET" && request.query.challenge) {
        console.log(`Received challenge code! - ${request.query}`);
        // response.send(request.query.challenge);
        console.log(`Sending challenge code! - ${request.query.challenge}`);
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

    response.status(200).end() // Responding is important
  })


// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));