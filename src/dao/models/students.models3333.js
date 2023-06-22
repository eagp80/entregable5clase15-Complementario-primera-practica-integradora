const mongoose = require('mongoose');

const studentCollection = "Students";

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  eddad: {
    type: Number,
    required: true,
  },  
  curso: {
    type: String,    
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  sexo: {
    type: String,
  },  
  
});

const studentModel = mongoose.model(studentCollection, studentsSchema);
module.exports = studentModel;