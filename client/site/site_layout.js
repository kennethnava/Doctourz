if(Meteor.isClient){

    Template.site_navibar.helpers({
        sessionId: function(){
            return sessionStorage.getItem('userId');
        }
    })

    Template.site_navibar.helpers({
        adminId: function(){
            return sessionStorage.getItem('adminId');
        }
    })
}