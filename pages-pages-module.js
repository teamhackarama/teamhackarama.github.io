(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = 'https://9x2ncclhkj.execute-api.us-east-1.amazonaws.com/prod';
    }
    ApiService.prototype.get = function () {
        return this.http.get(this.BASE_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (r) {
                return {
                    date: r.FeedbackDate.S,
                    id: r.FeedbackId.S,
                    sentiment: r.FeedbackSentiment.S === 'positive',
                    location: r.FeedbackLocation.S,
                    text: r.FeedbackText.S,
                    timestamp: r.Timestamp.S
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get', [])));
    };
    ApiService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.error(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ApiService.prototype.error = function (message) {
        console.log('danger', 'ApiService: ' + message);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/pages/feedback/feedback.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/feedback/feedback.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Feedback</h3>"

/***/ }),

/***/ "./src/app/pages/feedback/feedback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/feedback/feedback.component.ts ***!
  \******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(apiService) {
        this.apiService = apiService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/pages/feedback/feedback.component.html"),
            styles: [':host { width: 100%; }']
        }),
        __metadata("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/feedback/feedback.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.component */ "./src/app/pages/feedback/feedback.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]
            ],
            declarations: [
                _feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"],
            ],
        })
    ], FeedbackModule);
    return FeedbackModule;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/pages/summary/summary.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/pages/timeline/timeline.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/pages/feedback/feedback.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'summary',
                component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"],
            },
            {
                path: 'timeline',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"],
            },
            {
                path: 'feedback',
                component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"],
            },
            {
                path: '',
                redirectTo: 'summary',
                pathMatch: 'full',
            },
        ],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: "\n    <app-layout>\n      <router-outlet></router-outlet>\n    </app-layout>\n  ",
            styles: [':host {background-color: #eee;}']
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _summary_summary_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/summary.module */ "./src/app/pages/summary/summary.module.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback/feedback.module */ "./src/app/pages/feedback/feedback.module.ts");
/* harmony import */ var _timeline_timeline_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/timeline.module */ "./src/app/pages/timeline/timeline.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _summary_summary_module__WEBPACK_IMPORTED_MODULE_2__["SummaryModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _feedback_feedback_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackModule"],
                _timeline_timeline_module__WEBPACK_IMPORTED_MODULE_6__["TimelineModule"]
            ],
            declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/summary/stopwards.ts":
/*!********************************************!*\
  !*** ./src/app/pages/summary/stopwards.ts ***!
  \********************************************/
