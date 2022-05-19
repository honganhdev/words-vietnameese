import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Hello my name is Rasengan!");
});
// eslint-disable-next-line consistent-return
app.get("/words", (req, res) => {
  try {
    const dirPath = path.join(__dirname, "src/words.json");
    const words = JSON.parse(fs.readFileSync(dirPath));
    const data = req.body;

    const findWords = words.find(
      item => item.word.toLowerCase() === data.word.toLowerCase()
    );
    // eslint-disable-next-line no-console
    console.log(findWords);
    if (!findWords) {
      return res.send({ success: false, message: "a invalid" });
    }
    return res.send({
      success: true,
      data: findWords
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${process.env.PORT}`);
});
