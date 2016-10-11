cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/Cordova-Plugin-FCMNotification/www/FCMNotificationPlugin.js",
        "id": "Cordova-Plugin-FCMNotification.CDVPushyMe",
        "clobbers": [
            "navigator.FCMNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "Cordova-Plugin-FCMNotification": "1.0.0-dev",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-whitelist": "1.1.0",
    "cordova-plugin-device": "1.1.3"
};
// BOTTOM OF METADATA
});