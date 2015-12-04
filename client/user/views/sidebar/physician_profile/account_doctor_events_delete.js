if(Meteor.isClient){
    Template.account_doctor_affilliations.events({
        'click .delete': function(event, template){
            var id = event.currentTarget.id;
            Affilliations.remove({_id:id});
        }
    })

    Template.account_doctor_procedures.events({
        'click .delete': function(event, template){
            var id = event.currentTarget.id;
            Procedures.remove({_id:id});
        }
    })

    Template.account_doctor_specializations.events({
        'click .delete': function(event, template){
            var id = event.currentTarget.id;
            Specializations.remove({_id:id});
        }
    })

    Template.account_doctor_subspecializations.events({
        'click .delete': function(event, template){
            var id = event.currentTarget.id;
            SubSpecializations.remove({_id:id});
        }
    })

    Template.account_doctor_education.events({
        'click .delete': function(event, template){
            var id = event.currentTarget.id;
            Education.remove({_id:id});
        }
    })

    Template.account_doctor_trainings.events({
        'click .delete': function(event, template){
            var id = event.currentTarget.id;
            Trainings.remove({_id:id});
        }
    })
}
