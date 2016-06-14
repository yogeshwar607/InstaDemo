var socialShare = require("nativescript-social-share");
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {TextField} from "ui/text-field"
@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [GroceryListService]
})
export class ListPage implements OnInit {
  groceryList: Array<Grocery> = [];
  grocery: string = "";
  isLoading = false;
  listLoaded = false;
@ViewChild("groceryTextField") groceryTextField: ElementRef;
  constructor(private _groceryListService: GroceryListService) {}
  ngOnInit() {
  this.isLoading = true;
  this._groceryListService.load()
    .subscribe(loadedGroceries => {
      loadedGroceries.forEach((groceryObject) => {
        this.groceryList.unshift(groceryObject);
      });
      this.isLoading = false;
      this.listLoaded = true
    });
}
add() {
    alert("May the force be with you");
  }
share() {
  let list = [];
  for (let i = 0, size = this.groceryList.length; i < size ; i++) {
    list.push(this.groceryList[i].name);
  }
  let listString = list.join(", ").trim();
  socialShare.shareText(listString);
}
}