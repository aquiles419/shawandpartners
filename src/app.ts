import express from "express";
import cors from "cors";
import routes from "./routes";
import "dotenv/config";
import i18n from "i18n";
import path from "path";

const app = express();
const port = process.env.PORT;

i18n.configure({
  locales: ["en", "pt-BR"],
  directory: path.join(__dirname, "/locales"),
  defaultLocale: "en",
  autoReload: true,
});
global.i18n = i18n;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});

export default app;
