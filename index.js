const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Running on port 3000");
});

app.get("/message", (req, res, next) => {
  res.json({ message: "Hello worldddd" });
});

app.use(express.json());

app.post("/message", (req, res, next) => {
  const message = req.body.message;
  res.json({ recievedMessage: message });
});
