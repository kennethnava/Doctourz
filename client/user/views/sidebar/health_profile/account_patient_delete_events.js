if(Meteor.isClient){

    Template.patientMedicalRecordList.events({
        'click .delete': function(event,template){
            var id = event.currentTarget.id;

            PatientMedicalRecords.remove({_id:id});
        }
    }),

    Template.account_patient_medical_conditions_list.events({
        'click .delete': function(event,template){
            var id = event.currentTarget.id;

            Patientmedicalconditions.remove({_id:id});
        }
    }),

    Template.account_patient_allergy_list.events({
        'click .delete': function(event,template){
            var id = event.currentTarget.id;

            Patientallergies.remove({_id:id});
        }
    })
}