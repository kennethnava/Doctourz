if(Meteor.isClient){
    //events section

    Template.registerHelper('formatDate', function(date) {
        return moment(date).format('MMMM-DD-YYYY');
    });

    Template.inside_about.events({

        'click .savename': function(event,template){
            var id = sessionStorage.getItem('userId');
            var name =  template.find('#name').value;

            Appusers.update({_id:id},{
                $set:{
                    name: name
                }
            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'name_edit');
            });
        },

        'click .savegender': function(event,template){
            var id = sessionStorage.getItem('userId');
            var gender = "";
            if(template.find('#male').checked){gender="Male";}
            else if(template.find('#female').checked){gender="Female";}

            Appusers.update({_id:id},{
                $set:{
                    gender: gender
                }
            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'gender_edit');
            });
        },

        'click .savelocation': function(event,template){
            var id = sessionStorage.getItem('userId');
            var location =  template.find('#location').value;
            Appusers.update({_id:id},{
                $set:{
                    location: location
                }
            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'location_edit');
            });
        },

        'click .savebirthdate': function(event,template){
            var id = sessionStorage.getItem('userId');
            var birthdate =  template.find('#birthdate').value;
            Appusers.update({_id:id},{
                $set:{
                    birthdate: birthdate
                }
            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'birthdate_edit');
            });
        },

        'click .saveethnicity': function(event,template){
            var id = sessionStorage.getItem('userId');

            var myRadio = $('input[name=ethnicity]');
            var ethnicity = myRadio.filter(':checked').val();

            if(ethnicity==null){
                alert("Please select ethnicity");
            }
            else{
                Appusers.update({_id:id},{
                    $set:{
                        ethnicity: ethnicity
                    }
                },function(error,result){
                    Validate2(error,Appusers,template,toggleElement,'ethnicity_edit');
                });
            }

        },

        'click .saveheight': function(event,template){
            var id = sessionStorage.getItem('userId');

            var meter = template.find('#height1').value;
            var inch = template.find('#height2').value;

            if(meter>8||meter<1||inch>11){
                alert("Invalid height. Please review your entry.");
            }
            else
            {
                var height = meter+"'"+inch+'"';
                Appusers.update({_id:id},{
                    $set:{
                        height: height
                    }
                },function(error,result){
                    Validate2(error,Appusers,template,toggleElement,'height_edit');
                });
            }

            updateBMI(id);
        },

        'click .saveweight': function(event,template){
            var id = sessionStorage.getItem('userId');

            var weight = template.find('#weight').value;


            if(weight>300){
                alert("Invalid weight. Please review your entry.");
            }
            else
            {
                Appusers.update({_id:id},{
                    $set:{
                        weight: weight
                    }
                },function(error,result){
                    Validate2(error,Appusers,template,toggleElement,'weight_edit');
                });
            }

            updateBMI(id);


        },


    })

    Template.inside_family_history.events({

        'click .savehistory1': function(event,template){
            var id = sessionStorage.getItem('userId');

            var condition = template.find('#condition1').value;
            var relative = template.find('#relative1').value;
            var age = template.find('#age1').value;

            FamilyHistory.insert({
                user_id: id,
                type: "1",
                condition: condition,
                relative: relative,
                age: age
            },function(error,result){
                Validate2(error,FamilyHistory,template,toggleElement,'edit_history1');
            });

        },

        'click .savehistory2': function(event,template){
            var id = sessionStorage.getItem('userId');

            var condition = template.find('#condition2').value;
            var relative = template.find('#relative2').value;
            var age = template.find('#age2').value;

            FamilyHistory.insert({
                user_id: id,
                type: "2",
                condition: condition,
                relative: relative,
                age: age
            },function(error,result){
                Validate2(error,FamilyHistory,template,toggleElement,'edit_history2');
            });

        },
    })

    Template.inside_lifestyle.events({
        'click .savediet': function(event, template){
            var id = sessionStorage.getItem('userId');

            var myRadio = $('input[name=diet]');
            var diet = myRadio.filter(':checked').map(function() {
                return this.value;
            }).get();

            Appusers.update({_id: id},{
                $set:{
                    diet:diet.toString()
                }

            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'edit_diet');
            });

        },
        'click .savealcohol': function(event, template){
            var id = sessionStorage.getItem('userId');

            var myRadio = $('input[name=alcohol]');
            var alcohol = myRadio.filter(':checked').val();

            Appusers.update({_id: id},{
                $set:{
                   alcohol: alcohol
                }

            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'edit_alcohol');
            });

        },
        'click .savetobacco': function(event, template){
            var id = sessionStorage.getItem('userId');

            var myRadio = $('input[name=tobacco]');
            var tobacco = myRadio.filter(':checked').val();

            Appusers.update({_id: id},{
                $set:{
                    tobacco: tobacco
                }

            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'edit_tobacco');
            });

        },
        'click .savesex': function(event, template){
            var id = sessionStorage.getItem('userId');

            var myRadio = $('input[name=sex]');
            var sex = myRadio.filter(':checked').val();

            Appusers.update({_id: id},{
                $set:{
                    sexual: sex
                }

            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'edit_sex');
            });

        }

    })

    Template.inside_contact_info.events({
        'click .savemobile': function(event, template){
            var id = sessionStorage.getItem('userId');

            var mobile = template.find('#mobile').value;

            Appusers.update({_id: id},{
                $set:{
                    mobile: mobile
                }

            },function(error,result){
                Validate2(error,Appusers,template,toggleElement,'edit_mobile');
            });

        }
    })




    //helpers section
    Template.inside_about.helpers({
        basicInfo: function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        }
    })
    Template.inside_family_history.helpers({
        history1: function(){
            var id = sessionStorage.getItem('userId');
            return FamilyHistory.find({user_id:id, type: '1'});
        },
        history2: function(){
            var id = sessionStorage.getItem('userId');
            return FamilyHistory.find({user_id:id, type: '2'});
        }
    })

    Template.inside_lifestyle.helpers({
        data: function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        }
    })

    Template.inside_contact_info.helpers({
        data: function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        }
    })







}