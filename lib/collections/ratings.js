Ratings = new Mongo.Collection('ratings');

Ratings.attachSchema (new SimpleSchema({

    'user_id':{
        type: String
    },
    'trait_id':{
        type: String
    },
    'score':{
        type: Number
    }
    
}));