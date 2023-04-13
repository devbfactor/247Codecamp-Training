const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp.utils.randomPrivateKey();
console.log("This is Private Key:", toHex(privateKey));

const publicKey = secp.getPublicKey(privateKey);
console.log("This the Public Key:", toHex(publicKey)); //0x

//to generate: node keys/generate.js

//Git commands
// mkdir public-key-cryptography
// cd public-key-cryptography
// mkdir server
// cd server
// npm init -y
// mkdir keys
// touch index.js
// npm install cors
// (ls: index.js  keys/  node_modules/  package-lock.json  package.json
// )

// npm install ethereum-cryptography
// npm install express nodemon
// cd public-key-cryptography
// code .
