const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

//error middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send(`<h1>Hello</h1><a href="/api/v1/products">products route</a>`);
});

app.use("/api/v1/products", productsRouter);

//product routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening at port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
