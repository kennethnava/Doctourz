Specializations = new Mongo.Collection('specializations');


Specializations.attachSchema (new SimpleSchema({

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