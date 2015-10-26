Patients = new Mongo.Collection('patients');

Patients.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: false,
        min: 5
    },
    'email':{
        type:String,
        optional: false
    },
    'birthdate': {
        type: Date,
        optional: false
    },
    'gender': {
        type: String,
        optional: false
    },
    'country': {
        type: String,
        optional: false
    },
    'username': {
        type: String,
        optional: false
    },
    'password': {
        type: String,
        optional: false
    },
    'dateRegisterd': {
        type: Date,
        optional: false
    }

}));