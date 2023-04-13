import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port = 8000;

//* logging middleware
app.use((req, res, next) => {
  console.log("this is logging middleware");
  next();
});

//* READ 전체 고양이 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: console.error(),
    });
  }
});

app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found errer" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
