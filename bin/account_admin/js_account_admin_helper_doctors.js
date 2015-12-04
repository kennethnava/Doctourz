if(Meteor.isClient){
    Template.account_admin_doctors_list_view.helpers({
        doctors: function(){
            return Doctors.find({});
        }
    })
    Template.account_admin_doctors_thumb_view.helpers({
        doctors: function(){
            return Doctors.find({});
        }
    })

    Template.account_admin_doctors_profile.helpers({
        activeDoctor: function(){
            var id = sessionStorage.getItem('activeDoctor');
            return Doctors.findOne({_id:id});
        }
    })
}