const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoute = require("./routes/postRoute");
const commentsRouter = require("./routes/commentsRouter");

const app = express();
app.use(bodyParser.json());

app.use("/post", postRoute);

app.use('/comments', commentsRouter);

mongoose
  .connect("mongodb://localhost:27017/course", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));
