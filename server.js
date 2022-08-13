const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');
// const DoctorSchema= require('./server/model/doctor_model');
const app = express();


dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))
app.use(bodyparser.json());


//adding routes
const patientRouter = require('./server/routes/patient');
const routesRouter = require('./server/routes/routes');
const doctorRouter = require('./server/routes/doctors');
const appointmentRouter = require('./server/routes/appointment');
const usersRouter = require('./server/routes/users');
const mongoose = require("mongoose");

// set view engine
app.set('views', './views');
app.set("view engine", "ejs");


// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "./views/img")))
app.use('/img', express.static(path.resolve(__dirname, "./views/login")))
app.use('/img', express.static(path.resolve(__dirname, "./views/include")))

app.use('/img', express.static(path.resolve(__dirname, "./views/Specialities")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))



//load router
 app.use('/', routesRouter);
app.use('/patient', patientRouter);
app.use('/doctors', doctorRouter);
app.use('/appointment_Booking', appointmentRouter);
app.use('/auth', usersRouter);


// const Doctor = mongoose.model('doctor', DoctorSchema);


app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
