const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Feedback = require("./backend/models/feedback");

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/CoderOne_feedback", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("frontend"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/index.html");
});

app.post("/submit", async (req, res) => {
  const { name, contact, email, feedback } = req.body;
  try {
    const newFeedback = new Feedback({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      feedback: req.body.feedback,
    });
    await newFeedback.save();
    // res.redirect("/");//this will direcly redirect to index.html
    console.log("Feedback submitted successfully");
    res.send(`
    <html>
      <head>
        <title>Feedback Submitted</title>
      </head>
      <body>
        <h1>Feedback submitted successfully</h1>
        <p>Thank you for your feedback. We appreciate your input.</p>
        <a href="/">Go back to the form</a>
      </body>
    </html>
    `);
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).send("Error saving feedback");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
