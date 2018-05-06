webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_pages__ = __webpack_require__("./src/app/app.pages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attributes__ = __webpack_require__("./src/app/attributes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models__ = __webpack_require__("./src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages__ = __webpack_require__("./src/app/pages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__root_root_component__ = __webpack_require__("./src/app/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sections__ = __webpack_require__("./src/app/sections/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// core




// in memory service


// routing

// attributes

// core

// models

// layouts
// import * as Layouts from './layouts';
// pages

// root

// sections

// shared

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__core__["c" /* MemoryService */], {
                    delay: 100, dataEncapsulation: false,
                }),
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_5__app_pages__["a" /* AppPages */],
            ],
            declarations: [
                // Layouts.AuthLayout, Layouts.PublicLayout,
                __WEBPACK_IMPORTED_MODULE_10__pages__["HomeComponent"], __WEBPACK_IMPORTED_MODULE_10__pages__["NotFoundComponent"], __WEBPACK_IMPORTED_MODULE_10__pages__["ProfileComponent"], __WEBPACK_IMPORTED_MODULE_10__pages__["RegionDetailComponent"], __WEBPACK_IMPORTED_MODULE_10__pages__["RegionsComponent"], __WEBPACK_IMPORTED_MODULE_11__root_root_component__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sections__["b" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_12__sections__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared__["a" /* RegionSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__core__["b" /* LoggerComponent */], __WEBPACK_IMPORTED_MODULE_8__core__["d" /* PageDirective */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__models__["d" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__models__["b" /* RegionService */],
                __WEBPACK_IMPORTED_MODULE_7__attributes__["a" /* AuthAttribute */],
                __WEBPACK_IMPORTED_MODULE_8__core__["a" /* Logger */], __WEBPACK_IMPORTED_MODULE_8__core__["e" /* TitleService */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__pages__["HomeComponent"], __WEBPACK_IMPORTED_MODULE_10__pages__["ProfileComponent"], __WEBPACK_IMPORTED_MODULE_10__pages__["RegionDetailComponent"], __WEBPACK_IMPORTED_MODULE_10__pages__["RegionsComponent"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__root_root_component__["a" /* RootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__("./src/app/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppPages = /** @class */ (function () {
    function AppPages() {
    }
    AppPages = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__core_core_module__["a" /* CoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__pages__)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__core_core_module__["a" /* CoreModule */]]
        })
    ], AppPages);
    return AppPages;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__("./src/app/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'region/:id', component: __WEBPACK_IMPORTED_MODULE_2__pages__["RegionDetailComponent"] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_2__pages__["NotFoundComponent"] },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/attributes/auth.attribute.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthAttribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("./src/app/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthAttribute = /** @class */ (function () {
    function AuthAttribute(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthAttribute.prototype.canActivate = function () {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    AuthAttribute = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__models__["d" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthAttribute);
    return AuthAttribute;
}());



/***/ }),

/***/ "./src/app/attributes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_attribute__ = __webpack_require__("./src/app/attributes/auth.attribute.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_attribute__["a"]; });



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_routing__ = __webpack_require__("./src/app/core/core.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__("./src/app/core/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// import { IdentityService, EntityService } from './models';
// import { Logger, LoggerComponent } from './logger';
// import { MemoryService } from './memory';
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function (pages) {
        // PageConfig.pages = pages;
        var config = new __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* PageConfig */](pages);
        return {
            ngModule: CoreModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* PageConfig */], useValue: config }
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_routing__["a" /* CoreRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__pages__["d" /* PageHosterComponent */], __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* PageComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__pages__["f" /* PageService */],
            ],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/core.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__("./src/app/core/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var coreRoutes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__pages__["d" /* PageHosterComponent */], resolve: { pageResolver: __WEBPACK_IMPORTED_MODULE_2__pages__["e" /* PageResolverService */] } },
];
var CoreRouting = /** @class */ (function () {
    function CoreRouting() {
    }
    CoreRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(coreRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__pages__["e" /* PageResolverService */]
            ]
        })
    ], CoreRouting);
    return CoreRouting;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger__ = __webpack_require__("./src/app/core/logger/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__logger__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__logger__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory__ = __webpack_require__("./src/app/core/memory/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__memory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("./src/app/core/models/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__("./src/app/core/pages/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__pages__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__pages__["g"]; });






/***/ }),

