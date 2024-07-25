"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bs58_1 = require("bs58");
var prompt_sync_1 = require("prompt-sync");
var promptSync = (0, prompt_sync_1.default)();
function convertPrivateKey() {
    var privateKeyBase58 = promptSync('Enter your private key in base58 format: ');
    // Decode the base58 string to a byte array
    var privateKeyBytes = bs58_1.default.decode(privateKeyBase58);
    console.log('Private Key (Byte Array):', privateKeyBytes);
    // Encode the byte array back to base58
    var encodedPrivateKey = bs58_1.default.encode(privateKeyBytes);
    console.log('Private Key (Base58):', encodedPrivateKey);
}
convertPrivateKey();
