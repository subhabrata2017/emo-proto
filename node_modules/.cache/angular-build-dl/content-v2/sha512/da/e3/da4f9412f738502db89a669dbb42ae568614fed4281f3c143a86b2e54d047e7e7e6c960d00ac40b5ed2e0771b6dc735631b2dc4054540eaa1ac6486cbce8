(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-user-add-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <div class=\"page-title\">            \n            <ion-icon name=\"arrow-back-outline\" class=\"arrow-icon p-l-10\" (click)=\"backToPrevious()\"></ion-icon>\n            <ion-title>Entry a user</ion-title>\n        </div>        \n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            <ion-item>\n                <ion-label>User Id: {{ getNewUserId() }}</ion-label>                \n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">User Name</ion-label>\n                <ion-input [(ngModel)]=\"newUserName\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Parent Name: {{ getParentName() }}</ion-label>                \n            </ion-item>\n            <ion-item>\n                <ion-label>Designation: JCO</ion-label>                \n            </ion-item>\n            <ion-item>\n                <ion-button expand=\"block\" (click)=\"addUser()\"><ion-icon name=\"person-add-outline\" class=\"p-r-10\"></ion-icon>Add Entry</ion-button>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/add-user/add-user-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-user/add-user-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPageRoutingModule", function() { return AddUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user.page */ "./src/app/add-user/add-user.page.ts");




const routes = [
    {
        path: '',
        component: _add_user_page__WEBPACK_IMPORTED_MODULE_3__["AddUserPage"]
    },
    {
        path: ':userId',
        component: _add_user_page__WEBPACK_IMPORTED_MODULE_3__["AddUserPage"]
    }
];
let AddUserPageRoutingModule = class AddUserPageRoutingModule {
};
AddUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddUserPageRoutingModule);



/***/ }),

/***/ "./src/app/add-user/add-user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-user/add-user.module.ts ***!
  \*********************************************/
/*! exports provided: AddUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPageModule", function() { return AddUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user-routing.module */ "./src/app/add-user/add-user-routing.module.ts");
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-user.page */ "./src/app/add-user/add-user.page.ts");







let AddUserPageModule = class AddUserPageModule {
};
AddUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUserPageRoutingModule"]
        ],
        declarations: [_add_user_page__WEBPACK_IMPORTED_MODULE_6__["AddUserPage"]]
    })
], AddUserPageModule);



/***/ }),

/***/ "./src/app/add-user/add-user.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-user/add-user.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\n  display: flex;\n  align-items: center;\n}\n\n.p-l-10 {\n  padding-left: 10px;\n}\n\n.p-r-10 {\n  padding-right: 10px;\n}\n\n.arrow-icon {\n  color: var(--ion-color-primary);\n}\n\nion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGQtdXNlci9hZGQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucC1sLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wLXItMTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1wcmltYXJ5ICk7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/add-user/add-user.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-user/add-user.page.ts ***!
  \*******************************************/
/*! exports provided: AddUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserPage", function() { return AddUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.model */ "./src/app/service/user.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let AddUserPage = class AddUserPage {
    constructor(router, activatedRoute, userService, alertController) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.alertController = alertController;
        this.userId = "";
        this.newUserName = "";
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(val => {
            if (val && val.userId) {
                this.userId = val.userId;
            }
        });
    }
    getNewUserId() {
        return (parseInt(this.userService.getLastUserId()) + 1).toString();
    }
    getParentName() {
        return this.userService.getUser(this.userId).name;
    }
    backToPrevious() {
        this.router.navigate(['/home/' + this.userId]);
    }
    addUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let newUser = new _service_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
            let users = JSON.parse(localStorage.getItem("emoinu-data"));
            newUser.id = this.getNewUserId();
            newUser.name = this.newUserName;
            newUser.post = "JCO";
            newUser.parentId = this.userId;
            newUser.password = "welcome";
            users.push(newUser);
            localStorage.removeItem("emoinu-data");
            localStorage.setItem("emoinu-data", JSON.stringify(users));
            const alert = yield this.alertController.create({
                header: 'Success',
                message: 'User ' + this.newUserName + ' Successfully added',
                buttons: [{
                        text: 'Okay',
                        handler: () => {
                            this.backToPrevious();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
AddUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AddUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-user.page.scss */ "./src/app/add-user/add-user.page.scss")).default]
    })
], AddUserPage);



/***/ }),

/***/ "./src/app/service/user.model.ts":
/*!***************************************!*\
  !*** ./src/app/service/user.model.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ })

}]);
//# sourceMappingURL=add-user-add-user-module-es2015.js.map