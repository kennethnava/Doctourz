Sample = new Mongo.Collection('sample');


Sample.attachSchema (new SimpleSchema({


    'name' :{
        type: String,
        optional: false
    },
    'address' :{
        type: Number,
        optional: false
    }

}));