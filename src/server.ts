import express from "express";

import CarApp from "./app";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const carApp = new CarApp();

app.get("/", (req, res) => {
  res.send("Hello World from TypeScript in Node.js using Express!");
});

// Route to greet user
app.get("/greet/:id", (req, res) => {
  let id = parseInt(req.params.id);
  res.send(carApp.greetUser(id));
});

// Route to get user data
app.get("/user/:id", (req, res) => {
  let id = parseInt(req.params.id);
  res.json(carApp.getUser(id));
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

export { server };

// document.getElementById('app')!.innerHTML =
//   `<h1>Hello from TypeScript and Webpack!</h1>`;

