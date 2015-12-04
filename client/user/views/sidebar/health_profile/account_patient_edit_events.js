if(Meteor.isClient){
    Template.patientMedicalRecordList.events({
        'click .update': function(event,template){
            var id = event.currentTarget.id;

            sessionStorage.setItem('medicalRecord',id);
            Router.go('medicalprofile/medicalrecord/edit');
        }
    })

    Template.medicalrecordForm_update.events({
        'submit form': function(event,template){
            event.preventDefault();

            var dateFrom = template.find('#dateFrom').value;
            var dateTo = template.find('#dateTo').value;
            var reason = template.find('#reason').value;
            var hospital = template.find('#hostipal').value;
            var patient_id = template.find('#patientId').value;

            PatientMedicalRecords.update({_id:patient_id},{
               $set: {
                   datefrom: dateFrom,
                   dateTo: dateTo,
                   hospital: hospital,
                   reason: reason
               }
            },function(error,result){
                var success ="Successfully updated medical record";
                Validate(error,PatientMedicalRecords,template,success);
            });
        }
    })


    Template.account_patient_medical_conditions_list.events({
        'click .update': function(event,template){
            var id = event.currentTarget.id;

            sessionStorage.setItem('medicalCondition',id);

            Router.go('medicalprofile/medicalconditions/edit');
        }
    })

    Template.account_patient_medical_condition_update.events({
        'submit form': function(event,template){
            event.preventDefault();

            var condition = template.find('#condition').value;
            var description = template.find('#description').value;
            var medications = template.find('#medications').value;
            var patient_id = template.find('#patientId').value;

            Patientmedicalconditions.update({_id: patient_id}, {
                $set:{
                    condition: condition,
                    description: description,
                    medications: medications
                }

            },function(error,result){
                var success ="Successfully updated condition";
                Validate(error,Patientmedicalconditions,template,success);
            });
        }
    })


    Template.account_patient_allergy_list.events({
        'click .update': function(event,template){
            var id = event.currentTarget.id;

            sessionStorage.setItem('allergies',id);

            Router.go('medicalprofile/allergies/edit');
        }
    })

    Template.account_patient_allergy_update.events({
        'submit form': function(event,template){
            event.preventDefault();

            var type = template.find('#type').value;
            var particular = template.find('#particular').value;
            var patient_id = template.find('#patientId').value;

            Patientallergies.update({_id:patient_id},{
                $set:{
                    type: type,
                    particular: particular
                }

            },function(error,result){
                var success ="Successfully updated condition";
                Validate(error,Patientallergies,template,success);
            });
        }
    })
}