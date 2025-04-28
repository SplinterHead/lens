const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("lens.db")

const initialisePrescriptions = `
CREATE TABLE IF NOT EXISTS prescriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  l_sph FLOAT,
  l_cyl FLOAT,
  l_axis FLOAT,
  r_sph FLOAT,
  r_cyl FLOAT,
  r_axis FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

const initialiseGlasses = `
CREATE TABLE IF NOT EXISTS glasses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prescription_id INTEGER,
  brand STRING,
  description STRING,
  retailer STRING,
  sunglasses INTEGER,
  img_url STRING
);`

function writeDb(queryString) {
  db.serialize(function() {
    db.run(queryString);
  });
}

function readDb(queryString) {
  return new Promise((resolve, reject) => {
    db.all(queryString, function(err, rows) {
      resolve(rows)
    });
  });
}

module.exports = {
  setup: function () {
    writeDb(initialisePrescriptions)
    writeDb(initialiseGlasses)
  },

  // Prescriptions
  createPrescription: function (prescription) {
    var query = `
      INSERT INTO prescriptions (l_sph, l_cyl, l_axis, r_sph, r_cyl, r_axis)
      VALUES ('${prescription.l_sph}', '${prescription.l_cyl}', '${prescription.l_axis}', '${prescription.r_sph}', '${prescription.r_cyl}', '${prescription.r_axis}');
    `
    writeDb(query);
  },

  getPrescriptions: async function () {
    var query = "SELECT * FROM prescriptions ORDER BY created_at DESC;"
    let dbData = await readDb(query);
    return dbData;
  },

  deletePrescription: function (prescriptionId) {
    var query = `DELETE FROM prescriptions WHERE id=${prescriptionId}`
    writeDb(query);
  },

  // Glasses
  createGlasses: function(glasses) {
    var query = `
      INSERT INTO glasses (prescription_id, brand, retailer, sunglasses, img_url) 
      VALUES ('${glasses.prescriptionId}', '${glasses.brand}', '${glasses.retailer}', '${glasses.sunglasses}', '${glasses.img}')
    `
    writeDb(query)
  },

  getGlasses: async function () {
    var query = "SELECT * FROM glasses ORDER BY id DESC;"
    let dbData = await readDb(query);
    return dbData;
  },
}