if(Meteor.isClient){

    Template.affs.helpers({
        affilliations: function() {
            var id = sessionStorage.getItem('docId');
            return  Affilliations.find({doctor_id:id});
        }
    });

    Template.procs.helpers({
        affilliations: function() {
            var id = sessionStorage.getItem('docId');
            return  Procedures.find({doctor_id:id});
        }
    });

    Template.specs.helpers({
        affilliations: function() {
            var id = sessionStorage.getItem('docId');
            return  Specializations.find({doctor_id:id});
        }
    });

    Template.trains.helpers({
        affilliations: function() {
            var id = sessionStorage.getItem('docId');
            return  Trainings.find({doctor_id:id});
        }
    });

    Template.pers.helpers({
        doctor: function() {
            var id = sessionStorage.getItem('docId');
            return  Doctors.findOne({_id:id});
        }
    });

    Template.accountHeader.helpers({
        doctor: function() {
            var id = sessionStorage.getItem('docId');
            return  Doctors.findOne({_id:id});
        }
    });


}