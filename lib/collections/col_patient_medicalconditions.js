Patientmedicalconditions = new Mongo.Collection('patientmedicalconditions');

Patientmedicalconditions.attachSchema (new SimpleSchema({

    'condition':{
        type: String,
        optional: false
    },
    'description':{
        type:String
    },
    'medications':{
        type:String
    },
    'patient_id':{
        type: String,
        optional: false
    }
}));