if(Meteor.isClient){

    Template.physician_panel.events({
        'click .viewprofile': function(event,template){
            sessionStorage.setItem('viewUserId',event.currentTarget.id);

            Router.go('/profile/adminpanel/applicant');
        }
    })
}