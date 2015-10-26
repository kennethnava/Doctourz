if(Meteor.isClient){

    Template.userprofile_edit.events({
        'submit form': function(ecent,template){
            event.preventDefault();

            var userId = sessionStorage.getItem('userId');

            var firstname = template.find('#firstname').value;
            var middlename = template.find('#middlename').value;
            var lastname = template.find('#lastname').value;
            var suffix = template.find('#suffix').value;
            var aliases = template.find('#aliases').value;

            var birthdate = template.find('#birthdate').value;

            var email = template.find('#email').value;
            var mobile = template.find('#mobile').value;
            var telephone = template.find('#telephone').value;


            var address1 = template.find('#address1').value;
            var address2 = template.find('#address2').value;
            var city = template.find('#city').value;
            var state = template.find('#state').value;
            var country = template.find('#country').value;
            var zip = template.find('#zip').value;


            var password1 = template.find('#password1').value;
            var password2 = template.find('#password2').value;

            var gender ="";
            if(template.find('#Male').checked){gender="Male";}
            if(template.find('#Female').checked){gender="Female";}
            if(template.find('#Unspecified').checked){gender="Unspecified";}

            var civilstatus ="";
            if(template.find('#Single').checked){civilstatus="Single";}
            if(template.find('#Married').checked){civilstatus="Married";}
            if(template.find('#Separated').checked){civilstatus="Separated";}
            if(template.find('#Divorced').checked){civilstatus="Divorced";}
            if(template.find('#Widowed').checked){civilstatus="Widowed";}
            if(template.find('#Unspecified2').checked){civilstatus="Unspecified2";}

            var preference = false;
            if(template.find('#Yes').checked){preference="Yes";}
            if(template.find('#No').checked){preference="No";}


            if(password1 == password2){
                Appusers.update({_id:userId},{
                    $set:{

                        lastname: lastname,
                        firstname: firstname,
                        middlename: middlename,
                        suffix: suffix,
                        aliases: aliases,

                        gender: gender,
                        civilstatus: civilstatus,
                        birthdate: birthdate,

                        email: email,
                        telephone: telephone,
                        mobile: mobile,

                        address1: address1,
                        address2: address2,
                        city: city,
                        state: state,
                        country: country,
                        zip: zip,

                        password: password1,
                        public: preference


                    }
                },function(error,result){

                    var success ="updated successfully";
                    Validate(error,Appusers,template,success);
                });
            }
            else{
                var errormessage="Passwords did not match";
                template.find('#errorDiv').setAttribute('class','alert alert-danger');
                template.find('#errorDiv').innerHTML= errormessage;
            }








        }
    })
}