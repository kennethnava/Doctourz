
Router.route('/accadmin/home', function () {
    this.render('account_admin_homepage');
});

Router.route('/accadmin/patientlist', function () {
    this.render('account_admin_patient_list_view');
    this.layout('account_admin_patients_list');
});

Router.route('/accadmin/patientthumb', function () {
    this.render('account_admin_patient_thumb_view');
    this.layout('account_admin_patients_list');
});

Router.route('/accadmin/doctorlist', function () {
    this.render('account_admin_doctors_list_view');
    this.layout('account_admin_doctors_list');
});

Router.route('/accadmin/doctorthumb', function () {
    this.render('account_admin_doctors_thumb_view');
    this.layout('account_admin_doctors_list');
});

Router.route('/accadmin/cliniclist', function () {
    this.render('account_admin_clinics_list_view');
    this.layout('account_admin_clinics_list');
});

Router.route('/accadmin/clinicthumb', function () {
    this.render('account_admin_clinics_thumb_view');
    this.layout('account_admin_clinics_list');
});

Router.route('/accadmin/patientprofile', function () {
    this.render('account_admin_patient_profile');
    this.layout('account_admin_patients_list');
});

Router.route('/accadmin/doctorprofile', function () {
    this.render('account_admin_doctors_profile');
    this.layout('account_admin_doctors_list');
});

Router.route('/accadmin/clinicprofile', function () {
    this.render('account_admin_clinics_profile');
    this.layout('account_admin_clinics_list');
});

