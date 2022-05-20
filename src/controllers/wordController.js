import fs from "fs";
import path from "path";

// eslint-disable-next-line import/prefer-default-export
export async function getOne(req, res) {
  try {
    // eslint-disable-next-line no-underscore-dangle
    const __dirname = path.resolve();
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
    return res.send({ success: false, message: "a invalid" });
  }
}
