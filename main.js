(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/actions/movies-api.ts":
/*!***************************************!*\
  !*** ./src/app/actions/movies-api.ts ***!
  \***************************************/
/*! exports provided: REQUEST_MOVIES, RECIEVE_MOVIES, ADD_MOVIE, ADD_MOVIE_SUCCESS, EDIT_MOVIE, EDIT_MOVIE_SUCCESS, DELETE_MOVIE, DELETE_MOVIE_SUCCESS, REQUEST_FAILED, RequestMovies, RecieveMovies, AddMovie, AddMovieSuccess, EditMovie, EditMovieSuccess, DeleteMovie, DeleteMovieSuccess, RequestFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_MOVIES", function() { return REQUEST_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIEVE_MOVIES", function() { return RECIEVE_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return ADD_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_SUCCESS", function() { return ADD_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_MOVIE", function() { return EDIT_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_MOVIE_SUCCESS", function() { return EDIT_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE", function() { return DELETE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MOVIE_SUCCESS", function() { return DELETE_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_FAILED", function() { return REQUEST_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMovies", function() { return RequestMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecieveMovies", function() { return RecieveMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieSuccess", function() { return AddMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMovie", function() { return EditMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMovieSuccess", function() { return EditMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovie", function() { return DeleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovieSuccess", function() { return DeleteMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFailed", function() { return RequestFailed; });
var REQUEST_MOVIES = '[Db] Request movies';
var RECIEVE_MOVIES = '[Db] Recieve movies';
var ADD_MOVIE = '[Db] Add movie';
var ADD_MOVIE_SUCCESS = '[Db] Add movie success';
var EDIT_MOVIE = '[Db] Edit movie';
var EDIT_MOVIE_SUCCESS = '[Db] Edit movie success';
var DELETE_MOVIE = '[Db] Delete movie';
var DELETE_MOVIE_SUCCESS = '[Db] Delete movie success';
var REQUEST_FAILED = '[Db] Request failed';
var RequestMovies = /** @class */ (function () {
    function RequestMovies() {
        this.type = REQUEST_MOVIES;
    }
    return RequestMovies;
}());

var RecieveMovies = /** @class */ (function () {
    function RecieveMovies(payload) {
        this.payload = payload;
        this.type = RECIEVE_MOVIES;
    }
    return RecieveMovies;
}());

var AddMovie = /** @class */ (function () {
    function AddMovie(payload) {
        this.payload = payload;
        this.type = ADD_MOVIE;
    }
    return AddMovie;
}());

var AddMovieSuccess = /** @class */ (function () {
    function AddMovieSuccess(payload) {
        this.payload = payload;
        this.type = ADD_MOVIE_SUCCESS;
    }
    return AddMovieSuccess;
}());

var EditMovie = /** @class */ (function () {
    function EditMovie(payload) {
        this.payload = payload;
        this.type = EDIT_MOVIE;
    }
    return EditMovie;
}());

var EditMovieSuccess = /** @class */ (function () {
    function EditMovieSuccess(payload) {
        this.payload = payload;
        this.type = EDIT_MOVIE_SUCCESS;
    }
    return EditMovieSuccess;
}());

var DeleteMovie = /** @class */ (function () {
    function DeleteMovie(payload) {
        this.payload = payload;
        this.type = DELETE_MOVIE;
    }
    return DeleteMovie;
}());

var DeleteMovieSuccess = /** @class */ (function () {
    function DeleteMovieSuccess(payload) {
        this.payload = payload;
        this.type = DELETE_MOVIE_SUCCESS;
    }
    return DeleteMovieSuccess;
}());

var RequestFailed = /** @class */ (function () {
    function RequestFailed(error) {
        this.error = error;
        this.type = REQUEST_FAILED;
    }
    return RequestFailed;
}());



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
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");




var routes = [
    { path: '', component: _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] }
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <h1>\n    {{ title | titlecase }}\n  </h1>\n  <router-outlet></router-outlet>\n"

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
        this.title = 'movies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");



var AppEffects = /** @class */ (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
    }
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AppEffects);
    return AppEffects;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _effects_movies_api_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/movies-api-effects */ "./src/app/effects/movies-api-effects.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");