/*! exports provided: clean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clean", function() { return clean; });
var clean = function (input) {
    var x;
    var y;
    var word;
    var stop_word;
    var regex_str;
    var regex;
    var cleansed_string = input.valueOf();
    var stop_words = new Array('a', 'about', 'above', 'across', 'after', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'among', 'an', 'and', 'another', 'any', 'anybody', 'anyone', 'anything', 'anywhere', 'are', 'area', 'areas', 'around', 'as', 'ask', 'asked', 'asking', 'asks', 'at', 'away', 'b', 'back', 'backed', 'backing', 'backs', 'be', 'became', 'because', 'become', 'becomes', 'been', 'before', 'began', 'behind', 'being', 'beings', 'best', 'better', 'between', 'big', 'both', 'but', 'by', 'c', 'came', 'can', 'cannot', 'case', 'cases', 'certain', 'certainly', 'clear', 'clearly', 'come', 'could', 'd', 'did', 'differ', 'different', 'differently', 'do', 'does', 'done', 'down', 'down', 'downed', 'downing', 'downs', 'during', 'e', 'each', 'early', 'either', 'end', 'ended', 'ending', 'ends', 'enough', 'even', 'evenly', 'ever', 'every', 'everybody', 'everyone', 'everything', 'everywhere', 'f', 'face', 'faces', 'fact', 'facts', 'far', 'felt', 'few', 'find', 'finds', 'first', 'for', 'four', 'from', 'full', 'fully', 'further', 'furthered', 'furthering', 'furthers', 'g', 'gave', 'general', 'generally', 'get', 'gets', 'give', 'given', 'gives', 'go', 'going', 'good', 'goods', 'got', 'great', 'greater', 'greatest', 'group', 'grouped', 'grouping', 'groups', 'h', 'had', 'has', 'have', 'having', 'he', 'her', 'here', 'herself', 'high', 'high', 'high', 'higher', 'highest', 'him', 'himself', 'his', 'how', 'however', 'i', 'if', 'important', 'in', 'interest', 'interested', 'interesting', 'interests', 'into', 'is', 'it', 'its', 'itself', 'j', 'just', 'k', 'keep', 'keeps', 'kind', 'knew', 'know', 'known', 'knows', 'l', 'large', 'largely', 'last', 'later', 'latest', 'least', 'less', 'let', 'lets', 'like', 'likely', 'long', 'longer', 'longest', 'm', 'made', 'make', 'making', 'man', 'many', 'may', 'me', 'member', 'members', 'men', 'might', 'more', 'most', 'mostly', 'mr', 'mrs', 'much', 'must', 'my', 'myself', 'n', 'necessary', 'need', 'needed', 'needing', 'needs', 'never', 'new', 'new', 'newer', 'newest', 'next', 'no', 'nobody', 'non', 'noone', 'not', 'nothing', 'now', 'nowhere', 'number', 'numbers', 'o', 'of', 'off', 'often', 'old', 'older', 'oldest', 'on', 'once', 'one', 'only', 'open', 'opened', 'opening', 'opens', 'or', 'order', 'ordered', 'ordering', 'orders', 'other', 'others', 'our', 'out', 'over', 'p', 'part', 'parted', 'parting', 'parts', 'per', 'perhaps', 'place', 'places', 'point', 'pointed', 'pointing', 'points', 'possible', 'present', 'presented', 'presenting', 'presents', 'problem', 'problems', 'put', 'puts', 'q', 'quite', 'r', 'rather', 'really', 'right', 'right', 'room', 'rooms', 's', 'said', 'same', 'saw', 'say', 'says', 'second', 'seconds', 'see', 'seem', 'seemed', 'seeming', 'seems', 'sees', 'several', 'shall', 'she', 'should', 'show', 'showed', 'showing', 'shows', 'side', 'sides', 'since', 'small', 'smaller', 'smallest', 'so', 'some', 'somebody', 'someone', 'something', 'somewhere', 'state', 'states', 'still', 'still', 'such', 'sure', 't', 'take', 'taken', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'therefore', 'these', 'they', 'thing', 'things', 'think', 'thinks', 'this', 'those', 'though', 'thought', 'thoughts', 'three', 'through', 'thus', 'to', 'today', 'together', 'too', 'took', 'toward', 'turn', 'turned', 'turning', 'turns', 'two', 'u', 'under', 'until', 'up', 'upon', 'us', 'use', 'used', 'uses', 'v', 'very', 'w', 'want', 'wanted', 'wanting', 'wants', 'was', 'way', 'ways', 'we', 'well', 'wells', 'went', 'were', 'what', 'when', 'where', 'whether', 'which', 'while', 'who', 'whole', 'whose', 'why', 'will', 'with', 'within', 'without', 'work', 'worked', 'working', 'works', 'would', 'x', 'y', 'year', 'years', 'yet', 'you', 'young', 'younger', 'youngest', 'your', 'yours', 'z');
    // Split out all the individual words in the phrase
    var words = cleansed_string.match(/[^\s]+|\s+[^\s+]$/g);
    // Review all the words
    for (x = 0; x < words.length; x++) {
        // For each word, check all the stop words
        for (y = 0; y < stop_words.length; y++) {
            // Get the current word
            word = words[x].replace(/\s+|[^a-z]+/ig, ""); // Trim the word and remove non-alpha
            // Get the stop word
            stop_word = stop_words[y];
            // If the word matches the stop word, remove it from the keywords
            if (word.toLowerCase() == stop_word) {
                // Build the regex
                regex_str = "^\\s*" + stop_word + "\\s*$"; // Only word
                regex_str += "|^\\s*" + stop_word + "\\s+"; // First word
                regex_str += "|\\s+" + stop_word + "\\s*$"; // Last word
                regex_str += "|\\s+" + stop_word + "\\s+"; // Word somewhere in the middle
                regex = new RegExp(regex_str, "ig");
                // Remove the word from the keywords
                cleansed_string = cleansed_string.replace(regex, " ");
            }
        }
    }
    return cleansed_string.replace(/^\s+|\s+$/g, "");
};


/***/ }),

