var plainText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var key = "simplekey";
var iv = "1234123412341234";

var cryptoLib = require('cryptlib');

shaKey = cryptoLib.getHashSha256(key, 32); // This line is not needed on Android or iOS. Its already built into CryptLib.m and CryptLib.java

var encryptedString = cryptoLib.encrypt(plainText, shaKey, iv);
console.log('encryptedString %s', encryptedString);

var decryptedString = cryptoLib.decrypt(encryptedString, shaKey, iv);
console.log('decryptedString %s', decryptedString);