if(Meteor.isClient){
    Template.account_admin_doctors_thumb_view.events({
        'click .doctor-search': function(event, template){
            sessionStorage.setItem('activeDoctor', event.currentTarget.id);
            Router.go('/accadmin/doctorprofile');
        }
    })

    Template.account_admin_doctors_list_view.events({
        'click .doctor-search': function(event, template){
            sessionStorage.setItem('activeDoctor', event.currentTarget.id);
            Router.go('/accadmin/doctorprofile');
        }
    })
}