/* harmony import */ var _shared_services_movies_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/movies-api.service */ "./src/app/shared/services/movies-api.service.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/popup/popup.component */ "./src/app/components/popup/popup.component.ts");
/* harmony import */ var _shared_pipes_alpha_num_pipe___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/pipes/alpha-num-pipe. */ "./src/app/shared/pipes/alpha-num-pipe..ts");
/* harmony import */ var _shared_directives_titles_validator_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/directives/titles-validator.directive */ "./src/app/shared/directives/titles-validator.directive.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_10__["MoviesComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_16__["PopupComponent"],
                _shared_pipes_alpha_num_pipe___WEBPACK_IMPORTED_MODULE_17__["AlphaNumPipe"],
                _shared_directives_titles_validator_directive__WEBPACK_IMPORTED_MODULE_18__["TitlesValidatorDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_11__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_effects_movies_api_effects__WEBPACK_IMPORTED_MODULE_12__["MoviesApiEffects"], _app_effects__WEBPACK_IMPORTED_MODULE_14__["AppEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
            ],
            providers: [_shared_services_movies_api_service__WEBPACK_IMPORTED_MODULE_15__["MoviesApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/movies/mock-movie.ts":
/*!*************************************************!*\
  !*** ./src/app/components/movies/mock-movie.ts ***!
  \*************************************************/
/*! exports provided: mockMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockMovie", function() { return mockMovie; });
var mockMovie = {
    Title: 'Title',
    Year: '2019',
    Runtime: '90 min',
    Genre: 'Action, Comedy, Crime',
    Director: 'Director\'s name'
};


/***/ }),

/***/ "./src/app/components/movies/movies.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/movies/movies.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movies\">\n  <button (click)=\"openPopup(mockMovie, PopupModes.ADD)\" class=\"button button-primary\">add new movie</button>\n  <ul class=\"movies-list\">\n    <li *ngFor=\"let movie of movies$ | async\">\n      <div class=\"movie-field\">\n        <span class=\"movie-field-title\">Title:</span>\n        <span class=\"movie-field-value\">{{ movie.Title | titlecase | alphaNumPipe }}</span>\n      </div>\n      <div class=\"movie-field\">\n        <span class=\"movie-field-title\">Year:</span>\n        <span class=\"movie-field-value\">{{ movie.Year }}</span>\n      </div>\n      <div class=\"movie-field\">\n        <span class=\"movie-field-title\">Runtime:</span>\n        <span class=\"movie-field-value\">{{ movie.Runtime }}</span>\n      </div>\n      <div class=\"movie-field\">\n        <span class=\"movie-field-title\">Genre:</span>\n        <span class=\"movie-field-value\">{{ movie.Genre | titlecase | alphaNumPipe  }}</span>\n      </div>\n      <div class=\"movie-field\">\n        <span class=\"movie-field-title\">Director:</span>\n        <span class=\"movie-field-value\">{{ movie.Director | titlecase | alphaNumPipe  }}</span>\n      </div>\n      <div class=\"btns\">\n        <button (click)=\"openPopup(movie, PopupModes.EDIT)\" class=\"button button-primary\">edit</button>\n        <button (click)=\"openPopup(movie, PopupModes.DELETE)\" class=\"button button-primary\">delete</button>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<app-popup *ngIf=\"popup && popup.open\"\n  [editMovie]=\"editMovie\"\n  [popup]=\"popup\"\n  [popupTitle]=\"popupTitle\"\n  [movies]=\"movies\">\n</app-popup>\n"

/***/ }),

