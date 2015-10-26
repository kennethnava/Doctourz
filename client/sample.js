if(Meteor.isClient){

    Template.sample.events({
        'submit form': function(event, template){

            event.preventDefault();

            var name = template.find('#name').value;
            var address = template.find('#address').value;



            Sample.insert({name: name, address: address}, function(error, result) {

                var success = "successfully inserted sample";

               Validate(error,Sample,template,success);
            });
        }
    });

}

myvar = function hi(){
    alert("hi!");
}

