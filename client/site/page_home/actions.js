if(Meteor.isClient){

        Template.homepage.events({
            'click #hi': function(){
                myvar();
            }
        })
}