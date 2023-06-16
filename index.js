const express = require("express");
const cors = require("cors");

const PORT = 5999;
const app = express();

// app.use(express.static("public"));

app.use(express.json());
app.use(cors());

const { userRoute } = require("./routers");

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
