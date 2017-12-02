webpackJsonp(["main"],{

/***/ "../../../../../src/app/accordion/accordion-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel\" [attr.accordion-child-id]=\"id\" [attr.aria-expanded]=\"isExpanded\">\n  <div class=\"cbp-panel-heading\" role=\"tab\">\n    <a (click)=\"toggleHeading()\" tabindex=\"1\" class=\"cbp-panel-title\">\n      <i class=\"panel-heading-indicator fa fa-fw fa-angle-right\" [@indicatorAnimation]=\"getExpandedState()\"></i>{{ panelTitle }}\n    </a>\n  </div>\n  <div [@bodyExpansion]=\"getExpandedState()\" class=\"cbp-panel-body\">\n   <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/accordion/accordion-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.cbp-accordion .panel[accordion-child-id=\"1\"] {\n  border-top: none; }\n\n.cbp-accordion .panel {\n  border-top: 1px solid #eeeeee; }\n\n.cbp-panel-body {\n  padding: 15px; }\n\n.cbp-panel-title {\n  font-size: 15px;\n  padding: 2px 5px 2px 0;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  font-weight: 500; }\n  .cbp-panel-title:focus {\n    outline: 1px dotted #1461ab !important;\n    border-color: transparent; }\n\n.cbp-panel-heading {\n  padding: 10px 15px; }\n  .cbp-panel-heading:hover {\n    text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accordion/accordion-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EXPANSION_PANEL_ANIMATION_TIMING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAccordionPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_component__ = __webpack_require__("../../../../../src/app/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
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



var EXPANSION_PANEL_ANIMATION_TIMING = '250ms cubic-bezier(0.4,0.0,0.2,1)';
var CBPAccordionPanelComponent = /** @class */ (function () {
    function CBPAccordionPanelComponent(parentAccordion) {
        this.isExpanded = true;
        this.id = 0;
        this.id = parentAccordion.getNextChildId();
    }
    CBPAccordionPanelComponent.prototype.ngOnInit = function () {
    };
    CBPAccordionPanelComponent.prototype.toggleHeading = function () {
        this.isExpanded = !this.isExpanded;
    };
    CBPAccordionPanelComponent.prototype.getExpandedState = function () {
        return this.isExpanded ? 'expanded' : 'collapsed';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CBPAccordionPanelComponent.prototype, "panelTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CBPAccordionPanelComponent.prototype, "isExpanded", void 0);
    CBPAccordionPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-accordion-panel',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/accordion/accordion-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accordion/accordion-panel.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('bodyExpansion', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '0px', visibility: 'hidden', opacity: '0', 'padding-top': '0', 'padding-bottom': '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING)),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('indicatorAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'rotate(90deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(EXPANSION_PANEL_ANIMATION_TIMING)),
                ])
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Host */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordion_component__["a" /* CBPAccordionComponent */]])
    ], CBPAccordionPanelComponent);
    return CBPAccordionPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cbp-accordion\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/accordion/accordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAccordionComponent; });
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

var CBPAccordionComponent = /** @class */ (function () {
    function CBPAccordionComponent() {
        this.nextChildId = 0;
    }
    CBPAccordionComponent.prototype.ngOnInit = function () {
    };
    CBPAccordionComponent.prototype.getNextChildId = function () {
        return (++this.nextChildId);
    };
    CBPAccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-accordion',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/accordion/accordion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accordion/accordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CBPAccordionComponent);
    return CBPAccordionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/accordion/accordion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAccordionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_component__ = __webpack_require__("../../../../../src/app/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_panel_component__ = __webpack_require__("../../../../../src/app/accordion/accordion-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CBPAccordionModule = /** @class */ (function () {
    function CBPAccordionModule() {
    }
    CBPAccordionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* CBPAccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_panel_component__["a" /* CBPAccordionPanelComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__accordion_component__["a" /* CBPAccordionComponent */], __WEBPACK_IMPORTED_MODULE_3__accordion_panel_component__["a" /* CBPAccordionPanelComponent */]
            ]
        })
    ], CBPAccordionModule);
    return CBPAccordionModule;
}());



/***/ }),

/***/ "../../../../../src/app/accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_component__ = __webpack_require__("../../../../../src/app/accordion/accordion.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_panel_component__ = __webpack_require__("../../../../../src/app/accordion/accordion-panel.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_module__ = __webpack_require__("../../../../../src/app/accordion/accordion.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_module__["a"]; });





/***/ }),

/***/ "../../../../../src/app/applications/applications-menu/applications-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cbp-applications-navitem\" [matMenuTriggerFor]=\"cbpMenu\" #cbpMenuTrigger=\"matMenuTrigger\">\n  <ng-template [ngTemplateOutlet]=\"application\"></ng-template>\n</div>\n<div class=\"cbp-applications-navitem\" *ngIf=\"menuDataLoaded && applicationsData.lastRetrieved !== null && !isXS\">\n\n</div>\n<div class=\"applications-expansion-panel inverse\" *ngIf=\"isApplicationsExpanded  && menuDataLoaded\">\n  <ng-template [ngTemplateOutlet]=\"applicationsPanel\" ></ng-template>\n</div>\n\n<mat-menu #cbpMenu=\"matMenu\" yPosition=\"above\" xPosition=\"after\" [overlapTrigger]=\"false\" class=\"cbp-menu-with-category applications-expansion-panel\" >\n  <ng-template [ngTemplateOutlet]=\"applicationsPanel\"></ng-template>\n</mat-menu>\n\n\n<ng-template #applicationsPanel>\n  <ng-container *ngIf=\"applicationsData\">\n\n    <div class=\"cbp-menu-item-category\" *ngIf=\"applicationsData.recents?.length > 0\">Recent Apps</div>\n    <div class=\"mat-menu-item\" *ngFor=\"let app of applicationsData.recents\">\n      <div class=\"cbp-applications-remove-icon\"><mat-icon  fontSet=\"fontawesome\" fontIcon=\"fa-times\" (click)=\"removeFromRecent(app, $event)\" fxFlexAlign=\"center\"></mat-icon></div>\n      <a class=\"cbp-applications-link\"  title=\"{{app.description}}\" href=\"{{app.href}}\" fxFlex=\"auto\" >\n        {{ app.name }}\n      </a>\n    </div>\n\n    <div *ngIf=\"applicationsData.recents?.length > 0\" class=\"mat-divider\"></div>\n\n    <div class=\"cbp-menu-item-category\" *ngIf=\"applicationsData.favorites?.length > 0\">Favorite Apps</div>\n    <div class=\"mat-menu-item\" *ngFor=\"let app of applicationsData.favorites\">\n      <a class=\"cbp-applications-link\"  title=\"{{app.description}}\" href=\"{{app.href}}\" fxFlex=\"auto\" >\n        {{ app.name }}\n      </a>\n    </div>\n\n\n    <div class=\"mat-divider\" *ngIf=\"applicationsData.favorites?.length > 0\"></div>\n\n    <cbp-applications-search></cbp-applications-search>\n\n\n\n    <a class=\"mat-menu-item cbp-applications-refresh\" (click)=\"reloadApplicationsData($event)\">\n      <div>Refresh</div>\n    </a>\n    <div class=\"cbp-applications-last-updated\" (click)=\"stopPropogation($event)\">\n      <small>Updated {{ applicationsData.lastRetrieved | datetime }}</small>\n    </div>\n  </ng-container>\n\n</ng-template>\n<ng-template #application>\n  <div class=\"cbp-current-application\" fxShow=\"false\" fxShow.gt-xs fxShow.lt-sm fxLayout=\"column\" fxLayoutAlign=\"center start\" >\n    <div *ngIf=\"applicationsDataLoading\" class=\"cbp-menu-loading\" style=\"color: white\">\n      <cbp-loading></cbp-loading>\n    </div>\n    <div *ngIf=\"menuDataLoaded && applicationsData.currentApp && !applicationsDataLoading\" class=\"cbp-current-application-name-container\" (click)=\"toggleApplicationsMenu($event)\">\n      <span class=\"cbp-current-application-name\">{{ applicationsData.currentApp.name }}</span><span *ngIf=\"applicationsData.currentApp.version\"> - {{ applicationsData.currentApp.version }}</span>\n      <mat-icon *ngIf=\"applicationsData.lastRetrieved\" fontSet=\"fontawesome\" fontIcon=\"fa-caret-down\"></mat-icon>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/applications/applications-menu/applications-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.cbp-header .cbp-current-application {\n  height: 50px; }\n\n.cbp-header .cbp-current-application-name {\n  line-height: 1em; }\n  .cbp-header .cbp-current-application-name .mat-icon {\n    margin-left: 5px;\n    height: 14px; }\n\n.cbp-header .cbp-current-application-version {\n  line-height: 1.42857143;\n  font-size: 12px;\n  font-style: italic; }\n\n.cbp-menu-item-category {\n  margin-left: 10px;\n  pointer-events: none;\n  padding: 5px 5px; }\n\n.mat-menu-item {\n  cursor: inherit; }\n\n.mat-menu-item .cbp-applications-link {\n  text-decoration: none;\n  color: #333333;\n  overflow: inherit;\n  text-overflow: inherit; }\n  .mat-menu-item .cbp-applications-link:hover, .mat-menu-item .cbp-applications-link:focus {\n    text-decoration: underline; }\n\n.mat-menu-item .cbp-applications-remove-icon .mat-icon {\n  vertical-align: inherit; }\n  .mat-menu-item .cbp-applications-remove-icon .mat-icon:hover, .mat-menu-item .cbp-applications-remove-icon .mat-icon:focus {\n    color: #222222;\n    cursor: pointer; }\n\n.cbp-applications-refresh {\n  cursor: pointer; }\n\n.cbp-applications-last-updated {\n  float: left;\n  padding: 0 16px 6px;\n  color: #aaaaaa;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.applications-expansion-panel.inverse .cbp-applications-refresh,\n.applications-expansion-panel.inverse .cbp-applications-link,\n.applications-expansion-panel.inverse .cbp-applications-remove-icon .mat-icon {\n  color: #fff !important; }\n\n.applications-expansion-panel {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow-x: hidden; }\n\n.cbp-menu-item-category {\n  margin-left: 10px;\n  pointer-events: none;\n  padding: 5px 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/applications/applications-menu/applications-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPApplicationsMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cbp_applications_service__ = __webpack_require__("../../../../../src/app/applications/cbp-applications-service.ts");
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




