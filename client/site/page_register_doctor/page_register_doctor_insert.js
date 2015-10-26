if(Meteor.isServer){

    // Meteor.publish('patients',function(){
    //     return Patients.find({});
    // });
}

if(Meteor.isClient){

    //Meteor.subscribe("patients");

    Template.doctorreg.events({
        'submit form': function(event,template){
            event.preventDefault();

            var name = template.find('#name').value;
            var gender = template.find('#gender').value;
            var birthdate = template.find('#birthdate').value;
            var country = template.find('#country').value;
            var email = template.find('#email').value;
            var username = template.find('#username').value;
            var password = template.find('#password').value;
            var description = template.find('#description').value;

            //Meteor.call("registerPatient",name,gender,birthdate,country,email,username,password,template);

            if(Doctors.find({username:username}).count()>0||Patients.find({username:username})>0||Admin.find({username:username})>0){
                template.find('#errorDiv').setAttribute("class","alert alert-danger");
                template.find('#errorDiv').innerHTML="username already taken. Please try a new one";
            }
            else{
                Doctors.insert({
                        name: name,
                        gender: gender,
                        birthdate: birthdate,
                        country: country,
                        email: email,
                        username: username,
                        password: password,
                        writeups: description,
                        registeredDate: new Date()
                    },
                    function(error,result){

                        var success = "Successfully registered. Please login using your account details.";
                        Validate(error,Doctors,template,success);

                    }
                );
            }
        }
    })
}

