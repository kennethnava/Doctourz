SubSpecializations = new Mongo.Collection('subspecializations');


SubSpecializations.attachSchema (new SimpleSchema({

    'name':{
        type: String
    },
    'description' :{
        type: String
    },
    'doctor_id' :{
        type: String
    },
    'specialization' :{
        type: String
    }

}));