var CBPApplicationsMenuComponent = /** @class */ (function () {
    function CBPApplicationsMenuComponent(applicationsService, media) {
        this.applicationsService = applicationsService;
        this.media = media;
        this.menuDataLoaded = false;
        this.applicationsDataLoading = true;
        this.isApplicationsExpanded = false;
        this.isXS = false;
    }
    CBPApplicationsMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.media) {
            this.mediaSubscription = this.media.subscribe(function (change) {
                if (change) {
                    if (change.mqAlias !== 'xs') {
                        _this._isToolbarExpanded = false;
                        _this.isApplicationsExpanded = false;
                        setTimeout(function () {
                            _this.isXS = false;
                        });
                    }
                    else {
                        if (_this.cbpMenuTrigger && _this.cbpMenuTrigger.menu) {
                            _this.isApplicationsExpanded = false;
                            _this.cbpMenuTrigger.closeMenu();
                        }
                        setTimeout(function () {
                            _this.isXS = true;
                        });
                    }
                }
            });
        }
        if (this.applicationsService) {
            this.applicationsServiceSubscription = this.applicationsService.getApplicationsData().subscribe(function (data) {
                _this.applicationsData = data;
                if (data) {
                    _this.menuDataLoaded = true;
                    _this.applicationsDataLoading = false;
                }
            }, function (err) {
                _this.error = err;
                _this.applicationsDataLoading = false;
            });
        }
    };
    CBPApplicationsMenuComponent.prototype.removeFromRecent = function (app, $event) {
        this.applicationsService.removeRecentApplication(app);
        $event.stopPropagation();
    };
    CBPApplicationsMenuComponent.prototype.ngOnDestroy = function () {
        console.log('ngDestroy Called');
        if (this.applicationsServiceSubscription) {
            this.applicationsServiceSubscription.unsubscribe();
        }
        if (this.mediaSubscription) {
            this.mediaSubscription.unsubscribe();
        }
    };
    CBPApplicationsMenuComponent.prototype.reloadApplicationsData = function ($event) {
        this.applicationsService.refresh();
        this.applicationsDataLoading = true;
        $event.stopPropagation();
    };
    CBPApplicationsMenuComponent.prototype.toggleApplicationsMenu = function ($event) {
        if (this.menuDataLoaded && this._isToolbarExpanded) {
            this.isApplicationsExpanded = !this.isApplicationsExpanded;
            $event.stopPropagation();
        }
    };
    Object.defineProperty(CBPApplicationsMenuComponent.prototype, "toolbarExpanded", {
        get: function () { return this._isToolbarExpanded; },
        set: function (expanded) {
            this._isToolbarExpanded = expanded;
        },
        enumerable: true,
        configurable: true
    });
    // TODO find a way to share this
    CBPApplicationsMenuComponent.prototype.stopPropogation = function ($event) {
        $event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cbpMenuTrigger'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatMenuTrigger */])
    ], CBPApplicationsMenuComponent.prototype, "cbpMenuTrigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CBPApplicationsMenuComponent.prototype, "toolbarExpanded", null);
    CBPApplicationsMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-applications-menu',
            template: __webpack_require__("../../../../../src/app/applications/applications-menu/applications-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/applications/applications-menu/applications-menu.component.scss")],
            entryComponents: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__cbp_applications_service__["d" /* CBP_APPLICATIONS_SERVICE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cbp_applications_service__["c" /* CBPApplicationsService */], __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]])
    ], CBPApplicationsMenuComponent);
    return CBPApplicationsMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/applications/applications-search/applications-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mat-menu-item cbp-app-search\">\n  <mat-form-field (click)=\"stopPropogation($event)\" floatPlaceholder=\"never\" color=\"default\">\n      <input type=\"text\" matInput aria-label=\"Search App\" [formControl]=\"searchTokenControl\" name=\"searchToken\"  placeholder=\"Search ...\"\n             class=\"cbp-applications-search-input\"/>\n  </mat-form-field>\n</form>\n<ng-container *ngIf=\"searchResults\">\n  <div class=\"mat-menu-item cbp-app-search-results\" *ngFor=\"let app of searchResultsApplications | async\">\n    <a class=\"cbp-applications-link\" title=\"{{app.description}}\" href=\"{{app.href}}\" fxFlex=\"auto\" >\n      {{ app.name }}\n    </a>\n  </div>\n  <div class=\"mat-divider\" *ngIf=\"searchResults && searchResults.length > 0\"></div>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/applications/applications-search/applications-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.mat-menu-item .cbp-applications-link {\n  text-decoration: none;\n  color: #333333;\n  overflow: inherit;\n  text-overflow: inherit; }\n  .mat-menu-item .cbp-applications-link:hover, .mat-menu-item .cbp-applications-link:focus {\n    text-decoration: underline; }\n  .inverse .mat-menu-item .cbp-applications-link {\n    color: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/applications/applications-search/applications-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPApplicationsSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_applications_service__ = __webpack_require__("../../../../../src/app/applications/cbp-applications-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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





var CBPApplicationsSearchComponent = /** @class */ (function () {
    function CBPApplicationsSearchComponent(applicationsService) {
        this.applicationsService = applicationsService;
        this.searchTokenControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.searchResults = [];
    }
    CBPApplicationsSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchResultsApplications = this.searchTokenControl.valueChanges
            .startWith(null)
            .map(function (token) { return _this._search(token); });
    };
    CBPApplicationsSearchComponent.prototype._search = function (token) {
        if (token) {
            var allResults = this.applicationsService.search(token);
            if (allResults) {
                this.searchResults = allResults.filter(function (val, index) { if (val) {
                    return index < 5;
                } });
            }
        }
        else {
            this.searchResults.length = 0;
        }
        return this.searchResults;
    };
    CBPApplicationsSearchComponent.prototype.stopPropogation = function ($event) {
        $event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CBPApplicationsSearchComponent.prototype, "isApplicationsExpanded", void 0);
    CBPApplicationsSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-applications-search',
            template: __webpack_require__("../../../../../src/app/applications/applications-search/applications-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/applications/applications-search/applications-search.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__cbp_applications_service__["d" /* CBP_APPLICATIONS_SERVICE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cbp_applications_service__["c" /* CBPApplicationsService */]])
    ], CBPApplicationsSearchComponent);
    return CBPApplicationsSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/applications/applications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPApplicationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applications_menu_applications_menu_component__ = __webpack_require__("../../../../../src/app/applications/applications-menu/applications-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_progress_module__ = __webpack_require__("../../../../../src/app/progress/progress.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__applications_search_applications_search_component__ = __webpack_require__("../../../../../src/app/applications/applications-search/applications-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CBPApplicationsModule = /** @class */ (function () {
    function CBPApplicationsModule() {
    }
    CBPApplicationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_progress_module__["a" /* CBPProgressModule */], __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CBPPipesModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__applications_menu_applications_menu_component__["a" /* CBPApplicationsMenuComponent */], __WEBPACK_IMPORTED_MODULE_8__applications_search_applications_search_component__["a" /* CBPApplicationsSearchComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__applications_menu_applications_menu_component__["a" /* CBPApplicationsMenuComponent */], __WEBPACK_IMPORTED_MODULE_8__applications_search_applications_search_component__["a" /* CBPApplicationsSearchComponent */]]
        })
    ], CBPApplicationsModule);
    return CBPApplicationsModule;
}());



