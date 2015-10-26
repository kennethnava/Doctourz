Countries = new Mongo.Collection('countries');

Countries.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: false
    }

}));