/***/ "./src/app/components/movies/movies.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/movies/movies.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movies {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 20px; }\n\n.movies-list {\n  margin: 0;\n  padding: 0; }\n\n.movies-list li {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 20px;\n  background: #747474;\n  border-radius: 6px;\n  margin: 15px auto;\n  font-size: 20px; }\n\n.movies-list li .movie-field .movie-field-title {\n    font-weight: bold;\n    padding-right: 10px; }\n\n.btns {\n  display: flex;\n  justify-content: center; }\n\n.btns button {\n    margin: 10px; }\n\n.button {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #59460c;\n  border-radius: 6px;\n  padding: 5px 15px;\n  border: none;\n  border-bottom: solid 1px #59460c;\n  transition: all 0.5s ease;\n  cursor: pointer; }\n\n.button:hover {\n    -webkit-transform: translateY(-1px);\n    transform: translateY(-1px);\n    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5); }\n\n.button.button-primary {\n    background-color: #fbaf55;\n    box-shadow: 2px 2px 2px rgba(89, 70, 12, 0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvQzpcXFVzZXJzXFxpY2hlcm5lbmtvXFxHb29nbGUg0JTQuNGB0LpcXFNraWxsVXBcXG1vdmllcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW92aWVzXFxtb3ZpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVaO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFSakI7SUFZTSxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBSXpCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUZ6QjtJQUtJLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQVhqQjtJQWNJLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IsMENBQTBDLEVBQUE7O0FBaEI5QztJQW1CSSx5QkFBeUI7SUFDekIsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWVzIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLm1vdmllcy1saXN0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubW92aWVzLWxpc3QgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjNzQ3NDc0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLm1vdmllLWZpZWxkIHtcclxuXHJcbiAgICAubW92aWUtZmllbGQtdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICM1OTQ2MGM7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzU5NDYwYztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgJi5idXR0b24tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJhZjU1O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSg4OSwgNzAsIDEyLCAwLjkpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions_movies_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/movies-api */ "./src/app/actions/movies-api.ts");
/* harmony import */ var _popup_popup_modes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup/popup-modes */ "./src/app/components/popup/popup-modes.ts");
/* harmony import */ var _mock_movie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock-movie */ "./src/app/components/movies/mock-movie.ts");







var TITLE_KEY = 'Title';
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(store) {
        this.store = store;
        this.movies$ = this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["getMoviesState"]);
        this.movies = [];
        this.PopupModes = _popup_popup_modes__WEBPACK_IMPORTED_MODULE_5__["PopupModes"];
        this.mockMovie = _mock_movie__WEBPACK_IMPORTED_MODULE_6__["mockMovie"];
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_4__["RequestMovies"]());
        this.moviesSubscription = this.movies$.subscribe(function (movies) { return _this.movies = movies; });
    };
    MoviesComponent.prototype.openPopup = function (movie, mode) {
        this.editMovie = Object.assign({}, movie);
        this.popupTitle = mode.title;
        this.popup = {
            open: true,
            mode: mode
        };
    };
    MoviesComponent.prototype.closePopup = function () {
        this.popup.open = false;
    };
    MoviesComponent.prototype.OnDestroy = function () {
        this.moviesSubscription.unsubscribe();
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/components/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/components/movies/movies.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup-modes.ts":
/*!*************************************************!*\
  !*** ./src/app/components/popup/popup-modes.ts ***!
  \*************************************************/
/*! exports provided: PopupModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModes", function() { return PopupModes; });
var PopupModes = {
    ADD: {
        mode: 'add',
        title: 'Add new movie'
    },
    EDIT: {
        mode: 'edit',
        title: 'Edit movie'
    },
    DELETE: {
        mode: 'Delete',
        title: 'Please confirm movie deleting'
    }
};


/***/ }),