/***/ }),

/***/ "../../../../../src/app/applications/cbp-applications-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CBPApplicationsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CBPApplicationsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CBP_APPLICATIONS_SERVICE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");


/**
 * Each application in the drop down and this application to refer by name/id etc.
 */
var CBPApplication = /** @class */ (function () {
    function CBPApplication(name, href) {
        this.name = name;
        this.href = href;
    }
    return CBPApplication;
}());

/**
 * Models list of applications, recents, favorites, currentApp etc so that subscribers can get everything in one subscription.
 */
var CBPApplicationsData = /** @class */ (function () {
    function CBPApplicationsData() {
        this.list = [];
        this.recents = [];
        this.favorites = [];
        this.currentApp = new CBPApplication();
    }
    return CBPApplicationsData;
}());

var CBPApplicationsService = /** @class */ (function () {
    function CBPApplicationsService() {
        this.currentApp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
    }
    /**
     * Provides consumers to subscribe to current application so that they can do various things e.g. setting version etc.
     * @returns {Observable<CBPApplication>}
     */
    CBPApplicationsService.prototype.getCurrentApp = function () {
        return this.currentApp;
    };
    return CBPApplicationsService;
}());

var CBP_APPLICATIONS_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('cbp-applications-service');


/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Generated from ngx-cbp-theme -->\n<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n/** Hacks - Certain material2 components can't be styled well without this higher level css */\n.cbp-theme .cbp-app-header.mat-toolbar,\n.cbp-theme .cbp-header.mat-toolbar {\n  padding: 0;\n  min-height: inherit; }\n\n.cbp-theme .mat-toolbar {\n  font-weight: inherit !important;\n  min-height: inherit; }\n\n.cbp-theme .mat-tab-label, .cbp-theme .mat-tab-link {\n  font-size: 15px !important;\n  opacity: inherit !important; }\n\ncbp-root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n  place-content: stretch flex-start;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPRootComponent; });
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

var CBPRootComponent = /** @class */ (function () {
    function CBPRootComponent() {
    }
    CBPRootComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.cbp-theme'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CBPRootComponent.prototype, "ngOnInit", null);
    CBPRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-root',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], CBPRootComponent);
    return CBPRootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cbp-root/cbp-root.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPRootModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_root_component__ = __webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_progress_module__ = __webpack_require__("../../../../../src/app/progress/progress.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_cbp_header_cbp_header_module__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CBPRootModule = /** @class */ (function () {
    function CBPRootModule(mdIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    CBPRootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__cbp_root_component__["a" /* CBPRootComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__cbp_root_component__["a" /* CBPRootComponent */], __WEBPACK_IMPORTED_MODULE_6__progress_progress_module__["a" /* CBPProgressModule */], __WEBPACK_IMPORTED_MODULE_7__header_cbp_header_cbp_header_module__["a" /* CBPHeaderModule */], __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__["a" /* CBPPipesModule */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatIconRegistry */]])
    ], CBPRootModule);
    return CBPRootModule;
}());



/***/ }),

/***/ "../../../../../src/app/cbp-root/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cbp_root_module__ = __webpack_require__("../../../../../src/app/cbp-root/cbp-root.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cbp_root_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_root_component__ = __webpack_require__("../../../../../src/app/cbp-root/cbp-root.component.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<cbp-toolbar class=\"cbp-app-header\" fxLayout=\"row\" fxLayoutAlign.gt-xs=\"start stretch\" [@appHeaderState]=\"appHeaderState\">\n\n  <div class=\"app-header-title-container cbp-toolbar-title\" >\n    <ng-content select=\"cbp-app-title\"></ng-content>\n  </div>\n\n\n  <div class=\"app-header-left-nav-container cbp-toolbar-main-nav\">\n    <ng-content select=\"cbp-app-main-nav\"></ng-content>\n  </div>\n\n\n\n  <div class=\"app-header-right-nav-container cbp-toolbar-right-nav\" fxFlex=\"auto\"  fxFlexAlign.gt-xs=\"end\" fxLayoutAlign.gt-xs=\"end stretch\" fxLayout.gt-xs=\"row\" fxLayout.lt-sm=\"column\" >\n    <ng-content select=\"cbp-app-right-nav\"></ng-content>\n  </div>\n\n\n</cbp-toolbar>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n:host cbp-toolbar {\n  border-bottom-color: #e7e7e7;\n  height: 49px;\n  z-index: 1000;\n  position: fixed; }\n  :host cbp-toolbar .cbp-toolbar-row {\n    z-index: 1000;\n    border-bottom: 1px solid #adadad !important; }\n\n:host > > > .cbp-toolbar-expansion-panel {\n  top: 98px !important; }\n\n:host .cbp-toolbar-expansion-container {\n  z-index: 1100; }\n  :host .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon {\n    border: 1px solid #dddddd;\n    background-color: #f8f8f8; }\n    :host .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:hover {\n      background-color: #ddd; }\n    :host .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:focus {\n      border-color: #ddd;\n      outline: 1px dotted #acacac !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_toolbar_cbp_scrollshrink__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-scrollshrink.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CBPAppHeaderComponent = /** @class */ (function () {
    function CBPAppHeaderComponent() {
    }
    CBPAppHeaderComponent.prototype.ngOnInit = function () {
        this.appHeaderState = 'initial';
        this.lastScrollY = 0;
    };
    CBPAppHeaderComponent.prototype.scrolled = function () {
        this.appHeaderState = this.lastScrollY > window.pageYOffset ? 'initial' : 'up';
        this.lastScrollY = window.pageYOffset;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", String)
    ], CBPAppHeaderComponent.prototype, "appHeaderState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CBPAppHeaderComponent.prototype, "scrolled", null);
    CBPAppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-app-header',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/header/app-header/app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-header.component.scss")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__cbp_toolbar_cbp_scrollshrink__["a" /* CBPScrollShrinkAnimator */].createScrollShrinkTrigger('appHeaderState', '50px', '0')
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppHeaderComponent);
    return CBPAppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/app-header/app-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_header_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_title_app_title_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_main_nav_app_main_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_right_nav_app_right_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cbp_toolbar_cbp_toolbar_module__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-toolbar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CBPAppHeaderModule = /** @class */ (function () {
    function CBPAppHeaderModule() {
    }
    CBPAppHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__cbp_toolbar_cbp_toolbar_module__["a" /* CBPToolbarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_header_component__["a" /* CBPAppHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__app_title_app_title_component__["a" /* CBPAppTitleComponent */], __WEBPACK_IMPORTED_MODULE_6__app_main_nav_app_main_nav_component__["a" /* CBPAppMainNavComponent */], __WEBPACK_IMPORTED_MODULE_7__app_right_nav_app_right_nav_component__["a" /* CBPAppRightNavComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__app_header_component__["a" /* CBPAppHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__app_title_app_title_component__["a" /* CBPAppTitleComponent */], __WEBPACK_IMPORTED_MODULE_6__app_main_nav_app_main_nav_component__["a" /* CBPAppMainNavComponent */], __WEBPACK_IMPORTED_MODULE_7__app_right_nav_app_right_nav_component__["a" /* CBPAppRightNavComponent */]]
        })
    ], CBPAppHeaderModule);
    return CBPAppHeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppMainNavComponent; });
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

var CBPAppMainNavComponent = /** @class */ (function () {
    function CBPAppMainNavComponent() {
    }
    CBPAppMainNavComponent.prototype.ngOnInit = function () {
    };
    CBPAppMainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            moduleId: module.i,
            selector: 'cbp-app-main-nav',
            template: __webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppMainNavComponent);
    return CBPAppMainNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppRightNavComponent; });
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

