if(Meteor.isClient){

        Template.slider.events({
            'submit form': function(event,template){
                event.preventDefault();

                if(!sessionStorage.getItem('userId')){
                    Router.go('/loginform');
                }
                else{

                    var specialization = template.find('#specialization').value;
                    var location = template.find('#location').value;

                    sessionStorage.setItem('seacrhSpecialization', specialization);
                    sessionStorage.setItem('searchLocation', location);

                    Router.go('/searchresult');
                }
            }
        })

        Template.slider.helpers({
            specializations: function(){

                var myArray = Specializations.find().fetch();
                var distinctArray = _.uniq(myArray, false, function(d) {return d.name});
                var distinctValues = _.pluck(distinctArray, 'name');

                Data = new Mongo.Collection(null);

                var count = distinctValues.length;
                for(var a = 0;a<count; a++){
                    Data.insert({
                        name: distinctValues[a]
                    })
                }
                return Data.find({});
            }

        })

        Template.slider.helpers({
            locations: function(){
                var myArray1 = Appusers.find().fetch();
                var distinctArray1 = _.uniq(myArray1, false, function(d) {return d.state});
                var distinctValues1 = _.pluck(distinctArray1, 'state');

                Data2 = new Mongo.Collection(null);

                var count = distinctValues1.length;
                for(var a = 0;a<count; a++){
                    Data2.insert({
                        state: distinctValues1[a]
                    })
                }
                return Data2.find({});

            }
        })


}