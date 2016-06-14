"use strict";
var socialShare = require("nativescript-social-share");
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListPage = (function () {
    function ListPage(_groceryListService) {
        this._groceryListService = _groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListPage.prototype.add = function () {
        alert("May the force be with you");
    };
    ListPage.prototype.share = function () {
        var list = [];
        for (var i = 0, size = this.groceryList.length; i < size; i++) {
            list.push(this.groceryList[i].name);
        }
        var listString = list.join(", ").trim();
        socialShare.shareText(listString);
    };
    __decorate([
        core_1.ViewChild("groceryTextField"), 
        __metadata('design:type', core_1.ElementRef)
    ], ListPage.prototype, "groceryTextField", void 0);
    ListPage = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
            providers: [grocery_list_service_1.GroceryListService]
        }), 
        __metadata('design:paramtypes', [grocery_list_service_1.GroceryListService])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=list.component.js.map