var CBPAppRightNavComponent = /** @class */ (function () {
    function CBPAppRightNavComponent() {
    }
    CBPAppRightNavComponent.prototype.ngOnInit = function () {
    };
    CBPAppRightNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            moduleId: module.i,
            selector: 'cbp-app-right-nav',
            template: __webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppRightNavComponent);
    return CBPAppRightNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/app-header/app-title/app-title.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-title/app-title.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/app-header/app-title/app-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPAppTitleComponent; });
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

var CBPAppTitleComponent = /** @class */ (function () {
    function CBPAppTitleComponent() {
    }
    CBPAppTitleComponent.prototype.ngOnInit = function () {
    };
    CBPAppTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            moduleId: module.i,
            selector: 'cbp-app-title',
            template: __webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], CBPAppTitleComponent);
    return CBPAppTitleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/app-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_module__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_header_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_title_app_title_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-title/app-title.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_main_nav_app_main_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-main-nav/app-main-nav.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_right_nav_app_right_nav_component__ = __webpack_require__("../../../../../src/app/header/app-header/app-right-nav/app-right-nav.component.ts");
/* unused harmony namespace reexport */







/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.component.html":
/***/ (function(module, exports) {

module.exports = "<cbp-toolbar position=\"0\" class=\"cbp-header\" #cbpToolbar>\n  <div class=\"cbp-brand-nav cbp-toolbar-title\" fxFlexAlign=\"stretch\" fxLayout=\"row\">\n    <div fxFlexAlign=\"center\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n      <h1 class=\"cbp-brand\"  fxShow=\"false\" fxShow.gt-sm>U.S. Customs & Border Protection</h1>\n      <div class=\"cbp-brand-short\" fxShow=\"false\" fxShow.lt-md>U.S. CBP</div>\n      <div class=\"dhs-brand\"  fxShow=\"false\" fxShow.gt-sm>U.S. Department of Homeland Security</div>\n    </div>\n  </div>\n  <div class=\"cbp-toolbar-main-nav\">\n    <ng-template [ngTemplateOutlet]=\"cbpApplicationsDropdown\"></ng-template>\n  </div>\n\n  <div class=\"cbp-toolbar-right-nav\"  fxFlexAlign.gt-xs=\"end\"  fxLayout.gt-xs=\"row\" fxLayout.lt-sm=\"column\">\n    <div fxFlex=\"auto\"><ng-template [ngTemplateOutlet]=\"feedbackNavItem\"></ng-template></div>\n    <div fxFlex=\"auto\"><ng-template [ngTemplateOutlet]=\"userNavItem\"></ng-template></div>\n  </div>\n\n\n\n</cbp-toolbar>\n\n<ng-template #cbpApplicationsDropdown>\n  <cbp-applications-menu [toolbarExpanded]=\"cbpToolbar.isToolbarExpanded\"></cbp-applications-menu>\n</ng-template>\n\n<!-- templates -->\n<ng-template #feedbackNavItem>\n  <div class=\"cbp-feedback-navitem\" fxLayout=\"row\" fxLayoutAlign=\"start center\"  (click)=\"handleFeedback()\">\n    <span><i class=\"fa fa-comment\"></i></span>\n    <span  fxShow=\"false\" fxShow.gt-sm fxShow.lt-sm style=\"padding-left: 3px;\">Feedback</span>\n  </div>\n</ng-template>\n\n<ng-template #userNavItem>\n  <cbp-user-menu [toolbarExpanded]=\"cbpToolbar.isToolbarExpanded\"></cbp-user-menu>\n</ng-template>\n\n<!-- hack  for mat-divider to work outside of mat-list-->\n<mat-list style=\"display: none\"></mat-list>"

/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n/** CBP VARIABLES **/\n.cbp-navbar-item, .cbp-applications-navitem, .cbp-user-navitem, .cbp-feedback-navitem, .cbp-toolbar-expansion {\n  font-size: 15px;\n  cursor: pointer;\n  line-height: 50px;\n  padding: 0 15px; }\n  .cbp-navbar-item:hover, .cbp-applications-navitem:hover, .cbp-user-navitem:hover, .cbp-feedback-navitem:hover, .cbp-toolbar-expansion:hover, .cbp-navbar-item:focus, .cbp-applications-navitem:focus, .cbp-user-navitem:focus, .cbp-feedback-navitem:focus, .cbp-toolbar-expansion:focus {\n    outline: thin dotted;\n    outline-offset: -2px;\n    text-decoration: none; }\n\n.cbp-toolbar-expansion-container:hover {\n  outline: none; }\n\n.cbp-toolbar-expansion-container .cbp-toolbar-expansion:hover {\n  outline: none; }\n\n.cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon {\n  border: 1px solid #ddd;\n  position: relative;\n  margin-top: 8px;\n  cursor: inherit;\n  padding: 9px 10px;\n  border-radius: 2px;\n  min-width: inherit;\n  background-color: #f8f8f8; }\n  .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:hover {\n    background-color: #ddd; }\n  .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:focus {\n    border-color: #ddd;\n    outline: 1px dotted white !important; }\n\n.icon-bar + .icon-bar {\n  margin-top: 4px; }\n\n.icon-bar {\n  background-color: #888;\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px; }\n\ncbp-header {\n  z-index: 1010; }\n  cbp-header cbp-toolbar .cbp-toolbar-row {\n    height: 50px;\n    background-color: #003e65;\n    color: #FFF;\n    border-bottom-color: #003456;\n    position: fixed;\n    right: 0;\n    left: 0; }\n  cbp-header .cbp-toolbar-expansion-panel {\n    top: 50px !important; }\n  cbp-header .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon {\n    border: 1px solid #002e4b;\n    background-color: #003e65; }\n    cbp-header .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:hover {\n      background-color: #333; }\n    cbp-header .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:focus {\n      border-color: #333;\n      outline: 1px dotted #1461ab !important; }\n  cbp-header .icon-bar {\n    background-color: #fff; }\n\n.cbp-brand-nav {\n  font-size: 19px;\n  transition: color 200ms ease-in-out;\n  height: 50px;\n  padding: 0 70px 0 15px; }\n  .cbp-brand-nav .cbp-brand {\n    font-size: 19px;\n    line-height: 21px; }\n  .cbp-brand-nav .dhs-brand {\n    line-height: 14px;\n    margin: 0;\n    font-size: 12px;\n    font-style: italic; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feedback_service__ = __webpack_require__("../../../../../src/app/header/feedback.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CBPHeaderComponent = /** @class */ (function () {
    function CBPHeaderComponent() {
        if (this.feedbackService) {
            this.feedbackService.onFeedbackClose(this.feedbackDone);
        }
    }
    ;
    CBPHeaderComponent.prototype.handleFeedback = function () {
        if (this.feedbackService) {
            this.feedbackService.handleFeedback();
        }
    };
    /**
     * Not sure what we do here but we have it.
     */
    CBPHeaderComponent.prototype.feedbackDone = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__feedback_service__["b" /* CBP_FEEDBACK_SERVICE */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__feedback_service__["a" /* CBPFeedbackService */])
    ], CBPHeaderComponent.prototype, "feedbackService", void 0);
    CBPHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-header',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], CBPHeaderComponent);
    return CBPHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/cbp-header/cbp-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_header_component__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__applications_applications_module__ = __webpack_require__("../../../../../src/app/applications/applications.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cbp_toolbar_cbp_toolbar_module__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-toolbar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CBPHeaderModule = /** @class */ (function () {
    function CBPHeaderModule() {
    }
    CBPHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__user_user_module__["a" /* CBPUserModule */],
                __WEBPACK_IMPORTED_MODULE_6__applications_applications_module__["a" /* CBPApplicationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__cbp_toolbar_cbp_toolbar_module__["a" /* CBPToolbarModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__cbp_header_component__["a" /* CBPHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cbp_header_component__["a" /* CBPHeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__user_user_module__["a" /* CBPUserModule */], __WEBPACK_IMPORTED_MODULE_6__applications_applications_module__["a" /* CBPApplicationsModule */], __WEBPACK_IMPORTED_MODULE_7__cbp_toolbar_cbp_toolbar_module__["a" /* CBPToolbarModule */]]
        })
    ], CBPHeaderModule);
    return CBPHeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/cbp-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cbp_header_module__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cbp_header_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_header_component__ = __webpack_require__("../../../../../src/app/header/cbp-header/cbp-header.component.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/header/cbp-toolbar/cbp-scrollshrink.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HEADER_SHRINK_TRANSITION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPScrollShrinkAnimator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var HEADER_SHRINK_TRANSITION = '250ms cubic-bezier(0.4,0.0,0.2,1)';
var CBPScrollShrinkAnimator = /** @class */ (function () {
    function CBPScrollShrinkAnimator() {
    }
    CBPScrollShrinkAnimator.createScrollShrinkTrigger = function (triggerName, initialTop, upTop) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])(triggerName, [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('initial', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ top: initialTop })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ top: upTop })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('initial => up, up => initial', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(HEADER_SHRINK_TRANSITION))
        ]);
    };
    return CBPScrollShrinkAnimator;
}());



