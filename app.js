import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./src/routes/api.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";

const app = express();

//Parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

//Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.",
});
app.use(limiter);
// MIDDLEWARES
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(xss());

// ROUTES ENTRY
app.use("/api/v1", router);

export default app;
