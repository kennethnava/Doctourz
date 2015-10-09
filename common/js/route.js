
Router.route('/', function () {
    this.render('homepage');
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



