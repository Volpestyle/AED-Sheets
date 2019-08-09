(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid h-100\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-6 text-center\">\n        <p class=\"lead text-muted\">\n          Welcome to the next-generation discrepancy logger. This service is\n          available to anybody with a Web Browser inside the NPR Firewall.\n        </p>\n      </div>\n      <div class=\"col-sm-3\"></div>\n    </div>\n    <a class=\"btn btn-primary btn mt-3\" routerLink=\"/search\"\n      >Search the D-Sheet<i class=\"fas fa-search ml-2\"></i\n    ></a>\n    <a routerLink=\"/new-entry\" class=\"btn btn-primary btn ml-2 mt-3\"\n      >Make a new entry<i class=\"fas fa-file ml-2\"></i\n    ></a>\n    <a routerLink=\"/profile\" class=\"btn btn-primary btn ml-2 mt-3\"\n      >Your profile<i class=\"fas fa-cog ml-2\"></i\n    ></a>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-sm\"></div>\n    <div class=\"col-sm jumbotron\" id=\"login\">\n      <h3>Login</h3>\n      <form class=\"mt-4\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"usernameInput\">Username</label>\n          <input\n            formControlName=\"username\"\n            class=\"form-control\"\n            type=\"text\"\n            class=\"form-control\"\n            id=\"username\"\n            placeholder=\"Username\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordInput\">Password</label>\n          <input\n            formControlName=\"password\"\n            class=\"form-control\"\n            type=\"password\"\n            id=\"passwordInput\"\n            placeholder=\"Password\"\n          />\n        </div>\n        <div class=\"text-right\">\n          <div *ngIf=\"!isLoading; then submitbtn; else loadingbtn\"></div>\n          <ng-template #submitbtn>\n            <div class=\"text-left\">\n              <button type=\"submit\" class=\"btn btn-primary\">\n                Log in<i class=\"fas fa-sign-in-alt ml-2\"></i>\n              </button>\n            </div>\n          </ng-template>\n          <ng-template #loadingbtn>\n            <div class=\"text-left\">\n              <button type=\"submit\" class=\"btn btn-primary\">\n                Logging in...\n                <div class=\"spinner-border spinner-border-sm\" role=\"status\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </button>\n            </div>\n          </ng-template>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm\"></div>\n    <div class=\"col-sm\">\n      <p class=\"text-muted\">Trouble logging in? Please enable cookies.</p>\n    </div>\n    <div class=\"col-sm\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\n  <div *ngIf=\"isEditing; then editMode; else viewMode\"></div>\n  <ng-template #editMode\n    ><input\n      class=\"form-control\"\n      id=\"exampleFormControlTextarea1\"\n      rows=\"1\"\n      [(ngModel)]=\"newVal\"/>\n    <div class=\"text-right val-btns\">\n      <button class=\"btn save-btn\" (click)=\"save()\">\n        <i class=\"fas fa-save\"></i>\n      </button>\n      <button class=\"btn del-btn\" (click)=\"cancel()\">\n        <i class=\"fas fa-times\"></i>\n      </button></div\n  ></ng-template>\n  <ng-template #viewMode>\n    {{ lookupValue.title ? lookupValue.title : lookupValue.val }}\n    <div class=\"text-right val-btns\">\n      <button class=\"btn edit-btn\" (click)=\"edit()\">\n        <i class=\"fas fa-edit\"></i>\n      </button>\n      <button class=\"btn del-btn\" (click)=\"delete()\">\n        <i class=\"fas fa-trash-alt\"></i>\n      </button>\n    </div>\n  </ng-template>\n</li>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/lookup/lookup.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-lookups/lookup/lookup.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n  <h5>{{ lookup.displayName }}</h5>\n\n  <button\n    class=\"btn sort-btn\"\n    (click)=\"this.isAlphaSorted = !this.isAlphaSorted\"\n    [ngClass]=\"{ 'alpha-sorted': this.isAlphaSorted }\"\n  >\n    <i class=\"fas fa-sort-alpha-down\"></i>\n  </button>\n</div>\n<ul class=\"list-group scrollable\">\n  <li class=\"list-group-item\">\n    <div class=\"flex\">\n      <input\n        class=\"form-control\"\n        id=\"exampleFormControlTextarea1\"\n        rows=\"1\"\n        [(ngModel)]=\"newVal\"\n      />\n      <button class=\"btn btn-outline-primary btn-sm ml-2\" (click)=\"addVal()\">\n        Add\n      </button>\n    </div>\n  </li>\n  <app-lookup-val\n    *ngFor=\"let val of lookup.vals.reverse()\"\n    [lookupValue]=\"val\"\n    (onDelete)=\"delete($event)\"\n    (onSave)=\"save($event)\"\n  >\n  </app-lookup-val>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/manage-lookups.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-lookups/manage-lookups.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <h3 class=\"text-center\">Manage Lookups</h3>\n  <div class=\"lookups\">\n    <div\n      class=\"lookup border\"\n      *ngFor=\"let lookup of lookupsService.sortedLookups.list\"\n    >\n      <app-lookup [lookup]=\"lookup\"></app-lookup>\n    </div>\n    <div\n      class=\"lookup border\"\n      *ngFor=\"let lookup of lookupsService.sortedLookups.range\"\n    >\n      <app-range-lookup [lookup]=\"lookup\"></app-range-lookup>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\n  {{ lookupValue.title }}\n  <div class=\"text-right val-btns\">\n    <button class=\"btn del-btn\" (click)=\"delete()\">\n      <i class=\"fas fa-trash-alt\"></i>\n    </button>\n  </div>\n</li>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/range-lookup/range-lookup.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-lookups/range-lookup/range-lookup.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>{{ lookup.displayName }}</h5>\n<ul class=\"list-group scrollable\">\n  <li class=\"list-group-item\">\n    <div class=\"text-center\">\n      <button class=\"btn btn-outline-primary btn-sm\" (click)=\"open(content)\">\n        Create new range lookup\n      </button>\n    </div>\n  </li>\n  <app-range-lookup-val\n    *ngFor=\"let val of lookup.vals\"\n    [lookupValue]=\"val\"\n    (onDelete)=\"delete($event)\"\n  >\n  </app-range-lookup-val>\n</ul>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">\n      Create new {{ lookup.displayName | lowercase }} lookup value\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <label for=\"inputPassword3\" class=\"col-form-label\">Greater than:</label>\n      <ngb-timepicker\n        name=\"gte\"\n        [(ngModel)]=\"gteVal\"\n        [seconds]=\"seconds\"\n        [disabled]=\"gteInput\"\n      >\n      </ngb-timepicker>\n\n      <label for=\"inputPassword3\" class=\" col-form-label\">Less than:</label>\n      <ngb-timepicker\n        name=\"lte\"\n        [(ngModel)]=\"lteVal\"\n        [seconds]=\"seconds\"\n        [disabled]=\"lteInput\"\n      >\n      </ngb-timepicker>\n      <div class=\"form-check\">\n        <input\n          class=\"form-check-input\"\n          type=\"checkbox\"\n          id=\"gridCheck1\"\n          [(ngModel)]=\"lteInput\"\n        />\n        <label class=\"form-check-label\" for=\"gridCheck1\">\n          No limit\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-primary btn-block\"\n      (click)=\"onSubmit()\"\n    >\n      Create\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\"\n      ><img class=\"mr-3\" src=\"../../assets/logo.gif\" />Audio Engineering\n      D-Sheet</a\n    >\n    <ul class=\"navbar-nav justify-content-end top-nav\">\n      <div *ngIf=\"isLoggedIn | async; then loggedIn; else loggedOut\"></div>\n      <ng-template #loggedIn>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active\"\n            >Home</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"search\" routerLinkActive=\"active\"\n            >Search</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"new-entry\" routerLinkActive=\"active\"\n            >Create New Entry</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">|</a>\n        </li>\n        <li id=\"nav-profile\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"profile\" routerLinkActive=\"active\"\n            ><i class=\"fas fa-user\"></i\n          ></a>\n        </li>\n        <li id=\"nav-logout\" class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"onLogout()\"\n            >Logout<i class=\"fas fa-sign-out-alt ml-1\"></i\n          ></a>\n        </li>\n      </ng-template>\n      <ng-template #loggedOut>\n        <li id=\"nav-logout\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"login\" routerLinkActive=\"active\"\n            >Log In<i class=\"fas fa-sign-in-alt ml-1\"></i\n          ></a>\n        </li>\n      </ng-template>\n    </ul>\n    <button class=\"btn hamburger\" (click)=\"isCollapsed = !isCollapsed\">\n      <i class=\"fas fa-bars -2x\"></i>\n    </button>\n  </div>\n</nav>\n<div id=\"collapse-nav\" [@smoothCollapse]=\"isCollapsed ? 'initial' : 'final'\">\n  <nav class=\"collapsable-nav\">\n    <ul class=\"nav flex-column\">\n      <div *ngIf=\"isLoggedIn | async; then loggedInC; else loggedOutC\"></div>\n      <ng-template #loggedInC>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active\"\n            >Home</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"search\" routerLinkActive=\"active\"\n            >Search</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"new-entry\" routerLinkActive=\"active\"\n            >Create New Entry</a\n          >\n        </li>\n        <li id=\"nav-profile\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"profile\" routerLinkActive=\"active\"\n            >Profile\n          </a>\n        </li>\n        <li id=\"nav-logout\" class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"onLogout()\"\n            >Logout<i class=\"fas fa-sign-out-alt ml-1\"></i\n          ></a>\n        </li>\n      </ng-template>\n      <ng-template #loggedOutC>\n        <li id=\"nav-logout\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"login\" routerLinkActive=\"active\"\n            >Log In<i class=\"fas fa-sign-in-alt ml-1\"></i\n          ></a>\n        </li>\n      </ng-template>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/new-entry/new-entry.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/new-entry/new-entry.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\" *ngIf=\"lookupsService.sortedVals\">\n  <div class=\"row\">\n    <div class=\"col-sm-1\"></div>\n    <div class=\"mt-3 col-sm-10 mx-auto\">\n      <h3 class=\"text-center mb-4\">Create a New Entry</h3>\n      <form class=\"mt-4\" [formGroup]=\"CreateForm\">\n        <div class=\"form-group row\">\n          <label for=\"inputDate\" class=\"col-sm-2 col-form-label text-right\"\n            >Date:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8 input-group\">\n            <input\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              name=\"dp\"\n              [(ngModel)]=\"date\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              ngbDatepicker\n              (ngModelChange)=\"onDateSelection($event, d)\"\n              #d=\"ngbDatepicker\"\n            />\n            <div class=\"input-group-append\">\n              <button\n                class=\"btn btn-outline-secondary calendar\"\n                (click)=\"d.toggle()\"\n                type=\"button\"\n              >\n                <i class=\"fas fa-calendar-alt\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputDate\" class=\"col-sm-2 col-form-label text-right\"\n            >Time:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <ngb-timepicker\n              name=\"time\"\n              [(ngModel)]=\"time\"\n              [seconds]=\"true\"\n              [ngModelOptions]=\"{ standalone: true }\"\n            ></ngb-timepicker>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label text-right\"\n            >Location:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <select class=\"custom-select\" formControlName=\"locationControl\">\n              <option value=\"\" selected disabled>Please select</option>\n              <option\n                [ngValue]=\"value.val\"\n                *ngFor=\"let value of lookupsService.sortedVals.location\"\n              >\n                {{ value.val }}</option\n              >\n            </select>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label text-right\"\n            >Show:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <select class=\"custom-select\" formControlName=\"showControl\">\n              <option value=\"\" selected disabled>Please select</option>\n              <option\n                [ngValue]=\"value.val\"\n                *ngFor=\"let value of lookupsService.sortedVals.show\"\n              >\n                {{ value.val }}</option\n              >\n            </select>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label text-right\"\n            >Classification:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <select\n              class=\"custom-select\"\n              formControlName=\"classificationControl\"\n            >\n              <option value=\"\" selected disabled>Please select</option>\n              <option\n                [ngValue]=\"value.val\"\n                *ngFor=\"let value of lookupsService.sortedVals.classification\"\n              >\n                {{ value.val }}</option\n              >\n            </select>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label text-right\"\n            >What was heard on air:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <select class=\"custom-select\" formControlName=\"heardOnAirControl\">\n              <option value=\"\" selected disabled>Please select</option>\n              <option\n                [ngValue]=\"value.val\"\n                *ngFor=\"let value of lookupsService.sortedVals.heardOnAir\"\n              >\n                {{ value.val }}</option\n              >\n            </select>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label text-right\"\n            >Action taken by drive tech:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <select class=\"custom-select\" formControlName=\"actionTakenControl\">\n              <option value=\"\" selected disabled>Please select</option>\n              <option\n                [ngValue]=\"value.val\"\n                *ngFor=\"let value of lookupsService.sortedVals.actionTaken\"\n              >\n                {{ value.val }}</option\n              >\n            </select>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2 text-right\">On Air:</div>\n          <div class=\"col-sm-8\">\n            <div class=\"form-check\">\n              <input\n                formControlName=\"onAirControl\"\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                id=\"onAir\"\n              />\n            </div>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2 text-right\">Funder:</div>\n          <div class=\"col-sm-10\">\n            <div class=\"form-check\">\n              <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                id=\"gridCheck1\"\n                formControlName=\"funderControl\"\n              />\n            </div>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label for=\"inputDate\" class=\"col-sm-2 col-form-label text-right\"\n            >Duration:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <ngb-timepicker\n              name=\"duration\"\n              [(ngModel)]=\"duration\"\n              [ngModelOptions]=\"{ standalone: true }\"\n              [seconds]=\"true\"\n            ></ngb-timepicker>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputEtag\" class=\"col-sm-2 col-form-label text-right\"\n            >E-Tag:</label\n          >\n          <div class=\"col-sm-8\">\n            <textarea\n              class=\"form-control\"\n              id=\"inputEtag\"\n              rows=\"1\"\n              formControlName=\"eTagControl\"\n            ></textarea>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputEntry\" class=\"col-sm-2 col-form-label text-right\"\n            >What actually happened:<span class=\"red\">*</span></label\n          >\n          <div class=\"col-sm-8\">\n            <textarea\n              class=\"form-control\"\n              id=\"inputEntry\"\n              rows=\"3\"\n              formControlName=\"whatActuallyHappenedControl\"\n            ></textarea>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2 text-right\">Create IT Service Ticket:</div>\n          <div class=\"col-sm-8\">\n            <div class=\"form-check\">\n              <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                id=\"gridCheck1\"\n                formControlName=\"createItServiceTicketControl\"\n              />\n            </div>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2 text-right\">File Attachment:</div>\n          <div class=\"input-group mb-3 col-sm-8\">\n            <div class=\"custom-file\">\n              <input\n                type=\"file\"\n                name=\"file\"\n                class=\"custom-file-input\"\n                multiple\n                id=\"importFile\"\n                (change)=\"onFileChange($event.target.files)\"\n              />\n              <label class=\"custom-file-label\" for=\"importFile\" #labelImport\n                >Choose file</label\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2\"></div>\n          <div class=\"col-sm-8\">\n            <button\n              type=\"submit\"\n              class=\"btn btn-primary btn-block\"\n              (click)=\"open(content)\"\n            >\n              Submit\n            </button>\n          </div>\n          <div class=\"col-sm-2\"></div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-1\"></div>\n  </div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Confirm Submission</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\" *ngFor=\"let info of infos\">\n      <div class=\"col-sm-4\">\n        <h6 class=\"font-weight-bold\">{{ info.title }}</h6>\n      </div>\n      <div class=\"col-sm-8\">\n        <p>\n          {{ info.data }}\n        </p>\n      </div>\n    </div>\n    <div *ngIf=\"fileToUpload\">\n      <h6 class=\"font-weight-bold\">Attachment:</h6>\n      <div *ngIf=\"imgURL; then imgPrev; else noPrev\"></div>\n      <ng-template #imgPrev><img [src]=\"imgURL\" height=\"200\"/></ng-template>\n      <ng-template #noPrev\n        ><p>{{ fileToUpload.type }} <br > No Preview Available</p>\n        </ng-template\n      >\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-primary btn-block\"\n      (click)=\"onSubmit()\"\n    >\n      Confirm\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\n  <section class=\"jumbotron\">\n    <h3>Your Profile</h3>\n    <hr />\n    <h4>Hello, {{ name }}</h4>\n    <h5>{{ email }}</h5>\n  </section>\n  <section class=\"jumbotron\">\n    <h3>Subscribed Searches</h3>\n    <hr />\n    <app-subscription\n      *ngFor=\"let sub of subscriptions\"\n      [subbedSearch]=\"sub\"\n      (onDelete)=\"unSub($event)\"\n    ></app-subscription>\n  </section>\n  <section class=\"jumbotron\">\n    <h3>Admin Tools</h3>\n    <hr />\n    <button class=\"btn btn-primary\" routerLink=\"/manage-lookups\">\n      Manage Lookups\n    </button>\n  </section>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/subscription/subscription.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/subscription/subscription.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-3\">\n  <div class=\"sub\">\n    <button class=\"btn btn-danger btn-sm\" (click)=\"delete()\">\n      Unsubscribe\n    </button>\n    <h6>{{ subbedSearch.name }}</h6>\n    <h6>{{ subbedSearch.interval.title }}</h6>\n    <div class=\"inline\">\n      <div class=\"ml-1\" *ngFor=\"let prop of props\">\n        <span class=\"badge badge-info\">\n          {{ prop.key }}:\n          <span class=\"font-weight-normal\">{{ prop.val }}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/results/result/entry-notes/entry-notes.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/results/result/entry-notes/entry-notes.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 class=\"font-weight-bold mt-3\">Notes:</h6>\n<ul class=\"list-group scrollable\">\n  <li class=\"list-group-item note\" *ngFor=\"let note of notes\">\n    <div class=\"text-right note-delete\">\n      <button class=\"btn btn-danger btn-circle\" (click)=\"deleteNote(note._id)\">\n        <i class=\"fas fa-times\"></i>\n      </button>\n    </div>\n    <span>{{ utilService.formatDate(note.createdAt, dateOptions) }}</span>\n    <span class=\"font-weight-bold\"> {{ note.author }} :</span>\n    {{ note.content }}\n  </li>\n</ul>\n<div class=\"form-group mt-2\" [formGroup]=\"newNoteForm\">\n  <label for=\"exampleFormControlTextarea1\">New Note:</label>\n  <div class=\"flex\">\n    <textarea\n      class=\"form-control\"\n      id=\"exampleFormControlTextarea1\"\n      rows=\"1\"\n      formControlName=\"noteContentControl\"\n    ></textarea>\n    <button class=\"btn btn-outline-primary btn-sm ml-2\" (click)=\"onSubmit()\">\n      Submit\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/results/result/result.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/results/result/result.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck mb-5\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row\">\n        <div class=\"col-sm-auto text-left header-date\">\n          {{ utilService.formatDate(result.date) }}\n        </div>\n        <div class=\"col-sm-6 text-left\">\n          <span class=\"font-weight-bold\">Submitted By:</span>\n          {{ result.submittedBy }}\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"flex\">\n          <li class=\"list-group-item\" *ngFor=\"let i of info\">\n            <span class=\"font-weight-bold\">{{ i.title }}: </span>\n            {{ i.value }}\n          </li>\n        </div>\n        <div class=\"col-sm-6\">\n          <ul class=\"list-group\"></ul>\n        </div>\n      </div>\n      <div class=\"card-description\" *ngIf=\"result.eTag\">\n        <h6 class=\"font-weight-bold mt-3\">E-Tag:</h6>\n        <p class=\"card-text\">{{ result.eTag }}</p>\n      </div>\n      <div class=\"card-description\">\n        <h6 class=\"font-weight-bold mt-3\">Description:</h6>\n        <p class=\"card-text mt-2 pb-2\">\n          {{ result.entry }}\n        </p>\n      </div>\n      <div class=\"card-notes\">\n        <app-entry-notes\n          [entryId]=\"result._id\"\n          [notes]=\"result.notes\"\n        ></app-entry-notes>\n      </div>\n      <div *ngIf=\"result.attachment\">\n        <button\n          class=\"btn btn-primary mb-2\"\n          (click)=\"downloadAttachment(result.attachment)\"\n        >\n          See Attachment <i class=\"fas fa-paperclip ml-1\"></i>\n        </button>\n      </div>\n      <button class=\"btn btn-danger\" (click)=\"deleteEntry()\">\n        Delete Entry <i class=\"fas fa-trash-alt ml-1\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/results/results.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/results/results.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"searchService.hasInit\">\n  <div>\n    <h3 class=\"mb-4 results-header\">\n      Results:\n      <span class=\"text-muted\"\n        >({{ resultsCount }}) found, ({{ _results.length }}) listed</span\n      >\n    </h3>\n\n    <div class=\"container-fluid\">\n      <app-result\n        *ngFor=\"let result of _results\"\n        [result]=\"result\"\n        (onDelete)=\"removeDeleted($event)\"\n      ></app-result>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row h-100\" *ngIf=\"lookupsService.sortedVals\">\n  <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n    <div class=\"sidebar-sticky\">\n      <h5 class=\"pt-3\">Add Filters</h5>\n      <div class=\"form-group\">\n        <label for=\"inputTechName\" class=\"col-form-label text-right\"\n          >Tech Name:</label\n        >\n        <ng-multiselect-dropdown\n          id=\"inputTechName\"\n          [placeholder]=\"'None'\"\n          [data]=\"techNames\"\n          [(ngModel)]=\"techNameModel\"\n          [settings]=\"dropdownSettings\"\n        >\n        </ng-multiselect-dropdown>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Location:</label>\n        <ng-multiselect-dropdown\n          [placeholder]=\"'None'\"\n          [data]=\"lookupsService.sortedVals.location\"\n          [(ngModel)]=\"locationModel\"\n          [settings]=\"dropdownSettings\"\n        >\n        </ng-multiselect-dropdown>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Show:</label>\n        <ng-multiselect-dropdown\n          [placeholder]=\"'None'\"\n          [data]=\"lookupsService.sortedVals.show\"\n          [(ngModel)]=\"showModel\"\n          [settings]=\"dropdownSettings\"\n        >\n        </ng-multiselect-dropdown>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Classification:</label>\n        <ng-multiselect-dropdown\n          [placeholder]=\"'None'\"\n          [data]=\"lookupsService.sortedVals.classification\"\n          [(ngModel)]=\"classModel\"\n          [settings]=\"dropdownSettings\"\n        >\n        </ng-multiselect-dropdown>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">What was heard on air:</label>\n        <ng-multiselect-dropdown\n          [placeholder]=\"'None'\"\n          [data]=\"lookupsService.sortedVals.heardOnAir\"\n          [(ngModel)]=\"heardOnAirModel\"\n          [settings]=\"dropdownSettings\"\n        >\n        </ng-multiselect-dropdown>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Action taken by drive tech:</label>\n        <ng-multiselect-dropdown\n          [placeholder]=\"'None'\"\n          [data]=\"lookupsService.sortedVals.actionTaken\"\n          [(ngModel)]=\"actionTakenModel\"\n          [settings]=\"dropdownSettings\"\n        >\n        </ng-multiselect-dropdown>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\">Duration:</label>\n        <select\n          class=\"custom-select\"\n          [(ngModel)]=\"durationModel\"\n          *ngIf=\"!isEditingDuration\"\n        >\n          <option value=\"{{ {} }}\" selected>None</option>\n          <option\n            [ngValue]=\"value.val\"\n            *ngFor=\"let value of lookupsService.sortedVals.duration\"\n          >\n            {{ value.title }}</option\n          >\n        </select>\n\n        <div *ngIf=\"isEditingDuration\">\n          <input\n            class=\"form-control mt-2\"\n            type=\"text\"\n            [(ngModel)]=\"durationModel.gte\"\n          />\n          to\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            [(ngModel)]=\"durationModel.lte\"\n          />\n        </div>\n        <button\n          class=\"btn btn-sm btn-secondary mt-2\"\n          (click)=\"isEditingDuration = !isEditingDuration\"\n        >\n          {{ !isEditingDuration ? 'Edit' : 'Close' }}\n        </button>\n      </div>\n      <div class=\"form-group form-inline\">\n        <label class=\"col-form-label\">On Air:</label>\n        <div\n          class=\"btn-group btn-group-toggle\"\n          ngbRadioGroup\n          name=\"onAir\"\n          [(ngModel)]=\"onAirModel\"\n        >\n          <label ngbButtonLabel class=\"btn-primary btn-sm\">\n            <input ngbButton type=\"radio\" [value]=\"null\" /> Any\n          </label>\n          <label ngbButtonLabel class=\"btn-primary btn-sm\">\n            <input ngbButton type=\"radio\" [value]=\"true\" /> True\n          </label>\n          <label ngbButtonLabel class=\"btn-primary btn-sm\">\n            <input ngbButton type=\"radio\" [value]=\"false\" /> False\n          </label>\n        </div>\n      </div>\n      <div class=\"form-group form-inline\">\n        <label class=\"col-form-label\">Funder:</label>\n        <div\n          class=\"btn-group btn-group-toggle\"\n          ngbRadioGroup\n          name=\"funder\"\n          [(ngModel)]=\"funderModel\"\n        >\n          <label ngbButtonLabel class=\"btn-primary btn-sm\">\n            <input ngbButton type=\"radio\" [value]=\"null\" /> Any\n          </label>\n          <label ngbButtonLabel class=\"btn-primary btn-sm\">\n            <input ngbButton type=\"radio\" [value]=\"true\" /> True\n          </label>\n          <label ngbButtonLabel class=\"btn-primary btn-sm\">\n            <input ngbButton type=\"radio\" [value]=\"false\" /> False\n          </label>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <div class=\"col-md-9 pt-3 px-4\">\n    <h3 class=\"mb-4\">Search the D-Sheet</h3>\n    <div class=\"form-group col-sm-6\">\n      <label for=\"inputDate\" class=\"col-form-label text-right\"\n        >Date Range:</label\n      >\n      <div class=\"input-group\">\n        <input\n          class=\"form-control\"\n          placeholder=\"yyyy-mm-dd\"\n          name=\"dp\"\n          (dateSelect)=\"onDateSelection($event, d)\"\n          [displayMonths]=\"2\"\n          [dayTemplate]=\"t\"\n          [autoClose]=\"false\"\n          [value]=\"range_date\"\n          ngbDatepicker\n          #d=\"ngbDatepicker\"\n          (click)=\"dp.toggle(); isOpen = !isOpen\"\n          readonly\n        />\n        <div class=\"input-group-append\">\n          <button\n            class=\"btn btn-outline-secondary\"\n            (click)=\"d.toggle()\"\n            type=\"button\"\n          >\n            <i class=\"fas fa-calendar-alt\"></i>\n          </button>\n        </div>\n      </div>\n      <ng-template #t let-date let-focused=\"focused\">\n        <span\n          class=\"custom-day\"\n          [class.focused]=\"focused\"\n          [class.range]=\"isRange(date)\"\n          [class.faded]=\"isHovered(date) || isInside(date)\"\n          (mouseenter)=\"hoveredDate = date\"\n          (mouseleave)=\"hoveredDate = null\"\n        >\n          {{ date.day }}\n        </span>\n      </ng-template>\n    </div>\n    <div class=\"form-group col-sm-6\">\n      <label for=\"inputEtag\" class=\"col-form-label text-right\">E-Tag:</label>\n      <textarea\n        class=\"form-control\"\n        id=\"InputEtag\"\n        rows=\"1\"\n        [(ngModel)]=\"eTagModel\"\n      ></textarea>\n    </div>\n    <div class=\"form-group col-sm-6\">\n      <label for=\"inputEntry\" class=\"col-form-label text-right\">Entry:</label>\n      <textarea\n        class=\"form-control\"\n        id=\"InputEntry\"\n        rows=\"3\"\n        [(ngModel)]=\"entryModel\"\n      ></textarea>\n    </div>\n\n    <div class=\"form-group col-sm-6\">\n      <div *ngIf=\"!isLoading; then submitbtn; else loadingbtn\"></div>\n      <ng-template #submitbtn>\n        <div class=\"text-left\">\n          <button class=\"btn btn-primary\" (click)=\"onSubmit()\">\n            Search<i class=\"fas fa-search ml-2\"></i>\n          </button>\n        </div>\n      </ng-template>\n      <ng-template #loadingbtn>\n        <div class=\"text-left\">\n          <button class=\"btn btn-primary\" disabled>\n            Searching...\n            <div class=\"spinner-border spinner-border-sm\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </button>\n        </div>\n      </ng-template>\n    </div>\n\n    <button\n      class=\"btn btn-primary btn-sm mb-3 mt-4\"\n      *ngIf=\"searchService.hasInit\"\n      (click)=\"open(content)\"\n    >\n      Subscribe to this search\n    </button>\n    <div *ngIf=\"!isOutputting; then outputbtn; else outputtingbtn\"></div>\n    <ng-template #outputbtn>\n      <button\n        class=\"btn btn-secondary btn-sm mb-3 mt-4 mx-3\"\n        *ngIf=\"searchService.hasInit\"\n        (click)=\"outputToCsv()\"\n      >\n        Output to .csv\n      </button>\n    </ng-template>\n    <ng-template #outputtingbtn>\n      <button\n        class=\"btn btn-secondary btn-sm mb-3 mt-4 mx-3\"\n        *ngIf=\"searchService.hasInit\"\n        disabled\n      >\n        Output to .csv\n        <div class=\"spinner-border spinner-border-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </button>\n    </ng-template>\n\n    <app-results [results]=\"results\"></app-results>\n    <div class=\"mx-auto center\" *ngIf=\"results.count > results.results.length\">\n      <div *ngIf=\"!isLoadingMore; then loadmorebtn; else loadingmorebtn\"></div>\n      <ng-template #loadmorebtn>\n        <button class=\"btn btn-outline-primary\" (click)=\"loadMore()\">\n          Load More\n        </button>\n      </ng-template>\n      <ng-template #loadingmorebtn>\n        <button class=\"btn btn-outline-primary\" disabled>\n          Loading More...\n          <div class=\"spinner-border spinner-border-sm\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </ng-template>\n    </div>\n  </div>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Name this subscription.</h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"modal.dismiss()\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <label for=\"subName\">Subscription name:</label>\n      <div class=\"input-group\">\n        <input\n          id=\"subName\"\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"subName\"\n        />\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"subName\">Time in between notifications:</label>\n      <div class=\"input-group\">\n        <select class=\"custom-select\" [(ngModel)]=\"emailFreq\">\n          <option [ngValue]=\"lookup\" *ngFor=\"let lookup of emailFreqLookups\">\n            {{lookup.title}}</option\n          >\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div *ngIf=\"!isSaving; then savebtn; else savingbtn\"></div>\n    <ng-template #savebtn>\n      <button\n        type=\"button\"\n        class=\"btn btn-outline-primary\"\n        (click)=\"saveSearch()\"\n      >\n        Save\n      </button>\n    </ng-template>\n    <ng-template #savingbtn>\n      <button\n        class=\"btn btn-outline-primary btn-sm mb-3 mt-4\"\n        *ngIf=\"searchService.hasInit\"\n        disabled\n      >\n        Saving...\n        <div class=\"spinner-border spinner-border-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </button>\n    </ng-template>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'd-sheet';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nav_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav.config */ "./src/app/nav.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/new-entry/new-entry.component */ "./src/app/components/new-entry/new-entry.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_manage_lookups_manage_lookups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/manage-lookups/manage-lookups.component */ "./src/app/components/manage-lookups/manage-lookups.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_auth_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth/jwt-interceptor.service */ "./src/app/services/auth/jwt-interceptor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");
/* harmony import */ var _components_results_result_entry_notes_entry_notes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/results/result/entry-notes/entry-notes.component */ "./src/app/components/results/result/entry-notes/entry-notes.component.ts");
/* harmony import */ var _components_manage_lookups_lookup_lookup_val_lookup_val_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/manage-lookups/lookup/lookup-val/lookup-val.component */ "./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.ts");
/* harmony import */ var _components_manage_lookups_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/manage-lookups/lookup/lookup.component */ "./src/app/components/manage-lookups/lookup/lookup.component.ts");
/* harmony import */ var _components_manage_lookups_range_lookup_range_lookup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/manage-lookups/range-lookup/range-lookup.component */ "./src/app/components/manage-lookups/range-lookup/range-lookup.component.ts");
/* harmony import */ var _components_manage_lookups_range_lookup_range_lookup_val_range_lookup_val_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component */ "./src/app/components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component.ts");
/* harmony import */ var _pipes_remove_whitespace_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/remove-whitespace.pipe */ "./src/app/pipes/remove-whitespace.pipe.ts");
/* harmony import */ var _pipes_camelize_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/camelize.pipe */ "./src/app/pipes/camelize.pipe.ts");
/* harmony import */ var _components_results_result_result_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/results/result/result.component */ "./src/app/components/results/result/result.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _components_profile_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/profile/subscription/subscription.component */ "./src/app/components/profile/subscription/subscription.component.ts");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_11__["NewEntryComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_manage_lookups_manage_lookups_component__WEBPACK_IMPORTED_MODULE_15__["ManageLookupsComponent"],
                _components_results_results_component__WEBPACK_IMPORTED_MODULE_22__["ResultsComponent"],
                _components_results_result_entry_notes_entry_notes_component__WEBPACK_IMPORTED_MODULE_23__["EntryNotesComponent"],
                _components_manage_lookups_lookup_lookup_val_lookup_val_component__WEBPACK_IMPORTED_MODULE_24__["LookupValComponent"],
                _components_manage_lookups_lookup_lookup_component__WEBPACK_IMPORTED_MODULE_25__["LookupComponent"],
                _components_manage_lookups_range_lookup_range_lookup_component__WEBPACK_IMPORTED_MODULE_26__["RangeLookupComponent"],
                _components_manage_lookups_range_lookup_range_lookup_val_range_lookup_val_component__WEBPACK_IMPORTED_MODULE_27__["RangeLookupValComponent"],
                _pipes_remove_whitespace_pipe__WEBPACK_IMPORTED_MODULE_28__["RemoveWhitespacePipe"],
                _pipes_camelize_pipe__WEBPACK_IMPORTED_MODULE_29__["CamelizePipe"],
                _components_results_result_result_component__WEBPACK_IMPORTED_MODULE_30__["ResultComponent"],
                _components_profile_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_32__["SubscriptionComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_31__["NgMultiSelectDropDownModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_nav_config__WEBPACK_IMPORTED_MODULE_5__["routerConfig"], { enableTracing: false }),
            ],
            providers: [
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptorService"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  padding-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG4iLCIuanVtYm90cm9uIHtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\n  margin-top: 6rem;\n}\n\n.jumbotron {\n  padding: 2rem 2rem;\n}\n\n.text-muted {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG59XG5cbi50ZXh0LW11dGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIiwiI2xvZ2luIHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcbn1cblxuLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, userService, formBuilder, router, authService, toastr) {
        this.dataService = dataService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "form", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.loginForm.value);
        if (this.loginForm.status == 'VALID') {
            this.isLoading = true;
            var encodedPassword = btoa(this.form.password.value);
            this.authService
                .login(this.form.username.value, encodedPassword)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (_a) {
                var user = _a.user;
                console.log(user);
                _this.authService.isLoggedIn = true;
                _this.createUser(user).then(function (user) {
                    console.log(user);
                    _this.isLoading = false;
                    _this.router.navigate(['/']);
                    _this.toastr.success('', 'Login Success', {
                        positionClass: 'toast-top-center',
                        closeButton: true,
                        timeOut: 3000,
                    });
                });
            }, function (err) {
                console.log(err);
                _this.isLoading = false;
                _this.toastr.error("" + err.error.info, 'Login Failure', {
                    positionClass: 'toast-top-center',
                    closeButton: true,
                    timeOut: 3000,
                });
            });
        }
        else {
            this.toastr.warning('Please fill out all fields', 'Login Failure', {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 3000,
            });
        }
    };
    LoginComponent.prototype.createUser = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.dataService
                .createUser(user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (user) {
                _this.userService
                    .getPersonInfo()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (userInfo) {
                    _this.dataService
                        .updateUser(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { info: userInfo }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (user) {
                        resolve(user);
                    }, function (err) {
                        reject();
                    });
                }, function (err) {
                    reject();
                });
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
        { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".val-btns {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0.3rem;\n}\n.val-btns i {\n  color: #acacac;\n}\n.val-btns i:hover {\n  color: #2c2c2c;\n}\n.val-btns .edit-btn {\n  padding-right: 0.5rem;\n}\n.val-btns .del-btn {\n  padding-left: 0.5rem;\n}\n.list-group-item {\n  word-break: break-all;\n  padding-right: 4.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbG9va3Vwcy9sb29rdXAvbG9va3VwLXZhbC9sb29rdXAtdmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZS1sb29rdXBzL2xvb2t1cC9sb29rdXAtdmFsL2xvb2t1cC12YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURBRTtFQUNFLGNBQUE7QUNFSjtBREFFO0VBQ0UscUJBQUE7QUNFSjtBREFFO0VBQ0Usb0JBQUE7QUNFSjtBREVBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbG9va3Vwcy9sb29rdXAvbG9va3VwLXZhbC9sb29rdXAtdmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhbC1idG5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAuM3JlbTtcbiAgaSB7XG4gICAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcbiAgfVxuICBpOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xuICB9XG4gIC5lZGl0LWJ0biB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICB9XG4gIC5kZWwtYnRuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgfVxufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBwYWRkaW5nLXJpZ2h0OiA0LjdyZW07XG59XG4iLCIudmFsLWJ0bnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMC4zcmVtO1xufVxuLnZhbC1idG5zIGkge1xuICBjb2xvcjogI2FjYWNhYztcbn1cbi52YWwtYnRucyBpOmhvdmVyIHtcbiAgY29sb3I6ICMyYzJjMmM7XG59XG4udmFsLWJ0bnMgLmVkaXQtYnRuIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuLnZhbC1idG5zIC5kZWwtYnRuIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDQuN3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LookupValComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupValComponent", function() { return LookupValComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/lookup */ "./src/app/models/lookup.ts");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LookupValComponent = /** @class */ (function () {
    function LookupValComponent(dataService) {
        this.dataService = dataService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditing = false;
        this.newVal = '';
    }
    LookupValComponent.prototype.ngOnInit = function () { };
    LookupValComponent.prototype.edit = function () {
        this.isEditing = true;
        this.newVal = this.lookupValue.val;
    };
    LookupValComponent.prototype.cancel = function () {
        this.isEditing = false;
    };
    LookupValComponent.prototype.save = function () {
        var _this = this;
        if (this.newVal) {
            this.lookupValue.val = this.newVal;
            this.dataService
                .updateLookupValue(this.lookupValue)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (newVal) {
                _this.isEditing = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    LookupValComponent.prototype.delete = function () {
        this.onDelete.emit(this.lookupValue._id);
    };
    LookupValComponent.ctorParameters = function () { return [
        { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupValue"])
    ], LookupValComponent.prototype, "lookupValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupValComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LookupValComponent.prototype, "onSave", void 0);
    LookupValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lookup-val',
            template: __webpack_require__(/*! raw-loader!./lookup-val.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.html"),
            styles: [__webpack_require__(/*! ./lookup-val.component.scss */ "./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LookupValComponent);
    return LookupValComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-lookups/lookup/lookup.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/manage-lookups/lookup/lookup.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.scrollable {\n  height: 200px;\n  width: 300px;\n  overflow-y: scroll;\n  overflow-x: auto;\n}\n\n.sort-btn {\n  margin-bottom: 0.5rem;\n  float: right;\n}\n\n.alpha-sorted {\n  color: white;\n  background-color: #4da0ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbG9va3Vwcy9sb29rdXAvbG9va3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZS1sb29rdXBzL2xvb2t1cC9sb29rdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbG9va3Vwcy9sb29rdXAvbG9va3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2Nyb2xsYWJsZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uc29ydC1idG4ge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmFscGhhLXNvcnRlZCB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgMTYwLCAyNTUpO1xufVxuIiwiLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zY3JvbGxhYmxlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5zb3J0LWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWxwaGEtc29ydGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRhMGZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/manage-lookups/lookup/lookup.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/manage-lookups/lookup/lookup.component.ts ***!
  \**********************************************************************/
/*! exports provided: LookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupComponent", function() { return LookupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/lookup */ "./src/app/models/lookup.ts");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");






var LookupComponent = /** @class */ (function () {
    function LookupComponent(dataService, utilService) {
        this.dataService = dataService;
        this.utilService = utilService;
        this.newVal = '';
        this._isAlphaSorted = false;
    }
    LookupComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(LookupComponent.prototype, "isAlphaSorted", {
        get: function () {
            return this._isAlphaSorted;
        },
        set: function (val) {
            this._isAlphaSorted = val;
            this.checkAlphaSort();
        },
        enumerable: true,
        configurable: true
    });
    LookupComponent.prototype.checkAlphaSort = function () {
        if (this.isAlphaSorted)
            this.lookup.vals.sort(function (a, b) { return (a.val > b.val ? -1 : 1); });
    };
    LookupComponent.prototype.addVal = function () {
        var _this = this;
        if (this.newVal) {
            this.dataService
                .addLookupValue(new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupValue"](this.lookup.name, this.newVal))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (newVal) {
                _this.lookup.vals.push(newVal);
                _this.newVal = '';
                _this.checkAlphaSort();
            }, function (err) {
                console.log(err);
            });
        }
        else
            this.utilService.emptyNewLookupMsg();
    };
    LookupComponent.prototype.delete = function (valueId) {
        var _this = this;
        this.dataService
            .deleteLookupValue(valueId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (deletedValue) {
            _this.lookup.vals = _this.lookup.vals.filter(function (v) { return v._id !== deletedValue._id; });
            _this.checkAlphaSort();
        }, function (err) {
            console.log(err);
            _this.utilService.deleteErrorLookupMsg();
        });
    };
    LookupComponent.ctorParameters = function () { return [
        { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__["Lookup"])
    ], LookupComponent.prototype, "lookup", void 0);
    LookupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lookup',
            template: __webpack_require__(/*! raw-loader!./lookup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/lookup/lookup.component.html"),
            styles: [__webpack_require__(/*! ./lookup.component.scss */ "./src/app/components/manage-lookups/lookup/lookup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], LookupComponent);
    return LookupComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-lookups/manage-lookups.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/manage-lookups/manage-lookups.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lookups {\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n}\n\n.lookup {\n  margin: 1rem;\n  margin-bottom: 3rem;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbG9va3Vwcy9tYW5hZ2UtbG9va3Vwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbG9va3Vwcy9tYW5hZ2UtbG9va3Vwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtbG9va3Vwcy9tYW5hZ2UtbG9va3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb29rdXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWdyb3c6IDE7XG59XG4ubG9va3VwIHtcbiAgbWFyZ2luOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuIiwiLmxvb2t1cHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmxvb2t1cCB7XG4gIG1hcmdpbjogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/manage-lookups/manage-lookups.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/manage-lookups/manage-lookups.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManageLookupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLookupsComponent", function() { return ManageLookupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lookups/lookups.service */ "./src/app/services/lookups/lookups.service.ts");



var ManageLookupsComponent = /** @class */ (function () {
    function ManageLookupsComponent(lookupsService) {
        this.lookupsService = lookupsService;
    }
    ManageLookupsComponent.prototype.ngOnInit = function () {
        this.lookupsService.getLookups();
    };
    ManageLookupsComponent.ctorParameters = function () { return [
        { type: src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_2__["LookupsService"] }
    ]; };
    ManageLookupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-lookups',
            template: __webpack_require__(/*! raw-loader!./manage-lookups.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/manage-lookups.component.html"),
            providers: [src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_2__["LookupsService"]],
            styles: [__webpack_require__(/*! ./manage-lookups.component.scss */ "./src/app/components/manage-lookups/manage-lookups.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_2__["LookupsService"]])
    ], ManageLookupsComponent);
    return ManageLookupsComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RangeLookupValComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLookupValComponent", function() { return RangeLookupValComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/lookup */ "./src/app/models/lookup.ts");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");




var RangeLookupValComponent = /** @class */ (function () {
    function RangeLookupValComponent(utilService) {
        this.utilService = utilService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RangeLookupValComponent.prototype.ngOnInit = function () { };
    RangeLookupValComponent.prototype.delete = function () {
        this.onDelete.emit(this.lookupValue._id);
    };
    RangeLookupValComponent.ctorParameters = function () { return [
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupValue"])
    ], RangeLookupValComponent.prototype, "lookupValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RangeLookupValComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RangeLookupValComponent.prototype, "onEdit", void 0);
    RangeLookupValComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-range-lookup-val',
            template: __webpack_require__(/*! raw-loader!./range-lookup-val.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/range-lookup/range-lookup-val/range-lookup-val.component.html"),
            styles: [__webpack_require__(/*! ../../lookup/lookup-val/lookup-val.component.scss */ "./src/app/components/manage-lookups/lookup/lookup-val/lookup-val.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], RangeLookupValComponent);
    return RangeLookupValComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-lookups/range-lookup/range-lookup.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/manage-lookups/range-lookup/range-lookup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RangeLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLookupComponent", function() { return RangeLookupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/lookup */ "./src/app/models/lookup.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RangeLookupComponent = /** @class */ (function () {
    function RangeLookupComponent(modalService, dataService, utilService) {
        this.modalService = modalService;
        this.dataService = dataService;
        this.utilService = utilService;
        this.seconds = true;
        this.sortByGte = function (a, b) { return (a.val.gte > b.val.gte ? 1 : -1); };
    }
    RangeLookupComponent.prototype.ngOnInit = function () {
        this.lookup.vals.sort(this.sortByGte);
    };
    Object.defineProperty(RangeLookupComponent.prototype, "lteInput", {
        get: function () {
            return this._lteInput;
        },
        set: function (val) {
            this._lteInput = val;
            this.lteVal = this._lteInput ? 'no limit' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    RangeLookupComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result;
    };
    RangeLookupComponent.prototype.close = function () {
        this.modalService.dismissAll();
        this.gteVal = '';
        this.lteVal = '';
    };
    RangeLookupComponent.prototype.onSubmit = function () {
        var _this = this;
        var gteSeconds;
        var lteSeconds;
        if (this.lteVal && this.gteVal) {
            this.getTitle();
            if (this.lteVal !== 'no limit') {
                lteSeconds = this.utilService.objToSeconds(this.lteVal);
            }
            gteSeconds = this.utilService.objToSeconds(this.gteVal);
            if (gteSeconds < lteSeconds || !lteSeconds) {
                this.dataService
                    .addLookupValue(new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupValue"](this.lookup.name, { gte: gteSeconds, lte: lteSeconds }, this.title))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                    .subscribe(function (val) {
                    _this.lookup.vals.push(val);
                    _this.lookup.vals.sort(_this.sortByGte);
                    _this.lteVal = undefined;
                    _this.gteVal = undefined;
                    _this.lteInput = false;
                    _this.close();
                    _this.utilService.lookupAddMsg();
                });
            }
            else
                this.utilService.gteLteErrorMsg();
        }
        else
            this.utilService.incompleteFieldsMsg();
    };
    RangeLookupComponent.prototype.getTitle = function () {
        this.title = "" + this.utilService.objToHms(this.gteVal) + (this.lteVal === 'no limit'
            ? " +"
            : " to " + this.utilService.objToHms(this.lteVal));
    };
    RangeLookupComponent.prototype.delete = function (valueId) {
        var _this = this;
        this.dataService
            .deleteLookupValue(valueId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (deletedValue) {
            _this.lookup.vals = _this.lookup.vals.filter(function (v) { return v._id !== deletedValue._id; });
        }, function (err) {
            console.log(err);
            _this.utilService.deleteErrorLookupMsg();
        });
    };
    RangeLookupComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_lookup__WEBPACK_IMPORTED_MODULE_2__["Lookup"])
    ], RangeLookupComponent.prototype, "lookup", void 0);
    RangeLookupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-range-lookup',
            template: __webpack_require__(/*! raw-loader!./range-lookup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-lookups/range-lookup/range-lookup.component.html"),
            styles: [__webpack_require__(/*! ../lookup/lookup.component.scss */ "./src/app/components/manage-lookups/lookup/lookup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], RangeLookupComponent);
    return RangeLookupComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer;\n}\n\n.hamburger {\n  display: none;\n}\n\n@media only screen and (max-width: 1000px) {\n  .top-nav {\n    display: none;\n  }\n\n  .hamburger {\n    display: inline;\n  }\n}\n\n@media only screen and (min-width: 1000px) {\n  #collapse-nav {\n    display: none;\n  }\n}\n\n#collapse-nav {\n  background-color: #e7e7e7;\n  box-shadow: inset 0 8px 10px -6px #8d8d8d, inset 0 -8px 10px -6px #8d8d8d;\n}\n\n#collapse-nav a {\n  color: #616161;\n}\n\n#collapse-nav a:hover {\n  background-color: #d6d6d6;\n  color: black;\n}\n\n#collapse-nav a:active,\n#collapse-nav .active,\n#collapse-nav .active:hover {\n  background-color: #2b91ff;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRTtJQUNFLGFBQUE7RUNHRjs7RUREQTtJQUNFLGVBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0U7SUFDRSxhQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EseUVBQUE7QUNFRjs7QURERTtFQUNFLGNBQUE7QUNHSjs7QURERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERFOzs7RUFHRSx5QkFBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC50b3AtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAjY29sbGFwc2UtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbiNjb2xsYXBzZS1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDEwcHggLTZweCAjOGQ4ZDhkLCBpbnNldCAwIC04cHggMTBweCAtNnB4ICM4ZDhkOGQ7XG4gIGEge1xuICAgIGNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBhOmFjdGl2ZSxcbiAgLmFjdGl2ZSxcbiAgLmFjdGl2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiOTFmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbiIsImEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oYW1idXJnZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAudG9wLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgI2NvbGxhcHNlLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuI2NvbGxhcHNlLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDEwcHggLTZweCAjOGQ4ZDhkLCBpbnNldCAwIC04cHggMTBweCAtNnB4ICM4ZDhkOGQ7XG59XG4jY29sbGFwc2UtbmF2IGEge1xuICBjb2xvcjogIzYxNjE2MTtcbn1cbiNjb2xsYXBzZS1uYXYgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG4gIGNvbG9yOiBibGFjaztcbn1cbiNjb2xsYXBzZS1uYXYgYTphY3RpdmUsXG4jY29sbGFwc2UtbmF2IC5hY3RpdmUsXG4jY29sbGFwc2UtbmF2IC5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI5MWZmO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isLoggedIn;
    };
    NavbarComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService
            .logout()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            console.log(data);
            _this.authService.isLoggedIn = false;
            _this.router.navigate(['/login']);
            _this.toastr.success('', 'Logout Success', {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 3000,
            });
        }, function (error) {
            console.log(error);
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('smoothCollapse', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        height: '0',
                        overflow: 'hidden',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        overflow: 'hidden',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('.5s ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('.5s ease-out')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-entry/new-entry.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/new-entry/new-entry.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mng-lkp {\n  float: left;\n}\n\n.red {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9uZXctZW50cnkvbmV3LWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25ldy1lbnRyeS9uZXctZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy1lbnRyeS9uZXctZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW5nLWxrcCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbiIsIi5tbmctbGtwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yZWQge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/new-entry/new-entry.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-entry/new-entry.component.ts ***!
  \*************************************************************/
/*! exports provided: NewEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEntryComponent", function() { return NewEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/lookups/lookups.service */ "./src/app/services/lookups/lookups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var NewEntryComponent = /** @class */ (function () {
    function NewEntryComponent(fb, dataService, modalService, userService, utilService, lookupsService, router, config, calendar) {
        this.fb = fb;
        this.dataService = dataService;
        this.modalService = modalService;
        this.userService = userService;
        this.utilService = utilService;
        this.lookupsService = lookupsService;
        this.router = router;
        this.config = config;
        this.calendar = calendar;
        this.infos = [];
        this.fileToUpload = null;
        config.maxDate = calendar.getToday();
        this.lookupsService.getLookups();
    }
    NewEntryComponent.prototype.ngOnInit = function () {
        this.getUsername();
        this.CreateForm = this.fb.group({
            locationControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            showControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            classificationControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            heardOnAirControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            actionTakenControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            whatActuallyHappenedControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            eTagControl: [''],
            onAirControl: [false],
            funderControl: [false],
            createItServiceTicketControl: [false],
        });
        //Initialize date and time to current date and time
        var today = new Date();
        this.date = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](today.getFullYear(), today.getMonth() + 1, today.getDate());
        this.formattedDate = this.date.year + "-" + this.date.month
            .toString()
            .padStart(2, '0') + "-" + this.date.day.toString().padStart(2, '0');
        this.time = {
            hour: today.getHours(),
            minute: today.getMinutes(),
            second: today.getSeconds(),
        };
    };
    NewEntryComponent.prototype.getUsername = function () {
        var _this = this;
        this.userService
            .getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (user) {
            _this.submittedBy = user.displayName;
        });
    };
    NewEntryComponent.prototype.onDateSelection = function (date, d) {
        this.formattedDate = d._parserFormatter.format(date);
    };
    NewEntryComponent.prototype.formatTime = function (time) {
        var res = '';
        res += time.hour.toString().padStart(2, '0') + ":";
        res += time.minute.toString().padStart(2, '0') + ":";
        res += time.second.toString().padStart(2, '0');
        return res;
    };
    Object.defineProperty(NewEntryComponent.prototype, "dateObj", {
        get: function () {
            console.log(this.formattedDate + "T" + this.formatTime(this.time));
            return new Date(this.formattedDate + "T" + this.formatTime(this.time));
        },
        enumerable: true,
        configurable: true
    });
    NewEntryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService
            .createEntry(this.submittedBy, this.dateObj, this.form.locationControl.value, this.form.showControl.value, this.form.classificationControl.value, this.form.heardOnAirControl.value, this.form.actionTakenControl.value, this.form.onAirControl.value, this.form.funderControl.value, this.utilService.objToSeconds(this.duration), this.form.eTagControl.value, this.form.whatActuallyHappenedControl.value, this.form.createItServiceTicketControl.value, false)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (newEntry) {
            console.log(newEntry);
            if (_this.fileToUpload) {
                var fd = new FormData();
                fd.append('attachment', _this.fileToUpload);
                _this.dataService
                    .uploadAttachment(newEntry._id, fd)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(function (updatedEntry) {
                    console.log(updatedEntry);
                });
            }
            /*
            this.close();
            this.resetForms();
            this.utilService.submitSuccessMsg();
            this.router.navigate(['/']);
            */
        }, function (err) {
            console.log(err);
            _this.utilService.submitErrorMsg();
        });
    };
    NewEntryComponent.prototype.open = function (content) {
        if (this.CreateForm.valid &&
            this.date != null &&
            this.time != null &&
            this.duration != null) {
            this.populateModalInfo();
            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
                .result;
        }
        else {
            this.utilService.incompleteFieldsMsg();
        }
    };
    NewEntryComponent.prototype.close = function () {
        this.modalService.dismissAll();
        this.infos = [];
    };
    NewEntryComponent.prototype.resetForms = function () {
        this.CreateForm.reset({
            locationControl: '',
            classificationControl: '',
            heardOnAirControl: '',
            showControl: '',
            actionTakenControl: '',
            whatActuallyHappenedControl: '',
            onAirControl: false,
            funderControl: false,
            createItServiceTicketControl: false,
        });
        this.date = null;
        this.time = null;
        this.duration = null;
    };
    Object.defineProperty(NewEntryComponent.prototype, "form", {
        get: function () {
            return this.CreateForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    NewEntryComponent.prototype.populateModalInfo = function () {
        this.infos.push({
            title: 'Submitted by:',
            data: this.submittedBy,
        });
        this.infos.push({
            title: 'Date:',
            data: this.dateObj,
        });
        this.infos.push({
            title: 'Location:',
            data: this.form.locationControl.value,
        });
        this.infos.push({
            title: 'Show:',
            data: this.form.showControl.value,
        });
        this.infos.push({
            title: 'Classification:',
            data: this.form.classificationControl.value,
        });
        this.infos.push({
            title: 'What was heard on air:',
            data: this.form.heardOnAirControl.value,
        });
        this.infos.push({
            title: 'Action taken by drive tech:',
            data: this.form.actionTakenControl.value,
        });
        this.infos.push({
            title: 'On Air:',
            data: this.form.onAirControl.value,
        });
        this.infos.push({
            title: 'Funder:',
            data: this.form.funderControl.value,
        });
        this.infos.push({
            title: 'Duration:',
            data: this.duration.hour + " hours, " + this.duration.minute + " minutes, " + this.duration.second + " seconds",
        });
        if (this.form.eTagControl.value) {
            this.infos.push({
                title: 'E-Tag:',
                data: this.form.eTagControl.value,
            });
        }
        this.infos.push({
            title: 'What actually happened:',
            data: this.form.whatActuallyHappenedControl.value,
        });
        this.infos.push({
            title: 'Create IT Service Ticket:',
            data: this.form.createItServiceTicketControl.value,
        });
    };
    NewEntryComponent.prototype.log = function () {
        console.log(this.form.createItServiceTicketControl.value);
    };
    NewEntryComponent.prototype.onFileChange = function (files) {
        var _this = this;
        console.log(files.item(0));
        this.labelImport.nativeElement.innerText = Array.from(files)
            .map(function (f) { return f.name; })
            .join(', ');
        this.fileToUpload = files.item(0);
        if (this.fileToUpload.type.match(/image\/*/)) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(this.fileToUpload);
            reader_1.onload = function (_event) {
                _this.imgURL = reader_1.result;
            };
        }
    };
    NewEntryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
        { type: src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('labelImport', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewEntryComponent.prototype, "labelImport", void 0);
    NewEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-entry',
            template: __webpack_require__(/*! raw-loader!./new-entry.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/new-entry/new-entry.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"], src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"]],
            styles: [__webpack_require__(/*! ./new-entry.component.scss */ "./src/app/components/new-entry/new-entry.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerConfig"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
    ], NewEntryComponent);
    return NewEntryComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  padding: 2rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcbn1cbiIsIi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAycmVtIDJyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, dataService, toastr) {
        this.userService = userService;
        this.dataService = dataService;
        this.toastr = toastr;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService // Get current user from cookie payload
            .getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (user) {
            _this.personId = user.personId;
            _this.dataService
                .getUser(user.personId) // Use cookie payload info to get full user info from db
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(function (user) {
                _this.name = user.info.person.displayName;
                _this.email = user.info.person.email;
                _this.subscriptions = user.subbedSearches;
            });
        });
    };
    ProfileComponent.prototype.unSub = function (id) {
        var _this = this;
        this.dataService
            .deleteSearch(this.personId, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (sub) {
            _this.subscriptions = _this.subscriptions.filter(function (_a) {
                var _id = _a._id;
                return sub._id !== _id;
            });
            _this.toastr.success('', "\n        \"" + sub.name + "\" has been removed from your subscriptions.", {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 3000,
            });
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/subscription/subscription.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile/subscription/subscription.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub {\n  padding: 1rem;\n  background-color: #d4d4d4;\n  border-radius: 10px;\n}\n\n.inline {\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n\n.btn-danger {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iLCIuc3ViIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/profile/subscription/subscription.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/profile/subscription/subscription.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_searchSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/searchSub */ "./src/app/models/searchSub.ts");



var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.props = [];
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.subbedSearch);
        Object.keys(this.subbedSearch.queryInfo).forEach(function (key) {
            var val = _this.subbedSearch.queryInfo[key];
            _this.props.push({
                key: key,
                val: (val !== null && val.length) || typeof val === 'boolean'
                    ? val
                    : 'Any',
            });
        });
    };
    SubscriptionComponent.prototype.delete = function () {
        this.onDelete.emit(this.subbedSearch._id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_searchSub__WEBPACK_IMPORTED_MODULE_2__["SearchSub"])
    ], SubscriptionComponent.prototype, "subbedSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SubscriptionComponent.prototype, "onDelete", void 0);
    SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/subscription/subscription.component.html"),
            styles: [__webpack_require__(/*! ./subscription.component.scss */ "./src/app/components/profile/subscription/subscription.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/results/result/entry-notes/entry-notes.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/results/result/entry-notes/entry-notes.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  align-items: center;\n}\n\n.note span {\n  font-size: 1rem;\n}\n\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.42857;\n}\n\n.note-delete {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC9lbnRyeS1ub3Rlcy9lbnRyeS1ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC9lbnRyeS1ub3Rlcy9lbnRyeS1ub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQvZW50cnktbm90ZXMvZW50cnktbm90ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm90ZSB7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuLmJ0bi1jaXJjbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG59XG4ubm90ZS1kZWxldGUge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ub3RlIHNwYW4ge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogNnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xufVxuXG4ubm90ZS1kZWxldGUge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/results/result/entry-notes/entry-notes.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/results/result/entry-notes/entry-notes.component.ts ***!
  \********************************************************************************/
/*! exports provided: EntryNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryNotesComponent", function() { return EntryNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var EntryNotesComponent = /** @class */ (function () {
    function EntryNotesComponent(fb, dataService, userService, utilService, toastr) {
        this.fb = fb;
        this.dataService = dataService;
        this.userService = userService;
        this.utilService = utilService;
        this.toastr = toastr;
        this.dateOptions = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };
    }
    Object.defineProperty(EntryNotesComponent.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (n) {
            this._notes = n;
        },
        enumerable: true,
        configurable: true
    });
    EntryNotesComponent.prototype.ngOnInit = function () {
        this.newNoteForm = this.fb.group({
            noteContentControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EntryNotesComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.newNoteForm.valid) {
            // Add note to this entry
            this.userService
                .getUser()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (user) {
                _this.dataService
                    .addNoteToEntry(_this.entryId, user.displayName, _this.newNoteForm.controls.noteContentControl.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (entryNotes) {
                    console.log(entryNotes);
                    _this.notes = entryNotes;
                    _this.newNoteForm.reset({
                        noteContentControl: [''],
                    });
                });
            });
        }
        else {
            this.toastr.warning('', 'Cannot submit blank comment', {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 3000,
            });
        }
    };
    EntryNotesComponent.prototype.deleteNote = function (id) {
        var _this = this;
        this.dataService
            .deleteNoteFromEntry(this.entryId, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (notes) {
            _this.notes = notes;
        });
    };
    EntryNotesComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EntryNotesComponent.prototype, "entryId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], EntryNotesComponent.prototype, "notes", null);
    EntryNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry-notes',
            template: __webpack_require__(/*! raw-loader!./entry-notes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/results/result/entry-notes/entry-notes.component.html"),
            styles: [__webpack_require__(/*! ./entry-notes.component.scss */ "./src/app/components/results/result/entry-notes/entry-notes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_util_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EntryNotesComponent);
    return EntryNotesComponent;
}());



/***/ }),

/***/ "./src/app/components/results/result/result.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/results/result/result.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0.5rem 1rem;\n}\n.flex li {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMC41cmVtIDFyZW07XG4gIGxpIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xufVxuLmZsZXggbGkge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/results/result/result.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/results/result/result.component.ts ***!
  \***************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");





var ResultComponent = /** @class */ (function () {
    function ResultComponent(utilService, dataService) {
        this.utilService = utilService;
        this.dataService = dataService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.info = [
            { title: 'Location', value: this.result.location },
            { title: 'Show', value: this.result.show },
            { title: 'Classification', value: this.result.classification },
            { title: 'What was heard on air', value: this.result.heardOnAir },
            {
                title: 'Action Taken by drive tech',
                value: this.result.actionTaken,
            },
            {
                title: 'Duration',
                value: this.utilService.formatSeconds(this.result.duration),
            },
            { title: 'On Air', value: this.result.onAir },
            { title: 'Funder', value: this.result.funder },
            { title: 'IT Ticket Created', value: this.result.createItServiceTicket },
        ];
    };
    ResultComponent.prototype.deleteEntry = function () {
        var _this = this;
        this.dataService
            .flagEntryAsDeleted(this.result)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (deletedEntry) {
            _this.onDelete.emit(deletedEntry._id);
        });
    };
    ResultComponent.prototype.downloadAttachment = function () {
        this.dataService.downloadAttachment(this.result._id).subscribe(function (res) {
            console.log(res);
            var blob = new Blob([res], {
                type: res.type,
            });
            var fileURL = URL.createObjectURL(blob);
            window.open(fileURL);
        });
    };
    ResultComponent.ctorParameters = function () { return [
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ResultComponent.prototype, "onDelete", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/results/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/components/results/result/result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/results/results.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/results/results.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-date {\n  border-right: 2px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-description {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.125);\n}\n\n.results-header span {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQUE7QUNDRjs7QURDQTtFQUNFLDZDQUFBO0FDRUY7O0FEQ0U7RUFDRSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItZGF0ZSB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuLmNhcmQtZGVzY3JpcHRpb24ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG4ucmVzdWx0cy1oZWFkZXIge1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbiIsIi5oZWFkZXItZGF0ZSB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cblxuLnJlc3VsdHMtaGVhZGVyIHNwYW4ge1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/results/results.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/results/results.component.ts ***!
  \*********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");





var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(utilService, dataService, searchService) {
        this.utilService = utilService;
        this.dataService = dataService;
        this.searchService = searchService;
        this._results = [];
    }
    Object.defineProperty(ResultsComponent.prototype, "results", {
        set: function (data) {
            console.log(data);
            if (data) {
                this._results = data.results;
                this.resultsCount = data.count;
            }
        },
        enumerable: true,
        configurable: true
    });
    ResultsComponent.prototype.ngOnInit = function () {
        console.log(this._results);
    };
    ResultsComponent.prototype.removeDeleted = function (id) {
        this._results = this._results.filter(function (res) { return res._id !== id; });
    };
    ResultsComponent.ctorParameters = function () { return [
        { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
        { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ResultsComponent.prototype, "results", null);
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/components/results/results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.sidebar {\n  position: relative;\n}\n\n.btn-group {\n  width: 100%;\n  box-sizing: content-box;\n  overflow: hidden;\n}\n\n.btn-group label {\n  font-size: 0.8rem;\n  padding: 2px 2px;\n  cursor: pointer;\n}\n\n.btn-group input {\n  width: 10px;\n}\n\n.center {\n  width: auto;\n  text-align: center;\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdm9scGUvRG9jdW1lbnRzL2VzLWxpbnQvZHNoZWV0LXJlcG8vZHNoZWV0cy9hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLHdDQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0FDQ0o7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlYmFyLXN0aWNreSB7XG59XG5cbi5idG4tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHBhZGRpbmc6IDJweCAycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTBweDtcbiAgfVxufVxuLmNlbnRlciB7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuIiwiLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG4tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYnRuLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDJweCAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tZ3JvdXAgaW5wdXQge1xuICB3aWR0aDogMTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var src_app_models_rawQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/rawQuery */ "./src/app/models/rawQuery.ts");
/* harmony import */ var src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/lookups/lookups.service */ "./src/app/services/lookups/lookups.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/util/util.service */ "./src/app/services/util/util.service.ts");
/* harmony import */ var src_app_models_searchSub__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/searchSub */ "./src/app/models/searchSub.ts");













var SearchComponent = /** @class */ (function () {
    function SearchComponent(fb, dataService, searchService, userService, lookupsService, modalService, toastr, utilService) {
        this.fb = fb;
        this.dataService = dataService;
        this.searchService = searchService;
        this.userService = userService;
        this.lookupsService = lookupsService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.utilService = utilService;
        //Search button
        this.isLoading = false;
        //Subscribe button
        this.isSaving = false;
        //Output Csv
        this.isOutputting = false;
        //Load more btn
        this.isLoadingMore = false;
        this.range_date = 'No range selected';
        this.techNameModel = [];
        this.locationModel = [];
        this.showModel = [];
        this.classModel = [];
        this.heardOnAirModel = [];
        this.actionTakenModel = [];
        this.durationModel = {};
        this.onAirModel = null;
        this.funderModel = null;
        this.entryModel = null;
        this.eTagModel = null;
        this.results = { results: {}, count: 0 };
        //Duration lookup
        this.isEditingDuration = false;
        //temp
        this.emailFreqLookups = [
            { title: 'Immediate', val: 0 },
            { title: '3 hours', val: 3 },
            { title: '1 day', val: 24 },
            { title: '3 days', val: 72 },
            { title: '1 week', val: 168 },
            { title: '1 month', val: 720 },
        ];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getTechNames();
        this.lookupsService.getLookups();
        this.dropdownSettings = {
            singleSelection: false,
            itemsShowLimit: 3,
            idField: '_id',
            textField: 'val',
            allowSearchFilter: true,
            enableCheckAll: false,
        };
        console.log(this.durationModel);
    };
    SearchComponent.prototype.poody = function () {
        console.log(this.durationModel);
    };
    SearchComponent.prototype.getTechNames = function () {
        var _this = this;
        this.dataService
            .getUniqueSubmitters()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (names) {
            _this.techNames = names.map(function (name, index) {
                return { _id: index, val: name };
            });
        });
    };
    SearchComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoading = true;
        this.rawQuery = new src_app_models_rawQuery__WEBPACK_IMPORTED_MODULE_7__["RawQuery"](0, 5, this.formattedFromDate, this.formattedToDate, this.techNameModel.map(function (_a) {
            var val = _a.val;
            return val;
        }), this.locationModel.map(function (_a) {
            var val = _a.val;
            return val;
        }), this.showModel.map(function (_a) {
            var val = _a.val;
            return val;
        }), this.classModel.map(function (_a) {
            var val = _a.val;
            return val;
        }), this.heardOnAirModel.map(function (_a) {
            var val = _a.val;
            return val;
        }), this.actionTakenModel.map(function (_a) {
            var val = _a.val;
            return val;
        }), this.durationModel, this.onAirModel, this.funderModel, this.eTagModel, this.entryModel);
        this.searchService.buildQuery(this.rawQuery).then(function (query) {
            _this.currentQuery = query;
            _this.searchService
                .searchEntries(_this.currentQuery)
                .then(function (results) {
                _this.results = results;
                _this.isLoading = false;
            })
                .catch(function (err) {
                console.log(err);
                _this.isLoading = false;
            });
        });
    };
    SearchComponent.prototype.loadMore = function () {
        var _this = this;
        this.isLoadingMore = true;
        this.currentQuery.size += 10;
        this.searchService
            .searchEntries(this.currentQuery)
            .then(function (results) {
            _this.results = results;
            _this.isLoadingMore = false;
        })
            .catch(function (err) {
            console.log(err);
            _this.isLoadingMore = false;
        });
    };
    Object.defineProperty(SearchComponent.prototype, "formattedFromDate", {
        // Pull the already formatted dates from the input value box
        get: function () {
            return this.fromDate ? this.range_date.split(' ')[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "formattedToDate", {
        get: function () {
            if (this.fromDate && !this.toDate) {
                return undefined;
            }
            else
                return this.toDate ? this.range_date.split(' ')[2] : null;
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.onDateSelection = function (date, d) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
            this.range_date = d._parserFormatter.format(this.fromDate);
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
            this.range_date =
                d._parserFormatter.format(this.fromDate) +
                    ' to ' +
                    d._parserFormatter.format(this.toDate);
        }
        else {
            this.toDate = null;
            this.fromDate = date;
            this.range_date = d._parserFormatter.format(this.fromDate);
        }
    };
    SearchComponent.prototype.isHovered = function (date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    };
    SearchComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    SearchComponent.prototype.isRange = function (date) {
        return (date.equals(this.fromDate) ||
            date.equals(this.toDate) ||
            this.isInside(date) ||
            this.isHovered(date));
    };
    SearchComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result;
    };
    SearchComponent.prototype.saveSearch = function () {
        var _this = this;
        if (this.subName) {
            this.isSaving = true;
            this.userService
                .getUser()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (user) {
                _this.dataService
                    .subToSearch(user.personId, new src_app_models_searchSub__WEBPACK_IMPORTED_MODULE_12__["SearchSub"](_this.subName, _this.rawQuery, _this.emailFreq))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(function (searches) {
                    console.log(searches);
                    _this.isSaving = false;
                    _this.modalService.dismissAll();
                    _this.toastr.success('', 'Subscribed to search', {
                        positionClass: 'toast-top-center',
                        closeButton: true,
                        timeOut: 3000,
                    });
                });
            });
        }
        else {
            this.toastr.warning('', 'Name cannot be empty', {
                positionClass: 'toast-top-center',
                closeButton: true,
                timeOut: 3000,
            });
        }
    };
    SearchComponent.prototype.outputToCsv = function () {
        var _this = this;
        this.isOutputting = true;
        this.searchService.outputToCsv(this.currentQuery).then(function () {
            _this.isOutputting = false;
        });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _services_search_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] },
        { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
        { type: src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"] }
    ]; };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
            providers: [_services_search_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"], src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"]],
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _services_search_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            src_app_services_lookups_lookups_service__WEBPACK_IMPORTED_MODULE_8__["LookupsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/models/lookup.ts":
/*!**********************************!*\
  !*** ./src/app/models/lookup.ts ***!
  \**********************************/
/*! exports provided: LookupValue, Lookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupValue", function() { return LookupValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lookup", function() { return Lookup; });
var LookupValue = /** @class */ (function () {
    function LookupValue(lookup, val, title) {
        this.val = val;
        this.lookup = lookup;
        this.title = title;
    }
    LookupValue.ctorParameters = function () { return [
        { type: String },
        { type: undefined },
        { type: String }
    ]; };
    return LookupValue;
}());

var Lookup = /** @class */ (function () {
    function Lookup(name, displayName, vals, type) {
        this.name = name;
        this.displayName = displayName;
        this.vals = vals;
        this.type = type;
    }
    Lookup.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: Array },
        { type: String }
    ]; };
    return Lookup;
}());



/***/ }),

/***/ "./src/app/models/rawQuery.ts":
/*!************************************!*\
  !*** ./src/app/models/rawQuery.ts ***!
  \************************************/
/*! exports provided: RawQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawQuery", function() { return RawQuery; });
var RawQuery = /** @class */ (function () {
    function RawQuery(from, size, fromDate, toDate, techNames, location, show, classification, heardOnAir, actionTaken, duration, onAir, funder, eTag, entry) {
        this.from = from;
        this.size = size;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.techNames = techNames;
        this.location = location;
        this.show = show;
        this.classification = classification;
        this.heardOnAir = heardOnAir;
        this.actionTaken = actionTaken;
        this.duration = duration;
        this.onAir = onAir;
        this.funder = funder;
        this.eTag = eTag;
        this.entry = entry;
    }
    RawQuery.ctorParameters = function () { return [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]; };
    return RawQuery;
}());



/***/ }),

/***/ "./src/app/models/searchSub.ts":
/*!*************************************!*\
  !*** ./src/app/models/searchSub.ts ***!
  \*************************************/
/*! exports provided: SearchSub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSub", function() { return SearchSub; });
var SearchSub = /** @class */ (function () {
    function SearchSub(name, queryInfo, interval) {
        this.name = name;
        this.queryInfo = queryInfo;
        this.interval = interval;
    }
    SearchSub.ctorParameters = function () { return [
        null,
        null,
        null
    ]; };
    return SearchSub;
}());



/***/ }),

/***/ "./src/app/nav.config.ts":
/*!*******************************!*\
  !*** ./src/app/nav.config.ts ***!
  \*******************************/
/*! exports provided: routerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerConfig", function() { return routerConfig; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/new-entry/new-entry.component */ "./src/app/components/new-entry/new-entry.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_manage_lookups_manage_lookups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manage-lookups/manage-lookups.component */ "./src/app/components/manage-lookups/manage-lookups.component.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");







var routerConfig = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'new-entry',
        component: _components_new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_1__["NewEntryComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
    },
    {
        path: 'search',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
    },
    {
        path: 'manage-lookups',
        component: _components_manage_lookups_manage_lookups_component__WEBPACK_IMPORTED_MODULE_5__["ManageLookupsComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];


/***/ }),

/***/ "./src/app/pipes/camelize.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/camelize.pipe.ts ***!
  \****************************************/
/*! exports provided: CamelizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelizePipe", function() { return CamelizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CamelizePipe = /** @class */ (function () {
    function CamelizePipe() {
    }
    CamelizePipe.prototype.transform = function (value, args) {
        return value.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0)
                return ''; // or if (/\s+/.test(match)) for white spaces
            return index == 0 ? match.toLowerCase() : match.toUpperCase();
        });
    };
    CamelizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'camelize',
        })
    ], CamelizePipe);
    return CamelizePipe;
}());



/***/ }),

/***/ "./src/app/pipes/remove-whitespace.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/remove-whitespace.pipe.ts ***!
  \*************************************************/
/*! exports provided: RemoveWhitespacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveWhitespacePipe", function() { return RemoveWhitespacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RemoveWhitespacePipe = /** @class */ (function () {
    function RemoveWhitespacePipe() {
    }
    RemoveWhitespacePipe.prototype.transform = function (value, args) {
        return value.replace(/ /g, '');
    };
    RemoveWhitespacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'removeWhitespace',
        })
    ], RemoveWhitespacePipe);
    return RemoveWhitespacePipe;
}());



/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.auth.getAuth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            var authStatus = data['authStatus'];
            console.log(authStatus);
            if (authStatus !== 'valid') {
                _this.router.navigate(['/login']);
                if (authStatus === 'expired') {
                    _this.toastr.warning('Please Log-in', "You're previous session has expired.", {
                        positionClass: 'toast-top-center',
                        closeButton: true,
                        timeOut: 3000,
                    });
                }
                else {
                    _this.toastr.info('', 'Please Log-in', {
                        positionClass: 'toast-top-center',
                        closeButton: true,
                        timeOut: 3000,
                    });
                }
                _this.auth.isLoggedIn = false;
                return false;
            }
            _this.auth.isLoggedIn = true;
            return true;
        }));
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        set: function (val) {
            console.log("set to " + val);
            this.loggedIn.next(val);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getAuth = function () {
        return this.http.get("api/auth/check");
    };
    AuthService.prototype.login = function (username, password) {
        return this.http
            .post("api/auth/login", {
            username: username,
            password: password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AuthService.prototype.logout = function () {
        return this.http.get("api/auth/logout").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/jwt-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/auth/jwt-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var JwtInterceptorService = /** @class */ (function () {
    function JwtInterceptorService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    JwtInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    console.log(err);
                    _this.router.navigate(["/login"]);
                }
            }
        }));
    };
    JwtInterceptorService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], JwtInterceptorService);
    return JwtInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/data/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    //
    // ENTRIES
    //
    DataService.prototype.createEntry = function (submittedBy, date, location, show, classification, heardOnAir, actionTaken, onAir, funder, duration, eTag, entry, createItServiceTicket, isDeleted) {
        return this.http
            .post("api/db/entry", {
            submittedBy: submittedBy,
            date: date,
            location: location,
            show: show,
            classification: classification,
            heardOnAir: heardOnAir,
            actionTaken: actionTaken,
            onAir: onAir,
            funder: funder,
            duration: duration,
            eTag: eTag,
            entry: entry,
            createItServiceTicket: createItServiceTicket,
            isDeleted: isDeleted,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.uploadAttachment = function (entryId, f) {
        return this.http.post("api/db/entry/" + entryId + "/attachment", f).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.downloadAttachment = function (entryId) {
        return this.http
            .get("api/db/entry/" + entryId + "/attachment", { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.addNoteToEntry = function (entryId, author, content) {
        return this.http
            .put("api/db/entry/" + entryId + "/note", {
            author: author,
            content: content,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.deleteNoteFromEntry = function (entryId, noteId) {
        return this.http.delete("api/db/entry/" + entryId + "/note/" + noteId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.getUniqueSubmitters = function () {
        return this.http.get('api/db/entry/unique-submitters').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.deleteEntry = function (entry) {
        return this.http.delete("api/db/entry/" + entry._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.flagEntryAsDeleted = function (entry) {
        return this.http.put("api/db/entry/" + entry._id + "/flag", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    //
    // LOOKUP VALUES
    //
    DataService.prototype.getLookupValues = function () {
        return this.http.get("api/db/lookup-value").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.addLookupValue = function (newValue) {
        return this.http.post("api/db/lookup-value", newValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.updateLookupValue = function (updatedVal) {
        return this.http
            .put("api/db/lookup-value/" + updatedVal._id, updatedVal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.deleteLookupValue = function (valId) {
        return this.http.delete("api/db/lookup-value/" + valId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    //
    // USER
    //
    // Return new user or existing user with tag
    DataService.prototype.createUser = function (user) {
        return this.http.post("api/db/user", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.getUser = function (personId) {
        return this.http.get("api/db/user/" + personId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.updateUser = function (user) {
        return this.http.put("api/db/user/" + user._id, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.subToSearch = function (personId, search) {
        return this.http.post("api/db/user/" + personId + "/subbed-search", search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.prototype.deleteSearch = function (personId, searchId) {
        return this.http
            .delete("api/db/user/" + personId + "/subbed-search/" + searchId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/lookups/lookups.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/lookups/lookups.service.ts ***!
  \*****************************************************/
/*! exports provided: LookupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupsService", function() { return LookupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/lookup */ "./src/app/models/lookup.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/app/utils.ts");






var LookupsService = /** @class */ (function () {
    function LookupsService(dataService) {
        this.dataService = dataService;
        this.lookups = {};
        this.sortedLookups = {};
    }
    LookupsService.prototype.getLookups = function () {
        var _this = this;
        this.dataService
            .getLookupValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (vals) {
            _this.sortedVals = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(vals, function (val) { return val.lookup; });
            console.log(_this.sortedVals);
            var lookups = [
                new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__["Lookup"]('location', 'Location', _this.sortedVals.location ? _this.sortedVals.location : [], 'list'),
                new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__["Lookup"]('show', 'Show', _this.sortedVals.show ? _this.sortedVals.show : [], 'list'),
                new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__["Lookup"]('classification', 'Classification', _this.sortedVals.classification
                    ? _this.sortedVals.classification
                    : [], 'list'),
                new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__["Lookup"]('heardOnAir', 'What was heard on air', _this.sortedVals.heardOnAir ? _this.sortedVals.heardOnAir : [], 'list'),
                new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__["Lookup"]('actionTaken', 'Action taken by drive tech', _this.sortedVals.actionTaken ? _this.sortedVals.actionTaken : [], 'list'),
                new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__["Lookup"]('duration', 'Duration', _this.sortedVals.duration ? _this.sortedVals.duration : [], 'range'),
                new src_app_models_lookup__WEBPACK_IMPORTED_MODULE_4__["Lookup"]('emailFreq', 'Email Frequency', _this.sortedVals.emailFreq ? _this.sortedVals.emailFreq : [], 'list'),
            ];
            _this.lookups = lookups;
            console.log(_this.lookups);
            _this.sortedLookups = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(lookups, function (l) { return l.type; });
            console.log(_this.sortedLookups);
        }, function (err) {
            console.log(err);
        });
    };
    LookupsService.ctorParameters = function () { return [
        { type: _data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    LookupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
        // Hard coded lookups
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LookupsService);
    return LookupsService;
}());



/***/ }),

/***/ "./src/app/services/search/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util.service */ "./src/app/services/util/util.service.ts");




var SearchService = /** @class */ (function () {
    function SearchService(http, utilService) {
        this.http = http;
        this.utilService = utilService;
        this.hasInit = false;
    }
    SearchService.prototype.searchEntries = function (query) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http
                .post("api/search", {
                query: query,
            })
                .toPromise()
                .then(function (data) {
                console.log(data);
                _this.hasInit = true;
                resolve(data);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
        return promise;
    };
    //Serialize search data into query
    SearchService.prototype.buildQuery = function (rawQuery) {
        var from = rawQuery.from, size = rawQuery.size, fromDate = rawQuery.fromDate, toDate = rawQuery.toDate, techNames = rawQuery.techNames, location = rawQuery.location, show = rawQuery.show, classification = rawQuery.classification, heardOnAir = rawQuery.heardOnAir, actionTaken = rawQuery.actionTaken, onAir = rawQuery.onAir, duration = rawQuery.duration, funder = rawQuery.funder, eTag = rawQuery.eTag, entry = rawQuery.entry;
        // Build query object
        var promise = new Promise(function (resolve, reject) {
            var mustArr = [];
            var filterArr = [];
            // Never pull entries flagged as deleted
            filterArr.push({ term: { isDeleted: false } });
            if (entry)
                mustArr.push({ match: { entry: entry } });
            if (eTag)
                mustArr.push({ match: { eTag: eTag } });
            if (techNames.length)
                filterArr.push({ terms: { submittedBy: techNames } });
            if (location.length)
                filterArr.push({ terms: { location: location } });
            if (show.length)
                filterArr.push({ terms: { show: show } });
            if (classification.length)
                filterArr.push({ terms: { classification: classification } });
            if (heardOnAir.length)
                filterArr.push({ terms: { heardOnAir: heardOnAir } });
            if (actionTaken.length)
                filterArr.push({ terms: { actionTaken: actionTaken } });
            if (fromDate && toDate) {
                filterArr.push({
                    range: {
                        date: {
                            gte: fromDate,
                            lte: toDate,
                        },
                    },
                });
            }
            else if (fromDate && !toDate) {
                filterArr.push({ term: { date: fromDate } });
            }
            if (duration) {
                filterArr.push({
                    range: {
                        duration: {
                            gte: duration.gte,
                            lte: duration.lte,
                        },
                    },
                });
            }
            if (onAir != undefined)
                filterArr.push({ term: { onAir: onAir } });
            if (funder != undefined)
                filterArr.push({ term: { funder: funder } });
            var query = {
                from: from,
                size: size,
                query: {
                    bool: {
                        must: mustArr,
                        filter: filterArr,
                    },
                },
            };
            resolve(query);
        });
        return promise;
    };
    SearchService.prototype.outputToCsv = function (query) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            query.from = undefined;
            query.size = undefined;
            _this.searchEntries(query).then(function (_a) {
                var results = _a.results;
                var output = [];
                var keys = Object.keys(results[0]);
                output.push(keys);
                results.forEach(function (result) {
                    var row = [];
                    keys.forEach(function (key) {
                        if (key === 'date' || key === 'createdAt') {
                            row.push(_this.utilService.formatDate(result[key]).replace(',', ''));
                        }
                        else if (key === 'notes') {
                            row.push(result[key]
                                .map(function (note) {
                                return note.author + " at " + _this.utilService
                                    .formatDate(note.createdAt)
                                    .replace(',', '') + ": " + note.content;
                            })
                                .join(' // '));
                        }
                        else
                            row.push(result[key]);
                    });
                    output.push(row);
                });
                var csvContent = 'data:text/csv;charset=utf-8,' +
                    output.map(function (e) { return e.join(','); }).join('\n');
                var encodedUri = encodeURI(csvContent);
                window.open(encodedUri);
                resolve();
            });
        });
        return promise;
    };
    SearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
    ]; };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _util_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




 // RxJS 6 syntax
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    // Gets user information from log in
    UserService.prototype.getUser = function () {
        return this.http.get("api/user").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            return user;
        }));
    };
    // Gets extensive user information from api v1
    UserService.prototype.getPersonInfo = function () {
        return this.http.get('api/user/info').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    UserService.prototype.getAllInfo = function () {
        var userInfo = this.http.get('api/user');
        var personInfo = this.http.get('api/user/info');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([userInfo, personInfo]);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/util/util.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/util/util.service.ts ***!
  \***********************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var UtilService = /** @class */ (function () {
    function UtilService(toastr) {
        this.toastr = toastr;
        //
        // TOAST MESSAGES
        //
        this.msgOptions = {
            positionClass: 'toast-top-center',
            closeButton: true,
            timeOut: 3000,
        };
    }
    //
    // FORMATTING
    //
    UtilService.prototype.formatDate = function (d, options) {
        if (!options) {
            options = {
                hour12: false,
                timeZoneName: 'short',
            };
        }
        var date = new Date(d);
        return "" + date.toLocaleString('en-us', options);
    };
    UtilService.prototype.formatSeconds = function (seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 8);
    };
    UtilService.prototype.objToSeconds = function (obj) {
        return obj.hour * 60 * 60 + obj.minute * 60 + obj.second;
    };
    UtilService.prototype.objToHms = function (obj) {
        var dispArr = [];
        var hDisplay = obj.hour > 0 ? obj.hour + (obj.hour == 1 ? 'h' : 'hrs') : '';
        if (hDisplay)
            dispArr.push(hDisplay);
        var mDisplay = obj.minute > 0 ? obj.minute + (obj.minute == 1 ? 'm' : 'mins') : '';
        if (mDisplay)
            dispArr.push(mDisplay);
        var sDisplay = obj.second > 0 ? obj.second + 's' : '';
        if (sDisplay)
            dispArr.push(sDisplay);
        var resStr = dispArr.length > 1 ? dispArr.join(', ') : dispArr.join('');
        return resStr === '' ? 0 : resStr;
    };
    UtilService.prototype.incompleteFieldsMsg = function () {
        this.toastr.warning('', 'Please fill out all fields', this.msgOptions);
    };
    UtilService.prototype.submitSuccessMsg = function () {
        this.toastr.success('', 'Submitted', this.msgOptions);
    };
    UtilService.prototype.lookupAddMsg = function () {
        this.toastr.success('', 'Lookup Added!', this.msgOptions);
    };
    UtilService.prototype.submitErrorMsg = function () {
        this.toastr.error('Please try again later', 'Submission Error', this.msgOptions);
    };
    UtilService.prototype.gteLteErrorMsg = function () {
        this.toastr.warning('Lower limit cannot be greater than upper limit', 'Invalid input', this.msgOptions);
    };
    UtilService.prototype.emptyNewLookupMsg = function () {
        this.toastr.warning('Cannot submit empty lookup', 'Invalid Input', this.msgOptions);
    };
    UtilService.prototype.deleteErrorLookupMsg = function () {
        this.toastr.error('Please try again later', 'Unable to delete lookup', this.msgOptions);
    };
    UtilService.prototype.lookupValueTransferMsg = function (count) {
        this.toastr.success("", count + " entries have been modified.", this.msgOptions);
    };
    UtilService.prototype.lookupValueDeleteMsg = function (count) {
        var e = count > 1 ? 'entries have' : 'entry has';
        this.toastr.success("", count + " " + e + " been deleted.", this.msgOptions);
    };
    UtilService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: groupBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/**
 * Group object array by property
 * Example, groupBy(array, ( x: Props ) => x.id );
 * @param array
 * @param property
 */
var groupBy = function (array, property) {
    return array.reduce(function (memo, x) {
        if (!memo[property(x)]) {
            memo[property(x)] = [];
        }
        memo[property(x)].push(x);
        return memo;
    }, {});
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jvolpe/Documents/es-lint/dsheet-repo/dsheets/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map