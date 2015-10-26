Procedures = new Mongo.Collection('procedured');


Procedures.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: false
    },
    'description' :{
        type: String
    },
    'doctor_id' :{
        type: String
    }

}));