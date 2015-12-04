if(Meteor.isClient){
    Template.physician_panel.helpers({
        users : function(){
            return Appusers.find({status: "physician"});
        },
        specializations : function(){
            var id =  sessionStorage.getItem('userId');
            return Specializations.find({});
        }
    })

    Template.applicant_panel.helpers({
        users : function(){
            return Appusers.find({status: "applicant"});
        },
        specializations : function(){
            var id =  sessionStorage.getItem('userId');
            return Specializations.find({});
        }
    })

    Template.patient_panel.helpers({
        users : function(){
            return Appusers.find({status: "patient"});
        }
    })

}