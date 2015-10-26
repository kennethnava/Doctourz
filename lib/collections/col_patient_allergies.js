Patientallergies = new Mongo.Collection('patientallergies');

Patientallergies.attachSchema (new SimpleSchema({

    'type':{
        type: String,
        optional: false
    },
    'particular':{
        type:String,
        optional: false
    },
    'patient_id':{
        type: String,
        optional: false
    }
}));