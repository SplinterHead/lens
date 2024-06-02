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

console.log("Creating Prescription Schema")
db.createPrescriptionSchema()

api.listen(3000, () => {
  console.log("Server started ...");
});

api.get("/prescription", async (req, res) => {
  var data = await db.getPrescriptions();
  res.status(200);
  res.send(data);
})

api.post("/prescription", (req, res) => {
  let l_sph = req.body.l_sph;
  let l_cyl = req.body.l_cyl;
  let l_axis = req.body.l_axis;
  let r_sph = req.body.r_sph;
  let r_cyl = req.body.r_cyl;
  let r_axis = req.body.r_axis;
  db.createPrescription({
    l_sph: l_sph,
    l_cyl: l_cyl,
    l_axis: l_axis,
    r_sph: r_sph,
    r_cyl: r_cyl,
    r_axis: r_axis
  })
  res.status(201);
  res.send(req.body);
})