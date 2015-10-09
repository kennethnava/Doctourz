Doctors = new Mongo.Collection('doctors');

Doctors.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: false,
        min: 5
    },

    'affilliations':{
        type: [Object],
        optional: true
    },
    'affilliations.$.description' :{
        type: String
    },

    'education':{
        type: [Object],
        optional: true
    },
    'education.$.schoolName' :{
        type: String
    },
    'education.$.yearGraduated' :{
        type: Date
    },
    'education.$.degree' :{
        type: String
    },

    'trainings':{
        type: [Object],
        optional: true
    },
    'trainings.$.name' :{
        type: String
    },
    'trainings.$.dateAttended' :{
        type: Date
    },

    'writeup': {
        type: String,
        optional: true
    }

}));