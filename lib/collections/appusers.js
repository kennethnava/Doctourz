Appusers = new Mongo.Collection('appusers');

Appusers.attachSchema (new SimpleSchema({

    'username':{
        type: String
    },
    'password':{
        type: String,
        min: 8

    },
    'email':{
        type: String,
        optional: true
    },
    'level':{
        type: String
    },





    'name':{
        type: String
    },
    'gender':{
        type: String,
        optional: true
    },
    'civilstatus':{
        type: String,
        optional: true
    },
    'birthdate':{
        type: Date,
        optional: true
    },
    'ethnicity':{
        type: String,
        optional: true
    },
    'height':{
        type: String,
        optional: true
    },
    'weight':{
        type: String,
        optional: true
    },
    'bmi':{
        type: String,
        optional: true
    },

    'diet': {
        type: String,
        optional: true
    },
    'alcohol': {
        type: String,
        optional: true
    },
    'tobacco': {
        type: String,
        optional: true
    },
    'sexual': {
        type: String,
        optional: true
    },
    'recreational_drugs': {
        type: String,
        optional: true
    },


    'mobile':{
        type: String,
        optional: true
    },
    'telephone':{
        type: String,
        optional: true
    },
    'location':{
        type: String,
        optional: true
    },
    'address1':{
        type: String,
        optional: true
    },
    'address2':{
        type: String,
        optional: true
    },
    'city':{
        type: String,
        optional: true
    },
    'state':{
        type: String,
        optional: true
    },
    'country':{
        type: String,
        optional: true
    },
    'zip':{
        type: String,
        optional: true
    },



    'avatar':{
        type: String,
        optional: true
    },

    'public':{
        type: String,
        optional: true
    },

    //for physicians only

    'practiceclinincs':{
        type: String,
        optional: true
    },
    'specializations':{
        type: String,
        optional: true
    },
    'education':{
        type: String,
        optional: true
    },
    'practices':{
        type: String,
        optional: true
    },

    'dateregistered':{
        type: Date
    },


    'status':{
        type: String,
        optional: true
    },
    'datehired':{
        type: Date,
        optional: true
    },

    'topics':{
        type: String,
        optional: true
    },

    'peer_id':{
        type:String,
        optional:true
    },
    'last_login':{
        type:Date,
        optional: true
    },
    'last_login_string':{
        type: Number,
        optional: true
    }





}));