/***/ "./src/app/pages/summary/summary.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/summary/summary.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row graph\">\r\n  <div class=\"col-4\">\r\n    <div class=\"card graphTotal specialCard\" (click)=\"renderChart('Total')\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title graphTitle\">Total Feedback</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"row graphCount\">\r\n              {{totalData.length}}\r\n            </div>\r\n            <div class=\"row graphPercentage\">\r\n              <span class=\"arrowUp\">▲</span> 13.8%\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <app-chart #chartTotal [chartData]=\"chartTotalData\"></app-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <div class=\"card graphPositive specialCard\" (click)=\"renderChart('Positive')\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title graphTitle\">Positive Feedback</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"row graphCount\">\r\n              {{positiveData.length}}\r\n            </div>\r\n            <div class=\"row graphPercentage\">\r\n              <span class=\"arrowUp\">▲</span> 13.8%\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <app-chart #chartPositive [chartData]=\"chartPositiveData\"></app-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <div class=\"card graphNegative specialCard\" (click)=\"renderChart('Negative')\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title graphTitle\">Negative Feedback</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"row graphCount\">\r\n              {{negativeData.length}}\r\n            </div>\r\n            <div class=\"row graphPercentage\">\r\n              <span class=\"arrowUp\">▲</span> 13.8%\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <app-chart #chartNegative [chartData]=\"chartNegativeData\"></app-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-4\">\r\n  <div class=\"col-8\">\r\n    <div class=\"card specialCard\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{resultsTitle}} Feedback</h5>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Text</th>\r\n                <th scope=\"col\">Sentiment</th>\r\n                <th scope=\"col\">Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let result of results\">\r\n                <td>{{result.text}}</td>\r\n                <td><span class=\"badge badge-pill badge-{{result.sentiment|status}}\">{{result.sentiment ? 'positive' : 'negative'}}</span></td>\r\n                <td>{{result.date}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <div class=\"card specialCard\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Word Cloud</h5>\r\n        <app-wordcloud #wordcloud [wordData]=\"wordCloudData\" [height]=\"500\"  [width]=\"300\" [options]=\"wordCloudOptions\"></app-wordcloud>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/summary/summary.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/summary/summary.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.graphCount {\n  font-weight: bold;\n  font-size: 1.5em; }\n\n.graphTitle {\n  font-size: 12px;\n  color: #909090; }\n\n.specialCard {\n  border: 5px solid transparent;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); }\n\n.graph .card {\n  cursor: pointer; }\n\n.graph .card:hover {\n  background-color: #eee; }\n\n.graphCount, .graphPercentage {\n  margin-left: 4px; }\n\n.arrowUp {\n  color: #3cc480; }\n\n.arrowDown {\n  color: #ff4141; }\n"

/***/ }),

/***/ "./src/app/pages/summary/summary.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/summary/summary.component.ts ***!
  \****************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/components */ "./src/app/theme/components/index.ts");
