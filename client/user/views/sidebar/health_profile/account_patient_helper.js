if(Meteor.isClient){
    Template.account_patient_personal.helpers({
       patient: function(){
           var id = sessionStorage.getItem('userId');
           return Patients.findOne({_id:id});
       }
    });

    Template.patientLayout.helpers({
        patient: function(){
            var id = sessionStorage.getItem('userId');
            return Patients.findOne({_id:id});
        }
    });

    Template.account_patient_personal_edit.helpers({
        patient: function(){
            var id = sessionStorage.getItem('userId');
            return Patients.findOne({_id:id});
        }
    });

    Template.medicalrecordForm.helpers({
        sessionId: function(){
            var id = sessionStorage.getItem('userId');
            return id;
        }
    });

    Template.patientMedicalRecordList.helpers({
        record: function(){
            var id = sessionStorage.getItem('userId');
            return PatientMedicalRecords.find({patient_id:id});
        }
    });

    Template.account_patient_new_medical_condition.helpers({
        sessionId: function(){
            var id = sessionStorage.getItem('userId');
            return id;
        }
    });

    Template.account_patient_medical_conditions_list.helpers({
        record: function(){
            var id = sessionStorage.getItem('userId');
            return Patientmedicalconditions.find({patient_id:id});
        }
    });

    Template.account_patient_new_allergy.helpers({
        sessionId: function(){
            var id = sessionStorage.getItem('userId');
            return id;
        }
    });

    Template.account_patient_allergy_list.helpers({
        record: function(){
            var id = sessionStorage.getItem('userId');
            return Patientallergies.find({patient_id:id});
        }
    });



}
