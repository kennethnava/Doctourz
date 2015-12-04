if(Meteor.isClient){
    Template.redirect.rendered = function() {
        Router.go('/telemed');
    }
}