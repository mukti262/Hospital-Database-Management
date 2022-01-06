const bodyParser = require('body-parser');
const express = require('express');
const mysqlcon = require('./connection');
const ejs = require("ejs");
var path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//---------------HOME-----------------------

app.get('/', (req, res) => {
    res.render('list');
});

//----------------------Hospital----------------

app.get('/Hospital', (req, res) => {
    var sql="SELECT * FROM Hospital";
        mysqlcon.query(sql, (err, data) => {
            res.render('Hospital', {data: data});
    });
});

//----------------------Doctor----------------

app.get('/Doctor', (req, res) => {
    var sql="SELECT * FROM Doctor";
        mysqlcon.query(sql, (err, data) => {
            res.render('Doctor', {data: data});
    });
});

//----------------------Nurse----------------

app.get('/Nurse', (req, res) => {
    var sql="SELECT * FROM Nurse";
        mysqlcon.query(sql, (err, data) => {
            res.render('Nurse', {data: data});
    });
});

//----------------------Rooms----------------

app.get('/Rooms', (req, res) => {
    var sql="SELECT * FROM Rooms";
        mysqlcon.query(sql, (err, data) => {
            res.render('Rooms', {data: data});
    });
});

//----------------------Receptionist----------------

app.get('/Receptionist', (req, res) => {
    var sql="SELECT * FROM Receptionist";
        mysqlcon.query(sql, (err, data) => {
            res.render('Receptionist', {data: data});
    });
});

//----------------------Insurance----------------

app.get('/Insurance', (req, res) => {
    var sql="SELECT * FROM Insurance";
        mysqlcon.query(sql, (err, data) => {
            res.render('Insurance', {data: data});
    });
});

//----------------------CPT----------------

app.get('/CPT', (req, res) => {
    var sql="SELECT * FROM CPT";
        mysqlcon.query(sql, (err, data) => {
            res.render('CPT', {data: data});
    });
});

//----------------------Diagnosis----------------

app.get('/Diagnosis', (req, res) => {
    var sql="SELECT * FROM Diagnosis";
        mysqlcon.query(sql, (err, data) => {
            res.render('Diagnosis', {data: data});
    });
});

//----------------------Medicine----------------

app.get('/Medicine', (req, res) => {
    var sql="SELECT * FROM Medicine";
        mysqlcon.query(sql, (err, data) => {
            res.render('Medicine', {data: data});
    });
});

//----------------------Laboratory----------------

app.get('/Laboratory', (req, res) => {
    var sql="SELECT * FROM Laboratory";
        mysqlcon.query(sql, (err, data) => {
            res.render('Laboratory', {data: data});
    });
});

//----------------------Patient----------------

app.get('/Patient', (req, res) => {
    var sql="SELECT * FROM Patient";
        mysqlcon.query(sql, (err, data) => {
            res.render('Patient', {data: data});
    });
});

//----------------------Invoice----------------

app.get('/Invoice', (req, res) => {
    var sql="SELECT * FROM Invoice";
        mysqlcon.query(sql, (err, data) => {
            res.render('Invoice', {data: data});
    });
});

//----------------------Paycheck----------------

app.get('/Paycheck', (req, res) => {
    var sql="SELECT * FROM Paycheck";
        mysqlcon.query(sql, (err, data) => {
            res.render('Paycheck', {data: data});
    });
});

//----------------------Payment----------------

app.get('/Payment', (req, res) => {
    var sql="SELECT * FROM Payment";
        mysqlcon.query(sql, (err, data) => {
            res.render('Payment', {data: data});
    });
});

//----------------------Record----------------

app.get('/Record', (req, res) => {
    var sql="SELECT * FROM Record";
        mysqlcon.query(sql, (err, data) => {
            res.render('Record', {data: data});
    });
});

//----------------------Appointments----------------

app.get('/Appointments', (req, res) => {
    var sql="SELECT * FROM Appointments";
        mysqlcon.query(sql, (err, data) => {
            res.render('Appointments', {data: data});
    });
});

//----------------------Prescription----------------

app.get('/Prescription', (req, res) => {
    var sql="SELECT * FROM Prescription";
        mysqlcon.query(sql, (err, data) => {
            res.render('Prescription', {data: data});
    });
});

