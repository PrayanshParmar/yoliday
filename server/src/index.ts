import express from "express";
import cors from "cors";
import http from "http";
import "dotenv/config";
import routes from "./routes";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
); // Use morgan here
app.use("/", routes());
app.use("/assets", express.static(path.join(__dirname, "../assets")));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
