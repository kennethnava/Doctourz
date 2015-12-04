if(Meteor.isClient){
    Template.account_admin_clinics_list_view.events({
        'click .patient-search': function(event, template){
            sessionStorage.setItem('activeClinic', event.currentTarget.id);
            Router.go('/accadmin/clinicprofile');
        }
    })

    Template.account_admin_clinics_thumb_view.events({
        'click .patient-search': function(event, template){
            sessionStorage.setItem('activeClinic', event.currentTarget.id);
            Router.go('/accadmin/clinicprofile');
        }
    })
}