Appusers = new Mongo.Collection('appusers');

Appusers.attachSchema (new SimpleSchema({

    'username':{
        type: String
    },
    'password':{
        type: String
    },
    'email':{
        type: String,
        optional: true
    },
    'level':{
        type: String
    },


    'mobile':{
        type: String,
        optional: true
    },
    'telephonr':{
        type: String,
        optional: true
    },


    'firstname':{
        type: String
    },
    'lastname':{
        type: String
    },
    'middlename':{
        type: String,
        optional: true
    },
    'suffix':{
        type: String,
        optional: true
    },
    'aliases':{
        type: String,
        optional: true
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
        type: [String],
        optional: true
    },
    'specializations':{
        type: [String],
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
    }





}));