if(Meteor.isClient){
    Template.patientslists.helpers({
        patients: function () {
            return Patients.find({});
        }
    })
}