/***/ }),

/***/ "../../../../../src/app/header/cbp-toolbar/cbp-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cbp-toolbar-row mat-toolbar mat-toolbar-row\" fxLayout=\"row\"  [@cbpToolbarState]=\"cbpToolbarState\">\n\n  <div class=\"cbp-brand-nav-container\"  fxFlexAlign=\"stretch\" >\n    <ng-content select=\".cbp-toolbar-title\"></ng-content>\n  </div>\n\n  <div class=\"cbp-toolbar-main-nav-container\"   *ngIf=\"isToolbarExpanded ? false : true\"  fxShow=\"false\" fxShow.gt-xs>\n    <ng-template [ngTemplateOutlet]=\"cbpToolbarMainNav\"></ng-template>\n  </div>\n\n  <div class=\"cbp-toolbar-right-nav-container\" *ngIf=\"isToolbarExpanded ? false : true\" fxFlex=\"auto\"   fxShow=\"false\" fxShow.gt-xs>\n    <ng-template [ngTemplateOutlet]=\"cbpToolbarRightNav\"></ng-template>\n  </div>\n\n  <div fxFlex=\"auto\" fxFlexOrder.lt-sm=\"1\"  class=\"cbp-toolbar-expansion-container\" fxFlexAlign=\"stretch\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\" fxHide=\"false\" fxHide.gt-xs>\n    <div class=\"cbp-toolbar-expansion\" (click)=\"isToolbarExpanded = ! isToolbarExpanded\">\n      <div class=\"cbp-toolbar-expansion-icon\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"isToolbarExpanded ? true : false\" fxShow=\"false\" fxShow.lt-sm class=\"cbp-toolbar-expansion-panel\" [@fadeInContent]=\"'showing'\"   fxLayout=\"column\" >\n  <ng-template [ngTemplateOutlet]=\"cbpToolbarMainNav\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"cbpToolbarRightNav\"></ng-template>\n</div>\n<ng-template #cbpToolbarMainNav>\n  <ng-content select=\".cbp-toolbar-main-nav\"></ng-content>\n</ng-template>\n<ng-template #cbpToolbarRightNav>\n  <div fxLayout=\"column\" fxLayoutAlign=\"end stretch\"><ng-content select=\".cbp-toolbar-right-nav\"></ng-content></div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/header/cbp-toolbar/cbp-toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n/** CBP VARIABLES **/\n.cbp-navbar-item, .cbp-brand-nav-container {\n  font-size: 15px;\n  cursor: pointer;\n  line-height: 50px;\n  padding: 0 15px; }\n  .cbp-navbar-item:hover, .cbp-brand-nav-container:hover, .cbp-navbar-item:focus, .cbp-brand-nav-container:focus {\n    outline: thin dotted;\n    outline-offset: -2px;\n    text-decoration: none; }\n\n.cbp-toolbar-expansion-container:hover {\n  outline: none; }\n\n.cbp-toolbar-expansion-container .cbp-toolbar-expansion:hover {\n  outline: none; }\n\n.cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon {\n  border: 1px solid #ddd;\n  position: relative;\n  margin-top: 8px;\n  cursor: inherit;\n  padding: 9px 10px;\n  border-radius: 2px;\n  min-width: inherit;\n  background-color: #f8f8f8; }\n  .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:hover {\n    background-color: #ddd; }\n  .cbp-toolbar-expansion-container .cbp-toolbar-expansion .cbp-toolbar-expansion-icon:focus {\n    border-color: #ddd;\n    outline: 1px dotted white !important; }\n\n.icon-bar + .icon-bar {\n  margin-top: 4px; }\n\n.icon-bar {\n  background-color: #888;\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px; }\n\ncbp-toolbar {\n  width: 100%; }\n  cbp-toolbar .cbp-toolbar-row {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #adadad;\n    white-space: nowrap;\n    width: 100%; }\n  cbp-toolbar .cbp-toolbar-expansion-panel {\n    position: fixed;\n    background-color: #003e65;\n    color: #FFF;\n    border-bottom-color: #003456;\n    z-index: 1100;\n    width: 100%;\n    top: 98px; }\n\n.cbp-brand-nav-container {\n  padding: inherit; }\n\n.cbp-toolbar-main-nav-container {\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/cbp-toolbar/cbp-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_scrollshrink__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-scrollshrink.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CBPToolbarComponent = /** @class */ (function () {
    function CBPToolbarComponent(media) {
        this.media = media;
        this.role = 'toolbar';
        this.toolbarExpanded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.toolbarCollapsed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.showToolbarItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hideToolbarItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._isToolbarExpanded = false;
        this._showToolbarItems = false;
    }
    Object.defineProperty(CBPToolbarComponent.prototype, "isToolbarExpanded", {
        get: function () { return this._isToolbarExpanded; },
        set: function (expanded) {
            this._isToolbarExpanded = expanded;
            if (expanded) {
                this.toolbarExpanded.emit(null);
            }
            else {
                this.toolbarCollapsed.emit(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(CBPToolbarComponent.prototype, "showToolbarItems", {
        get: function () { return this._showToolbarItems; },
        set: function (show) {
            this._showToolbarItems = show;
            if (show) {
                this.showToolbarItem.emit(null);
            }
            else {
                this.hideToolbarItem.emit(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    CBPToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cbpToolbarState = 'initial';
        this.lastScrollY = 0;
        this.mediaSubscription = this.media.subscribe(function (change) {
            if (change.mqAlias !== 'xs') {
                _this.isToolbarExpanded = false;
                _this.showToolbarItems = false;
            }
            else {
                if (_this.isToolbarExpanded) {
                    _this.showToolbarItems = true;
                }
                else {
                    _this.showToolbarItems = false;
                }
            }
        });
    };
    CBPToolbarComponent.prototype.ngOnDestroy = function () {
        this.mediaSubscription.unsubscribe();
    };
    CBPToolbarComponent.prototype.scrolled = function () {
        this.cbpToolbarState = this.lastScrollY > window.pageYOffset ? 'initial' : 'up';
        this.lastScrollY = window.pageYOffset;
        this.isToolbarExpanded = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", String)
    ], CBPToolbarComponent.prototype, "cbpToolbarState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], CBPToolbarComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('attr.role'),
        __metadata("design:type", Object)
    ], CBPToolbarComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CBPToolbarComponent.prototype, "toolbarExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CBPToolbarComponent.prototype, "toolbarCollapsed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CBPToolbarComponent.prototype, "showToolbarItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], CBPToolbarComponent.prototype, "hideToolbarItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CBPToolbarComponent.prototype, "scrolled", null);
    CBPToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            moduleId: module.i,
            selector: 'cbp-toolbar',
            template: __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-toolbar.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None,
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__cbp_scrollshrink__["a" /* CBPScrollShrinkAnimator */].createScrollShrinkTrigger('cbpToolbarState', '*', '-50px'),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* fadeInContent */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]])
    ], CBPToolbarComponent);
    return CBPToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/cbp-toolbar/cbp-toolbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPToolbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_toolbar_component__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CBPToolbarModule = /** @class */ (function () {
    function CBPToolbarModule() {
    }
    CBPToolbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__cbp_toolbar_component__["a" /* CBPToolbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cbp_toolbar_component__["a" /* CBPToolbarComponent */]]
        })
    ], CBPToolbarModule);
    return CBPToolbarModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/cbp-toolbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cbp_scrollshrink__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-scrollshrink.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_toolbar_component__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-toolbar.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_toolbar_module__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/cbp-toolbar.module.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/header/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPFeedbackService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CBP_FEEDBACK_SERVICE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * Feedback service implementation is beyond the scope of this library.
 * We recommend developing an independent module that implements the following service.
 */
