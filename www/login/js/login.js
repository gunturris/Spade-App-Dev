var myApp = new Framework7();
 
var $$ = Dom7;

myApp.onPageInit('member', function (page) {
    // run createContentPage func after link was clicked
    $$('.alert-why').on('click', function () {
        myApp.alert('No handphone and wajib digunakan untuk mendaftar Spade. No Handphone Anda tidak akan kami perjual belikan kepada pihak luar.' , 'Informasi');
    });
});



var isLogined = false;
var fbid = 0;
loginScreen = myApp.loginScreen();
 

  
function fbLoginToFB(){
	 
	facebookConnectPlugin.login(
		["public_profile"] , 
		fbLogin,//function (result) { myApp.alert('FBAuth Success !...'); } , 
		function (error) { myApp.alert('FBAuth Failed @1 !...'); }
		
	);
}

function fbLoginSuccess(response){ 
	facebookConnectPlugin.api('/me', function(response) {
		 myApp.alert(response);
		fbid = response.id;
		fname = response.name; 
		fbirthday = response.birthday;
		femail = response.email;
		fgender = response.gender; 
	  	 
		xhr.open("POST", serverHost + "rest_login.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		//xhr.send("fbid="+fbid+"&name="+fname+"&gender="+fgender+"&email="+femail+"&birthday="+fbirthday);
		xhr.send("fbid=1731167900475604&name=Generasi+Muda+Spade&gender=female&email=intandiyah.budisusilo@gmail.com&birthday="); 
		xhr.onreadystatechange = function() { 
			 
			if (xhr.readyState == 4 && xhr.status == 200) {
 				
				respData = JSON.parse(xhr.responseText);   
				if (respData.respStatus > 0) { 
					document.getElementById("avaprofile").src = respData.image;
					document.getElementById("nameprofile").innerHTML = respData.name;
					myApp.closeModal(loginScreen); 
				} 
				return;
			} 
		}
	});
}

function fbLogin( ){ 
	facebookConnectPlugin.api("/me", ["public_profile"] , 
			function(response) { 
				fbid = response.id;
				fname = response.name; 
				fbirthday = response.birthday;
				femail = response.email;
				fgender = response.gender; 


				xhr.open("POST", serverHost + "rest_login.php", true);
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send("fbid="+fbid+"&name="+fname+"&gender="+fgender+"&email="+femail+"&birthday="+fbirthday);
				//xhr.send("fbid=1731167900475604&name=Generasi+Muda+Spade&gender=female&email=intandiyah.budisusilo@gmail.com&birthday="); 
				xhr.onreadystatechange = function() { 
					 
					if (xhr.readyState == 4 && xhr.status == 200) {
		 				
						respData = JSON.parse(xhr.responseText);   
						if (respData.respStatus > 0) { 
							document.getElementById("avaprofile").src = respData.image;
							document.getElementById("nameprofile").innerHTML = respData.name;
							myApp.closeModal(loginScreen); 
						} 
						return;
					} 
				}
			} ,
			function (error) { 

				myApp.alert('Failed ' + error, 'Spade games'); 
			}  

		);
}

  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) { 
    //console.log(response);//GUNTUR EDITED
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
	
    if (response.status === 'connected') {
	
      // Logged into your app and Facebook.
      fbLoginSuccess(response);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
 


  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk')); 
