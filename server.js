const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "application/hta");
  res.sendFile(path.join(__dirname, "file.hta"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
