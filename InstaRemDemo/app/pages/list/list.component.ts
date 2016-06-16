import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {TextField} from "ui/text-field";
import {Router} from "@angular/router-deprecated";
@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: []
})
export class ListPage  {
constructor(private _router: Router ){
}

share() {
  this._router.navigate(["Share"])
}
}