/***/ "./src/app/components/popup/popup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/popup/popup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-bg\">\n  <div class=\"popup\">\n    <h2>{{popupTitle}}</h2>\n    <form  class=\"popup-form\" #moviesForm=\"ngForm\" novalidate>\n      <div class=\"form-wrp\" *ngIf=\"popup.mode == PopupModes.ADD || popup.mode == PopupModes.EDIT\">\n          <label>\n              <span>Title</span>\n              <input\n              type=\"text\"\n              [(ngModel)]=\"editMovie.Title\"\n              name=\"title\"\n              [appTitlesValidator]=\"movies\"\n              [editMovie]=\"editMovie\"\n              required\n              #title=\"ngModel\">\n\n              <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"error-message\">\n                <div *ngIf=\"title.errors.required\">\n                  Title is required.\n                </div>\n                <div *ngIf=\"!title.errors.required && !title.valid\">\n                  This title already exists.\n                </div>\n              </div>\n            </label>\n            <label>\n              <span>Year</span>\n              <input type=\"text\" [(ngModel)]=\"editMovie.Year\" name=\"year\" required minlength=\"4\" maxlength=\"4\" pattern=\"^(19|20)\\d{2}$\" #year=\"ngModel\">\n              <div *ngIf=\"year.invalid && (year.dirty || year.touched)\" class=\"error-message\">\n                <div *ngIf=\"year.errors.required\">\n                  Year is required.\n                </div>\n                <div *ngIf=\"year.errors.minlength || year.errors.maxlength\">\n                  Year must be 4 characters long.\n                </div>\n                <div *ngIf=\"year.errors.pattern\">\n                  Must be valid year from 1900 to 2099.\n                </div>\n              </div>\n            </label>\n            <label>\n              <span>Runtime</span>\n              <input type=\"text\" [(ngModel)]=\"editMovie.Runtime\" name=\"runtime\" required #runtime=\"ngModel\">\n              <div *ngIf=\"runtime.invalid && (runtime.dirty || runtime.touched)\" class=\"error-message\">\n                <div *ngIf=\"runtime.errors.required\">\n                  Runtime is required.\n                </div>\n              </div>\n            </label>\n            <label>\n              <span>Genre</span>\n              <input type=\"text\" [(ngModel)]=\"editMovie.Genre\" name=\"genre\" required #genre=\"ngModel\">\n              <div *ngIf=\"genre.invalid && (genre.dirty || genre.touched)\" class=\"error-message\">\n                <div *ngIf=\"genre.errors.required\">\n                  Genre is required.\n                </div>\n              </div>\n            </label>\n            <label>\n              <span>Director</span>\n              <input type=\"text\" [(ngModel)]=\"editMovie.Director\" name=\"director\" required #director=\"ngModel\">\n              <div *ngIf=\"director.invalid && (director.dirty || director.touched)\" class=\"error-message\">\n                <div *ngIf=\"director.errors.required\">\n                  Director is required.\n                </div>\n              </div>\n            </label>\n      </div>\n      <div class=\"btns\">\n        <button class=\"popup-save\" (click)=\"save($event)\" [disabled]=\"moviesForm.invalid\" class=\"button button-primary\">Confirm</button>\n        <button class=\"popup-cancel\" (click)=\"cancel()\" class=\"button button-primary\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/popup/popup.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-bg {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.popup {\n  background-color: #747474;\n  padding: 20px;\n  border-radius: 6px;\n  width: 300px; }\n\n.popup .popup-form {\n    display: flex;\n    flex-direction: column; }\n\n.popup .popup-form label {\n      padding-bottom: 15px;\n      font-size: 18px;\n      display: flex;\n      flex-wrap: wrap; }\n\n.popup .popup-form label input {\n        padding: 0 10px;\n        margin-left: 15px;\n        border: 2px solid #ddd;\n        font-size: 16px;\n        border-radius: 3px;\n        flex-grow: 1;\n        width: 170px; }\n\n.popup .popup-form label input:invalid {\n          border-color: #ba1313; }\n\n.popup .popup-form label .error-message {\n        background: #e4abab;\n        margin-top: 12px;\n        color: #ba1313;\n        border-radius: 2px;\n        padding: 3px 10px;\n        width: 100%; }\n\n.popup .btns {\n    display: flex;\n    justify-content: center; }\n\n.popup .btns button {\n      margin: 10px; }\n\n.popup .button {\n    font-size: 16px;\n    font-weight: bold;\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n    color: #59460c;\n    border-radius: 6px;\n    padding: 5px 15px;\n    border: none;\n    border-bottom: solid 1px #59460c;\n    transition: all 0.5s ease;\n    cursor: pointer; }\n\n.popup .button:disabled {\n      background-color: #ddd !important; }\n\n.popup .button:hover {\n      -webkit-transform: translateY(-1px);\n      transform: translateY(-1px);\n      box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5); }\n\n.popup .button.button-primary {\n      background-color: #fbaf55;\n      box-shadow: 2px 2px 2px rgba(89, 70, 12, 0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC9DOlxcVXNlcnNcXGljaGVybmVua29cXEdvb2dsZSDQlNC40YHQulxcU2tpbGxVcFxcbW92aWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb3B1cFxccG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRW5CO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUpkO0lBT0ksYUFBYTtJQUNiLHNCQUFzQixFQUFBOztBQVIxQjtNQVdNLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsYUFBYTtNQUNiLGVBQWUsRUFBQTs7QUFkckI7UUFpQlEsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBVyxFQUFBOztBQXZCbkI7VUEwQlUscUJBQW9CLEVBQUE7O0FBMUI5QjtRQStCUSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLFdBQVcsRUFBQTs7QUFwQ25CO0lBMENJLGFBQWE7SUFDYix1QkFBdUIsRUFBQTs7QUEzQzNCO01BOENNLFlBQVksRUFBQTs7QUE5Q2xCO0lBa0RJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7O0FBNURuQjtNQStETSxpQ0FBaUMsRUFBQTs7QUEvRHZDO01Ba0VNLG1DQUFtQztNQUNuQywyQkFBMkI7TUFDM0IsMENBQTBDLEVBQUE7O0FBcEVoRDtNQXVFTSx5QkFBeUI7TUFDekIsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLWJnIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiAgLnBvcHVwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDc0NzQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIC5wb3B1cC1mb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIHdpZHRoOjE3MHB4O1xyXG5cclxuICAgICAgICAgICY6aW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjojYmExMzEzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2U0YWJhYjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogI2JhMTMxMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6ICM1OTQ2MGM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM1OTQ2MGM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICB9XHJcbiAgICAgICYuYnV0dG9uLXByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmFmNTU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSg4OSwgNzAsIDEyLCAwLjkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/popup/popup.component.ts ***!
  \*****************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_movies_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/movies-api */ "./src/app/actions/movies-api.ts");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup */ "./src/app/components/popup/popup.ts");
