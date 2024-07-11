const dgram = require("dgram");
const osc = require("osc-min");

const TUIO_PORT = 3333;
const TUIO_IP = "127.0.0.1";

// Create a UDP client
const client = dgram.createSocket("udp4");

let decodedMessage = "";

// Event listener for incoming messages
client.on("message", (msg, rinfo) => {
  try {
    decodedMessage = osc.fromBuffer(msg);
    console.log("TUIO message received:", decodedMessage);
    console.log("Stelle 0: ", decodedMessage.elements[0].args);
    console.log("Stelle 1: ", decodedMessage.elements[1].args);
  } catch (error) {
    console.error("Failed to decode OSC message:", error);
  }
});

// Event listener for errors
client.on("error", (error) => {
  console.error("Client error:", error);
  client.close();
});

// Bind the client to the specified port and IP address
client.bind(TUIO_PORT, TUIO_IP, () => {
  console.log(`Listening for TUIO messages on ${TUIO_IP}:${TUIO_PORT}`);
});

// Importing required modules
const express = require("express");
const cors = require("cors");

// Creating an Express application
const app = express();
app.use(cors());

// Define a route to handle GET requests to the root path '/'
app.get("/", (req, res) => {
  res.send(decodedMessage); // Sending a response with 'Hello, World!' text
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
