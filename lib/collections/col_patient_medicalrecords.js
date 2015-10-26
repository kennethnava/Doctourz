PatientMedicalRecords = new Mongo.Collection('patientMedicalRecords');

PatientMedicalRecords.attachSchema (new SimpleSchema({

    'reason':{
        type: String,
        optional: false
    },
    'hospital':{
        type:String
    },
    'datefrom':{
        type:Date
    }
    ,
    'dateTo':{
        type:Date
    },
    'patient_id':{
        type: String,
        optional: false
    }

}));