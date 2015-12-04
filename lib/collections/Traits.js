Traits = new Mongo.Collection('traits');

Traits.attachSchema (new SimpleSchema({

    'trait':{
        type: String
    },
    'description':{
        type: String
    },
    color: {
        type: String
    }

}));