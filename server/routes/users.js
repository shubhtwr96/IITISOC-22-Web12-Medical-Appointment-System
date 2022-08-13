var express = require('express');
var router = express.Router();
const Patient = require("../model/patient_model")
router.post("/login", async (req,res) => {
  const {name,email} = req.body;
  let patient = await Patient.find({
    email
  })
  if(!patient) {
    patient = new Patient({
      name , email
    })
    await patient.save();
  }
  res.status(200).send({message: 'login successful', patient});

})

module.exports = router;