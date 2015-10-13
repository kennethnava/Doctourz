Education = new Mongo.Collection('education');


Education.attachSchema (new SimpleSchema({


    'schoolName' :{
        type: String
    },
    'yearGraduated' :{
        type: Date
    },
    'degree' :{
        type: String
    },
    'doctor_id' :{
        type: String
    }

}));