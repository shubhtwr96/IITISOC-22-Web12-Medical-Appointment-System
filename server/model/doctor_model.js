const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    timings : {
        from: {
            type: String,
        },
        to: {
            type: String,
        }
    }


})

const Doctor = mongoose.model('doctor', DoctorSchema);
module.exports = Doctor;