/***/ "./src/app/core/logger/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger__ = __webpack_require__("./src/app/core/logger/logger.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__logger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_component__ = __webpack_require__("./src/app/core/logger/logger.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__logger_component__["a"]; });




/***/ }),

/***/ "./src/app/core/logger/logger.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"logger.logs.length\">\n\t<h2>Logs</h2>\n\t<button class=\"clear\" (click)=\"logger.clear()\">clear</button>\n\t<div *ngFor='let log of logger.logs'> {{log}} </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/logger/logger.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\n\nbody {\n  margin: 2em; }\n\nbody,\ninput[text],\nbutton {\n  color: crimson;\n  font-family: Cambria, Georgia; }\n\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  margin-bottom: 12px;\n  color: #888;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\n\nbutton:hover {\n  background-color: #cfd8dc; }\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\n"

/***/ }),

/***/ "./src/app/core/logger/logger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger__ = __webpack_require__("./src/app/core/logger/logger.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggerComponent = /** @class */ (function () {
    function LoggerComponent(logger) {
        this.logger = logger;
    }
    LoggerComponent.prototype.ngOnInit = function () {
    };
    LoggerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logger',
            template: __webpack_require__("./src/app/core/logger/logger.component.html"),
            styles: [__webpack_require__("./src/app/core/logger/logger.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__logger__["a" /* Logger */]])
    ], LoggerComponent);
    return LoggerComponent;
}());



/***/ }),

/***/ "./src/app/core/logger/logger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Logger = /** @class */ (function () {
    function Logger() {
        this.logs = [];
    }
    Logger.prototype.add = function (log) {
        this.logs.push(log);
        // console.log('%c Logger %s ', 'background: #f0f0f0; color: #222', log);
    };
    Logger.prototype.clear = function () {
        this.logs = [];
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Logger);
    return Logger;
}());



/***/ }),

/***/ "./src/app/core/memory/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__memory_service__ = __webpack_require__("./src/app/core/memory/memory.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__memory_service__["a"]; });



/***/ }),

/***/ "./src/app/core/memory/memory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datas__ = __webpack_require__("./src/app/datas/index.ts");

var MemoryService = /** @class */ (function () {
    function MemoryService() {
    }
    MemoryService.prototype.createDb = function () {
        return __WEBPACK_IMPORTED_MODULE_0__datas__;
    };
    /*
    return new ParsedRequestUrl {
            apiBase: string;
            collectionName: string;
            id: string;
            query: Map<string, string[]>;
            resourceUrl: string;
        }
    */
    MemoryService.prototype.parseRequestUrl = function (url, service) {
        // console.log(url, service);
        var parsed = service.parseRequestUrl(url);
        var wildcards = this.getWildcards(url);
        // console.log('wildcards', wildcards);
        if (wildcards.length) {
            // console.log('parsed', parsed, parsed.query);
            if (parsed.collectionName === 'page') {
                var query = parsed.query;
                var slug = void 0;
                query.forEach(function (value, name) {
                    if (name === 'slug') {
                        wildcards.forEach(function (w) {
                            if (value[0].match(w.rx)) {
                                // console.log(w);
                                value[0] = w.slug;
                            }
                        });
                    }
                });
                // console.log(query);
                console.log(url, parsed);
            }
        }
        return parsed;
    };
    MemoryService.prototype.getWildcards = function (url) {
        var pages = __WEBPACK_IMPORTED_MODULE_0__datas__["page"];
        var wildcards = pages.filter(function (page) {
            return page.slug && page.slug.indexOf('?') !== -1;
        }).map(function (page) {
            var slug = page.slug;
            if (slug.indexOf('/') === 0) {
                slug = slug.substr(1);
            }
            var reg = slug.replace('?', '');
            reg = '\/?(' + reg + ')(.*)';
            return { slug: slug, rx: new RegExp(reg), collections: __WEBPACK_IMPORTED_MODULE_0__datas__ };
        });
        return wildcards;
    };
    return MemoryService;
}());



