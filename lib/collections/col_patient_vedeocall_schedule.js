PatientVideocallSchedule = new Mongo.Collection('patientVideocallSchedule');

PatientVideocallSchedule.attachSchema (new SimpleSchema({

    'dateFrom':{
        type: Date,
        optional: false
    },
    'dateTo':{
        type:Date
    },
    'dateTo':{
        type:Date
    },
    'patient_id':{
        type: String,
        optional: false
    },
    'doctor_id': {
        type: String
    }
}));