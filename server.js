const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const multer = require("multer");
const fs = require("fs");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");
const upload = multer({ dest: "./app/uploads/" });

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// route POST pour recevoir un fichier
router.post("/api/image", upload.single("image"), (req, res) => {
	// On récupère le nom du fichier
	const { originalname } = req.file;

	// On récupère le nom du fichier
	const { filename } = req.file;

	// On utilise la fonction rename de fs pour renommer le fichier
	fs
		.rename(`./public/uploads/${filename}`, `./public/uploads/${uuidv4()}-${originalname}`, (err) => {
			if (err) throw err;
			res.send("File uploaded");
		});
});



// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
