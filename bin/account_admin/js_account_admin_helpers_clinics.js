if(Meteor.isClient){
    Template.account_admin_clinics_list_view.helpers({
        clinics: function(){
            return Clinics.find({});
        }
    })
    Template.account_admin_clinics_thumb_view.helpers({
        clinics: function(){
            return Clinics.find({});
        }
    })

    Template.account_admin_clinics_profile.helpers({
        activeClinics: function(){
            var id = sessionStorage.getItem('activeClinic');
            return Clinics.findOne({_id:id});
        }
    })
}