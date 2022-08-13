const express = require('express');
const router = express.Router();
const services = require('../services/render');
const Patient = require('../model/patient_model');
const Appointment = require("../model/appointment_model");
const Doctor = require("../model/doctor_model");

router.get('/:patient_id', async (req, res) => {
    const id = req.params.patient_id;
    try {
        const data = await Patient.findById(id);
        if (!data) {
            res.status(404).send({message: `Cannot find with id ${id}. Maybe id is wrong`})
        } else {
            res.send({
                message: "Information is retrieved",
                data
            })
        }
    } catch {
        res.status(500).send({
            message: "Could not find User with id=" + id
        });
    }
});

module.exports = router;