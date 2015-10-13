if(Meteor.isClient){
    Template.doctorslists.helpers({
        doctors: function () {
            return Doctors.find({});
        }
    })

    Template.doctorslists.events({
        'click .viewButton': function(event, template){

            // alert(event.currentTarget.id);
           sessionStorage.setItem('docId', event.currentTarget.id)
            Router.go('/doctorsprofile')
        }
    })

    Template.doctorsprofile.helpers({
        profile: function () {
            var id = sessionStorage.getItem('docId');
            return Doctors.findOne({_id:id});
        }

    })

    Template.affilliations.helpers({
        affilliations: function () {
            var id = sessionStorage.getItem('docId');
            return Affilliations.find({doctor_id:id});
        }
    })

    Template.specializations.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('docId');
            return Specializations.find({doctor_id:id});
        }
    })

    Template.procedures.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('docId');
            return Procedures.find({doctor_id:id});
        }
    })

    Template.trainings.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('docId');
            return Trainings.find({doctor_id:id});
        }
    })

}