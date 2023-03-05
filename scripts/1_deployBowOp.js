const { ethers } = require('hardhat');

async function main() {
  const Logic = await ethers.getContractFactory("BorrowerOperations");
  const superLogic = await Logic.deploy();

  await superLogic.deployed();
  console.log("Success! Contract BorrowerOperations Deployed at " + superLogic.address);

} 

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});