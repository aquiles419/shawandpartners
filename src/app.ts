import express from "express";
import cors from "cors";
import routes from "./routes";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});

export default app;
