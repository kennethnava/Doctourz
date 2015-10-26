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