var CBPFeedbackService = /** @class */ (function () {
    function CBPFeedbackService() {
    }
    return CBPFeedbackService;
}());

var CBP_FEEDBACK_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('cbp-feedback-service');


/***/ }),

/***/ "../../../../../src/app/header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_index__ = __webpack_require__("../../../../../src/app/header/app-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cbp_header_index__ = __webpack_require__("../../../../../src/app/header/cbp-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__cbp_header_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cbp_toolbar_index__ = __webpack_require__("../../../../../src/app/header/cbp-toolbar/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_service__ = __webpack_require__("../../../../../src/app/header/feedback.service.ts");
/* unused harmony namespace reexport */






/***/ }),

/***/ "../../../../../src/app/pipes/datetime.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_FORMAT_DayOfWeek_ShortDate_Time */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPDatetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DATE_FORMAT_DayOfWeek_ShortDate_Time = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
var CBPDatetimePipe = /** @class */ (function () {
    function CBPDatetimePipe() {
    }
    CBPDatetimePipe.prototype.transform = function (value) {
        return new Intl.DateTimeFormat('en-US', DATE_FORMAT_DayOfWeek_ShortDate_Time).format(value);
    };
    CBPDatetimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'datetime'
        })
    ], CBPDatetimePipe);
    return CBPDatetimePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPPipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datetime_pipe__ = __webpack_require__("../../../../../src/app/pipes/datetime.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CBPPipesModule = /** @class */ (function () {
    function CBPPipesModule() {
    }
    CBPPipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__datetime_pipe__["a" /* CBPDatetimePipe */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__datetime_pipe__["a" /* CBPDatetimePipe */]]
        })
    ], CBPPipesModule);
    return CBPPipesModule;
}());



/***/ }),

/***/ "../../../../../src/app/progress/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-spinner fa-spin\"></i><span>&nbsp;Loading ...</span>"

/***/ }),

/***/ "../../../../../src/app/progress/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progress/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPLoadingComponent; });
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

var CBPLoadingComponent = /** @class */ (function () {
    function CBPLoadingComponent() {
    }
    CBPLoadingComponent.prototype.ngOnInit = function () {
    };
    CBPLoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-loading',
            template: __webpack_require__("../../../../../src/app/progress/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/progress/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CBPLoadingComponent);
    return CBPLoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/progress/progress.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading_component__ = __webpack_require__("../../../../../src/app/progress/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CBPProgressModule = /** @class */ (function () {
    function CBPProgressModule() {
    }
    CBPProgressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loading_loading_component__["a" /* CBPLoadingComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loading_loading_component__["a" /* CBPLoadingComponent */]]
        })
    ], CBPProgressModule);
    return CBPProgressModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-menu/user-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoggedIn && !loginProgress\" class=\"cbp-user-navitem\" (click)=\"login()\">\n  <i class=\"fa fa-sign-in\"></i><span>&nbsp;Login</span>\n</div>\n<div *ngIf=\"!isLoggedIn && loginProgress\" class=\"cbp-user-navitem\">\n  <cbp-loading></cbp-loading>\n</div>\n<div *ngIf=\"isLoggedIn && userDataLoaded && !toolbarExpanded\" class=\"cbp-user-navitem\" [matMenuTriggerFor]=\"userMenu\">\n  <mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-user\"></mat-icon>\n  <span fxShow=\"false\" fxShow.gt-sm fxShow.lt-sm>{{ user.firstName }} {{ user.lastName }}</span>\n  <mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-caret-down\"></mat-icon>\n</div>\n\n<div *ngIf=\"isLoggedIn && userDataLoaded && toolbarExpanded\" class=\"cbp-user-navitem non-menu\" (click)=\"toggleMenu()\">\n  <mat-icon class=\"cbp-icon-before-text\" fontSet=\"fontawesome\" fontIcon=\"fa-user\"></mat-icon>\n  <span fxShow=\"false\" fxShow.gt-sm fxShow.lt-sm>{{ user.firstName }} {{ user.lastName }}</span>\n  <mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-caret-down\"></mat-icon>\n</div>\n\n<div class=\"cbp-user-navitem expanded\" *ngIf=\"toolbarExpanded && userMenuExpanded\">\n  <ng-template [ngTemplateOutlet]=\"userMenuContents\"></ng-template>\n</div>\n\n<mat-menu #userMenu=\"matMenu\" yPosition=\"above\" xPosition=\"before\" [overlapTrigger]=\"false\">\n  <ng-template [ngTemplateOutlet]=\"userMenuContents\"></ng-template>\n</mat-menu>\n\n<ng-template #userMenuContents let-fromMenu=\"fromMenu\">\n  <div class=\"mat-menu-item\" (click)=\"logout()\">Logout</div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-menu/user-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n:host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.cbp-user-navitem.expanded .mat-menu-item {\n  color: #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-menu/user-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPUserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user/user.ts");
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


var CBPUserMenuComponent = /** @class */ (function () {
    function CBPUserMenuComponent(userService) {
        this.userService = userService;
        this._isToolbarExpanded = false;
        this.userMenuExpanded = false;
        this.loginProgress = false;
        this.isLoggedIn = false;
        this.userDataLoaded = false;
    }
    CBPUserMenuComponent.prototype.ngOnInit = function () { };
    CBPUserMenuComponent.prototype.login = function () {
        var _this = this;
        this.loginProgress = true;
        this.isLoggedIn = false;
        if (this.userServiceSubscription) {
            this.userService.login();
        }
        else {
            this.userServiceSubscription = this.userService.login().subscribe({
                next: function (data) {
                    if (data) {
                        _this.user = data;
                        _this.userDataLoaded = true;
                        _this.loginProgress = false;
                        _this.isLoggedIn = true;
                    }
                    else {
                        _this.loginProgress = false;
                        _this.isLoggedIn = false;
                        _this.user = data;
                        _this.userDataLoaded = false;
                    }
                },
                error: function (err) {
                    console.log('errr' + err);
                    _this.loginProgress = false;
                    _this.isLoggedIn = false;
                    _this.error = err;
                    _this.userDataLoaded = false;
                },
                complete: function () {
                    console.log('completed');
                }
            });
        }
    };
    CBPUserMenuComponent.prototype.ngOnDestroy = function () {
        if (this.userServiceSubscription) {
            this.userServiceSubscription.unsubscribe();
        }
        this.user = undefined;
        this.userDataLoaded = false;
    };
    CBPUserMenuComponent.prototype.logout = function () {
        this.userService.logout();
        // this._isToolbarExpanded = false;
    };
    CBPUserMenuComponent.prototype.toggleMenu = function () {
        this.userMenuExpanded = !this.userMenuExpanded;
    };
    Object.defineProperty(CBPUserMenuComponent.prototype, "toolbarExpanded", {
        get: function () { return this._isToolbarExpanded; },
        set: function (expanded) {
            this._isToolbarExpanded = expanded;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CBPUserMenuComponent.prototype, "toolbarExpanded", null);
    CBPUserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-user-menu',
            template: __webpack_require__("../../../../../src/app/user/user-menu/user-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-menu/user-menu.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__user__["c" /* CBP_USER_SERVICE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user__["b" /* CBPUserService */]])
    ], CBPUserMenuComponent);
    return CBPUserMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPUserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_menu_user_menu_component__ = __webpack_require__("../../../../../src/app/user/user-menu/user-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_progress_module__ = __webpack_require__("../../../../../src/app/progress/progress.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CBPUserModule = /** @class */ (function () {
    function CBPUserModule() {
    }
    CBPUserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__progress_progress_module__["a" /* CBPProgressModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__user_menu_user_menu_component__["a" /* CBPUserMenuComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatMenuModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_menu_user_menu_component__["a" /* CBPUserMenuComponent */]]
        })
    ], CBPUserModule);
    return CBPUserModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CBPUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CBPUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CBP_USER_SERVICE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * CBPUser class can be extended by the library users to include additional attributes.
 */
var CBPUser = /** @class */ (function () {
    function CBPUser() {
    }
    return CBPUser;
}());

/**
 * The implementation is beyond the scope of this library since it involves fetching the authenticated
 *  user who is accessing your application.
 * This service must be implemented by library users or by another CF components.
 */
var CBPUserService = /** @class */ (function () {
    function CBPUserService() {
    }
    return CBPUserService;
}());

/**
 * Injectable token that mus be provided by library users.
 * @type {InjectionToken<CBPUserService>}
 */
var CBP_USER_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('cbp-user-service');


/***/ }),

