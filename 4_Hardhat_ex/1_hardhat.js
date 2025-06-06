// Hardhat: First interaction with Hardhat blockchain.
//////////////////////////////////////////////////////

// Exercise 0. Load dependencies and network provider.
//////////////////////////////////////////////////////

// a. Require the `dotenv` and `ethers` packages.
// Hint: As you did multiple times now.

// Your code here!
const path = require('path');
const ethers = require("ethers");
let pathToDotEnv = path.resolve(process.cwd(), '.env');
console.log(pathToDotEnv);

//pathToDotEnv = path.join(__dirname, '..', '..', '.env');
// console.log(pathToDotEnv);
// Exercise 1. Create a JSON RPC Provider for the Hardhat blockchain.
/////////////////////////////////////////////////////////////////////

const providerKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const localnetURL ="http://127.0.0.1:8545/"; 

async function getwriteaccess() {
    
provider = new ethers.JsonRpcProvider(localnetURL)
signer = await provider.getSigner()
console.log(signer);
}
getwriteaccess()





// Hint: you will find the info printed to console after you start the hardhat
// blockchain.

// Your code here!

// Exercise 2. Let's query the provider.
////////////////////////////////////////

// Hardhat Blockchain si too long. Let's call it NUMA.
// Print to console the network name, chain id, and block number of NUMA.

const networkInfo = async () => {
   
    // Your code here!
};

// networkInfo();



// Exercise 3. Signer on the Hardhat blockchain.
////////////////////////////////////////////////

// a. Connect one a signer with one of the default private keys on
// the Hardhat blockchain.
// Hint: check the Hardhat console output.

// Your code here.

// b. Check the balance of the signer.

const checkBalance = async () => {
    // Your code here.
};

// checkBalance();

// c. Print the signer's next nonce necessary to send a transaction.
// Hint: .getNonce()

const getNonce = async() => {
    // Your code here.
};

// getNonce();


// Exercise 4. Send a transaction.
//////////////////////////////////

// Send some Ether from the address of the signer in Exercise 3 to one of your
// accounts on Metamask (e.g., the one used to make the submissions in 
// this course).

const account2 = process.env.METAMASK_2_ADDRESS;

const sendTransaction = async () => {

    // Your code here!
};

// sendTransaction();

