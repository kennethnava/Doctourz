if(Meteor.isClient) {

    Template.doctor_personal_information_edit.helpers({
        doctor: function () {
            var id = sessionStorage.getItem('docId');
            return Doctors.findOne({_id:id});
        }

    })

    Template.doctor_personal_information_edit.helpers({
        countries: function () {
            return Countries.find({});
        }

    })

    Template.doctor_affilliation_update.helpers({
        affilliations: function () {
            var id = sessionStorage.getItem('affilliationId');
            return Affilliations.findOne({_id:id});
        }

    })

    Template.doctor_procedure_update.helpers({
        procedures: function () {
            var id = sessionStorage.getItem('procedureId');
            return Procedures.findOne({_id:id});
        }

    })

    Template.doctor_specialization_update.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('specializationId');
            return Specializations.findOne({_id:id});
        }

    })

    Template.doctor_subspecialization_update.helpers({
        subspecializations: function () {
            var id = sessionStorage.getItem('subspecializationId');
            return SubSpecializations.findOne({_id:id});
        }

    })

    Template.doctor_subspecialization_update.helpers({
        specializations: function () {
            var id = sessionStorage.getItem('subspecializationId');
            return Specializations.find({});
        }

    })

    Template.doctor_education_update.helpers({
        education: function () {
            var id = sessionStorage.getItem('educationId');
            return Education.findOne({_id:id});
        }

    })


    Template.account_doctor_trainings_update.helpers({
        trainings: function () {
            var id = sessionStorage.getItem('trainingId');
            return Trainings.findOne({_id:id});
        }

    })

    Template.modal.helpers({
        record: function () {
            return Education.find({});
        }

    })




}