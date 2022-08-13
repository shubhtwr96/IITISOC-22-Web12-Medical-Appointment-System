const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patient_id: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "Patient"
    } ,
    doctor_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "Doctor"
    },
    slot : {
        from : {
            type : String
        },
        to : {
            type : String,
        }
    }


})

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;