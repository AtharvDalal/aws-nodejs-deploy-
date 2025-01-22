import express from "express";

const app = express();

app.get("/api/get", (req, res) => {
  res.send({ msg: "Hello Nodejs" });
});

app.listen(3001, () => {
  console.log("server started to 3001");
});
