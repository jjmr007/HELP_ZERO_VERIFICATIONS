const { ethers } = require('hardhat');

async function main() {
  const Proxy = await ethers.getContractFactory("TroveManager");
  const superProxy = await Proxy.deploy("1209600");

  await superProxy.deployed();
  console.log("Success! Contract TroveManager Deployed at " + superProxy.address);

  const Logic = await ethers.getContractFactory("TroveManagerRedeemOps");
  // const magicParameter = '1209600';
  const magicParameter = await superProxy.BOOTSTRAP_PERIOD();
  console.log('\n    The super magic parameter is: ' + magicParameter);
  const superLogic = await Logic.deploy(magicParameter);

  await superLogic.deployed();
  console.log("Success! Contract TroveManagerRedeemOps Deployed at " + superLogic.address);

} 

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});