/* harmony import */ var _popup_popup_modes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup/popup-modes */ "./src/app/components/popup/popup-modes.ts");






var PopupComponent = /** @class */ (function () {
    function PopupComponent(store) {
        this.store = store;
        this.PopupModes = _popup_popup_modes__WEBPACK_IMPORTED_MODULE_5__["PopupModes"];
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent.prototype.save = function (e) {
        e.preventDefault();
        if (this.popup.mode === this.PopupModes.ADD) {
            this.addNewMovie(this.editMovie);
        }
        if (this.popup.mode === this.PopupModes.EDIT) {
            this.updateMovie(this.editMovie);
        }
        if (this.popup.mode === this.PopupModes.DELETE) {
            this.deleteMovie(this.editMovie);
        }
        this.popup.open = false;
    };
    PopupComponent.prototype.addNewMovie = function (newMovie) {
        if (!this.isValid(newMovie)) {
            return;
        }
        this.store.dispatch(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_3__["AddMovie"](newMovie));
    };
    PopupComponent.prototype.updateMovie = function (movie) {
        if (!this.isValid(movie)) {
            return;
        }
        this.store.dispatch(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_3__["EditMovie"](movie));
    };
    PopupComponent.prototype.deleteMovie = function (movie) {
        this.store.dispatch(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_3__["DeleteMovie"](movie));
    };
    PopupComponent.prototype.cancel = function () {
        this.popup.open = false;
    };
    PopupComponent.prototype.isValid = function (movie) {
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopupComponent.prototype, "editMovie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopupComponent.prototype, "movies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _popup__WEBPACK_IMPORTED_MODULE_4__["Popup"])
    ], PopupComponent.prototype, "popup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopupComponent.prototype, "popupTitle", void 0);
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.scss */ "./src/app/components/popup/popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.ts":
/*!*******************************************!*\
  !*** ./src/app/components/popup/popup.ts ***!
  \*******************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
var Popup = /** @class */ (function () {
    function Popup() {
    }
    return Popup;
}());



/***/ }),