/***/ }),

/***/ "./src/app/core/models/entity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity__ = __webpack_require__("./src/app/core/models/entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__identity_service__ = __webpack_require__("./src/app/core/models/identity.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var EntityService = /** @class */ (function (_super) {
    __extends(EntityService, _super);
    function EntityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntityService.prototype.getFactory = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__entity__["a" /* Entity */]();
    };
    EntityService.prototype.getDetailByName = function (name) {
        var _this = this;
        if (!name.trim()) {
            // if not search term, return empty identity array.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get(this.url + "/?name=" + name).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (x) { return _this.log("found identities matching \"" + name + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('searchTs', [])));
    };
    EntityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
    ], EntityService);
    return EntityService;
}(__WEBPACK_IMPORTED_MODULE_5__identity_service__["a" /* IdentityService */]));



/***/ }),

/***/ "./src/app/core/models/entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());



/***/ }),

/***/ "./src/app/core/models/identity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__("./src/app/core/logger/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__identity__ = __webpack_require__("./src/app/core/models/identity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var IdentityService = /** @class */ (function () {
    function IdentityService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.base = '/api/';
        var type = this.getFactory();
        this.method = type.constructor.name;
        console.log('IdentityService type', this.method);
        this.url = "" + this.base + this.method.toLowerCase();
    }
    IdentityService.prototype.getFactory = function () {
        return new __WEBPACK_IMPORTED_MODULE_5__identity__["a" /* Identity */]();
    };
    IdentityService.prototype.getList = function () {
        var _this = this;
        return this.http.get(this.url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (x) { return _this.log("getList"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getList', [])));
    };
    IdentityService.prototype.getDetailByIdNo404 = function (id) {
        var _this = this;
        return this.http.get(this.url + "/?id=" + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* map */])(function (identities) { return identities[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (x) {
            _this.log("getDetailByIdNo404 " + (x ? "found" : "not found") + " #" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getDetailByIdNo404 #" + id)));
    };
    IdentityService.prototype.getDetailById = function (id) {
        var _this = this;
        return this.http.get(this.url + "/" + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (x) { return _this.log("getDetailById #" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getDetailById #" + id)));
    };
    // crud
    IdentityService.prototype.add = function (identity) {
        var _this = this;
        return this.http.post(this.url, identity, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (identity) { return _this.log("added #" + identity.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('add')));
    };
    IdentityService.prototype.delete = function (identity) {
        var _this = this;
        var id = typeof identity === 'number' ? identity : identity.id;
        return this.http.delete(this.url + "/" + id, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (x) { return _this.log("deleted #" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('delete')));
    };
    IdentityService.prototype.update = function (identity) {
        var _this = this;
        return this.http.put(this.url, identity, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["f" /* tap */])(function (x) { return _this.log("updated #" + identity.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('update')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    IdentityService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    IdentityService.prototype.log = function (log) {
        this.logger.add(this.method + "Service: " + log);
    };
    IdentityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__logger__["a" /* Logger */]])
    ], IdentityService);
    return IdentityService;
}());

/*
import { ReflectiveInjector } from '@angular/core';
import { Headers, Http, HttpModule, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export  class BaseService {

  http:   Http;

  constructor() {
    let injector = ReflectiveInjector.resolveAndCreate([HttpModule, Http]);
    this.http = injector.get(Http);
  }

  get(url) {
    return this.http.get(url).map(res => res.json()).catch(this.handleError);
  }

  delete(url) {
    return this.http.delete(url).map(res => res.json()).catch(this.handleError);
  }

  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  handleError(error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
*/ 


/***/ }),

/***/ "./src/app/core/models/identity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Identity; });
var Identity = /** @class */ (function () {
    function Identity() {
    }
    return Identity;
}());



/***/ }),

/***/ "./src/app/core/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_service__ = __webpack_require__("./src/app/core/models/entity.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__entity_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity__ = __webpack_require__("./src/app/core/models/entity.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_service__ = __webpack_require__("./src/app/core/models/identity.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__identity__ = __webpack_require__("./src/app/core/models/identity.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "./src/app/core/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_hoster_component__ = __webpack_require__("./src/app/core/pages/page-hoster.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__page_hoster_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_resolver_service__ = __webpack_require__("./src/app/core/pages/page-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__page_resolver_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_component__ = __webpack_require__("./src/app/core/pages/page.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__page_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_config__ = __webpack_require__("./src/app/core/pages/page.config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__page_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_directive__ = __webpack_require__("./src/app/core/pages/page.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__page_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_service__ = __webpack_require__("./src/app/core/pages/page.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__page_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page__ = __webpack_require__("./src/app/core/pages/page.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__title_service__ = __webpack_require__("./src/app/core/pages/title.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__title_service__["a"]; });










/***/ }),

/***/ "./src/app/core/pages/page-hoster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHosterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_directive__ = __webpack_require__("./src/app/core/pages/page.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHosterComponent = /** @class */ (function () {
    function PageHosterComponent(route, componentFactoryResolver) {
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    PageHosterComponent.prototype.ngOnInit = function () {
        this.resolvePage();
    };
    PageHosterComponent.prototype.resolvePage = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            var pageResolver = data.pageResolver;
            // resolve component
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(pageResolver.component);
            // clear host directive
            _this.hostPageRef.clear();
            // create component
            var componentRef = _this.hostPageRef.createComponent(componentFactory);
            componentRef.changeDetectorRef.detectChanges();
            var instance = componentRef.instance;
            instance.page = pageResolver.page;
            // console.log('pageResolver.page', pageResolver.page);
            // passing page data
            // (<PageComponent>componentRef.instance).page = pageResolver.page;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__page_directive__["a" /* PageDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__page_directive__["a" /* PageDirective */])
    ], PageHosterComponent.prototype, "hostPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('hostPage', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */] }),
        __metadata("design:type", Object)
    ], PageHosterComponent.prototype, "hostPageRef", void 0);
    PageHosterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hoster',
            template: "<ng-template #hostPage>Your View should load here..</ng-template>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], PageHosterComponent);
    return PageHosterComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_resolver__ = __webpack_require__("./src/app/core/pages/page-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_config__ = __webpack_require__("./src/app/core/pages/page.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_service__ = __webpack_require__("./src/app/core/pages/page.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PageResolverService = /** @class */ (function () {
    function PageResolverService(pageService, router, config) {
        this.pageService = pageService;
        this.router = router;
        this.config = config;
    }
    PageResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var slug = route.url.join('/');
        console.log('PageResolverService', slug);
        return this.pageService.getPageBySlug(slug)
            .take(1)
            .map(function (pages) {
            if (pages && pages.length) {
                // console.log('PageResolverService.page', pages[0]);
                return new __WEBPACK_IMPORTED_MODULE_5__page_resolver__["a" /* PageResolver */](pages[0], _this.config);
            }
            else {
                _this.router.navigate(['/not-found']);
                return null;
            }
        });
    };
    PageResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__page_service__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__page_config__["a" /* PageConfig */]])
    ], PageResolverService);
    return PageResolverService;
}());



/***/ }),

/***/ "./src/app/core/pages/page-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_component__ = __webpack_require__("./src/app/core/pages/page.component.ts");

var PageResolver = /** @class */ (function () {
    function PageResolver(page, config) {
        this.page = page;
        this.component = __WEBPACK_IMPORTED_MODULE_0__page_component__["a" /* PageComponent */];
        // console.log('config', config);
        if (page.component && config) {
            this.component = config.pages[page.component];
        }
        // console.log(page.component, this.component);
    }
    return PageResolver;
}());



/***/ }),