//----------------------Hospital Form---------------
app.get('/HospitalForm', (req, res) => {
    res.render('HospitalForm');
});

app.post('/HospitalForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Hospital SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Hospital')
});

//-----------------Hospital DELETE-------
app.get('/Hospital/:id', (req, res) => {
    mysqlcon.query('delete from Hospital where Hos_id = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/Hospital');
});

//----------------------Rooms Form---------------
app.get('/RoomsForm', (req, res) => {
    res.render('RoomsForm');
});

app.post('/RoomsForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Rooms SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Rooms')
});

//-----------------Rooms DELETE-------
app.get('/Rooms/:id', (req, res) => {
    mysqlcon.query('delete from Rooms where Room_number = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/Rooms');
});

//----------------------Insurance Form---------------
app.get('/InsuranceForm', (req, res) => {
    res.render('InsuranceForm');
});

app.post('/InsuranceForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Insurance SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Insurance')
});

//-----------------Insurance DELETE-------
app.get('/Insurance/:id', (req, res) => {
    mysqlcon.query('delete from Insurance where I_id = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/Insurance');
});

//----------------------CPT Form---------------
app.get('/CPTForm', (req, res) => {
    res.render('CPTForm');
});

app.post('/CPTForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into CPT SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/CPT')
});

//-----------------CPT DELETE-------
app.get('/CPT/:id', (req, res) => {
    mysqlcon.query('delete from CPT where CPT_id = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/CPT');
});

//----------------------Diagnosis Form---------------
app.get('/DiagnosisForm', (req, res) => {
    res.render('DiagnosisForm');
});

app.post('/DiagnosisForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Diagnosis SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Diagnosis')
});

//-----------------Diagnosis DELETE-------
app.get('/Diagnosis/:id', (req, res) => {
    mysqlcon.query('delete from Diagnosis where diagnosis_id = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/Diagnosis');
});

//----------------------Medicine Form---------------
app.get('/MedicineForm', (req, res) => {
    res.render('MedicineForm');
});

app.post('/MedicineForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Medicine SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Medicine')
});

//-----------------Medicine DELETE-------
app.get('/Medicine/:id', (req, res) => {
    mysqlcon.query('delete from Medicine where MInventory_id = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/Medicine');
});

//----------------------Laboratory Form---------------
app.get('/LaboratoryForm', (req, res) => {
    res.render('LaboratoryForm');
});

app.post('/LaboratoryForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Laboratory SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Laboratory')
});

//-----------------Laboratory DELETE-------
app.get('/Laboratory/:id', (req, res) => {
    mysqlcon.query('delete from Laboratory where lab_num = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/Laboratory');
});

//-----------------Nurse DELETE-------
app.get('/Nurse/:id', (req, res) => {
    mysqlcon.query('delete from Nurse where Nurse_id = "' + req.params.id + '"', (err, res) => {
        if(err) throw error;
    })
    res.redirect('/Nurse');
});

//----------------------Patient Form---------------
app.get('/PatientForm', (req, res) => {
    res.render('PatientForm');
});

app.post('/PatientForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Patient SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Patient')
});

//----------------------Invoice Form---------------
app.get('/InvoiceForm', (req, res) => {
    res.render('InvoiceForm');
});

app.post('/InvoiceForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Invoice SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Invoice')
});

//----------------------Paycheck Form---------------
app.get('/PaycheckForm', (req, res) => {
    res.render('PaycheckForm');
});

app.post('/PaycheckForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Paycheck SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Paycheck')
});

//----------------------Payment Form---------------
app.get('/PaymentForm', (req, res) => {
    var sql='SELECT Invoice_num FROM Invoice';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      console.log(data);
      res.render('PaymentForm', {data: data});
    });
});

app.post('/PaymentForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Payment SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Payment')
});

//----------------------Record Form---------------
app.get('/RecordForm', (req, res) => {
    var sql='SELECT Patient_id FROM Patient';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      res.render('RecordForm', {data: data});
    });
});

app.post('/RecordForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Record SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Record')
});

//----------------------Prescription Form---------------
app.get('/PrescriptionForm', (req, res) => {
    res.render('PrescriptionForm');
});

app.post('/PrescriptionForm', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Prescription SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Prescription')
});