/***/ "../../../../../src/demo/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<cbp-app-header>\n\n  <cbp-app-title >\n    <h2 class=\"app-title\" ngClass.gt-xs=\"vertical-divider\">\n      Kitchen Sink\n      <small>Demo</small>\n    </h2>\n  </cbp-app-title>\n\n  <cbp-app-main-nav>\n      <div fxShow=\"false\" fxShow.gt-xs=\"true\"><ng-template [ngTemplateOutlet]=\"tabbedAppNav\"></ng-template></div>\n      <div fxShow=\"false\" fxShow.lt-sm=\"true\" class=\"app-stacked-nav\"><ng-template [ngTemplateOutlet]=\"stackedAppNav\"></ng-template></div>\n  </cbp-app-main-nav>\n\n  <cbp-app-right-nav>\n    <div ngClass.gt-xs=\"app-right-nav-items\" ngClass.lt-sm=\"app-stacked-nav\">\n      <div class=\"cbp-navbar-item\">\n        <mat-icon  fontSet=\"fontawesome\" fontIcon=\"fa-print\"></mat-icon>\n      </div>\n      <div class=\"cbp-navbar-item\">\n        <mat-icon  fontSet=\"fontawesome\" fontIcon=\"fa-wifi\"></mat-icon>\n      </div>\n    </div>\n  </cbp-app-right-nav>\n</cbp-app-header>\n\n<ng-template #tabbedAppNav>\n  <mat-tab-group class=\"mat-tab-header-pagination-controls-enabled\">\n    <mat-tab *ngFor=\"let appNav of appNavigations\" label=\"{{ appNav.name }}\"></mat-tab>\n  </mat-tab-group>\n</ng-template>\n\n\n<ng-template #stackedAppNav>\n    <ng-container>\n        <div class=\"mat-menu-item\" *ngFor=\"let appNav of appNavigations\">\n            <div title=\"{{ appNav.name }}\"  fxFlex=\"auto\" >\n                {{ appNav.name }}\n            </div>\n        </div>\n    </ng-container>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.app-right-nav-items {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.app-title {\n  padding: 0 12px;\n  margin-top: 10px; }\n  .app-title.vertical-divider {\n    border-right: 1px solid #adadad; }\n\n.app-stacked-nav {\n  background-color: #f8f8f8;\n  left: 0;\n  width: 100%;\n  color: #777; }\n\ncbp-app-main-nav .app-stacked-nav {\n  border-top: 1px solid #dddddd; }\n\ncbp-app-right-nav .app-stacked-nav {\n  border-bottom: 1px solid #dddddd; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppHeaderComponent; });
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

var DemoAppHeaderComponent = /** @class */ (function () {
    function DemoAppHeaderComponent() {
        this.appNavigations = [
            { name: 'Info' },
            { name: 'Findings' },
            { name: 'Attachments' },
            { name: 'Results' },
            { name: 'Some' },
            { name: 'More' },
            { name: 'Items' },
            { name: 'Remarks' },
            { name: 'History' },
            { name: 'Notes' },
            { name: 'Ideas' }
        ];
    }
    DemoAppHeaderComponent.prototype.ngOnInit = function () {
    };
    DemoAppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-demo-demo-app-header, demo-demo-app-header',
            template: __webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoAppHeaderComponent);
    return DemoAppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo-app-header/demo-app-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_app_header_component__ = __webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header_app_header_app_header_module__ = __webpack_require__("../../../../../src/app/header/app-header/app-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoAppHeaderModule = /** @class */ (function () {
    function DemoAppHeaderModule() {
    }
    DemoAppHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__app_header_app_header_app_header_module__["a" /* CBPAppHeaderModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__demo_app_header_component__["a" /* DemoAppHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__demo_app_header_component__["a" /* DemoAppHeaderComponent */]]
        })
    ], DemoAppHeaderModule);
    return DemoAppHeaderModule;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Buttons</h2>\n\n<button mat-raised-button color=\"primary\">Primary</button>\n<button mat-raised-button color=\"accent\">Accent</button>\n<button mat-raised-button color=\"warn\">Danger</button>\n<button mat-button>Default</button>\n<a href mat-button mat-button-link>SomeLink</a>\n\n<h3>Disabled Buttons</h3>\n\n<button mat-raised-button color=\"primary\" disabled>Primary</button>\n<button mat-raised-button color=\"accent\" disabled>Accent</button>\n<button mat-raised-button color=\"warn\" disabled>Danger</button>\n<button mat-button disabled>Default</button>\n<a href mat-button mat-button-link disabled>SomeLink</a>"

/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoButtonsComponent = /** @class */ (function () {
    function DemoButtonsComponent() {
    }
    DemoButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-demo-button, demo-buttons',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.component.scss")]
        })
    ], DemoButtonsComponent);
    return DemoButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo-buttons/demo-buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_buttons_component__ = __webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DemoButtonsModule = /** @class */ (function () {
    function DemoButtonsModule() {
    }
    DemoButtonsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__demo_buttons_component__["a" /* DemoButtonsComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__demo_buttons_component__["a" /* DemoButtonsComponent */]]
        })
    ], DemoButtonsModule);
    return DemoButtonsModule;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>CBP Accordion Lite</h1>\n<cbp-accordion>\n    <cbp-accordion-panel [panelTitle]=\"'Goods/Services'\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </cbp-accordion-panel>\n    <cbp-accordion-panel [isExpanded]=\"false\" [panelTitle]=\"'Mark Info'\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </cbp-accordion-panel>\n    <cbp-accordion-panel [isExpanded]=\"false\" [panelTitle]=\"'Owner/Assignment'\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </cbp-accordion-panel>\n</cbp-accordion>"

/***/ }),

/***/ "../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoCBPAccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoCBPAccordionComponent = /** @class */ (function () {
    function DemoCBPAccordionComponent() {
    }
    DemoCBPAccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo-cbp-accordion, cbp-demo-cbp-accordion',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.scss")]
        })
    ], DemoCBPAccordionComponent);
    return DemoCBPAccordionComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo-typograqphy/demo-typography.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Typography</h1>\n<h1>h1. Main Heading\n    <small>Secondary text</small>\n</h1>\n<h2>h2. Sub Heading\n    <small>Secondary text</small>\n</h2>\n<h3>h3. Sub Sub Heading\n    <small>Secondary text</small>\n</h3>\n<h4>h4. Sub Sub Sub Heading\n    <small>Secondary text</small>\n</h4>\n<h5>h5. Sub Sub Sub Sub Heading\n    <small>Secondary text</small>\n</h5>\n<h6>h6. Sub Sub Sub Sub Sub Heading\n    <small>Secondary text</small>\n</h6>\n"

/***/ }),

