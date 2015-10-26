if(Meteor.isClient){
    Template.account_admin_patient_list_view.helpers({
        patients: function(){
            return Patients.find({});
        }
    })
    Template.account_admin_patient_thumb_view.helpers({
        patients: function(){
            return Patients.find({});
        }
    })

    Template.account_admin_patient_profile.helpers({
        activePatient: function(){
            var id = sessionStorage.getItem('activePatient');
            return Patients.findOne({_id:id});
        }
    })
}