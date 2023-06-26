import dotenv from "dotenv";
import server from "./app.js";
dotenv.config();
var port = process.env.PORT || 5000;
server.listen(port, function () { return console.log("Server run port=".concat(port)); });
