if(Meteor.isClient){
    Template.affiliations_form.events({
        'submit form': function (event, template){
            event.preventDefault();

            var name = template.find('#name').value;
            var description = template.find('#description').value;
            var doctor_id = template.find('#doctorId').value;

            Affilliations.insert({
                name: name,
                description: description,
                doctor_id:  doctor_id
            },function(error,result){

                var success ="Successfully added new affilliation";
                Validate(error,Affilliations,template,success);
            });
        }
    })


    Template.procedures_form.events({
        'submit form': function (event, template){
            event.preventDefault();

            var name = template.find('#name').value;
            var description = template.find('#description').value;
            var doctor_id = template.find('#doctorId').value;

            Procedures.insert({
                name: name,
                description: description,
                doctor_id:  doctor_id
            },function(error,result){

                var success ="Successfully added new Procedure";
                Validate(error,Procedures,template,success);
            });
        }
    })

    Template.specializations_form.events({
        'submit form': function (event, template){
            event.preventDefault();

            var name = template.find('#name').value;
            var description = template.find('#description').value;
            var doctor_id = template.find('#doctorId').value;

            Specializations.insert({
                name: name,
                description: description,
                doctor_id:  doctor_id
            },function(error,result){

                var success ="Successfully added new Procedure";
                Validate(error,Specializations,template,success);
            });
        }
    })

    Template.subspecializations_form.events({
        'submit form': function (event, template){
            event.preventDefault();

            var name = template.find('#name').value;
            var description = template.find('#description').value;
            var doctor_id = template.find('#doctorId').value;
            var specialization = template.find('#specialization').value;

            SubSpecializations.insert({
                name: name,
                description: description,
                doctor_id:  doctor_id,
                specialization: specialization
            },function(error,result){

                var success ="Successfully added new Procedure";
                Validate(error,SubSpecializations,template,success);
            });
        }
    })


    Template.education_form.events({
        'submit form': function (event, template){
            event.preventDefault();

            var schoolname = template.find('#schoolname').value;
            var yeargraduated = template.find('#yeargraduated').value;
            var doctor_id = template.find('#doctorId').value;
            var degree = template.find('#degree').value;

            Education.insert({
                schoolName: schoolname,
                yearGraduated: yeargraduated,
                doctor_id:  doctor_id,
                degree: degree
            },function(error,result){

                var success ="Added successfully";
                Validate(error,Education,template,success);
            });
        }
    })

    Template.trainings_form.events({
        'submit form': function (event, template){
            event.preventDefault();

            var name = template.find('#name').value;
            var dateAttended = template.find('#dateAttended').value;
            var doctor_id = template.find('#doctorId').value;

            Trainings.insert({
                name: name,
                dateAttended: dateAttended,
                doctor_id:  doctor_id
            },function(error,result){

                var success ="Added successfully";
                Validate(error,Trainings,template,success);
            });
        }
    })

}