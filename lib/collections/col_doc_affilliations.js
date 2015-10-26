Affilliations = new Mongo.Collection('affilliations');

Affilliations.attachSchema (new SimpleSchema({


    'name' :{
        type: String
    },
    'description': {
        type: String
    },
    'doctor_id':{
        type: String
    }

}));