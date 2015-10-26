if(Meteor.isClient){
    Template.account_patient_personal.events({

    })

    Template.medicalrecordForm.events({
        'submit form': function(event, template) {
            event.preventDefault();

            var dateFrom = template.find('#dateFrom').value;
            var dateTo = template.find('#dateTo').value;
            var reason = template.find('#reason').value;
            var hospital = template.find('#hostipal').value;
            var patient_id = template.find('#patientId').value;

            PatientMedicalRecords.insert({
                datefrom: dateFrom,
                dateTo: dateTo,
                hospital: hospital,
                reason: reason,
                patient_id: patient_id
            },function(error,result){
                var success ="Successfully added new medical record";
                Validate(error,PatientMedicalRecords,template,success);
            });
        }
    })


       Template.account_patient_new_medical_condition.events({
        'submit form': function(event, template) {
            event.preventDefault();

            var condition = template.find('#condition').value;
            var description = template.find('#description').value;
            var medications = template.find('#medications').value;
            var patient_id = template.find('#patientId').value;

            Patientmedicalconditions.insert({
                condition: condition,
                description: description,
                medications: medications,
                patient_id: patient_id

            },function(error,result){
                var success ="Successfully added medical condition";
                Validate(error,Patientmedicalconditions,template,success);
            });
        }
    })

    Template.account_patient_new_allergy.events({
        'submit form': function(event, template) {
            event.preventDefault();

            var type = template.find('#type').value;
            var particular = template.find('#particular').value;
            var patient_id = template.find('#patientId').value;

            Patientallergies.insert({
                type: type,
                particular: particular,
                patient_id: patient_id

            },function(error,result){
                var success ="Successfully added medical condition";
                Validate(error,Patientallergies,template,success);
            });
        }
    })


}