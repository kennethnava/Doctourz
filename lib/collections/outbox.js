Outbox = new Mongo.Collection('outbox');

Outbox.attachSchema (new SimpleSchema({

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