require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
// COMO FUNCIONA "FUNCTION-SIGNATURES"? : AQUI ---> https://www.npmjs.com/package/hardhat-function-signatures
require("hardhat-function-signatures");
require('dotenv').config();
const tdly = require('@tenderly/hardhat-tenderly');
tdly.setup({ automaticVerifications: true });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.6.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100
      }
    }
  },
  networks: {
        rskTestnet: {
            url: "https://public-node.testnet.rsk.co/",
            accounts: [ process.env.PRIVATE_KEY ],
            chainId: 31,
            confirmations: 4,
            gasMultiplier: 1.025,
            tags: ["testnet"],
            //timeout: 20000, // increase if needed; 20000 is the default value
            //allowUnlimitedContractSize, //EIP170 contrtact size restriction temporal testnet workaround
        },
        rskSovrynTestnet: {
            url: "https://testnet.sovryn.app/rpc",
            accounts: [ process.env.PRIVATE_KEY ],
            chainId: 31,
            confirmations: 4,
            gasMultiplier: 1.025,
            tags: ["testnet"],
            //timeout: 20000, // increase if needed; 20000 is the default value
            //allowUnlimitedContractSize, //EIP170 contrtact size restriction temporal testnet workaround
        },
  },
  tenderly: {
      username: "juliomoros", // CHANGE IT!: to your tenderly username (or organization name)
      project: "Project", // CHANGE IT!: to your project name
      privateVerification: false // if true, contracts will be verified privately, if false, contracts will be verified publicly
  }
};
