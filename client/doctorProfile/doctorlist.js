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


}