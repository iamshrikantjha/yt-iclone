const express = require("express");
const app = express();
const PORT = 5000;
const { MONGOURI } = require("./keys");
const mongoose = require("mongoose");
var cors = require("cors")

// CORS
app.use(cors())


// MODELS
require("./models/user");
require("./models/post");
// mongoose.model('User')



// PARSE JSON
app.use(express.json())

// ROUTER
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

// CONNECTION
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on("Connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("Error", (err) => {
  console.log("Error to MongoDB", err);
});

// const customMiddleware = (req, res, next) => {
//   console.log("Middleware executed !");
//   next();
// };


// app.use(customMiddleware);

app.listen(PORT, () => {
  console.log("Flash @ ", PORT);
});
