(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/components/archive/archive.component.html":
/*!****************************************************************!*\
  !*** ./src/app/home/components/archive/archive.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"menu-header\">\r\n      <span class=\"ion-activatable p-relative\" role=\"button\">\r\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\r\n        <img class=\"custom-icon\" (click)=\"openMenu()\" src=\"assets/icons/menu.png\" alt=\"menu\">\r\n      </span>\r\n      <img class=\"custom-icon logo\" src=\"assets/logo/logo.png\" alt=\"logo\">\r\n      <span>\r\n      \r\n      </span>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-segment (ionChange)=\"scrollSegmentTo()\" #catSegment [(ngModel)]=\"activeTabIndex\" *ngIf=\"catPostList && catPostList.length > 0\"\r\n    scrollable>\r\n    <ng-container *ngFor=\"let menuItem of catPostList; let i = index\">\r\n      <ion-segment-button class=\"cat-tab-btn\" (click)=\"slideTo(i)\" [value]=\"i\">\r\n        {{menuItem.category.categoryName}}\r\n      </ion-segment-button>\r\n    </ng-container>\r\n  </ion-segment>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-content>\r\n\r\n    <div *ngIf=\"catPostList && catPostList.length > 0\">\r\n      <ion-slides #postSlider (ionSlideNextEnd)=\"onSlideNext($event)\" (ionSlidePrevEnd)=\"onSlidePrev()\">\r\n        <ion-slide *ngFor=\"let menuSlide of catPostList\">\r\n          <section>\r\n            <ng-container *ngIf=\"menuSlide.loading ; then postsLoading; else postLoaded\"></ng-container>\r\n            <ng-template #postLoaded>\r\n              <div *ngIf=\"menuSlide.posts && menuSlide.posts.length > 0; else hasError\">\r\n\r\n                <article (scroll)=\"onScroll($event, menuSlide)\" class=\"post-archive-wrap\">\r\n                  <app-archive-post (postClosed)=\"exitAppSetting('reset')\" (postViewed)=\"exitAppSetting('preset')\" *ngFor=\"let p of menuSlide.posts\" [post]=\"p\"></app-archive-post>\r\n                  <div>\r\n                    <div [hidden]=\"!menuSlide.nextPostLoading\" class=\"post-loader\">\r\n                      <ion-spinner></ion-spinner>\r\n                    </div>\r\n                    <section *ngIf=\"menuSlide.errMessage\">\r\n                      <div>\r\n                        {{menuSlide?.errMessage}}\r\n                      </div>\r\n                    </section>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </ng-template>\r\n\r\n\r\n            <ng-template #postsLoading>\r\n              <div class=\"post-loader full-height\">\r\n                <ion-spinner></ion-spinner>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template #hasError>\r\n              <section *ngIf=\"menuSlide.errMessage\">\r\n                <div class=\"alert alert-danger\">\r\n                  {{menuSlide?.errMessage}}\r\n                </div>\r\n              </section>\r\n            </ng-template>\r\n\r\n          </section>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n\r\n\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/home/components/archive/archive.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/home/components/archive/archive.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-loader {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 30px 0; }\n  .post-loader.full-height {\n    min-height: 80vh; }\n  article.post-archive-wrap {\n  max-height: calc(90vh);\n  overflow: auto;\n  height: 100%; }\n  .cat-tab-btn {\n  font-weight: bold;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2FyY2hpdmUvRTpcXGd5YW4gd29ya1xca2h1bGFzYSBuZXdzXFxhcHBcXGstbmV3cy9zcmNcXGFwcFxcaG9tZVxcY29tcG9uZW50c1xcYXJjaGl2ZVxcYXJjaGl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7RUFMbEI7SUFRUSxnQkFBZ0IsRUFBQTtFQUl4QjtFQUNJLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1sb2FkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcblxyXG4gICAgJi5mdWxsLWhlaWdodCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogODB2aDtcclxuICAgIH1cclxufVxyXG5cclxuYXJ0aWNsZS5wb3N0LWFyY2hpdmUtd3JhcCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDkwdmgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXQtdGFiLWJ0biB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/components/archive/archive.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/components/archive/archive.component.ts ***!
  \**************************************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_post_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post/post.service */ "./src/app/services/post/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");
