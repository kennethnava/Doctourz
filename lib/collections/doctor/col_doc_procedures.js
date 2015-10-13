Procedures = new Mongo.Collection('procedured');


Procedures.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: true
    },
    'description' :{
        type: String
    },
    'doctor_id' :{
        type: String
    }

}));