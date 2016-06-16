"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var ListPage = (function () {
    function ListPage(_router) {
        this._router = _router;
    }
    ListPage.prototype.share = function () {
        this._router.navigate(["Share"]);
    };
    ListPage = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
            providers: []
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=list.component.js.map