/***/ "./src/app/core/pages/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__("./src/app/core/pages/page.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageComponent = /** @class */ (function () {
    function PageComponent(route) {
        this.route = route;
        this.attrClass = 'page';
        this.unsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.getPage();
        // this.titleService.setTitle();
    }
    PageComponent.prototype.getPage = function () {
        var _this = this;
        if (this.route) {
            this.route.data
                .takeUntil(this.unsubscribe) // before any subscribe
                .subscribe(function (data) {
                _this.page = (data.pageResolver ? data.pageResolver.page : null);
            });
        }
    };
    PageComponent.prototype.getId = function () {
        return +this.route.snapshot.paramMap.get('id') || (this.page ? this.page.id : 0);
    };
    PageComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__page__["a" /* Page */])
    ], PageComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], PageComponent.prototype, "attrClass", void 0);
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page',
            template: "<h1>I'm a default view!</h1>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/core/pages/page.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageConfig; });
var PageConfig = /** @class */ (function () {
    function PageConfig(pages) {
        this.pages = pages;
    }
    return PageConfig;
}());



/***/ }),

/***/ "./src/app/core/pages/page.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageDirective = /** @class */ (function () {
    function PageDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    PageDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[host-page]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], PageDirective);
    return PageDirective;
}());



