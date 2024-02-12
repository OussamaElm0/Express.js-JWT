import express from "express";
import { findAll, findTest, insertTest } from "./db.js";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());

app.get('/tests',async (req,res) => {
    res.json(await findAll())
})

app.get("/tests/:idT", async (req, res) => {
  const { idT } = req.params;
  res.json(await findTest(Number(idT)));
});

app.post('/tests', (req, res) => {
    insertTest(req.body)
    res.send('Test created')
})

app.listen(port, () => console.log(`Server running on port ${port}`));
