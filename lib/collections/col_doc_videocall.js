Videocall = new Mongo.Collection('videocall');


Videocall.attachSchema (new SimpleSchema({


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