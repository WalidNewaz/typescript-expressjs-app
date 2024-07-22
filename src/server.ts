import express from "express";

import CarApp from "./app";

const server = express();
const PORT = 3000;
const app = new CarApp();

server.get("/", (req, res) => {
  res.send("Hello World from TypeScript in Node.js using Express!");
});

// Route to greet user
server.get("/greet/:id", (req, res) => {
  let id = parseInt(req.params.id);
  res.send(app.greetUser(id));
});

// Route to get user data
server.get("/user/:id", (req, res) => {
  let id = parseInt(req.params.id);
  res.json(app.getUser(id));
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// document.getElementById('app')!.innerHTML =
//   `<h1>Hello from TypeScript and Webpack!</h1>`;

