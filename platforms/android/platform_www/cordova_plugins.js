cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-native-transitions.NativeTransitions",
    "file": "plugins/cordova-plugin-native-transitions/www/nativetransitions.js",
    "pluginId": "cordova-plugin-native-transitions",
    "clobbers": [
      "nativetransitions"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-native-transitions": "0.2.3"
};
// BOTTOM OF METADATA
});