/* harmony import */ var _stopwards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stopwards */ "./src/app/pages/summary/stopwards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(apiService) {
        this.apiService = apiService;
        this.chartTotalData = {};
        this.chartPositiveData = {};
        this.chartNegativeData = {};
        this.resultsTitle = 'Total';
        this.wordCloudData = [];
        this.wordCloudOptions = {
            settings: {
                minFontSize: 10,
                maxFontSize: 100,
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            labels: true // false to hide hover labels
        };
        this._gradientStopValue = 0.4;
        this.positiveData = [];
        this.negativeData = [];
        this.totalData = [];
    }
    SummaryComponent.prototype.bucketizeDates = function (data) {
        var dateMap = {};
        data.forEach(function (item) {
            if (dateMap[item.date]) {
                dateMap[item.date]++;
            }
            else {
                dateMap[item.date] = 1;
            }
        });
        var sortedKeys = Object.keys(dateMap).sort();
        return sortedKeys.map(function (key) {
            return dateMap[key];
        });
    };
    SummaryComponent.prototype.setupGraph = function (data, color) {
        var buckets = this.bucketizeDates(data);
        var gradientPositive = this.chartPositive.context.createLinearGradient(0, 0, 0, 400);
        gradientPositive.addColorStop(this._gradientStopValue, "#ffffff");
        gradientPositive.addColorStop(0, color);
        return {
            labels: new Array(buckets.length),
            datasets: [
                {
                    data: buckets,
                    borderWidth: 0,
                    backgroundColor: gradientPositive
                }
            ]
        };
    };
    SummaryComponent.prototype.sortCollection = function (data) {
        return data.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date) || b.timestamp - a.timestamp;
        });
    };
    SummaryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiService.get().subscribe(function (results) {
            _this.totalData = results;
            results.forEach(function (result) {
                if (result.sentiment) {
                    _this.positiveData.push(result);
                }
                else {
                    _this.negativeData.push(result);
                }
            });
            _this.totalData = _this.sortCollection(_this.totalData);
            _this.positiveData = _this.sortCollection(_this.positiveData);
            _this.negativeData = _this.sortCollection(_this.negativeData);
            _this.chartTotalData = _this.setupGraph(_this.totalData, '#6fdeff');
            _this.chartPositiveData = _this.setupGraph(_this.positiveData, '#74ffbc');
            _this.chartNegativeData = _this.setupGraph(_this.negativeData, '#ff4848');
            _this.renderChart('Total');
        });
    };
    SummaryComponent.prototype.updateWordcloud = function (results) {
        var _this = this;
        var wordMap = {};
        this.wordCloudData = [];
        results.forEach(function (data) {
            var words = Object(_stopwards__WEBPACK_IMPORTED_MODULE_3__["clean"])(data.text).split(' ');
            words.forEach(function (word) {
                if (wordMap[word]) {
                    wordMap[word]++;
                }
                else {
                    wordMap[word] = 1;
                }
            });
        });
        Object.keys(wordMap).forEach(function (word) {
            _this.wordCloudData.push({
                text: word,
                size: wordMap[word] * 100
            });
        });
        this.wordcloud.wordData = this.wordCloudData;
        this.wordcloud.update();
    };
    SummaryComponent.prototype.renderChart = function (type) {
        switch (type) {
            case 'Positive':
                this.results = this.positiveData;
                break;
            case 'Negative':
                this.results = this.negativeData;
                break;
            default:
                this.results = this.totalData;
                break;
        }
        this.resultsTitle = type;
        this.updateWordcloud(this.results);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_theme_components__WEBPACK_IMPORTED_MODULE_2__["WordCloudComponent"]),
        __metadata("design:type", _theme_components__WEBPACK_IMPORTED_MODULE_2__["WordCloudComponent"])
    ], SummaryComponent.prototype, "wordcloud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_theme_components__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]),
        __metadata("design:type", _theme_components__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])
    ], SummaryComponent.prototype, "chartTotal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_theme_components__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]),
        __metadata("design:type", _theme_components__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])
    ], SummaryComponent.prototype, "chartPositive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_theme_components__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]),
        __metadata("design:type", _theme_components__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])
    ], SummaryComponent.prototype, "chartNegative", void 0);
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/pages/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/pages/summary/summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/summary/summary.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.module.ts ***!
  \*************************************************/
/*! exports provided: SummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryModule", function() { return SummaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary.component */ "./src/app/pages/summary/summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SummaryModule = /** @class */ (function () {
    function SummaryModule() {
    }
    SummaryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]
            ],
            declarations: [
                _summary_component__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"],
            ],
        })
    ], SummaryModule);
    return SummaryModule;
}());



/***/ }),

/***/ "./src/app/pages/timeline/timeline.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/timeline/timeline.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Timeline</h3>"

/***/ }),

/***/ "./src/app/pages/timeline/timeline.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/timeline/timeline.component.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(apiService) {
        this.apiService = apiService;
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/pages/timeline/timeline.component.html"),
            styles: [':host { width: 100%; }']
        }),
        __metadata("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/pages/timeline/timeline.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/timeline/timeline.module.ts ***!
  \***************************************************/
/*! exports provided: TimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.component */ "./src/app/pages/timeline/timeline.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]
            ],
            declarations: [
                _timeline_component__WEBPACK_IMPORTED_MODULE_2__["TimelineComponent"],
            ],
        })
    ], TimelineModule);
    return TimelineModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map