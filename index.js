const express = require("express");
const {
    createTest,
    findAllTests,
    findTestById,
    updateTest,
    deleteTest,
} = require("./db.js");
const authRouter = require("./auth.js");

const app = express();
const port = 4000;

app.use(express.json());
app.use('/auth',authRouter)

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
