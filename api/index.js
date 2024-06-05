const express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");
const api = express();
const db = require("./sqlite")

api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({
  extended: false
}));

console.log("Setting up Database")
db.setup()

api.listen(3000, () => {
  console.log("Server started ...");
});

api.get("/prescription", async (req, res) => {
  console.log("Getting all prescriptions")
  var data = await db.getPrescriptions();
  res.status(200);
  res.send(data);
})

api.post("/prescription", (req, res) => {
  console.log("Storing new prescription")
  db.createPrescription({
    l_sph: req.body.l_sph,
    l_cyl: req.body.l_cyl,
    l_axis: req.body.l_axis,
    r_sph: req.body.r_sph,
    r_cyl: req.body.r_cyl,
    r_axis: req.body.r_axis
  })
  res.status(201);
  res.send(req.body);
})

api.get("/glasses", async (req, res) => {
  console.log("Getting all pairs of glasses")
  var data = await db.getGlasses();
  res.status(200);
  res.send(data);
})

api.post("/glasses", (req, res) => {
  console.log("Storing new pair of glasses")
  db.createGlasses({
    brand: req.body.brand,
    retailer: req.body.retailer,
    img: req.body.img,
    sunglasses: req.body.sunglasses
  })
  res.status(201);
  res.send(req.body);
})