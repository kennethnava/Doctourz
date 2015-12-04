if(Meteor.isClient){

    Template.panel_left.rendered = function(){
        var id = sessionStorage.getItem('currentCaller');
        var usertocall = Appusers.findOne({_id:id});
        $('#remotePeerId').val(usertocall.peer_id);
    }

    Template.panel_right.helpers({
        users:function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.find({ _id: {$ne: id}});
        },
        messages:function(){
            var myId = sessionStorage.getItem('userId');
            var yourId = sessionStorage.getItem('currentCaller');

            combinedMessage = new Mongo.Collection(null);

            var inbox =Inbox.find({receiver_id:myId,sender_id:yourId});
            var outbox = Outbox.find({receiver_id:yourId,sender_id:myId});

            var inboxF = inbox.fetch();
            var outboxF = outbox.fetch();

            me = Appusers.findOne({_id:myId});
            you = Appusers.findOne({_id:yourId});

            var count = inbox.count();
            for(var a = 0;a<count; a++){
                combinedMessage.insert({
                    sender_id: inboxF[a].sender_id,
                    receiver_id: inboxF[a].receiver_id,
                    message: inboxF[a].message,
                    dateSent: inboxF[a].dateSent,
                    receiverName:me.name,
                    receiverAvatar: me.avatar,
                    senderName: you.name,
                    senderAvatar: you.avatar
                })
            }

            count = outbox.count();
            for(var a = 0;a<count; a++){
                combinedMessage.insert({
                    sender_id: outboxF[a].sender_id,
                    receiver_id: outboxF[a].receiver_id,
                    message: outboxF[a].message,
                    dateSent: outboxF[a].dateSent,
                    receiverName:you.name,
                    receiverAvatar: you.avatar,
                    senderName: me.name,
                    senderAvatar: me.avatar
                })
            }

            return combinedMessage.find({},{sort: {dateSent: 1}});


        }
    })



    Template.panel_left.helpers({
        users:function(){
            var id = sessionStorage.getItem('userId');
            var now = parseInt(Date.now());
            now-=185000;
            return Appusers.find({ _id: {$ne: id}, level: "patient" ,last_login_string: {$gt: now} });
        },
        currentCaller: function(){
            var id = sessionStorage.getItem('currentCaller');
            return Appusers.findOne({ _id: id});
        }
    })

    Template.panel_right.events({
        'submit form': function(event,template){
            event.preventDefault();

            var message = template.find('#chatMessage').value;
            var myId = sessionStorage.getItem('userId');
            var yourId = sessionStorage.getItem('currentCaller');

            Outbox.insert({
                sender_id:myId,
                receiver_id: yourId,
                message: message,
                dateSent: new Date()
            })

            Inbox.insert({
                sender_id:myId,
                receiver_id: yourId,
                message: message,
                dateSent: new Date()
            })



        }
    })

    Template.panel_left.events({
        'click .img-circle': function(event,template){
            var userId = event.currentTarget.id;

            sessionStorage.setItem("currentCaller",userId);



            var user = Appusers.findOne({_id:userId});
            $('#remotePeerId').val(user.peer_id);


            try{
                window.currentCall.close();
            }
            catch(Ex){
                Router.go('/redirect');
            }

            Router.go('/redirect');

        }
    })



    Template.appointments.events({
        'click #myCalendar': function(event,template){
            alert(event.currentTarget.id);
        }
    })

    Template.telemed.helpers({
        avatars: function(){
            var myId = sessionStorage.getItem('userId');
            var yourId = sessionStorage.getItem('currentCaller');

            var me = Appusers.findOne({_id:myId});
            var you = Appusers.findOne({_id:yourId});

            avatarList = new Mongo.Collection(null);

            avatarList.insert({
                myavatar: me.avatar,
                youravatar: you.avatar
            })

            return avatarList.findOne({});
        }
    })
}