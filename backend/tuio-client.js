//Der Client ist dafür Zuständig die Daten der Multitouch Plattform abzurufen und für weitere Nutzung zur Verfügung zu stellen

const dgram = require("dgram");
const osc = require("osc-min");

const TUIO_PORT = 3333;
const TUIO_IP = "127.0.0.1";

const client = dgram.createSocket("udp4");

let decodedMessage = "";

//Ruft die TUIO-messages über einen definierten Port und IP ab ab
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

client.on("error", (error) => {
  console.error("Client error:", error);
  client.close();
});

client.bind(TUIO_PORT, TUIO_IP, () => {
  console.log(`Listening for TUIO messages on ${TUIO_IP}:${TUIO_PORT}`);
});

//Daten werden per Abruf (Get-Methode) zur Verfügung gestellt auf dem defineirten Port (3000)

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(decodedMessage);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
