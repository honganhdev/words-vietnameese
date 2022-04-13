import express from "express";
import fs from "fs";
import path from "path";

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.resolve();
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// eslint-disable-next-line consistent-return
app.get("/words/:word", (req, res) => {
  const dirPath = path.join(__dirname, "src/words.json");
  const words = JSON.parse(fs.readFileSync(dirPath));
  const data = req.params;
  console.log(data.word.toLowerCase());

  const findWords = words.find(
    item => item.word.toLowerCase() === data.word.toLowerCase()
  );
  console.log(findWords);
  if (!findWords) {
    return res.send({ success: false, message: "a invalid" });
  }
  return res.send({
    sucess: true,
    data: findWords
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