/***/ }),

/***/ "./src/app/core/pages/page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("./src/app/core/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__("./src/app/core/pages/page.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageService = /** @class */ (function (_super) {
    __extends(PageService, _super);
    function PageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageService.prototype.getFactory = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__page__["a" /* Page */]();
    };
    PageService.prototype.getPageBySlug = function (slug) {
        var _this = this;
        /*
        if (!slug.trim()) {
            return of(null); // returning a null observable
        }
        */
        return this.http.get(this.url + "/?slug=" + slug).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["f" /* tap */])(function (x) { return _this.log("found pages matching \"" + slug + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* catchError */])(this.handleError('getPageBySlug', [])));
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PageService);
    return PageService;
}(__WEBPACK_IMPORTED_MODULE_2__models__["a" /* EntityService */]));



/***/ }),

/***/ "./src/app/core/pages/page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/core/pages/title.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__("./src/app/core/logger/logger.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TitleService = /** @class */ (function () {
    function TitleService(activatedRoute, router, title, logger) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = title;
        this.logger = logger;
    }
    TitleService.prototype.setTitle = function () {
        var _this = this;
        return this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function () {
            var child = _this.activatedRoute.firstChild;
            while (child.firstChild) {
                child = child.firstChild;
            }
            if (child.snapshot.data && child.snapshot.data['title']) {
                return child.snapshot;
            }
            else {
                return null;
            }
        }).subscribe(function (snapshot) {
            if (snapshot) {
                _this.title.setTitle(snapshot.data.title);
                _this.log("TitleService.setTitle " + snapshot.data.title + " of route " + snapshot);
            }
        });
    };
    TitleService.prototype.log = function (log) {
        this.logger.add('TitleService: ' + log);
    };
    TitleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* Logger */]])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/datas/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page__ = __webpack_require__("./src/app/datas/page.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "page", function() { return __WEBPACK_IMPORTED_MODULE_0__page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__region__ = __webpack_require__("./src/app/datas/region.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "region", function() { return __WEBPACK_IMPORTED_MODULE_1__region__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./src/app/datas/user.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "user", function() { return __WEBPACK_IMPORTED_MODULE_2__user__["a"]; });





/***/ }),

/***/ "./src/app/datas/page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return page; });
var page = [
    { id: 1, name: 'Homepage', title: 'Homepage', description: '', slug: '/', component: 'HomeComponent' },
    { id: 2, name: 'Regions', title: 'Regions', description: '', slug: '/regions', component: 'RegionsComponent' },
    { id: 3, name: 'Profile', title: 'Profile', description: '', slug: '/profile', component: 'ProfileComponent' },
    { id: 4, name: 'Region Detail', title: 'Region Detail', description: '', slug: '/campania', component: 'RegionDetailComponent' },
];


/***/ }),

/***/ "./src/app/datas/region.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return region; });
var region = [
    { id: 1, name: 'Abruzzo' },
    { id: 2, name: 'Basilicata' },
    { id: 3, name: 'Calabria' },
    { id: 4, name: 'Campania' },
    { id: 5, name: 'Emilia-Romagna' },
    { id: 6, name: 'Friuli-Venezia Giulia' },
    { id: 7, name: 'Lazio' },
    { id: 8, name: 'Liguria' },
    { id: 9, name: 'Lombardia' },
    { id: 10, name: 'Marche' },
    { id: 11, name: 'Molise' },
    { id: 12, name: 'Piemonte' },
    { id: 13, name: 'Puglia' },
    { id: 14, name: 'Sardegna' },
    { id: 15, name: 'Sicilia' },
    { id: 16, name: 'Toscana' },
    { id: 17, name: 'Trentino-Alto Adige' },
    { id: 18, name: 'Umbria' },
    { id: 19, name: 'Valle d\'Aosta' },
    { id: 20, name: 'Veneto' },
];


