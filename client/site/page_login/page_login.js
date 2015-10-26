if(Meteor.isClient){
    Template.loginform.events({
        'submit Form': function(event, template){

            event.preventDefault();

            var username = template.find('#username').value;
            var password = template.find('#password').value;


           var user = Appusers.find({username:username,password:password});
            if (user.count() > 0) {

                user = Appusers.findOne({username:username,password:password});

                if(user.level=='admin'){
                    sessionStorage.setItem('adminId','valid');
                }
                sessionStorage.setItem('userId', user._id)
                Router.go('/profile');
            }
            else
            {
                var errorMessage = "Invalid account. Please try again.";
                template.find('#errorDiv').setAttribute("class","alert alert-danger");
                template.find('#errorDiv').innerHTML=errorMessage;
                Router.go('/loginform');

            }

        }
    })

}