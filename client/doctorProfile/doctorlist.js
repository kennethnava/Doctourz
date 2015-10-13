if(Meteor.isClient){
    Template.doctorslist.helpers({
            settings: function() {
                return {
                    collection: Doctors,
                    rowsPerPage: 10,
                    showFilter: true,
                    fields: ['name','writeup',{key:'_id',tmpl: Template.actionbuttons, label:'Actions'}]

                };
            }
    });

    Template.actionbuttons.events({
        'click .deletebtn': function(event){
            var id = event.currentTarget.id;

            Doctors.remove({_id: id});
        },
        'click .editbtn': function(event){
            var id = event.currentTarget.id;

            Session.set('docId',id);
        }
    })

}