/***/ }),

/***/ "./src/app/datas/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });
var user = [
    { id: 1, name: 'Frank', password: '***' },
    { id: 2, name: 'Jim', password: '***' },
    { id: 3, name: 'Jhon', password: '***' },
    { id: 4, name: 'Paul', password: '***' },
];


/***/ }),

/***/ "./src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__region_service__ = __webpack_require__("./src/app/models/region.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__region_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__region__ = __webpack_require__("./src/app/models/region.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__region__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/models/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__user__["a"]; });






/***/ }),

/***/ "./src/app/models/region.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models__ = __webpack_require__("./src/app/core/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__region__ = __webpack_require__("./src/app/models/region.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegionService = /** @class */ (function (_super) {
    __extends(RegionService, _super);
    function RegionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegionService.prototype.getFactory = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__region__["a" /* Region */]();
    };
    RegionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], RegionService);
    return RegionService;
}(__WEBPACK_IMPORTED_MODULE_1__core_models__["a" /* EntityService */]));



/***/ }),

/***/ "./src/app/models/region.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Region; });
var Region = /** @class */ (function () {
    function Region() {
    }
    return Region;
}());



/***/ }),

/***/ "./src/app/models/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models__ = __webpack_require__("./src/app/core/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("./src/app/models/user.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserService.prototype.getFactory = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    };
    UserService.prototype.isLoggedIn = function () {
        return this.getDetailById(1);
    };
    UserService.prototype.tryLogin = function (password) {
        var _this = this;
        if (!password.trim()) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/users/?password=" + password).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["f" /* tap */])(function (x) { return _this.log("found users matching \"" + password + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('searchUsers', [])));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_3__core_models__["a" /* EntityService */]));



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Regions</h3>\n<div class=\"grid grid-pad\">\n\t<a *ngFor=\"let region of regions\" class=\"col-1-4\" routerLink=\"/region/{{region.id}}\">\n\t\t<div class=\"module region\">\n\t\t\t<h4>{{region.name}}</h4>\n\t\t</div>\n\t</a>\n</div>\n\n<app-region-search></app-region-search>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "/* HomeComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px; }\n[class*='col-']:last-of-type {\n    padding-right: 0; }\na {\n  text-decoration: none; }\n*,\n*:after,\n*:before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\nh3 {\n  text-align: center;\n  margin-bottom: 0; }\nh4 {\n  position: relative; }\n.grid {\n  margin: 0; }\n.col-1-4 {\n  width: 25%; }\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px; }\n.module:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #607d8b; }\n.grid-pad {\n  padding: 10px 0; }\n.grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px; }\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; } }\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0; }\n  .module {\n    min-width: 60px; } }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pages__ = __webpack_require__("./src/app/core/pages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("./src/app/models/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(route, regionService) {
        var _this = _super.call(this, route) || this;
        _this.regionService = regionService;
        _this.regions = [];
        _this.attrClass = 'home';
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getRegions();
    };
    HomeComponent.prototype.getRegions = function () {
        var _this = this;
        this.regionService.getList()
            .takeUntil(this.unsubscribe)
            .subscribe(function (regions) { return _this.regions = regions.slice(1, 5); });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'view-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__models__["b" /* RegionService */]])
    ], HomeComponent);
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core_pages__["a" /* PageComponent */]));



/***/ }),

