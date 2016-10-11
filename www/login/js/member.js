myApp.onPageInit('buy-list', function (price) {
    
	
	
});


function send_reg_price(operator , price){
	var mainView = myApp.addView('.view-main');
	var animatePages = myApp.params.animatePages;
	xhr.open("POST", serverHost + "rest_paket.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("paket=" + price); 
	xhr.onreadystatechange = function() { 
		if (xhr.readyState == 4 && xhr.status == 200) {
			respData = JSON.parse(xhr.responseText);
			if(respData.respStatus == '1' ){  
				window.open(
				  respData.url 
				 // ,'_blank' // <- This is what makes it open in a new window.
				);
				return;				
				//myApp.router.load( mainView , {url: 'login/finish.html',animatePages: animatePages , reload: true});
			}
			 
		} 
	}
}

function check_phone_operator(phonenum){
	 
	var telkomsel = ["811","812","813","852"];
	 
	var indosat = ["814","815","816"];

	var prefix = phonenum.substr(0, 3);

	if(inArray(prefix , telkomsel)){
		document.getElementById("view_operator_logo").innerHTML = "Operator: Telkomsel" ;


	}else if( inArray(prefix , indosat) ){
		document.getElementById("view_operator_logo").src = "login/img/Indosat-Ooredoo.png" ;

	}else{
		document.getElementById("view_operator_logo").src = "login/img/Indosat-Ooredoo.png" ;
	} 
	return;
}
 
function send_number_phone(   ){
	var mainView = myApp.addView('.view-main');
	var animatePages = myApp.params.animatePages;
	phonenum = document.getElementById('user_entry_phonenum').value;
	
	xhr.open("POST", serverHost + "rest_registrasi.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("phonenum=62" + phonenum); 
	xhr.onreadystatechange = function() { 
		if (xhr.readyState == 4 && xhr.status == 200) {
			respData = JSON.parse(xhr.responseText);
			if(respData.operator == 'isat' ){ 
				myApp.router.load( mainView , {url: 'login/buy-isat.html',animatePages: animatePages ,reload: true});
			}else if(respData.operator == 'tsel' ){
				myApp.router.load( mainView , {url: 'login/buy.html',animatePages: animatePages , reload: true});
			}else if(respData.operator == 'xl' ){
				myApp.router.load( mainView , {url: 'login/buy.html',animatePages: animatePages, reload: true});
			}else{
				myApp.alert('Operator tidak di kenal', 'Maaf');
			}
			 
		} 
	}
}

function open_modal_info_alasan(){
	myApp.alert('Nomor ponsel Anda di gunakan untuk mengetahui operator selular yang di gunakan, dan juga sebagai nomor tujuan pengiriman SMS untuk daftar berlangganan Spade. Kami tidak akan menjual informasi nomor ponsel Anda ke pihak manapun.', 'Tentang Nomor Ponsel');
	 
} 
