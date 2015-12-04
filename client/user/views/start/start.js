if(Meteor.isClient){
    //helpers
    Template.start_name.helpers({
        name: function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        }
    })

    Template.start_topics.helpers({
        topics: function(){
            return Topics.find({});
        }
    })

    //events
    Template.start_name.events({
        'submit form': function(event,template){
            event.preventDefault();

            var id = sessionStorage.getItem('userId');
            var name = template.find('#name').value;

            Appusers.update({_id:id},{
                    $set:{
                        name: name
                    }
                },
                function(error,result){

                    Validate2(error,Appusers,template,Goto,'/start_gender');

                }
            );

        }
    })

    Template.start_gender.events({
        'submit form': function(event,template){
            event.preventDefault();

            var id = sessionStorage.getItem('userId');
            var gender ="";
            var val1 = template.find('#male').checked;
            var val2 = template.find('#female').checked;
            if(val1==true){
                gender = "Male";
            }
            else if(val2 == true){
                gender =  "Female";
            }
            else{
                gender="";
            }

            Appusers.update({_id:id},{
                    $set:{
                        gender: gender
                    }
                },
                function(error,result){

                    Validate2(error,Appusers,template,Goto,'/start_birthdate');

                }
            );

        }
    })

    Template.start_birthdate.events({
        'submit form': function(event,template){
            event.preventDefault();

            var id = sessionStorage.getItem('userId');
            var birthdate = template.find('#birthdate').value;
            if(birthdate==null||birthdate==""){
                birthdate="birthdate";
            }
            Appusers.update({_id:id},{
                    $set:{
                        birthdate: birthdate
                    }
                },
                function(error,result){

                    Validate2(error,Appusers,template,Goto,'/start_location');

                }
            );

        }
    })

    Template.start_location.events({
        'submit form': function(event,template){
            event.preventDefault();

            var id = sessionStorage.getItem('userId');
            var location = template.find('#location').value;
            Appusers.update({_id:id},{
                    $set:{
                        location: location
                    }
                },
                function(error,result){

                    Validate2(error,Appusers,template,Goto,'/start_topics');

                }
            );

        }
    })

    Template.start_topics.events({
        'submit form': function(event,template){
            event.preventDefault();

            var id = sessionStorage.getItem('userId');

            var myRadio = $('input[name=topics]');
            var topics = myRadio.filter(':checked').map(function() {
                return this.value;
            }).get();

            if(topics.length>=3){
                Appusers.update({_id: id},{
                    $set:{
                        topics:topics.toString()
                    }

                },function(error,result){
                    Validate2(error,Appusers,template,Goto,'search_landing');
                });
            }
            else{
                alert("Please select 3 or more topics");
            }

        }
    })


}