/* harmony import */ var src_app_services_routed_event_emitter_routed_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/routed-event-emitter/routed-event-emitter.service */ "./src/app/services/routed-event-emitter/routed-event-emitter.service.ts");
/* harmony import */ var src_app_shared_components_choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/choose-lang/choose-lang.component */ "./src/app/shared/components/choose-lang/choose-lang.component.ts");
/* harmony import */ var src_app_interfaces_app_lang_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/app-lang.enum */ "./src/app/interfaces/app-lang.enum.ts");
/* harmony import */ var src_app_services_choose_lang_choose_lang_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/choose-lang/choose-lang.service */ "./src/app/services/choose-lang/choose-lang.service.ts");
/* harmony import */ var src_app_shared_components_singal_page_singal_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/singal-page/singal-page.component */ "./src/app/shared/components/singal-page/singal-page.component.ts");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _single_news_single_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../single-news/single-news.component */ "./src/app/home/components/single-news/single-news.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(postService, modelCtrl, menuCtrl, adMob, platform, routedEvtEmitter, toastCtrl, langService, alertCtrl, deeplinks, modalCtrl) {
        var _this = this;
        this.postService = postService;
        this.modelCtrl = modelCtrl;
        this.menuCtrl = menuCtrl;
        this.adMob = adMob;
        this.platform = platform;
        this.routedEvtEmitter = routedEvtEmitter;
        this.toastCtrl = toastCtrl;
        this.langService = langService;
        this.alertCtrl = alertCtrl;
        this.deeplinks = deeplinks;
        this.modalCtrl = modalCtrl;
        /** Category wise posts list */
        this.catPostList = [];
        this.activeTabIndex = 0;
        this.postsList = [];
        this.menuCategories = [];
        this.canAppExit = true;
        this.backBtnCounter = 0;
        this.modalCounter = 0;
        this.platform.ready().then(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // this.showAd();
                this.langService.OnLangChanged.subscribe(function (success) {
                    _this.getMenu().then(function () {
                        _this.setActiveTab();
                    });
                });
                if (this.langService.selectedLang === null) {
                    this.chooseLang();
                }
                else {
                    this.getMenu();
                }
                if (this.platform.is('cordova')) {
                    this.manageDeepLnks();
                }
                return [2 /*return*/];
            });
        }); });
        this.routedEvtEmitter.eventEmitter.subscribe(function (params) {
            var pageData = params.data;
            if (pageData) {
                if (pageData.url === 'lang') {
                    _this.chooseLang();
                }
                else if (pageData.url === 'about_us' || pageData.url === 'contact_us' || pageData.url === 'privacy_policy') {
                    _this.showPageModal({ pageId: pageData.id, pageTitle: pageData.title });
                }
                else {
                    _this.setActiveTab(pageData.id);
                }
            }
        });
        if ('app' in navigator) {
            this.exitOnbackBtn();
        }
    }
    ArchiveComponent.prototype.chooseLang = function () {
        return __awaiter(this, void 0, void 0, function () {
            var langModal, data, choosedLang;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modelCtrl.create({
                            component: src_app_shared_components_choose_lang_choose_lang_component__WEBPACK_IMPORTED_MODULE_5__["ChooseLangComponent"],
                            cssClass: 'lang-modal',
                            backdropDismiss: false
                        })];
                    case 1:
                        langModal = _a.sent();
                        langModal.present().catch(function (err) { return console.log('err : ', err); }).finally(function () {
                            _this.exitAppSetting('preset');
                        });
                        return [4 /*yield*/, langModal.onDidDismiss().finally(function () {
                                _this.exitAppSetting('reset');
                            })];
                    case 2:
                        data = _a.sent();
                        choosedLang = data['data'];
                        return [2 /*return*/, Promise.resolve(choosedLang)];
                }
            });
        });
    };
    ArchiveComponent.prototype.showPageModal = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var pageModal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modelCtrl.create({
                            component: src_app_shared_components_singal_page_singal_page_component__WEBPACK_IMPORTED_MODULE_8__["SingalPageComponent"],
                            componentProps: params
                        })];
                    case 1:
                        pageModal = _a.sent();
                        pageModal.onDidDismiss().finally(function () {
                            _this.exitAppSetting('reset');
                        });
                        pageModal.present().finally(function () {
                            _this.exitAppSetting('preset');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ArchiveComponent.prototype.exitOnbackBtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.platform.backButton.subscribeWithPriority(1, function () { return __awaiter(_this, void 0, void 0, function () {
                    var toast;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.canAppExit) return [3 /*break*/, 3];
                                if (!(this.backBtnCounter === 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.toastCtrl.create({
                                        message: 'Press back again to exit',
                                        closeButtonText: '',
                                        position: 'bottom',
                                        duration: 3000
                                    })];
                            case 1:
                                toast = _a.sent();
                                toast.present().finally(function () {
                                    _this.backBtnCounter++;
                                });
                                return [3 /*break*/, 3];
                            case 2:
                                navigator['app'].exitApp();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ArchiveComponent.prototype.showAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.platform.is('cordova')) {
                    this.adMob.on(this.adMob.events.BANNER_CLOSE).subscribe(function (success) {
                        console.log('ev BANNER_CLOSE success ', success);
                    }, function (err) {
                        console.log('ev BANNER_CLOSE err ', err);
                    });
                    this.adMob.on(this.adMob.events.BANNER_EXIT_APP).subscribe(function (success) {
                        console.log('ev BANNER_EXIT_APP success ', success);
                    }, function (err) {
                        console.log('ev BANNER_EXIT_APP err ', err);
                    });
                    this.adMob.on(this.adMob.events.BANNER_LOAD).subscribe(function (success) {
                        console.log('ev BANNER_LOAD success ', success);
                    }, function (err) {
                        console.log('ev BANNER_LOAD err ', err);
                    });
                    this.adMob.on(this.adMob.events.BANNER_LOAD_FAIL).subscribe(function (success) {
                        console.log('ev BANNER_LOAD_FAIL success ', success);
                    }, function (err) {
                        console.log('ev BANNER_LOAD_FAIL err ', err);
                    });
                    this.adMob.on(this.adMob.events.BANNER_OPEN).subscribe(function (success) {
                        console.log('ev BANNER_OPEN success ', success);
                    }, function (err) {
                        console.log('ev BANNER_OPEN err ', err);
                    });
                    this.adMob.banner.config({
                        id: 'ca-app-pub-7769757158085259/7251294473',
                        autoShow: true,
                        isTesting: false,
                    });
                    this.adMob.banner.prepare()
                        .then(function () {
                        _this.adMob.banner.show().catch(function (err) {
                            console.log('err in show ad : ', err);
                        });
                    })
                        .catch(function (err) { return console.error('archive page ad failed ', err); });
                }
                return [2 /*return*/];
            });
        });
    };
    ArchiveComponent.prototype.getMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catList, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.catPostList.length = 0;
                        return [4 /*yield*/, this.postService.getMenuCategories()];
                    case 1:
                        catList = _a.sent();
                        this.catPostList = catList.map(function (cat) { return ({
                            category: cat,
                            posts: [],
                            loading: true,
                            nextPostLoading: false
                        }); });
                        return [4 /*yield*/, Promise.all([
                                this.getPosts(catList[0].categoryId),
                                this.getPosts(catList[1].categoryId),
                                this.getPosts(catList[2].categoryId)
                            ]).catch(function () { return undefined; })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve()];
                    case 3:
                        err_1 = _a.sent();
                        if (confirm('Something went wrong. Try reload app')) {
                            window.location.reload();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArchiveComponent.prototype.setActiveTab = function (catId) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                if (catId) {
                    for (i = 0; i < this.catPostList.length; i++) {
                        if (this.catPostList[i].category.categoryId === catId) {
                            this.activeTabIndex = i;
                            this.slideTo(i);
                            break;
                        }
                    }
                }
                else {
                    this.activeTabIndex = 0;
                    this.slideTo(0);
                }
                return [2 /*return*/];
            });
        });
    };
    ArchiveComponent.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    /**
     * Get posts by category id
     * @param categoryId category id
     */
    ArchiveComponent.prototype.getPosts = function (categoryId, from, count) {
        if (from === void 0) { from = 1; }
        if (count === void 0) { count = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, targetCategory, posts, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        targetCategory = this.catPostList.find(function (cat) { return cat.category.categoryId === categoryId; });
                        targetCategory.errMessage = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.postService.getPostArchive(categoryId, count, from)];
                    case 2:
                        posts = _b.sent();
                        if (targetCategory && posts.length > 0) {
                            (_a = targetCategory.posts).push.apply(_a, posts);
                            targetCategory.loading = false;
                            targetCategory.nextPostLoading = false;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        targetCategory.loading = false;
                        targetCategory.nextPostLoading = false;
                        targetCategory.errMessage = err_2;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArchiveComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    ArchiveComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('ngAfterViewInit');
        this.platform.resume.subscribe(function () {
            _this.manageDeepLnks();
        });
    };
    ArchiveComponent.prototype.exitAppSetting = function (action) {
        this.modalCounter = (action === 'preset') ? ++this.modalCounter : --this.modalCounter;
        this.backBtnCounter = 0;
        this.canAppExit = (action === 'reset') && (this.modalCounter <= 0);
    };
    ArchiveComponent.prototype.getSlideIndex = function (index, offset, length) {
        var num = index + offset;
        if (num > length - 1) {
            return length - 1;
        }
        else {
            return num;
        }
    };
    ArchiveComponent.prototype.onSlideNext = function (_e) {
        return __awaiter(this, void 0, void 0, function () {
            var activeIndex, slidesCount, targetIndex, targetCategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slider.getActiveIndex()];
                    case 1:
                        activeIndex = _a.sent();
                        return [4 /*yield*/, this.slider.length()];
                    case 2:
                        slidesCount = _a.sent();
                        targetIndex = this.getSlideIndex(activeIndex, 2, slidesCount);
                        targetCategory = this.catPostList[targetIndex];
                        if (targetCategory && targetCategory.posts && targetCategory.posts.length === 0) {
                            targetCategory.loading = true;
                            this.getPosts(targetCategory.category.categoryId);
                        }
                        this.activeTabIndex = activeIndex;
                        return [2 /*return*/];
                }
            });
        });
    };
    ArchiveComponent.prototype.onSlidePrev = function () {
        return __awaiter(this, void 0, void 0, function () {
            var activeIndex, targetCategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slider.getActiveIndex()];
                    case 1:
                        activeIndex = _a.sent();
                        targetCategory = this.catPostList[activeIndex];
                        if (targetCategory && targetCategory.posts && targetCategory.posts.length === 0) {
                            targetCategory.loading = true;
                            this.getPosts(targetCategory.category.categoryId);
                        }
                        this.activeTabIndex = activeIndex;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Slide to target index number
     * @param targetIndex Target slide index number
     */
    ArchiveComponent.prototype.slideTo = function (targetIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var targetCategory, _a, targetCategoryNext;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.scrollSegmentTo();
                        this.slider.slideTo(targetIndex, 500, false);
                        targetCategory = this.catPostList[targetIndex];
                        if (targetCategory && targetCategory.posts && targetCategory.posts.length === 0) {
                            targetCategory.loading = true;
                            this.getPosts(targetCategory.category.categoryId);
                        }
                        _a = targetIndex;
                        return [4 /*yield*/, this.slider.length()];
                    case 1:
                        if (_a < (_b.sent())) {
                            targetCategoryNext = this.catPostList[targetIndex + 1];
                            if (targetCategoryNext && targetCategoryNext.posts && targetCategoryNext.posts.length === 0) {
                                targetCategoryNext.loading = true;
                                this.getPosts(targetCategoryNext.category.categoryId);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArchiveComponent.prototype.scrollSegmentTo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.scrollTimer) {
                    window.clearTimeout(this.scrollTimer);
                }
                this.scrollTimer = setTimeout(function () {
                    try {
                        var ele = _this.catSegment['el'];
                        if (ele) {
                            var activeTab = ele.querySelector('.segment-button-checked');
                            var scrollCount = (activeTab.offsetLeft + (activeTab.clientWidth / 2)) - (ele.clientWidth / 2);
                            if (!ele['scrollTo']) {
                                throw new Error('Webview outdated');
                            }
                            ele.scrollTo({
                                behavior: 'smooth',
                                left: scrollCount
                            });
                        }
                    }
                    catch (err) {
                        _this.alertCtrl.create({
                            message: 'Looks like you are using older version of webview. Please go to play store and update your Android System WebView',
                            buttons: [{
                                    text: 'Open play store',
                                    handler: function () {
                                        window.open('com.google.android.webview', '_self', 'location=no');
                                    }
                                }]
                        });
                    }
                }, 100);
                return [2 /*return*/];
            });
        });
    };
    /**
     * load more posts
     */
    ArchiveComponent.prototype.loadMore = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (category) {
                    category.nextPostLoading = true;
                    this.getPosts(category.category.categoryId, category.posts.length + 1);
                }
                return [2 /*return*/];
            });
        });
    };
    ArchiveComponent.prototype.onScroll = function (e, category) {
        return __awaiter(this, void 0, void 0, function () {
            var target;
            return __generator(this, function (_a) {
                target = e.target;
                if ((target.scrollTop >= (target.scrollHeight - 1000)) && !category.nextPostLoading) {
                    this.loadMore(category);
                }
                return [2 /*return*/];
            });
        });
    };
    ArchiveComponent.prototype.manageDeepLnks = function () {
        var _this = this;
        this.deeplinks.route({}).subscribe(function (success) {
            console.log('deep link success : ', success);
        }, function (err) {
            console.log('deep link err : ', err);
            if (err.$link && err.$link.path) {
                var pathArr = err.$link.path.split('/');
                console.log('pathArr : ', pathArr);
                if (pathArr && pathArr.length > 0) {
                    var postSlug = pathArr[1];
                    var langRecieved = void 0;
                    if (src_app_interfaces_app_lang_enum__WEBPACK_IMPORTED_MODULE_6__["AppLanguageEnum"].English === pathArr[2]) {
                        langRecieved = src_app_interfaces_app_lang_enum__WEBPACK_IMPORTED_MODULE_6__["AppLanguageEnum"].English;
                    }
                    else if (src_app_interfaces_app_lang_enum__WEBPACK_IMPORTED_MODULE_6__["AppLanguageEnum"].Hindi === pathArr[2]) {
                        langRecieved = src_app_interfaces_app_lang_enum__WEBPACK_IMPORTED_MODULE_6__["AppLanguageEnum"].Hindi;
                    }
                    else {
                        return;
                    }
                    _this.langService.selectedLang = langRecieved;
                    _this.postService.getPost(postSlug).then(function (postShared) { return __awaiter(_this, void 0, void 0, function () {
                        var modal;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!postShared) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.modalCtrl.create({
                                            component: _single_news_single_news_component__WEBPACK_IMPORTED_MODULE_10__["SingleNewsComponent"],
                                            componentProps: {
                                                post: postShared
                                            }
                                        })];
                                case 1:
                                    modal = _a.sent();
                                    modal.present();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }).catch(function (err) { return console.log('post shared err : ', err); });
                }
            }
        }, function () {
            console.log('deeplink complete');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('catSegment'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"])
    ], ArchiveComponent.prototype, "catSegment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('postSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], ArchiveComponent.prototype, "slider", void 0);
    ArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/home/components/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.scss */ "./src/app/home/components/archive/archive.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_routed_event_emitter_routed_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["RoutedEventEmitterService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_choose_lang_choose_lang_service__WEBPACK_IMPORTED_MODULE_7__["AppLangService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_9__["Deeplinks"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/archive/archive.component */ "./src/app/home/components/archive/archive.component.ts");
/* harmony import */ var _components_single_news_single_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/single-news/single-news.component */ "./src/app/home/components/single-news/single-news.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: ':categoryId',
                        component: _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_6__["ArchiveComponent"],
                    },
                    {
                        path: '',
                        component: _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_6__["ArchiveComponent"],
                    },
                ])
            ],
            entryComponents: [_components_single_news_single_news_component__WEBPACK_IMPORTED_MODULE_7__["SingleNewsComponent"]],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _components_archive_archive_component__WEBPACK_IMPORTED_MODULE_6__["ArchiveComponent"], _components_single_news_single_news_component__WEBPACK_IMPORTED_MODULE_7__["SingleNewsComponent"]],
            providers: [_ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobFree"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-router-outlet></ion-router-outlet>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcZ3lhbiB3b3JrXFxraHVsYXNhIG5ld3NcXGFwcFxcay1uZXdzL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map