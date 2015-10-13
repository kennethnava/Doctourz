if(Meteor.isClient){
    Template.loginform.events({
        'submit Form': function(event, template){

            event.preventDefault();

            var username = template.find('#username').value;
            var password = template.find('#password').value;


           var user = Doctors.find({username:username,password:password});
            if (user.count() > 0) {

                user = Doctors.findOne({username:username,password:password});

                alert("doctor");
                sessionStorage.setItem('docId', user._id)
                Router.go('/docacctinfo');
            }
            else
            {
                user = Patients.find({username:username,password:password});
                if(user.count()> 0){

                    user = Patients.find({username:username,password:password});
                    alert("patient");
                    sessionStorage.setItem('patId', user._id)
                    Router.go('/patientcacctinfo');
                }
                else{
                    alert("none");
                    var errorMessage = "Invalid account. Please try again.";
                    sessionStorage.setItem('errorMessage', errorMessage);
                    Router.go('/loginform');
                }

            }

        }
    })

}