/***/ "./src/app/effects/movies-api-effects.ts":
/*!***********************************************!*\
  !*** ./src/app/effects/movies-api-effects.ts ***!
  \***********************************************/
/*! exports provided: MoviesApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesApiEffects", function() { return MoviesApiEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_movies_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/movies-api.service */ "./src/app/shared/services/movies-api.service.ts");
/* harmony import */ var _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/movies-api */ "./src/app/actions/movies-api.ts");







var MoviesApiEffects = /** @class */ (function () {
    function MoviesApiEffects(actions$, MoviesApiServ) {
        var _this = this;
        this.actions$ = actions$;
        this.MoviesApiServ = MoviesApiServ;
        this.requestMovies$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["REQUEST_MOVIES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (actions) { return _this.MoviesApiServ.getDefaultMoviesList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (movies) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["RecieveMovies"](movies)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["RequestFailed"](err));
        })); }));
        this.addMovie$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["ADD_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.MoviesApiServ.addNewMovie(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (movie) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["AddMovieSuccess"](movie)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["RequestFailed"](err));
        })); }));
        this.editMovie$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["EDIT_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.MoviesApiServ.updateMovie(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (movie) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["EditMovieSuccess"](movie)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["RequestFailed"](err));
        })); }));
        this.deleteMovie$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["DELETE_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.MoviesApiServ.deleteMovie(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (movie) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["DeleteMovieSuccess"](movie)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_movies_api__WEBPACK_IMPORTED_MODULE_6__["RequestFailed"](err));
        })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MoviesApiEffects.prototype, "requestMovies$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MoviesApiEffects.prototype, "addMovie$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MoviesApiEffects.prototype, "editMovie$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MoviesApiEffects.prototype, "deleteMovie$", void 0);
    MoviesApiEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _shared_services_movies_api_service__WEBPACK_IMPORTED_MODULE_5__["MoviesApiService"]])
    ], MoviesApiEffects);
    return MoviesApiEffects;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, getMoviesState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMoviesState", function() { return getMoviesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _movies_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies-api */ "./src/app/reducers/movies-api.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


var reducers = {
    movies: _movies_api__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};
var getMoviesState = function (state) { return state.movies; };
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/reducers/movies-api.ts":
/*!****************************************!*\
  !*** ./src/app/reducers/movies-api.ts ***!
  \****************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_movies_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/movies-api */ "./src/app/actions/movies-api.ts");

function reducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions_movies_api__WEBPACK_IMPORTED_MODULE_0__["RECIEVE_MOVIES"]:
            return action.payload;
        case _actions_movies_api__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_SUCCESS"]:
            return state.concat([action.payload]);
        case _actions_movies_api__WEBPACK_IMPORTED_MODULE_0__["EDIT_MOVIE_SUCCESS"]:
            var index = state.findIndex(function (movie) { return movie.imdbID === action.payload.imdbID; });
            return state.slice(0, index).concat([
                action.payload
            ], state.slice(index + 1));
        case _actions_movies_api__WEBPACK_IMPORTED_MODULE_0__["DELETE_MOVIE_SUCCESS"]:
            return state.filter(function (movie) {
                return movie.imdbID !== action.payload.imdbID;
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/directives/titles-validator.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/titles-validator.directive.ts ***!
  \*****************************************************************/
/*! exports provided: TitlesValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlesValidatorDirective", function() { return TitlesValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var MOVIE_ID_KEY = 'imdbID';
var MOVIE_TITLE_KEY = 'Title';
var TitlesValidatorDirective = /** @class */ (function () {
    function TitlesValidatorDirective() {
    }
    TitlesValidatorDirective_1 = TitlesValidatorDirective;
    TitlesValidatorDirective.prototype.validate = function (control) {
        var currentId = String(this.editMovie[MOVIE_ID_KEY]);
        var value = control.value ? control.value.trim() : '';
        function mathces(item, index, array) {
            return item[MOVIE_TITLE_KEY] === value && currentId !== item[MOVIE_ID_KEY];
        }
        var hasTitle = this.movies.some(mathces);
        return hasTitle
            ? { duplicateTitles: true }
            : null;
    };
    var TitlesValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appTitlesValidator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TitlesValidatorDirective.prototype, "movies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TitlesValidatorDirective.prototype, "editMovie", void 0);
    TitlesValidatorDirective = TitlesValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTitlesValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: TitlesValidatorDirective_1,
                    multi: true
                }]
        })
    ], TitlesValidatorDirective);
    return TitlesValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/alpha-num-pipe..ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/alpha-num-pipe..ts ***!
  \*************************************************/
