const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server is running");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    userId: id,
    name: "Gourab Dey",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
