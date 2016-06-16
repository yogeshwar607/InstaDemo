"use strict";
var socialShare = require("nativescript-social-share");
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var SharePage = (function () {
    function SharePage(_router) {
        this._router = _router;
    }
    SharePage.prototype.share = function () {
        socialShare.shareText("Download this app and get $200 for free");
    };
    SharePage.prototype.copyLink = function () {
        alert("instarem.com");
    };
    SharePage = __decorate([
        core_1.Component({
            selector: "share",
            templateUrl: "pages/share/share.html",
            styleUrls: ["pages/share/share-common.css", "pages/share/share.css"],
            providers: []
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], SharePage);
    return SharePage;
}());
exports.SharePage = SharePage;
//# sourceMappingURL=share.component.js.map