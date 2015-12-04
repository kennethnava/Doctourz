FamilyHistory = new Mongo.Collection('familyhistory');

FamilyHistory.attachSchema (new SimpleSchema({

    'user_id':{
        type: String,
        optional: false
    },
    'type':{
        type: String
    },
    'condition':{
        type: String
    },
    'relative':{
        type: String
    },
    'age':{
        type: Number
    }
}));