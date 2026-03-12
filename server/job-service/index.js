const express = require("express");
const jobRoutes = require("./routes/jobRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/jobs", jobRoutes);

app.all("{*path}", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Job service running on port ${port}`));
