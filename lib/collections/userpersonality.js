Userpersonality = new Mongo.Collection('userpersonality');

Userpersonality.attachSchema (new SimpleSchema({

    'user_id':{
        type: String,
        optional: false
    },
    'receptiveness_q1':{
        type: Number
    },
    'receptiveness_q2':{
        type: Number
    },
    'receptiveness_q3':{
        type: Number
    },
    'receptiveness_q4':{
        type: Number
    },
    'receptiveness_q5':{
        type: Number
    },
    'obsessiveness_q1':{
        type: Number
    },
    'obsessiveness_q2':{
        type: Number
    },
    'obsessiveness_q3':{
        type: Number
    },
    'obsessiveness_q4':{
        type: Number
    },
    'obsessiveness_q5':{
        type: Number
    },
    'adventurer_q1':{
        type: Number
    },
    'adventurer_q2':{
        type: Number
    },
    'adventurer_q3':{
        type: Number
    },
    'adventurer_q4':{
        type: Number
    },
    'adventurer_q5':{
        type: Number
    },
    'meticulous_q1':{
        type: Number
    },
    'meticulous_q2':{
        type: Number
    },
    'meticulous_q3':{
        type: Number
    },
    'meticulous_q4':{
        type: Number
    },
    'meticulous_q5':{
        type: Number
    },
    'amenity_q1':{
        type: Number
    },
    'amenity_q2':{
        type: Number
    },
    'amenity_q3':{
        type: Number
    },
    'amenity_q4':{
        type: Number
    },
    'amenity_q5':{
        type: Number
    },

    'receptiveness_score':{
        type: Number
    },
    'obsessiveness_score':{
        type: Number
    },
    'adventurer_score':{
        type: Number
    },
    'meticulous_score':{
        type: Number
    },
    'amenity_score':{
        type: Number
    },



}));