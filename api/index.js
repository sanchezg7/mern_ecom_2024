import express from "express";
import debug from "debug";
const log = debug("app")

const app = express();

app.get("/users", (req, res) => {
   res.json({"message": "success"})
});

const PORT = 8000;
app.listen(8000, () => {
   console.log(`Running on ${PORT}`)
})