/***/ "./src/app/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__ = __webpack_require__("./src/app/pages/not-found/not-found.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("./src/app/pages/profile/profile.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__region_detail_region_detail_component__ = __webpack_require__("./src/app/pages/region-detail/region-detail.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RegionDetailComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__region_detail_region_detail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regions_regions_component__ = __webpack_require__("./src/app/pages/regions/regions.component.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__regions_regions_component__["a"]; });







/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Not Found</h3>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'view-not-found',
            template: __webpack_require__("./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/pages/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2>{{ user.name | uppercase }} Details</h2>\n\t<div><span>id: </span>{{user.id}}</div>\n\t<div>\n\t\t<label>name:\n\t\t  <input [(ngModel)]=\"user.name\" placeholder=\"user\"/>\n\t\t</label>\n\t</div>\n\t<button (click)=\"save()\">save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = "/* ProfileComponent's private CSS styles */\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pages__ = __webpack_require__("./src/app/core/pages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("./src/app/models/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(route, userService) {
        var _this = _super.call(this, route) || this;
        _this.userService = userService;
        _this.attrClass = 'profile';
        return _this;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getDetailById(this.getId())
            .takeUntil(this.unsubscribe)
            .subscribe(function (user) { return _this.user = user; });
    };
    ProfileComponent.prototype.save = function () {
        this.userService.update(this.user)
            .takeUntil(this.unsubscribe)
            .subscribe(function () {
            console.log('saved');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models__["c" /* User */])
    ], ProfileComponent.prototype, "user", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'view-profile',
            template: __webpack_require__("./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__models__["d" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core_pages__["a" /* PageComponent */]));



/***/ }),

/***/ "./src/app/pages/region-detail/region-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"region\">\n\t<h2>{{ region.name | uppercase }} Details</h2>\n\t<div><span>id: </span>{{region.id}}</div>\n\t<div>\n\t\t<label>name:\n      <input [(ngModel)]=\"region.name\" placeholder=\"name\"/>\n    </label>\n\t</div>\n\t<button (click)=\"goBack()\">go back</button>\n\t<button (click)=\"save()\">save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/region-detail/region-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/* RegionDetailComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold; }\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n    background-color: #cfd8dc; }\nbutton:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto; }\n"

/***/ }),

/***/ "./src/app/pages/region-detail/region-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pages__ = __webpack_require__("./src/app/core/pages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("./src/app/models/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegionDetailComponent = /** @class */ (function (_super) {
    __extends(RegionDetailComponent, _super);
    function RegionDetailComponent(route, location, regionService) {
        var _this = _super.call(this, route) || this;
        _this.location = location;
        _this.regionService = regionService;
        return _this;
    }
    RegionDetailComponent.prototype.ngOnInit = function () {
        // console.log(`RegionDetailComponent.OnInit ${id} ${this.page}`);
        this.getRegion();
    };
    RegionDetailComponent.prototype.getRegion = function () {
        var _this = this;
        this.regionService.getDetailById(this.getId())
            .takeUntil(this.unsubscribe)
            .subscribe(function (region) { return _this.region = region; });
    };
    RegionDetailComponent.prototype.save = function () {
        var _this = this;
        this.regionService.update(this.region)
            .takeUntil(this.unsubscribe)
            .subscribe(function () { return _this.goBack(); });
    };
    RegionDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models__["a" /* Region */])
    ], RegionDetailComponent.prototype, "region", void 0);
    RegionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'view-region-detail',
            template: __webpack_require__("./src/app/pages/region-detail/region-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/region-detail/region-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__models__["b" /* RegionService */]])
    ], RegionDetailComponent);
    return RegionDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core_pages__["a" /* PageComponent */]));



/***/ }),

/***/ "./src/app/pages/regions/regions.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Regions</h2>\n\n<div>\n\t<label>Region name:\n    <input #regionName />\n  </label>\n\t<!-- (click) passes input value to add() and then clears the input -->\n\t<button (click)=\"add(regionName.value); regionName.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"regions\">\n\t<li *ngFor=\"let region of regions\">\n\t\t<a routerLink=\"/region/{{region.id}}\">\n      <span class=\"badge\">{{region.id}}</span> {{region.name}}\n    </a>\n\t\t<button class=\"delete\" title=\"delete region\" (click)=\"delete(region)\">x</button>\n\t</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/pages/regions/regions.component.scss":
/***/ (function(module, exports) {

module.exports = "/* RegionsComponent's private CSS styles */\n.regions {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.regions li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px; }\n.regions li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em; }\n.regions a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px; }\n.regions a:hover {\n      color: #607D8B; }\n.regions .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n    background-color: #cfd8dc; }\nbutton.delete {\n    position: relative;\n    left: 194px;\n    top: -32px;\n    background-color: gray !important;\n    color: white; }\n"

/***/ }),

