const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/dbConfig');

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Example route to fetch data from a table
app.get('/data', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM your_table_name');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching data.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
