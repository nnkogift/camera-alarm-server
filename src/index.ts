import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Ws from "express-ws";


dotenv.config();
const baseApp = express();
const {app} = Ws(baseApp);
app.use(bodyParser.json());
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
    console.log(req.body)
    res.send("Hello World!")
})

app.ws('/', function (ws, req) {
    console.log(`Camera websocket connected`);
    ws.on('message', function (msg) {
        console.log(msg);
    });

});


app.listen(port, () => {
    console.log(`Camera Alarm Server listening at http://localhost:${port}`)
})