/***/ "./src/app/pages/regions/regions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pages__ = __webpack_require__("./src/app/core/pages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("./src/app/models/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegionsComponent = /** @class */ (function (_super) {
    __extends(RegionsComponent, _super);
    function RegionsComponent(route, regionService) {
        var _this = _super.call(this, route) || this;
        _this.regionService = regionService;
        return _this;
    }
    RegionsComponent.prototype.ngOnInit = function () {
        this.getRegions();
    };
    RegionsComponent.prototype.getRegions = function () {
        var _this = this;
        this.regionService.getList()
            .takeUntil(this.unsubscribe)
            .subscribe(function (regions) { return _this.regions = regions; });
    };
    RegionsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.regionService.add({ name: name })
            .takeUntil(this.unsubscribe)
            .subscribe(function (region) {
            _this.regions.push(region);
        });
    };
    RegionsComponent.prototype.delete = function (region) {
        this.regions = this.regions.filter(function (h) { return h !== region; });
        this.regionService.delete(region)
            .takeUntil(this.unsubscribe)
            .subscribe();
    };
    RegionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'view-regions',
            template: __webpack_require__("./src/app/pages/regions/regions.component.html"),
            styles: [__webpack_require__("./src/app/pages/regions/regions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__models__["b" /* RegionService */]])
    ], RegionsComponent);
    return RegionsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core_pages__["a" /* PageComponent */]));



/***/ }),

/***/ "./src/app/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<section-header></section-header>\n<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>\n<section-footer></section-footer>\n"

/***/ }),

/***/ "./src/app/root/root.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/root/root.component.html"),
            styles: [__webpack_require__("./src/app/root/root.component.scss")]
        })
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/sections/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n\t<app-logger></app-logger>\n</footer>\n"

/***/ }),

/***/ "./src/app/sections/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'section-footer',
            template: __webpack_require__("./src/app/sections/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/sections/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/sections/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t\t<img src=\"/assets/bootstrap-solid.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> <span>Bootstrap</span>\n\t\t</a>\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n\t\t    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/\">Home</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/regions\">Regions</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\" *ngFor=\"let page of pages\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"page.slug\">{{page.name}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<form class=\"form-inline\">\n\t\t\t\t<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n\t\t\t\t<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n\t\t\t</form>\n\t\t</div>\n\t</nav>\n</header>\n"

/***/ }),

/***/ "./src/app/sections/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'section-header',
            template: __webpack_require__("./src/app/sections/header/header.component.html"),
            styles: [__webpack_require__("./src/app/sections/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/sections/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__ = __webpack_require__("./src/app/sections/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("./src/app/sections/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__region_search_region_search_component__ = __webpack_require__("./src/app/shared/region-search/region-search.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__region_search_region_search_component__["a"]; });



/***/ }),

/***/ "./src/app/shared/region-search/region-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n\t<h4>Region Search</h4>\n\t<form class=\"form-inline\">\n\t\t<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" #searchBox (keyup)=\"search(searchBox.value)\">\n\t\t<!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\n\t</form>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item list-group-item-action\" *ngFor=\"let region of regions$ | async\" routerLink=\"/region/{{region.id}}\">\n\t\t\t<span>{{region.name}}</span>\n\t\t</li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/region-search/region-search.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/region-search/region-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__("./src/app/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegionSearchComponent = /** @class */ (function () {
    function RegionSearchComponent(regionService) {
        this.regionService = regionService;
        this.searchByName = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    RegionSearchComponent.prototype.search = function (name) {
        this.searchByName.next(name);
    };
    RegionSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regions$ = this.searchByName.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* switchMap */])(function (name) { return _this.regionService.getDetailByName(name); }));
    };
    RegionSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-region-search',
            template: __webpack_require__("./src/app/shared/region-search/region-search.component.html"),
            styles: [__webpack_require__("./src/app/shared/region-search/region-search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__models__["b" /* RegionService */]])
    ], RegionSearchComponent);
    return RegionSearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map