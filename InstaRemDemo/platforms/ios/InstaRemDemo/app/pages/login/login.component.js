"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_deprecated_1 = require("@angular/router-deprecated");
var page_1 = require("ui/page");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var orientationModule = require("nativescript-screen-orientation");
var LoginPage = (function () {
    function LoginPage(page, _router, _userService) {
        this.page = page;
        this._router = _router;
        this._userService = _userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "test@instarem.com";
        this.user.password = "password";
    }
    LoginPage.prototype.ngOnInit = function () {
        orientationModule.setCurrentOrientation("portrait");
        this.page.actionBarHidden = true;
        this.page.backgroundColor = new color_1.Color("white");
        //this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
    };
    LoginPage.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginPage.prototype.login = function () {
        this._router.navigate(["List"]);
        // this._userService.login(this.user)
        //   .subscribe(
        //     () => this._router.navigate(["List"]),
        //     (error) => alert("Unfortunately we could not find your account.")
        //   );
    };
    LoginPage.prototype.signUp = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginPage.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#E2E7E4"),
            duration: 200
        });
    };
    LoginPage.prototype.googleConnect = function () {
        alert("Coming Soon");
    };
    LoginPage.prototype.fbConnect = function () {
        alert("tried to implement but giving error for angular 2");
    };
    LoginPage.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "green");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "/pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_deprecated_1.Router, user_service_1.UserService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.component.js.map