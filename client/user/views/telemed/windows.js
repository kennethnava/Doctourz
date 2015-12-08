if(Meteor.isClient){
    Template.window_care_team.helpers({
        level: function(){
            if(sessionStorage.getItem('currentCaller')){
                var id = sessionStorage.getItem('userId');
                var user  = Appusers.findOne({_id:id});
                return user.level;
            }
        },
        careTeamPatient: function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.find({_id: {$ne: id} , level: "physician"});
        },
        careTeamPhysician: function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.find({_id: {$ne: id} , level: "patient"});
        }
    })

    Template.window_patient_records.helpers({
        history: function(){
            var id = sessionStorage.getItem('currentCaller');
            var user  = PatientMedicalRecords.find({patient_id:id});
            return user;
        },
        allergies: function(){
            var id = sessionStorage.getItem('currentCaller');
            var user  = Patientallergies.find({patient_id:id});
            return user;
        },
        conditions:function(){
            var id = sessionStorage.getItem('currentCaller');
            var user  = Patientmedicalconditions.find({patient_id:id});
            return user;
        }
    })

    Template.window_appointment.events({
        'click ._30': function () {
            var btn = $('.tabs > li.active > a');
            $(btn).click();
        }
    })

    Template.window_care_team.events({
        'click ._30': function () {
            var btn = $('.tabs > li.active > a');
            $(btn).click();
        }
    })

    Template.window_diagnosis.events({
        'click ._30': function () {
            var btn = $('.tabs > li.active > a');
            $(btn).click();
        }
    })

    Template.window_notes.events({
        'click ._30': function () {
            var btn = $('.tabs > li.active > a');
            $(btn).click();
        }
    })

    Template.window_patient_records.events({
        'click ._30': function () {
            var btn = $('.tabs > li.active > a');
            $(btn).click();
        }
    })
}