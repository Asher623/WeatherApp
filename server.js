const express = require("express");
const path = require("path");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
app.use(express.static("public"));


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "views/main.html"));
});



app.listen(HTTP_PORT, () => {
    console.log("Ready to handle requests on port " + HTTP_PORT);
});