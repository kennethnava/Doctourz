

Router.route('/patientacctinfo', function () {
    this.render('account_patient_personal');
    this.layout('patientLayout');
});

Router.route('/patientacctinfoedit', function () {
    this.render('account_patient_personal_edit');
    this.layout('patientLayout');
});

Router.route('/patientmedicalrecord', function () {
    this.render('account_patient_medicalrecords');
    this.layout('patientLayout');
});


Router.route('/patientvidecallschedule', function () {
    this.render('account_patient_videocall');
    this.layout('patientLayout');
});

Router.route('/patientmedicalconditions', function () {
    this.render('account_patient_medical_conditions');
    this.layout('patientLayout');
});


Router.route('/patientallergies', function () {
    this.render('account_patient_allergies');
    this.layout('patientLayout');
});


