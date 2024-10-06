import "dotenv/config";
import express from "express";
import Route from "./routes/Route.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'quasar-front/dist')));
app.use(express.json());

const port = process.env.PORT || 8080;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname + 'quasar-front/dist/index.html'));
    //res.json({message: "ok"});
    res.sendFile(path.join(__dirname) + '/quasar-front/dist/spa/index.html');


});

const corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOptions));

app.use('/api', Route);

app.listen(port, () => {
    console.log(`App corriendo en el puerto: ${port}`);
});
