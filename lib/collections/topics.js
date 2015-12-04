Topics = new Mongo.Collection('topics');

Topics.attachSchema (new SimpleSchema({

    'title':{
        type: String
    },
    'description':{
        type: String
    }
}));