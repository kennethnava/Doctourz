if(Meteor.isClient) {

    Template.doctor_personal_information_edit.events({
        'submit form': function(event,template){
            event.preventDefault();

            var  id = sessionStorage.getItem('docId');

            var name = template.find('#name').value;
            var gender = template.find('#gender').value;
            var birthdate = template.find('#birthdate').value;
            var country = template.find('#country').value;
            var email = template.find('#email').value;
            var writeups = template.find('#writeups').value;

            //Meteor.call("registerPatient",name,gender,birthdate,country,email,username,password,template);


                Doctors.update({_id:id},{
                        $set: {
                                name: name,
                                email: email,
                                gender: gender,
                                birthdate: birthdate,
                                country: country,
                                writeups: writeups
                              }
                    },
                    function(error,result){

                        var success = "Successfully updated personal information.";
                        Validate(error,Doctors,template,success);

                    }
                );

        }
    })


    Template.account_doctor_affilliations.events({
        'click .update': function(event,template){
            sessionStorage.setItem('affilliationId',event.currentTarget.id);
        }
    })

    Template.doctor_affilliation_update.events({
        'submit form': function(event,template){
            event.preventDefault();

            var affId = template.find('#affId').value;
            var name = template.find('#name').value;
            var description = template.find('#description').value;

            Affilliations.update({_id:affId},{
                $set: {
                    name:name,
                    description: description
                }
            },
                function(error,result){

                    var success = "Successfully updated Affiliation.";
                    Validate(error,Affilliations,template,success);

                });
        }
    })


    Template.account_doctor_procedures.events({
        'click .update': function(event,template){
            sessionStorage.setItem('procedureId',event.currentTarget.id);
        }
    })

    Template.doctor_procedure_update.events({
        'submit form': function(event,template){
            event.preventDefault();

            var procId = template.find('#procId').value;
            var name = template.find('#name').value;
            var description = template.find('#description').value;

            Procedures.update({_id:procId},{
                    $set: {
                        name:name,
                        description: description
                    }
                },
                function(error,result){

                    var success = "Successfully updated procedure.";
                    Validate(error,Procedures,template,success);

                });
        }
    })

    Template.account_doctor_specializations.events({
        'click .update': function(event,template){
            sessionStorage.setItem('specializationId',event.currentTarget.id);
        }
    })

    Template.doctor_specialization_update.events({
        'submit form': function(event,template){
            event.preventDefault();

            var specId = template.find('#specId').value;
            var name = template.find('#name').value;
            var description = template.find('#description').value;

            Specializations.update({_id:specId},{
                    $set: {
                        name:name,
                        description: description
                    }
                },
                function(error,result){

                    var success = "Successfully updated Specialization details.";
                    Validate(error,Specializations,template,success);

                });
        }
    })

    Template.account_doctor_subspecializations.events({
        'click .update': function(event,template){
            sessionStorage.setItem('subspecializationId',event.currentTarget.id);
        }
    })

    Template.doctor_subspecialization_update.events({
        'submit form': function(event,template){
            event.preventDefault();

            var specialization = template.find('#specialization').value;
            var subId = template.find('#subId').value;
            var name = template.find('#name').value;
            var description = template.find('#description').value;

            SubSpecializations.update({_id:subId},{
                    $set: {
                        specialization: specialization,
                        name:name,
                        description: description
                    }
                },
                function(error,result){

                    var success = "Successfully updated Sub-specialization details.";
                    Validate(error,SubSpecializations,template,success);

                });
        }
    })



    Template.account_doctor_education.events({
        'click .update': function(event,template){
            sessionStorage.setItem('educationId',event.currentTarget.id);
        }
    })

    Template.doctor_education_update.events({
        'submit form': function (event, template){
            event.preventDefault();
            var educId = template.find('#educId').value;
            var schoolname = template.find('#schoolname').value;
            var yeargraduated = template.find('#yeargraduated').value;
            var degree = template.find('#degree').value;

            Education.update({_id:educId},{
                $set:{
                        schoolName: schoolname,
                        yearGraduated: yeargraduated,
                        degree: degree
                    }
            },function(error,result){

                var success ="updated successfully";
                Validate(error,Education,template,success);
            });
        }
    })

    Template.account_doctor_trainings.events({
        'click .update': function(event,template){
            sessionStorage.setItem('trainingId',event.currentTarget.id);
        }
    })

    Template.account_doctor_trainings_update.events({
        'submit form': function (event, template){
            event.preventDefault();

            var trainingId = template.find('#trainingId').value;
            var name = template.find('#name').value;
            var dateAttended = template.find('#dateAttended').value;

            Trainings.update({_id:trainingId},{
                $set:{
                    name: name,
                    dateAttended: dateAttended
                }
            },function(error,result){

                var success ="updated successfully";
                Validate(error,Trainings,template,success);
            });
        }
    })








}