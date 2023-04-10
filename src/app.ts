import * as express from "express";
import { Cat, CatType } from "app.model";

const app: express.Express = express();
const port = 8000;

const data = [1, 2, 3, 4];

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
