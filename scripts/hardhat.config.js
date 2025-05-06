require("@nomicfoundation/hardhat-toolbox");

const path = require('path');
let pathToDotEnv = path.resolve(process.cwd(), '.env');
pathToDotEnv = path.join(__dirname,  '..', '.env');
require("dotenv").config({ path: pathToDotEnv });
privateKey1 = process.env.METAMASK_1_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17"
      },
      {
        version: "0.6.12"
      }
    ]
  },
  //defaultNetwork: "unima1",
 // solidity: "0.8.1",
  networks: {
    hardhat: {
    },
    unima1: {
      url: "http://134.155.50.136:8506",
      accounts: [privateKey1],
    }},

  }

