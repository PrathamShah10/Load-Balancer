const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRouter = require("./routes/task");
const { mongodburl } = require("./keys");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to monogo");
});
app.get("/", (req, res) => {
  res.send("This is a Task Manager");
});
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
