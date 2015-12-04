Inbox = new Mongo.Collection('inbox');

Inbox.attachSchema (new SimpleSchema({

    'sender_id':{
        type: String
    },
    'receiver_id':{
        type: String
    },
    'message':{
        type: String
    },
    'dateSent':{
        type:Date
    }

}));