/*! exports provided: AlphaNumPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaNumPipe", function() { return AlphaNumPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlphaNumPipe = /** @class */ (function () {
    function AlphaNumPipe() {
    }
    AlphaNumPipe.prototype.transform = function (value) {
        return value.replace(/[^\w\s\:\-\,\'\é]/gi, '');
    };
    AlphaNumPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'alphaNumPipe'
        })
    ], AlphaNumPipe);
    return AlphaNumPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/api-config.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/api-config.ts ***!
  \***********************************************/
/*! exports provided: API_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CONFIG", function() { return API_CONFIG; });
var API_CONFIG = {
    BASE_URL: 'https://www.omdbapi.com/',
    SEARCH_PARAMETER_TITLE: 't',
    API_KEY: 'de14e9fd'
};


/***/ }),

/***/ "./src/app/shared/services/default-movies.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/default-movies.ts ***!
  \***************************************************/
/*! exports provided: DEFAULT_MOVIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MOVIES", function() { return DEFAULT_MOVIES; });
var DEFAULT_MOVIES = [
    'Blade',
    'Titanic',
    'The Shawshank Redemption',
    'The Godfather',
    'Schindler\'s List',
    'Inception', 'Léon',
    'The Green Mile',
    'The Pianist',
    'The Silence of the Lambs',
    'Interstellar'
];


/***/ }),

/***/ "./src/app/shared/services/movies-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/movies-api.service.ts ***!
  \*******************************************************/
/*! exports provided: MoviesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesApiService", function() { return MoviesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _default_movies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-movies */ "./src/app/shared/services/default-movies.ts");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-config */ "./src/app/shared/services/api-config.ts");







var MoviesApiService = /** @class */ (function () {
    function MoviesApiService(http) {
        this.http = http;
    }
    MoviesApiService.prototype.buildRequestUrl = function (searchData) {
        searchData = searchData.trim().split(' ').join('+');
        return _api_config__WEBPACK_IMPORTED_MODULE_6__["API_CONFIG"].BASE_URL + "?" + _api_config__WEBPACK_IMPORTED_MODULE_6__["API_CONFIG"].SEARCH_PARAMETER_TITLE + "=" + searchData + "&apikey=" + _api_config__WEBPACK_IMPORTED_MODULE_6__["API_CONFIG"].API_KEY;
    };
    MoviesApiService.prototype.getDefaultMoviesList = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Promise.all(_default_movies__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_MOVIES"].map(function (title) { return _this.getMovieByTitle(title); })));
    };
    MoviesApiService.prototype.getMovieByTitle = function (movieTitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.buildRequestUrl(movieTitle))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError)).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    MoviesApiService.prototype.addNewMovie = function (movie) {
        // temporary solution as we work locally and need to take ID's somewhere(for further proper updating/deleting);
        movie.imdbID = Date.now();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(movie);
    };
    MoviesApiService.prototype.updateMovie = function (movie) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(movie);
    };
    MoviesApiService.prototype.deleteMovie = function (movie) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(movie);
    };
    MoviesApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    MoviesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MoviesApiService);
    return MoviesApiService;
}());



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

module.exports = __webpack_require__(/*! C:\Users\ichernenko\Google Диск\SkillUp\movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map