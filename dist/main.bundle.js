webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<p>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #fcfcfc\">    \n    <app-topnav></app-topnav>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__topnav_topnav_component__ = __webpack_require__("../../../../../src/app/topnav/topnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__topnav_topnav_component__["a" /* TopnavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([{
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'projects',
                        component: __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */]
                    },
                    {
                        path: 'about',
                        component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */]
                    },
                    {
                        path: 'contact',
                        component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */]
                    }
                ])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<!--Grid row-->\n<div class=\"row\">\n\n  <!--Grid column-->\n  <div class=\"col-md-6\">\n\n      <!--Card-->\n      <div class=\"card testimonial-card\">\n\n          <!--Bacground color-->\n          <div class=\"card-up indigo lighten-1\">\n          </div>\n\n          <!--Avatar-->\n          <div class=\"avatar\"><img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg\" class=\"rounded-circle\">\n          </div>\n\n          <div class=\"card-body\">\n              <!--Name-->\n              <h4 class=\"card-title\">Anna Doe</h4>\n              <hr>\n              <!--Quotation-->\n              <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n          </div>\n\n      </div>\n      <!--/.Card-->\n\n  </div>\n  <!--Grid column-->\n\n  <!--Grid column-->\n  <div class=\"col-md-6\">\n\n      <!--Card-->\n      <div class=\"card testimonial-card\">\n\n          <!--Bacground color-->\n          <div class=\"card-up aqua-gradient\">\n          </div>\n\n          <!--Avatar-->\n          <div class=\"avatar\"><img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg\" class=\"rounded-circle img-responsive\">\n          </div>\n\n          <div class=\"card-body\">\n              <!--Name-->\n              <h4 class=\"card-title\">Martha Smith</h4>\n              <hr>\n              <!--Quotation-->\n              <p><i class=\"fa fa-quote-left\"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>\n          </div>\n\n      </div>\n      <!--/.Card-->\n\n  </div>\n  <!--Grid column-->\n\n</div>\n<!--Grid row-->"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row vertical-center\">\n  <div class=\"col-md-4\"></div>\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n\n      <!--Card image-->\n      <img class=\"circle-image\" src=\"/assets/images/home_me_1.jpg\" alt=\"Lagnesh Thakur\">\n    \n      <!--Card content-->\n      <div class=\"card-body\">\n          <!--Title-->\n          <!-- <h4 class=\"card-title\" style=\"text-align:center\">Lagnesh Thakur</h4> -->\n          <!--Text-->\n          <p class=\"card-text\">\n            Hi!\n            <br/> \n            I am <span style=\"color: #3f51b5;font-size: large\">Lagnesh</span>\n            <br/>\n            I am an active <span style=\"color: #3f51b5;font-size: large\">coder</span>\n            , a quick <span style=\"color: #3f51b5;font-size: large\">learner</span>\n            , a skilled <span style=\"color: #3f51b5;font-size: large\">gamer</span>\n            , an old <span style=\"color: #3f51b5;font-size: large\">b-boy</span>\n            , and a new <span style=\"color: #3f51b5;font-size: large\">opportunist</span>\n            <span style=\"color:rgb(60, 62, 199); font-size:large\">...</span>\n            <br/>\n            <!-- And there's a lot more. -->\n\n          </p>\n\n          <!-- <a href=\"#\" class=\"btn btn-primary waves-light\" mdbRippleRadius>Button</a> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br/>\n<div class=\"row\">\n    <div *ngFor = \"let project of projects\" class=\"col-lg-4 col-md-6 mb-r\">\n                        \n    <!--Card-->\n    <div class=\"card card-cascade\" style=\"align-items:center\">\n\n        <!--Card image-->\n        <div class=\"view overlay hm-white-slight\">\n            <img src=\"https://picsum.photos/200/200?image=885\" class=\"circle-image\" alt=\"\">\n            <a>\n                <div class=\"mask waves-effect waves-light\"></div>\n            </a>\n        </div>\n        <!--/.Card image-->\n\n        <!--Card content-->\n        <div class=\"card-body text-center\">\n            <!--Title-->\n            <h4 class=\"card-title\"><strong>{{project.name}}</strong></h4>\n            <h5>{{project.year}}</h5>\n\n            <p class=\"card-text\">\n                {{project.description}}\n            </p>\n            <!-- <a type=\"button\" class=\"btn-floating btn-fb waves-effect waves-light\">\n                Check it out!\n            </a> -->\n        </div>\n        <!--/.Card content-->\n\n    </div>\n    <!--/.Card-->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projects = [
            {
                'name': 'My Project',
                'year': 2018,
                'description': 'Project description placeholder'
            },
            {
                'name': 'My Project',
                'year': 2018,
                'description': 'Project description placeholder'
            },
            {
                'name': 'My Project',
                'year': 2018,
                'description': 'Project description placeholder'
            },
            {
                'name': 'My Project',
                'year': 2018,
                'description': 'Project description placeholder'
            },
            {
                'name': 'My Project',
                'year': 2018,
                'description': 'Project description placeholder'
            },
            {
                'name': 'My Project',
                'year': 2018,
                'description': 'Project description placeholder'
            },
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark indigo\">\n           \n  <!-- Navbar brand -->\n  <logo><a class=\"navbar-brand\" routerLink=\"/home\">Lagnesh Thakur</a></logo>\n\n  <!-- Collapsible content -->\n  <links>\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n          <!-- <li class=\"nav-item\" routerLinkActive = \"active\">\n              <a class=\"nav-link waves-light\" mdbRippleRadius routerLink=\"/projects\">Projects</a>\n          </li>\n          <li class=\"nav-item\" routerLinkActive = \"active\">\n              <a class=\"nav-link waves-light\" mdbRippleRadius routerLink=\"/about\">About</a>\n          </li>\n          <li class=\"nav-item\" routerLinkActive = \"active\">\n            <a class=\"nav-link waves-effect waves-light\" routerLink=\"/contact\">Contact</a>\n          </li> -->\n\n      </ul>\n      <!-- Links -->\n      <ul class=\"navbar-nav ml-auto nav-flex-icons\">\n        <li class=\"nav-item\" style=\"font-size:25px\">\n            <a target=\"_blank\" class=\"nav-link waves-effect waves-light\" href=\"http://www.github.com/lagneshthakur\"><i class=\"fa fa-github\"></i></a>\n        </li>\n        <li class=\"nav-item\" style=\"font-size:25px\">\n            <a target=\"_blank\" class=\"nav-link waves-effect waves-light\" href=\"http://www.linkedin.com/in/lagneshthakur\"><i class=\"fa fa-linkedin\"></i></a>\n        </li>\n        <li class=\"nav-item\" style=\"font-size:25px\">\n            <a class=\"nav-link waves-effect waves-light\" href=\"../../assets/ceev-May2018.pdf\" download><i class=\"fa fa-id-card-o\"></i></a>\n        </li>\n      </ul>\n      \n  </links>\n  <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->"

/***/ }),

/***/ "../../../../../src/app/topnav/topnav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topnav/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopnavComponent = /** @class */ (function () {
    function TopnavComponent() {
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topnav',
            template: __webpack_require__("../../../../../src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map