import { Keypair } from "@solana/web3.js";

// Generate a new keypair
let kp = Keypair.generate();

console.log(`You have generated a new Solana wallet:
${kp.publicKey.toBase58()}
TO save your wallet, copy and paste the following into a JSON:
[${kp.secretKey}]`);
