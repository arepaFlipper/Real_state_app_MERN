import express from 'express';
import * as dotenv from 'dotenv';
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () => {
      console.log(`🔃%cindex.js:20 - Server started on port http://localhost:8080/`, 'font-weight:bold; background:#59a600;color:#fff;')
    })
  } catch (error) {
    console.log(error);
  }
}

startServer();
