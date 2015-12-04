if(Meteor.isClient){
    //helpers section
    Template.traits.helpers({
        traits: function(){
            return Traits.find({});
        }
    })

    Template.trait_form_edit.helpers({
        traits: function(){
            var id = sessionStorage.getItem('currentTrait');
            return Traits.findOne({_id:id});
        }
    })

    Template.questions.helpers({
        questions: function(event){

            Data = new Mongo.Collection(null);

            var questions = Questions.find({});
            var count = questions.count();
            questions = questions.fetch();

            for(var a = 0; a< count; a++){
                var currentTraitId = questions[a].traits_id;

                var trait = Traits.findOne({});

                Data.insert({
                    _id: questions[a]._id,
                   trait: trait.trait,
                    question: questions[a].question,
                    type: questions[a].negative
                });

            }


            return Data.find({});
        }
    })

    Template.question_form.helpers({
        traits: function(){
            return Traits.find({});
        }
    })

    Template.question_form_edit.helpers({
        traits: function(){
            return Traits.find({});
        }
    })
    Template.question_form_edit.helpers({
        question: function(){
            var id = sessionStorage.getItem('currentQuestion');
            return Questions.findOne({_id:id});
        }
    })




    //events section

    //insert
        Template.trait_form.events({
            'submit form': function(event, template){
                event.preventDefault();

                var trait = template.find('#trait').value;
                var description = template.find('#description').value;
                var color="#2FA4E7";

                if(template.find('#color1').checked){color="#73A839"}
                if(template.find('#color2').checked){color="#033C73"}
                if(template.find('#color3').checked){color="#DD5600"}
                if(template.find('#color4').checked){color="#C71C22"}
                if(template.find('#color5').checked){color="#285987"}
                if(template.find('#color6').checked){color="#87B556"}
                if(template.find('#color7').checked){color="#E26F26"}
                if(template.find('#color8').checked){color="#CF3D42"}
                if(template.find('#color9').checked){color="#E6BB50"}

                Traits.insert({
                        trait: trait,
                        description: description,
                        color: color
                },function(error,result){
                    var success ="Successfully added new Trait";
                    Validate(error,Traits,template,success);
                });
            }
        })

        Template.question_form.events({
            'submit form': function(event, template){
                event.preventDefault();



                var trait_id = template.find('#trait_id').value;
                var question = template.find('#question').value;
                var negative = false;

                if(template.find('#negative').checked){negative=true}

                Questions.insert({
                    traits_id: trait_id,
                    question: question,
                    negative: negative
                },function(error,result){
                    var success ="Successfully added new question";
                    Validate(error,Questions,template,success);
                });

            }
        })

        Template.modal2.events({
            'submit form': function(event, template){
                event.preventDefault();




                var userID = sessionStorage.getItem('userId');
                var result = Traits.find({});
                var data = result.fetch();
                var a = result.count();
                var b =0;

                //temporary
                    var res = Ratings.find({user_id:userID});
                    var val = res.fetch();
                    var tempcount = res.count();
                    if(a!=tempcount){
                        for(var e =0;e<tempcount;e++){
                            var tempId = val[e]._id;
                            Ratings.remove({_id:tempId});
                        }
                    }

                //temporary

                for(b=0;b<a;b++){
                   var currentTraitId = data[b]._id;

                    var currentScore = 0;

                    var result2 = Questions.find({traits_id:currentTraitId});
                    var questions = result2.fetch();
                    var currentQuestionCount = result2.count();

                    var currentScore=0;
                    var c =0;

                    for(c=0;c<currentQuestionCount;c++){
                        var currentQuestionId = questions[c]._id;

                        var concatId ="llllllllll"+currentQuestionId+"llllllllll"+currentTraitId;

                        for(var d = 1;d<=5;d++){
                            var currentElement = template.find('#'+d+concatId);
                            if(currentElement.checked){
                                currentScore+=parseInt(currentElement.value);
                            }
                            else
                            {
                                currentScore+=0;
                            }
                        }

                    }

                    if(currentScore>0&&currentQuestionCount>0){
                        currentScore = (currentScore/(5*currentQuestionCount))*100;
                    }
                    else if(currentQuestionCount==0){
                        currentScore=100;
                    }

                    if(Ratings.find({user_id:userID, trait_id: currentTraitId}).count()>0){
                        var rating = Ratings.findOne({user_id:userID,trait_id:currentTraitId});
                        Ratings.update({_id:rating._id},{
                            $set:{
                                score: currentScore
                            }
                        })
                    }
                    else{
                        Ratings.insert({
                            user_id: userID,
                            trait_id: currentTraitId,
                            score: currentScore
                        });
                    }




                }
            }
        })





    //update
        Template.trait_form_edit.events({
            'submit form': function(event, template){
                event.preventDefault();

                var id =  template.find('#_id').value;
                var trait = template.find('#trait').value;
                var description = template.find('#description').value;

                var color="#2FA4E7";

                if(template.find('#color1').checked){color="#73A839"}
                if(template.find('#color2').checked){color="#033C73"}
                if(template.find('#color3').checked){color="#DD5600"}
                if(template.find('#color4').checked){color="#C71C22"}
                if(template.find('#color5').checked){color="#285987"}
                if(template.find('#color6').checked){color="#87B556"}
                if(template.find('#color7').checked){color="#E26F26"}
                if(template.find('#color8').checked){color="#CF3D42"}
                if(template.find('#color9').checked){color="#E6BB50"}

                Traits.update({_id:id},{
                    $set: {
                        trait: trait,
                        description: description,
                        color: color
                    }
                },function(error,result){
                    var success ="Successfully added new Trait";
                    Validate(error,Traits,template,success);
                });
            }
        })

    Template.question_form_edit.events({
        'submit form': function(event, template){
            event.preventDefault();

            var _id = template.find('#_id').value;
            var trait_id =  template.find('#trait_id').value;
            var question = template.find('#question').value;

            var negative = false;

            if(template.find('#negative').checked){negative=true}

            Questions.update({_id:_id},{
                $set: {
                    traits_id: trait_id,
                    question: question,
                    negative: negative
                }
            },function(error,result){
                var success ="Successfully added new Trait";
                Validate(error,Questions,template,success);
            });
        }
    })


    //pre-update and delete

        Template.traits.events({
            'click .delete': function(event, template){
                Traits.remove({_id:event.currentTarget.id});
            },
            'click .update': function(event, template){
                sessionStorage.setItem('currentTrait',event.currentTarget.id);
                Router.go('/traitEdit');
            }
        })

        Template.questions.events({
            'click .delete': function(event, template){
                Questions.remove({_id:event.currentTarget.id});
            },
            'click .update': function(event, template){
                sessionStorage.setItem('currentQuestion',event.currentTarget.id);
                Router.go('/questionEdit');
            }
        })

}