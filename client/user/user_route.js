
Router.route('/profile', function () {
    this.render('userprofile');
    this.layout('sampleview');
});

Router.route('/news', function () {
    this.render('news');
    this.layout('userlayout');
});

Router.route('/redirect', function () {
    this.render('redirect');
});

Router.route('/search_landing', function () {
    this.render('search_landing');
    this.layout('userlayout');
});

Router.route('/ask_doctor', function () {
    this.render('ask_doctor');
    this.layout('userlayout');
});

Router.route('/ask_doctor_p1', function () {
    this.render('ask_doctor_p1');
    this.layout('userlayout');
});

Router.route('/telemed', function () {
    this.render('telemed');
    this.layout('telemed_layout');
});

Router.route('/appointments', function () {
    this.render('appointments');
    this.layout('telemed_layout');
});


////////////////

Router.route('/example', function () {
    this.render('samplecontent');
    this.layout('sampleview');
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

Router.route('/profile/adminpanel/physicians', function () {
    this.render('physician_panel');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/applicants', function () {
    this.render('applicant_panel');
    this.layout('admin_panel_layout');
});


Router.route('/profile/adminpanel/user', function () {
    this.render('user_profile_review');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/patients', function () {
    this.render('patient_panel');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/questionaire', function () {
    this.render('questionaire');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/newtrait', function () {
    this.render('trait_form');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/traitedit', function () {
    this.render('trait_form_edit');
    this.layout('admin_panel_layout');
});


Router.route('/profile/adminpanel/newquestion', function () {
    this.render('question_form');
    this.layout('admin_panel_layout');
});

Router.route('/profile/adminpanel/questionEdit', function () {
    this.render('question_form_edit');
    this.layout('admin_panel_layout');
});

///////////////////////////////////////////////////////////////////////////////

Router.route('/adminhome', function () {
    this.render('adminhome');
    this.layout('userlayout');
});

Router.route('/questionaireTraits', function () {
    this.render('questionaire_traits');
    this.layout('userlayout');
});

Router.route('/questionaireQuestions', function () {
    this.render('questionaire_questions');
    this.layout('userlayout');
});

Router.route('/newtrait', function () {
    this.render('new_trait');
    this.layout('userlayout');
});

Router.route('/traitEdit', function () {
    this.render('edit_trait');
    this.layout('userlayout');
});

Router.route('/newquestion', function () {
    this.render('new_question');
    this.layout('userlayout');
});


Router.route('/questionEdit', function () {
    this.render('edit_question');
    this.layout('userlayout');
});