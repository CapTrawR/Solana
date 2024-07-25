"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
// Generate a new keypair
let kp = web3_js_1.Keypair.generate();
console.log(`You have generated a new Solana wallet:
${kp.publicKey.toBase58()}
TO save your wallet, copy and paste the following into a JSON:
[${kp.secretKey}]`);
