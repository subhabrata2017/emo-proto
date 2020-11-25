(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-tree-child-tree-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/child-tree/child-tree.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child-tree/child-tree.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppChildTreeChildTreePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <div class=\"page-title\">            \n            <ion-icon name=\"arrow-back-outline\" class=\"arrow-icon p-l-10\" (click)=\"backToPrevious()\"></ion-icon>\n            <ion-title>{{ user.name }}'s Tree</ion-title>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngIf=\"childUsers.length > 0\">\n        <ion-item *ngFor=\"let child of childUsers\">\n            <ion-label>{{child.name}}, {{child.post}}</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-item *ngIf=\"childUsers.length == 0\">\n        <div class=\"no-child-message\">No Child Available</div>\n    </ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/child-tree/child-tree-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/child-tree/child-tree-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ChildTreePageRoutingModule */

    /***/
    function srcAppChildTreeChildTreeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildTreePageRoutingModule", function () {
        return ChildTreePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _child_tree_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./child-tree.page */
      "./src/app/child-tree/child-tree.page.ts");

      var routes = [{
        path: '',
        component: _child_tree_page__WEBPACK_IMPORTED_MODULE_3__["ChildTreePage"]
      }, {
        path: ':userId',
        component: _child_tree_page__WEBPACK_IMPORTED_MODULE_3__["ChildTreePage"]
      }];

      var ChildTreePageRoutingModule = function ChildTreePageRoutingModule() {
        _classCallCheck(this, ChildTreePageRoutingModule);
      };

      ChildTreePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChildTreePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/child-tree/child-tree.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/child-tree/child-tree.module.ts ***!
      \*************************************************/

    /*! exports provided: ChildTreePageModule */

    /***/
    function srcAppChildTreeChildTreeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildTreePageModule", function () {
        return ChildTreePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _child_tree_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./child-tree-routing.module */
      "./src/app/child-tree/child-tree-routing.module.ts");
      /* harmony import */


      var _child_tree_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./child-tree.page */
      "./src/app/child-tree/child-tree.page.ts");

      var ChildTreePageModule = function ChildTreePageModule() {
        _classCallCheck(this, ChildTreePageModule);
      };

      ChildTreePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _child_tree_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildTreePageRoutingModule"]],
        declarations: [_child_tree_page__WEBPACK_IMPORTED_MODULE_6__["ChildTreePage"]]
      })], ChildTreePageModule);
      /***/
    },

    /***/
    "./src/app/child-tree/child-tree.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/child-tree/child-tree.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppChildTreeChildTreePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-child-message {\n  font-size: large;\n}\n\n.page-title {\n  display: flex;\n  align-items: center;\n}\n\n.p-l-10 {\n  padding-left: 10px;\n}\n\n.arrow-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQtdHJlZS9jaGlsZC10cmVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hpbGQtdHJlZS9jaGlsZC10cmVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1jaGlsZC1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucC1sLTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgICBjb2xvcjogdmFyKCAtLWlvbi1jb2xvci1wcmltYXJ5ICk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/child-tree/child-tree.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/child-tree/child-tree.page.ts ***!
      \***********************************************/

    /*! exports provided: ChildTreePage */

    /***/
    function srcAppChildTreeChildTreePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChildTreePage", function () {
        return ChildTreePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/user.service */
      "./src/app/service/user.service.ts");

      var ChildTreePage = /*#__PURE__*/function () {
        function ChildTreePage(activatedRoute, userService, router) {
          _classCallCheck(this, ChildTreePage);

          this.activatedRoute = activatedRoute;
          this.userService = userService;
          this.router = router;
          this.childUsers = [];
        }

        _createClass(ChildTreePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (val) {
              if (val && val.userId) {
                _this.user = _this.userService.getUser(val.userId);
                _this.childUsers = _this.userService.getChildUsers(val.userId);
              }
            });
          }
        }, {
          key: "backToPrevious",
          value: function backToPrevious() {
            this.router.navigate(['/home/' + this.user.id]);
          }
        }]);

        return ChildTreePage;
      }();

      ChildTreePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ChildTreePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-child-tree',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./child-tree.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/child-tree/child-tree.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./child-tree.page.scss */
        "./src/app/child-tree/child-tree.page.scss"))["default"]]
      })], ChildTreePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=child-tree-child-tree-module-es5.js.map