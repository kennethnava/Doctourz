if(Meteor.isClient){
    Template.account_admin_patient_thumb_view.events({
        'click .patient-search': function(event, template){
            sessionStorage.setItem('activePatient', event.currentTarget.id);
            Router.go('/accadmin/patientprofile');
        }
    })

    Template.account_admin_patient_list_view.events({
        'click .patient-search': function(event, template){
            sessionStorage.setItem('activePatient', event.currentTarget.id);
            Router.go('/accadmin/patientprofile');
        }
    })
}