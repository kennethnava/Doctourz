
Router.route('/', function () {
    this.render('index_home');
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
});

Router.route('/doctorregistration', function () {
    this.render('doctorreg');
});

Router.route('/loginform', function () {
    this.render('loginform');
});

Router.route('/start_name', function () {
    this.render('start_name');
});

Router.route('/start_gender', function () {
    this.render('start_gender');
});

Router.route('/start_birthdate', function () {
    this.render('start_birthdate');
});

Router.route('/start_location', function () {
    this.render('start_location');
});

Router.route('/start_topics', function () {
    this.render('start_topics');
});

Router.route('/start_anona', function () {
    this.render('start_anona');
});



////////

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

Router.route('/searchresult', function () {
    this.render('search_result');
    this.layout('sitelayout');
});

Router.route('/sample', function () {
    this.render('sampleview');
});


