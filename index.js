const express = require("express");
const cors = require("cors");

const PORT = 6000;
const app = express();

// app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Bisa Masbro")
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
