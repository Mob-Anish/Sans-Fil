const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
// const hpp = require('hpp');

const userRouter = require("./routes/userRoutes");

const app = express();

//---------- Global Middleware -----------//

if (process.env.NODE_ENV === "development" || "production") {
  console.log(process.env.NODE_ENV);
  app.use(morgan("dev"));
}

// Body parser, reading data from body in req.body
app.use(express.json());
app.use(cookieParser()); // It will add cookies to request.

// Data Sanitization against NoSql query injection
app.use(mongoSanitize());

// Data Sanitization against xss
app.use(xss());

// For any request
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Request response time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

// Test Middleware
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

//-------- Api Routes --------//
app.use("/api/v1/users", userRouter);

module.exports = app;
