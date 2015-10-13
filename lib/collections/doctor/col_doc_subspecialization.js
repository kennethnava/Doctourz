SubSpecializations = new Mongo.Collection('subspecializations');


SubSpecializations.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: true
    },
    'description' :{
        type: String
    },
    'doctor_id' :{
        type: String
    },
    'specialization_id' :{
        type: String
    }

}));