/***/ "../../../../../src/demo/app/demo-typograqphy/demo-typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo-typograqphy/demo-typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoTypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoTypographyComponent = /** @class */ (function () {
    function DemoTypographyComponent() {
    }
    DemoTypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cbp-demo-typography, demo-typography',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/demo/app/demo-typograqphy/demo-typography.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo-typograqphy/demo-typography.component.scss")]
        })
    ], DemoTypographyComponent);
    return DemoTypographyComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This is \"THE\" Kitchen Sink Demo -->\n<cbp-root>\n    <cbp-header></cbp-header>\n    <demo-demo-app-header></demo-demo-app-header>\n    <div class=\"app-content\">\n        <demo-typography></demo-typography>\n        <demo-buttons></demo-buttons>\n        <demo-cbp-accordion></demo-cbp-accordion>\n    </div>\n</cbp-root>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/demo/app/demo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** CBP VARIABLES **/\n.app-content {\n  padding: 98px 20px 20px 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/demo/app/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoAppComponent = /** @class */ (function () {
    function DemoAppComponent() {
    }
    DemoAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo-app-root, cbp-demo-app-root',
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/demo/app/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/demo/app/demo.component.scss")],
        })
    ], DemoAppComponent);
    return DemoAppComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_cbp_root__ = __webpack_require__("../../../../../src/app/cbp-root/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header__ = __webpack_require__("../../../../../src/app/header/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_accordion__ = __webpack_require__("../../../../../src/app/accordion/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_component__ = __webpack_require__("../../../../../src/demo/app/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mock_services_user_mock_service__ = __webpack_require__("../../../../../src/mock-services/user.mock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_cbp_accordion_demo_cbp_accordion_component__ = __webpack_require__("../../../../../src/demo/app/demo-cbp-accordion/demo-cbp-accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_typograqphy_demo_typography_component__ = __webpack_require__("../../../../../src/demo/app/demo-typograqphy/demo-typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_buttons_demo_buttons_module__ = __webpack_require__("../../../../../src/demo/app/demo-buttons/demo-buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_app_header_demo_app_header_module__ = __webpack_require__("../../../../../src/demo/app/demo-app-header/demo-app-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mock_services_applications_mock_service__ = __webpack_require__("../../../../../src/mock-services/applications.mock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_applications_cbp_applications_service__ = __webpack_require__("../../../../../src/app/applications/cbp-applications-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var DemoAppModule = /** @class */ (function () {
    function DemoAppModule(applicationsService) {
        applicationsService.getCurrentApp().subscribe(function (currentApp) {
            currentApp.version = 'v0.0.0';
        });
    }
    DemoAppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoAppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__demo_cbp_accordion_demo_cbp_accordion_component__["a" /* DemoCBPAccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__demo_typograqphy_demo_typography_component__["a" /* DemoTypographyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_cbp_root__["a" /* CBPRootModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_accordion__["a" /* CBPAccordionModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_header__["b" /* CBPHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_header__["a" /* CBPAppHeaderModule */],
                // CBPProgressModule,
                // demo
                __WEBPACK_IMPORTED_MODULE_10__demo_buttons_demo_buttons_module__["a" /* DemoButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_11__demo_app_header_demo_app_header_module__["a" /* DemoAppHeaderModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_10__demo_buttons_demo_buttons_module__["a" /* DemoButtonsModule */], __WEBPACK_IMPORTED_MODULE_11__demo_app_header_demo_app_header_module__["a" /* DemoAppHeaderModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__mock_services_user_mock_service__["a" /* MockUserService */],
                __WEBPACK_IMPORTED_MODULE_13__mock_services_applications_mock_service__["a" /* MockApplicationsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_14__app_user_user__["c" /* CBP_USER_SERVICE */], useExisting: __WEBPACK_IMPORTED_MODULE_6__mock_services_user_mock_service__["a" /* MockUserService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_15__app_applications_cbp_applications_service__["d" /* CBP_APPLICATIONS_SERVICE */], useExisting: __WEBPACK_IMPORTED_MODULE_13__mock_services_applications_mock_service__["a" /* MockApplicationsService */] }
            ],
            schemas: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoAppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__mock_services_applications_mock_service__["a" /* MockApplicationsService */]])
    ], DemoAppModule);
    return DemoAppModule;
}());



/***/ }),

/***/ "../../../../../src/demo/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_demo_module__ = __webpack_require__("../../../../../src/demo/app/demo.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_demo_module__["a" /* DemoAppModule */]);


/***/ }),

/***/ "../../../../../src/mock-services/applications.mock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockApplicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_applications_cbp_applications_service__ = __webpack_require__("../../../../../src/app/applications/cbp-applications-service.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var MockApplicationsService = /** @class */ (function (_super) {
    __extends(MockApplicationsService, _super);
    function MockApplicationsService(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.loaded = false;
        return _this;
    }
    MockApplicationsService.prototype.getApplicationsData = function () {
        this._load();
        return this.subject;
    };
    MockApplicationsService.prototype.refresh = function () {
        this.loaded = false;
        this._load();
        return null;
    };
    MockApplicationsService.prototype.search = function (token) {
        token = token.toLowerCase();
        var appData = this.subject.getValue();
        if (appData && appData.list) {
            return appData.list.filter(function (app) {
                return (app.name.toLowerCase().indexOf(token)) >= 0;
            });
        }
        return [];
    };
    MockApplicationsService.prototype.removeRecentApplication = function (recentApplication) {
        var data = this.subject.getValue();
        return this._removeAppFromArray(recentApplication, data.recents);
    };
    MockApplicationsService.prototype._removeAppFromArray = function (app, fromArray) {
        var index = fromArray.indexOf(app);
        if (index >= 0) {
            fromArray.splice(index, 1);
        }
        return null;
    };
    MockApplicationsService.prototype._load = function () {
        var _this = this;
        if (!this.loaded) {
            this.loaded = true;
            // simulates fetching some data
            setTimeout(function () {
                _this._getData().subscribe({ next: function (data) {
                        // next() few items then we send other items
                        _this.subject.next(data);
                        // we enhance data from user later
                        _this.userService.getUser().subscribe({ next: function (user) {
                                _this.subject.next(_this._applyUserToApplications(user, data));
                            } });
                    } });
            }, 2000);
        }
    };
    MockApplicationsService.prototype._getData = function () {
        var _this = this;
        return this._getMockHttpData()
            .map(function (data) {
            data.lastRetrieved = new Date();
            data.currentApp = new __WEBPACK_IMPORTED_MODULE_7__app_applications_cbp_applications_service__["a" /* CBPApplication */]('Kitchen Sink Demo');
            _this.currentApp.next(data.currentApp);
            return data;
        });
    };
    MockApplicationsService.prototype._getMockHttpData = function () {
        var rawList = [];
        var count = 100;
        do {
            rawList.push({ id: "" + count,
                name: "App " + count, description: "Description " + count, href: "http://example.com/app-" + count });
        } while (count-- >= 0);
        var data = new __WEBPACK_IMPORTED_MODULE_7__app_applications_cbp_applications_service__["b" /* CBPApplicationsData */]();
        data.list = rawList;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(data);
    };
    /**
     * Fakeology - it does not even use user object
     * @param {CBPUser} user
     * @param {CBPApplicationsData} data
     * @returns {CBPApplicationsData}
     * @private
     */
    MockApplicationsService.prototype._applyUserToApplications = function (user, data) {
        var applications = data.list;
        if (applications) {
            var random = void 0;
            data.recents = [];
            data.favorites = [];
            if (user && user.preferences) {
                data.favorites = this._getFavoritesFromUserPreferences(applications, user.preferences.favoriteAppIds);
            }
            // randomly assign few a favorites and some as recent
            random = this._randomIndex(0, applications.length / 10);
            data.recents.push(applications[random]);
            random = this._randomIndex(applications.length / 10, 2 * applications.length / 10);
            data.recents.push(applications[random]);
        }
        return data;
    };
    MockApplicationsService.prototype._randomIndex = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    MockApplicationsService.prototype._getFavoritesFromUserPreferences = function (applications, userFavoriteAppIds) {
        if (!userFavoriteAppIds || !applications) {
            return [];
        }
        var favorites = applications.filter(function (application) {
            return userFavoriteAppIds.indexOf(application.id) >= 0;
        });
        return favorites;
    };
    MockApplicationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_user_user__["c" /* CBP_USER_SERVICE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__app_user_user__["b" /* CBPUserService */]])
    ], MockApplicationsService);
    return MockApplicationsService;
}(__WEBPACK_IMPORTED_MODULE_7__app_applications_cbp_applications_service__["c" /* CBPApplicationsService */]));



/***/ }),

/***/ "../../../../../src/mock-services/user.mock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MockUserService = /** @class */ (function () {
    function MockUserService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.loggedIn = false;
    }
    ;
    MockUserService.prototype.getUser = function () {
        return this.subject;
    };
    MockUserService.prototype.login = function () {
        var _this = this;
        setTimeout(function () {
            _this.loggedIn = true;
            var user = new __WEBPACK_IMPORTED_MODULE_1__app_user_user__["a" /* CBPUser */]();
            user.firstName = 'First';
            user.lastName = 'LastName';
            user.preferences = {
                favoriteAppIds: _this._randomlyGetFavoritAppId()
            };
            _this.subject.next(user);
            // this.subject.complete();
        }, 3000);
        return this.subject;
    };
    MockUserService.prototype.logout = function () {
        this.loggedIn = false;
        this.subject.next(null);
        console.log('mock logout');
    };
    MockUserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    MockUserService.prototype._randomlyGetFavoritAppId = function () {
        var favoriteIds = [];
        var count = 2;
        do {
            favoriteIds.push('' + Math.floor(Math.random() * 10));
        } while (count-- >= 0);
        return favoriteIds;
    };
    MockUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MockUserService);
    return MockUserService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/demo/index.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map