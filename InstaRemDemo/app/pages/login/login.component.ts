var FacebookLoginHandler = require("nativescript-facebook-login");
var observable = require("data/observable");
var FacebookLoginHandler = require("nativescript-facebook-login");
var frameModule = require("ui/frame");
var topmost = frameModule.topmost;
import {Component, OnInit,ElementRef,ViewChild} from "@angular/core";
import {User} from "../../shared/user/user"
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router-deprecated";
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";
import {setHintColor} from "../../utils/hint-util";
import {TextField} from "ui/text-field";
@Component({
  selector: "my-app",
  providers:[UserService],
  templateUrl: "/pages/login/login.html",
styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginPage implements OnInit{
user:User;
isLoggingIn = true;
@ViewChild("container") container: ElementRef;
@ViewChild("email") email: ElementRef;
@ViewChild("password") password: ElementRef;
ngOnInit()
{
  this.page.actionBarHidden = true;
  this.page.backgroundColor = new Color("white");
  //this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
}
constructor(private page:Page,private _router: Router, private _userService: UserService) {
  this.user = new User();
  this.user.email = "test@instarem.com";
  this.user.password = "password";
}

  submit() {
    if (!this.user.isValidEmail()) {
  alert("Enter a valid email address.");
  return;
}
  if (this.isLoggingIn) {
    this.login();
  } else {
    this.signUp();
  }
}
login() {
  this._router.navigate(["List"])
  // this._userService.login(this.user)
  //   .subscribe(
  //     () => this._router.navigate(["List"]),
  //     (error) => alert("Unfortunately we could not find your account.")
  //   );
}
signUp() {
  this._userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
    );
}
  toggleDisplay() {
  this.isLoggingIn = !this.isLoggingIn;
  this.setTextFieldColors();
  let container = <View>this.container.nativeElement;
  container.animate({
    backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#E2E7E4"),
    duration: 200
  });
}
googleConnect(){
alert("Coming Soon");
}
fbConnect() {
alert("fb clicked");
     var successCallback = function(result) {
            //Do something with the result, for example get the AccessToken
            var token;
            if (topmost().android){
              token = result.getAccessToken().getToken();
            }
            else if (topmost().ios){
              token = result.token.tokenString
            }
            alert(token);
        }

        var cancelCallback = function() {
            alert("Login was cancelled");
        }

        var failCallback = function(error) {
            var errorMessage = "Error with Facebook";
           //Try to get as much information as possible from error
           if (error) {
                if (topmost().ios) {
                    if (error.localizedDescription) {
                        errorMessage += ": " + error.localizedDescription;
                    }
                    else if (error.code) {
                        errorMessage += ": Code " + error.code;
                    }
                    else {
                        errorMessage += ": " + error;   
                    }
                }
                else if (topmost().android) {
                    if (error.getErrorMessage) {
                        errorMessage += ": " + error.getErrorMessage();
                    }
                    else if (error.getErrorCode) {
                        errorMessage += ": Code " + error.getErrorCode();
                    }
                    else {
                        errorMessage += ": " + error;   
                    }
                }
            }
            alert(errorMessage);
        }  
    
    //Here we select the login behaviour

    //Recomended system account with native fallback for iOS
    if (topmost().ios) {
        FacebookLoginHandler.init(2);
    }
    //Recomended default for android 
    else if (topmost().android) {
        FacebookLoginHandler.init();
    }
    //Register our callbacks
    FacebookLoginHandler.registerCallback(successCallback, cancelCallback, failCallback);
    //Start the login process
    FacebookLoginHandler.logInWithPublishPermissions(["publish_actions"]);      
}
setTextFieldColors() {
  let emailTextField = <TextField>this.email.nativeElement;
  let passwordTextField = <TextField>this.password.nativeElement;

  let mainTextColor = new Color(this.isLoggingIn ? "black" : "green");
  emailTextField.color = mainTextColor;
  passwordTextField.color = mainTextColor;

  let hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
  setHintColor({ view: emailTextField, color: hintColor });
  setHintColor({ view: passwordTextField, color: hintColor });
}
}