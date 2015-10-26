Admin = new Mongo.Collection('admin');

Admin.attachSchema (new SimpleSchema({

    'name':{
        type: String,
        optional: false,
        min: 5
    },
    'email':{
        type:String,
        optional: false
    },
    'username': {
        type: String,
        optional: false
    },
    'password': {
        type: String,
        optional: false
    },
    'dateRegistered': {
        type: Date,
        optional: false
    },
    'status':{
        type:String
    }

}));