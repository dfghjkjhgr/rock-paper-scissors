const express = require("express")
const app = express();
const port = 3000;
app.use(express.static("dist"));
app.listen(process.env.PORT|| 8000, () => console.log("server up"))