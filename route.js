
Router.route('/', function () {
    this.render('homepage');
    this.layout('sitelayout');
});

Router.route('/doctors', function () {
    this.render('doctormain');
});

Router.route('/patients', function () {
    this.render('patients');
});

Router.route('/newDoctor', function () {
    this.render('newDoctor');
});

Router.route('/doctorslist', function () {
    this.render('doctorslist');
});



//routes for the website registration
Router.route('/userregistration', function () {
    this.render('userregistration');
    this.layout('sitelayout');
});

Router.route('/doctorregistration', function () {
    this.render('doctorreg');
});

Router.route('/loginform', function () {
    this.render('loginform');
    this.layout('sitelayout');
});


Router.route('/listall', function () {
    this.render('listall');
});

Router.route('/doctorslists', function () {
    this.render('doctorslists');
});

Router.route('/patientslists', function () {
    this.render('patientslists');
});


Router.route('/doctorsprofile', function () {
    this.render('doctorsprofile');
});

Router.route('/logout', function () {
    this.render('homepage');
    this.layout('sitelayout');
});

Router.route('/sample', function () {
    this.render('sample');
});


