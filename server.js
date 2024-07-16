require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRoute = require("./router/service-router");

const PORT = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions)); // middleware to handle Cors policy issue
app.use(express.json()); // middleware

// Mounting the routers.
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Let's Mount the admin route
app.use("/api/admin",adminRoute);
 
app.use(errorMiddleware);

// ensuring the deployment of server only if the connection with the DB is succesfully done.
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api/auth`);
  });
});
