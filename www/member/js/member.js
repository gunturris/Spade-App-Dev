var myApp = new Framework7();

var $$ = Dom7;

$$('.alert-why').on('click', function () {
    myApp.alert('No handphone and wajib digunakan untuk mendaftar Spade. No Handphone Anda tidak akan kami perjual belikan kepada pihak luar.' , 'Informasi');
});

$$('.alert-nohp').on('click', function () {
    myApp.alert('Operator yang dapat mengakses game ini adalah Telkomsel, Indosat, dan XL.', 'Mohon maaf, nomor handphone Anda tidak di kenal');
});