//-----------------Doctor CREATE FORM---------------
app.get('/DoctorForm', (req, res) => {
    res.render('DoctorForm');
})

//-----------------Doctor UPDATE-------
app.get('/DoctorEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var sql='SELECT * FROM Doctor WHERE D_id = "' + id + '"';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      res.render('DoctorForm', {editData: data[0]});
    });
});

app.post('/DoctorEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var updateData=req.body;
    var sql = `UPDATE Doctor SET ? WHERE D_id= ?`;
    mysqlcon.query(sql, [updateData, id], function (err, data) {
        if (err) throw err;
});
res.redirect('/Doctor');
});

app.get('/createDoctor', (req, res) => {
    res.redirect('/DoctorForm');
})

app.post('/createDoctor', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Doctor SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Doctor')
});

//-----------------Nurse CREATE FORM---------------
app.get('/NurseForm', (req, res) => {
    res.render('NurseForm');
})

//-----------------Nurse UPDATE-------
app.get('/NurseEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var sql='SELECT * FROM Nurse WHERE Nurse_id = "' + id + '"';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      res.render('NurseForm', {editData: data[0]});
    });
});

app.post('/NurseEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var updateData=req.body;
    var sql = `UPDATE Nurse SET ? WHERE Nurse_id= ?`;
    mysqlcon.query(sql, [updateData, id], function (err, data) {
        if (err) throw err;
});
res.redirect('/Nurse');
});

app.get('/createNurse', (req, res) => {
    res.redirect('/NurseForm');
})

app.post('/createNurse', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Nurse SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Nurse')
});

//-----------------Receptionist CREATE FORM---------------
app.get('/ReceptionistForm', (req, res) => {
    res.render('ReceptionistForm');
})

//-----------------Receptionist UPDATE-------
app.get('/ReceptionistEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var sql='SELECT * FROM Receptionist WHERE R_id = "' + id + '"';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      res.render('ReceptionistForm', {editData: data[0]});
    });
});

app.post('/ReceptionistEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var updateData=req.body;
    var sql = `UPDATE Receptionist SET ? WHERE R_id= ?`;
    mysqlcon.query(sql, [updateData, id], function (err, data) {
        if (err) throw err;
});
res.redirect('/Receptionist');
});

app.get('/createReceptionist', (req, res) => {
    res.redirect('/ReceptionistForm');
})

app.post('/createReceptionist', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Receptionist SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Receptionist')
});

//-----------------Appointments CREATE FORM---------------
app.get('/AppointmentsForm', (req, res) => {
    res.render('AppointmentsForm');
})

//-----------------Appointments UPDATE-------
app.get('/AppointmentsEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var sql='SELECT * FROM Appointments WHERE app_number = "' + id + '"';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      res.render('AppointmentsForm', {editData: data[0]});
    });
});

app.post('/AppointmentsEdit/:id', function(req, res, next) {
    var id= req.params.id;
    var updateData=req.body;
    var sql = `UPDATE Appointments SET ? WHERE app_number= ?`;
    mysqlcon.query(sql, [updateData, id], function (err, data) {
        if (err) throw err;
});
res.redirect('/Appointments');
});

app.get('/createAppointments', (req, res) => {
    res.redirect('/AppointmentsForm');
})

app.post('/createAppointments', (req, res) => {
    var data = req.body;
    var sql = 'INSERT into Appointments SET ? ';
    mysqlcon.query(sql, data, (err, result) => {
        if(err) throw err;
    });
    res.redirect('/Appointments')
});

//----------------SEARCH ---------------
app.post('/search', (req, res) => {
    var D_name = req.body.D_name;
    D_name = D_name + '%';
    var sql='SELECT * FROM Doctor WHERE D_name like "' + D_name + '"';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      res.render('Doctor', {data: data});
    });
});

//----------------SEARCH ---------------
app.post('/searchPatient', (req, res) => {
    var name = req.body.name;
    name = name + '%';
    var sql='SELECT * FROM Patient WHERE P_Name like "' + name + '"';
    mysqlcon.query(sql, function (err, data) {
      if (err) throw err;
      res.render('Patient', {data: data});
    });
});


app.listen(3000, function() {
    console.log('server started on port 3000');
});