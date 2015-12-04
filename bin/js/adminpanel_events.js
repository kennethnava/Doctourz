if(Meteor.isClient){

    Template.physician_panel.events({
        'click .viewprofile': function(event,template){
            sessionStorage.setItem('viewUserId',event.currentTarget.id);

            Router.go('/profile/adminpanel/user');
        }
    })

    Template.applicant_panel.events({
        'click .viewprofile': function(event,template){
            sessionStorage.setItem('viewUserId',event.currentTarget.id);

            Router.go('/profile/adminpanel/user');
        }
    })

    Template.patient_panel.events({
        'click .viewprofile': function(event,template){
            sessionStorage.setItem('viewUserId',event.currentTarget.id);

            Router.go('/profile/adminpanel/user');
        }
    })
}