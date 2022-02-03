const express = require("express");
const tasks = require("./routes/tasks.route");
const app = express();
const connectDB = require("./DB/connect.db");
require("dotenv").config();
const notFound = require("./middleware/not_found");
const errorHandler = require("./middleware/error-handle");

//middleware
app.use(express.json());

app.use(express.static("./public"));

//routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

//app.get('/api/v1/tasks')
//app.post('/api/v1/tasks')
//app.get('/api/v1/tasks/:id')

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
