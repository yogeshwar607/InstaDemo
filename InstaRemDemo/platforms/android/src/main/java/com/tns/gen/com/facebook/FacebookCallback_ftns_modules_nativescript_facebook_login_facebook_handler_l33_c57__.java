package com.tns.gen.com.facebook;

public class FacebookCallback_ftns_modules_nativescript_facebook_login_facebook_handler_l33_c57__ implements com.facebook.FacebookCallback {
	public FacebookCallback_ftns_modules_nativescript_facebook_login_facebook_handler_l33_c57__() {
		com.tns.Runtime.initInstance(this);
	}

	public void onSuccess(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onSuccess", void.class, args);
	}

	public void onCancel()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onCancel", void.class, args);
	}

	public void onError(com.facebook.FacebookException param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onError", void.class, args);
	}

}
