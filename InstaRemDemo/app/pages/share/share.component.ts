var socialShare = require("nativescript-social-share");
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router-deprecated";
@Component({
  selector: "share",
  templateUrl: "pages/share/share.html",
  styleUrls: ["pages/share/share-common.css", "pages/share/share.css"],
  providers: []
})
export class SharePage  {
constructor(private _router: Router ){
}
share() {
  socialShare.shareText("Download this app and get $200 for free");
}
copyLink() {
  alert("instarem.com");
}
}