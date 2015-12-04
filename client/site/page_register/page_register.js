if(Meteor.isServer){


}

if(Meteor.isClient){


    Template.userregistration.events({
        'submit form': function(event,template){
            event.preventDefault();

            var username = template.find('#username').value;
            var password1 = template.find('#password1').value;
            var password2 = template.find('#password2').value;
            var name = template.find('#name').value;

            if(Appusers.find({username:username}).count()>0){
                template.find('#errorDiv').setAttribute("class","alert alert-danger");
                template.find('#errorDiv').innerHTML="username already taken. Please try a new one";
            }
            else if(password1!=password2)
            {
                template.find('#errorDiv').setAttribute("class","alert alert-danger");
                template.find('#errorDiv').innerHTML="Your password did not match with the confirmation.";
            }
            else{
                Appusers.insert({
                        username: username,
                        password: password1,
                        name: name,
                        level: "user",
                        public: false,
                        avatar: "dummy.jpg",
                        level: "patient",
                        dateregistered: new Date(),

                        gender: "unspecified",
                        location: "unspecified",
                        goals: "unspecified",
                        doctors: "unspecified"
                    },
                    function(error,result){

                        var success = "Successfully registered. Please login using your account details.";
                        Validate(error,Appusers,template,success);

                    }
                );
            }

        }
    })
}

