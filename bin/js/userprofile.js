if(Meteor.isClient){
    Template.user_personal_info.helpers({

        details: function(){
            var id =  sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        }

    })

    Template.user_personal_info.helpers({

        adminId: function(){
            var id =  sessionStorage.getItem('adminId');
            return id;
        }

    })

    Template.modal2.helpers({

        questions: function(){
            return Questions.find({});
        }

    })


    Template.userprofile_edit.helpers({

        sessionId: function(){
            var id =  sessionStorage.getItem('userId');
            return id;
        }

    })

    Template.userprofile_edit.helpers({

        details: function(){
            var id =  sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        }

    })

    Template.physicianprofile_edit.helpers({
        details: function(){
            var id =  sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        }
    })

    Template.ratings.helpers({
        ratings: function(){

            var id =  sessionStorage.getItem('userId');
            Data = new Mongo.Collection(null);

            var result1 = Ratings.find({user_id:id});
            rawRatings = result1.fetch();
            var count = result1.count();



            for(var a =0;a<count; a++){
                var currentTrait = Traits.findOne({_id:rawRatings[a].trait_id});
                Data.insert({
                    _id: rawRatings[a]._id,
                    trait: currentTrait.trait,
                    score: rawRatings[a].score,
                    color: currentTrait.color
                });
            }

            return Data.find({});

        }
    })

    Template.physicianprofile_edit.events({
        'click #applynow': function(event, template){
            var id = sessionStorage.getItem('userId');

            Appusers.update({_id:id},{
                $set:{
                    status: "applicant"
                }
            })
        }
    })

    Template.physicianprofile_edit.events({
        'click #cancelapplication': function(event, template){
            var id = sessionStorage.getItem('userId');

            Appusers.update({_id:id},{
                $set:{
                    status: "patient"
                }
            })
        }
    })




}