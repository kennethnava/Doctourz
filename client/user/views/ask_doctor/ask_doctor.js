if(Meteor.isClient){
    Template.ask_doctor_p1.helpers({
        basicInfo :function(){
            var id = sessionStorage.getItem('userId');
            return Appusers.findOne({_id:id});
        },
        conditions :function(){
            var id = sessionStorage.getItem('userId');
            return Patientmedicalconditions.find({patient_id:id});
        },
        allergies :function(){
            var id = sessionStorage.getItem('userId');
            return Patientallergies.find({patient_id:id});
        }
    })
}