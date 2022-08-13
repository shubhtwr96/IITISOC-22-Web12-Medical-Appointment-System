const connectDB = require('../server/database/connection');
const dotenv = require('dotenv');
const doctors = require("../assets/doctors.json");
const Doctor = require("../server/model/doctor_model");

dotenv.config({path: 'config.env'})
connectDB();

async function run() {
    for (let i = 0; i < doctors.length; i++) {
        const doctor = doctors[i];
        console.log(doctor);
        const model = new Doctor({
            name: doctor.name,
            specialization: doctor.specialization,
            hospital: doctor.hospital,
            experience: doctor.experience,
            timings: doctor.timings
        });
        await model.save();
    }
}
run()
