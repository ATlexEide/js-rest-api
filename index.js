const express = require("express");
const app = express();

class Message {
  constructor(content) {
    this.message = content;
  }
  getContent() {
    return this.message;
  }
}
app.listen(3000, () => {
  console.log("Running on port 3000");
});

app.get("/message", (req, res, next) => {
  res.json({ message: "Hello worldddd" });
});

app.use(express.json());

app.post("/message", (req, res, next) => {
  const newMessage = new Message(req.body.message);
  console.log(newMessage.getContent());
  res.json({ "recievedMessage": newMessage.getContent() });
});
