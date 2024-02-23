import express from "express";
import {
  createTest,
  findAllTests,
  findTestById,
  updateTest,
  deleteTest,
} from "./db.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Read all tests
app.get('/tests', async (req, res) => {
    res.json(await findAllTests());
});

// Read a single test by ID
app.get("/tests/:idT", async (req, res) => {
    const { idT } = req.params;
    res.json(await findTestById(Number(idT)));
});

// Create a new test
app.post('/tests', (req, res) => {
    createTest(req.body);
    res.send('Test created');
});

// Update a test by ID
app.put('/tests/:idT', async (req, res) => {
    const { idT } = req.params;
    const updatedTest = req.body;
    await updateTest(Number(idT), updatedTest);
    res.send('Test updated');
});

// Delete a test by ID
app.delete('/tests/:idT', async (req, res) => {
    const { idT } = req.params;
    await deleteTest(Number(idT));
    res.send('Test deleted');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
