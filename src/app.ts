import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port = 8000;

//* logging middleware
app.use((req, res, next) => {
  console.log("this is logging middleware");
  next();
});

//* json middleware
app.use(express.json());

//* READ 전체 고양이 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
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

//* READ 특정 고양이 조회
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
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

//* CREATE 새로운 고양이 추가 API
app.post("/cats", (req, res) => {
  try {
    res.status(200).send({
      success: true,
      data: {},
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
