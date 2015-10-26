
Validate = function validateNow(error,schema,template,successMessage){

    if(error){
        var count  = error.invalidKeys.length;
        var a=0;
        var errorMessage = "";
        for(a=0;a<count;a++)
        {
            errorMessage+= "&bull;&nbsp;&nbsp;"+schema.simpleSchema().namedContext().keyErrorMessage(error.invalidKeys[a].name)+"<br/>";

        }

        template.find('#errorDiv').setAttribute('class','alert alert-danger');
        template.find('#errorDiv').innerHTML= errorMessage;
    }
    else
    {
        template.find('#errorDiv').setAttribute('class','alert alert-success');
        template.find('#errorDiv').innerHTML=successMessage;
    }
}


if(Meteor.isClient){

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

}