var GulpConfig = function () {
    this.source = './src/';
    this.appSources = [
        this.source + 'js/app/*.js',
        this.source + 'js/app/*/*.js'
    ];
    this.sourceCss = [
        this.source + 'css/*.css'
    ];

    this.modules = './node_modules/';
    this.moduleLibs = [
        this.modules + 'jquery/dist/jquery.js',
        this.modules + 'angular/angular.js',
        this.modules + 'angular/angular-animate.js',
        this.modules + 'angular-ui-bootstrap/ui-bootstrap-tpls.js',
        this.modules + 'angular-ui-router/release/angular-ui-router.js'
    ];
    this.moduleStyles = [
        this.modules + 'bootstrap/dist/css/bootstrap.css'
    ];

    this.bootstrapFonts = this.modules + 'bootstrap/dist/fonts/*';

    this.output = './public/';
    this.outputJs = this.output + 'js/';
    this.outputCss = this.output + 'css/';
    this.outputFonts = this.output + 'fonts/';

    this.allLibs = 'lib.min.js';
    this.allStyles = 'lib.min.css';
    this.allApp = 'app.min.js';
    this.allAppCss = 'app.min.css';
};

module.exports = GulpConfig;
