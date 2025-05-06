const hre = require("hardhat");

async function main(){

  const contract2 = await hre.ethers.deployContract("MyQuiz");
  await contract2.waitForDeployment();

  


}