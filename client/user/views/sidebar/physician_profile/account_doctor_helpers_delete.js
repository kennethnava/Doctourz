if(Meteor.isClient) {

    Template.doctorpersonalinformation.helpers({
        doctor: function () {
            var id = sessionStorage.getItem('userId');
            return Doctors.findOne({_id:id});
        }

    })

    Template.doctorLayout.helpers({
        doctor: function () {
            var id = sessionStorage.getItem('userId');
            return Doctors.findOne({_id:id});
        }

    })

    Template.affiliations_form.helpers({
        sessionId: function () {
            var id = sessionStorage.getItem('userId');
            return id;
        }

    })

    Template.account_doctor_affilliations.helpers({
        affilliations: function () {
            var id = sessionStorage.getItem('userId');
            return Affilliations.find({doctor_id:id});
        }

    })

    Template.procedures_form.helpers({
        sessionId: function () {
            var id = sessionStorage.getItem('userId');
            return id;
        }

    })

    Template.account_doctor_procedures.helpers({
        procedures: function () {
            var id = sessionStorage.getItem('userId');
            return Procedures.find({doctor_id:id});
        }

    })


    Template.specializations_form.helpers({
        sessionId: function () {
            var id = sessionStorage.getItem('userId');
            return id;
        }

    })

    Template.account_doctor_specializations.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('userId');
            return Specializations.find({doctor_id:id});
        }

    })

    Template.subspecializations_form.helpers({
        sessionId: function () {
            var id = sessionStorage.getItem('userId');
            return id;
        }

    })

    Template.account_doctor_subspecializations.helpers({
        subspecializations: function () {
            var id = sessionStorage.getItem('userId');
            return SubSpecializations.find({doctor_id:id});
        }

    })

    Template.subspecializations_form.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('userId');
            return Specializations.find({doctor_id:id});
        }

    })


    Template.education_form.helpers({
        sessionId: function () {
            var id = sessionStorage.getItem('userId');
            return id;
        }

    })

    Template.account_doctor_education.helpers({
        educations: function () {
            var id = sessionStorage.getItem('userId');
            return Education.find({doctor_id:id});
        }

    })



    Template.trainings_form.helpers({
        sessionId: function () {
            var id = sessionStorage.getItem('userId');
            return id;
        }

    })

    Template.account_doctor_trainings.helpers({
        trainings: function () {
            var id = sessionStorage.getItem('userId');
            return Trainings.find({doctor_id:id});
        }

    })




}