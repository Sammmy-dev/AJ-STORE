import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet";
import morgan from "morgan";
import { Server } from "http";
import dashboardRoutes from "./routes/dashboardRoutes";


dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

// Routes
app.use("/dashboard", dashboardRoutes);

// Server
const port = process.env.PORT || 3001;
const server = new Server(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
