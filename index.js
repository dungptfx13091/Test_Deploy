const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const data = [
  {
    name: "Adeel Solangi",
    language: "Sindhi",
    id: "V59OF92YF627HFY0",
    bio: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
    version: 6.1,
  },
  {
    name: "Afzal Ghaffar",
    language: "Sindhi",
    id: "ENTOCR13RSCLZ6KU",
    bio: "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    version: 1.88,
  },
  {
    name: "Aamir Solangi",
    language: "Sindhi",
    id: "IAKPO3R4761JDRVG",
    bio: "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
    version: 7.27,
  },
  {
    name: "Abla Dilmurat",
    language: "Uyghur",
    id: "5ZVOEPMJUI4MB4EN",
    bio: "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
    version: 2.53,
  },
  {
    name: "Adil Eli",
    language: "Uyghur",
    id: "6VTI8X6LL0MMPJCC",
    bio: "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
    version: 6.49,
  },
  {
    name: "Adile Qadir",
    language: "Uyghur",
    id: "F2KEU5L7EHYSYFTT",
    bio: "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
    version: 1.9,
  },
];

app.use(cookieParser());
app.enable("trust proxy", 1);
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET,POST,PUT,PATH,DELETE,OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
  try {
    res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send("SERVER ERROR");
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
