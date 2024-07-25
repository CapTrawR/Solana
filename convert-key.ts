import bs58 from 'bs58';
import prompt from 'prompt-sync';

const promptSync = prompt();

function convertPrivateKey() {
    const privateKeyBase58 = promptSync('Enter your private key in base58 format: ');
    
    // Decode the base58 string to a byte array
    const privateKeyBytes = bs58.decode(privateKeyBase58);
    console.log('Private Key (Byte Array):', privateKeyBytes);

    // Encode the byte array back to base58
    const encodedPrivateKey = bs58.encode(privateKeyBytes);
    console.log('Private Key (Base58):', encodedPrivateKey);
}

convertPrivateKey();