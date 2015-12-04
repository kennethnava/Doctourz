Questions = new Mongo.Collection('questions');

Questions.attachSchema (new SimpleSchema({

    'question':{
        type: String
    },
    'negative':{
        type: Boolean
    },
    'traits_id':{
        type: String
    }

}));