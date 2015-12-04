Router.route('/doctorpersonalinformation', function () {
    this.render('doctorpersonalinformation');
    this.layout('doctorLayout');
});

Router.route('/doctoraffilliations', function () {
    this.render('account_doctor_affilliations');
    this.layout('doctorLayout');
});

Router.route('/doctorprocedures', function () {
    this.render('account_doctor_procedures');
    this.layout('doctorLayout');
});

Router.route('/doctorspecializations', function () {
    this.render('account_doctor_specializations');
    this.layout('doctorLayout');
});

Router.route('/doctorsubspecializations', function () {
    this.render('account_doctor_subspecializations');
    this.layout('doctorLayout');
});

Router.route('/doctoreducation', function () {
    this.render('account_doctor_education');
    this.layout('doctorLayout');
});

Router.route('/doctortrainings', function () {
    this.render('account_doctor_trainings');
    this.layout('doctorLayout');
});


Router.route('/doctorpersonalifoedit', function () {
    this.render('doctor_personal_information_edit');
    this.layout('doctorLayout');
});

Router.route('/physicianprofile/doctoraffilliationupdate', function () {
    this.render('doctor_affilliation_update');
    this.layout('sitelayout');
});

Router.route('/physicianprofile/doctorprocedureupdate', function () {
    this.render('doctor_procedure_update');
    this.layout('sitelayout');
});

Router.route('/physicianprofile/doctorspecializationupdate', function () {
    this.render('doctor_specialization_update');
    this.layout('sitelayout');
});

Router.route('/physicianprofile/doctorsubspecializationupdate', function () {
    this.render('doctor_subspecialization_update');
    this.layout('sitelayout');
});

Router.route('/physicianprofile/doctoreducationupdate', function () {
    this.render('doctor_education_update');
    this.layout('sitelayout');
});


Router.route('/physicianprofile/accountdoctortrainingsupdate', function () {
    this.render('account_doctor_trainings_update');
    this.layout('sitelayout');
});

Router.route('/doctorvideocall', function () {
    this.render('account_doctor_videocall');
    this.layout('sitelayout');
});

