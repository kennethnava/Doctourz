if(Meteor.isClient){
    Template.medicalrecordForm_update.helpers({
        data: function(){
            var id = sessionStorage.getItem('medicalRecord');
            return PatientMedicalRecords.findOne({_id:id});
        }

    })

    Template.account_patient_medical_condition_update.helpers({
        data: function(){
            var id = sessionStorage.getItem('medicalCondition');
            return Patientmedicalconditions.findOne({_id:id});
        }

    })

    Template.account_patient_medical_condition_update.helpers({
        data: function(){
            var id = sessionStorage.getItem('medicalCondition');
            return Patientmedicalconditions.findOne({_id:id});
        }

    })

    Template.account_patient_allergy_update.helpers({
        data: function(){
            var id = sessionStorage.getItem('allergies');
            return Patientallergies.findOne({_id:id});
        }

    })
}