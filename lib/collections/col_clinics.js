Clinics = new Mongo.Collection('clinics');

Clinics.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: false,
        min: 5
    },
    'address':{
        type:String,
        optional: false
    },
    'mobile': {
        type: String,
        optional: false
    },
    'landline': {
        type: String,
        optional: false
    },
    'country': {
        type: String,
        optional: false
    },
    'writeup': {
        type: String,
        optional: false
    },
    'history': {
        type: String,
        optional: false
    }

}));