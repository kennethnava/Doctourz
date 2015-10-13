Trainings = new Mongo.Collection('trainings');


Trainings.attachSchema (new SimpleSchema({


    'name' :{
        type: String
    },
    'dateAttended' :{
        type: Date
    },
    'doctor_id':{
        type: String,
        optional:false
    }

}));