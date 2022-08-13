const connectDB = require('../server/database/connection');
const dotenv = require('dotenv');
const patients = require("../assets/patients.json");
const Patient = require("../server/model/patient_model");

dotenv.config({path: 'config.env'})
connectDB();

async function run() {
    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i];
        console.log(patient);
        const model = new Patient({
            name: patient.name,
            email: patient.email

        });
        await model.save();
    }
}

run()