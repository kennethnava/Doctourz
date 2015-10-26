
Router.route('/profile', function () {
    this.render('userprofile');
    this.layout('sitelayout');
});

Router.route('/profile/edit', function () {
    this.render('userprofile_edit');
    this.layout('sitelayout');
});

Router.route('physicianprofile/edit', function () {
    this.render('physicianprofile_edit');
    this.layout('sitelayout');
});

Router.route('physicianprofile/education', function () {
    this.render('education_form');
    this.layout('sitelayout');
});

Router.route('physicianprofile/trainings', function () {
    this.render('trainings_form');
    this.layout('sitelayout');
});

Router.route('physicianprofile/specializations', function () {
    this.render('specializations_form');
    this.layout('sitelayout');
});

Router.route('physicianprofile/subspecializations', function () {
    this.render('subspecializations_form');
    this.layout('sitelayout');
});

Router.route('physicianprofile/affiliations', function () {
    this.render('affiliations_form');
    this.layout('sitelayout');
});

Router.route('physicianprofile/procedures', function () {
    this.render('procedures_form');
    this.layout('sitelayout');
});

Router.route('medicalprofile/edit', function () {
    this.render('medicalprofile_edit');
    this.layout('sitelayout');
});

Router.route('medicalprofile/medicalrecords', function () {
    this.render('medicalrecordForm');
    this.layout('sitelayout');
});

Router.route('medicalprofile/medicalconditions', function () {
    this.render('account_patient_new_medical_condition');
    this.layout('sitelayout');
});


Router.route('medicalprofile/allergies', function () {
    this.render('account_patient_new_allergy');
    this.layout('sitelayout');
});

Router.route('medicalprofile/videocallschedule', function () {
    this.render('new_videocallschedule');
    this.layout('sitelayout');
});

Router.route('medicalprofile/medicalrecord/edit', function () {
    this.render('medicalrecordForm_update');
    this.layout('sitelayout');
});


Router.route('medicalprofile/medicalconditions/edit', function () {
    this.render('account_patient_medical_condition_update');
    this.layout('sitelayout');
});

Router.route('medicalprofile/allergies/edit', function () {
    this.render('account_patient_allergy_update');
    this.layout('sitelayout');
});

Router.route('/profile/adminpanel/home', function () {
    this.render('admin_panel_home');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/page', function () {
    this.render('page');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/physician', function () {
    this.render('physician_panel');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/applicant', function () {
    this.render('user_profile_review');
    this.layout('admin_panel_layout');
});



