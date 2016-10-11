// Initialize your app
//document.addEventListener( "deviceready" , onDeviceReady , false );
var serverHost = "http://generasimudacorp.com/spade_rest/";
var contentHost = "http://generasimudacorp.com/spade_v2/";

var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
 
function inArray(needle, haystack) {
    for(var i in haystack) {
        if(haystack[i] == needle) return true;
    }
    return false;
}
