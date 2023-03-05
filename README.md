# DEPLOYMENTS FOR BORROWER OPERATIONS AND TROVE MANAGERS  

1. Install all dependencies: `$ npm i`  
2. Create your user in [Tenderly Dashboard](https://dashboard.tenderly.co/), by hitting: "**Create Account**".  
3. Generate your own super-secret AUTHORIZATION KEY:  
    * Click on your user icon (upper right corner).  
    * Hit "Settings" --> the cog wheel  
    * Authorization  
    * Generate Access Token  

 
4. The just generated key must be saved in a new folder/file: `.tenderly/config.yaml` this way:  
```
---  
 access_key: YourSuperSecretTenderlyAccessKey  
```
5. Set the `tenderly` parameters for your username and project in `hardhat.config.js`.
6. Compile the contracts:    
`$ npx hardhat compile`  
7. ***Don't forget to set the deployer's private key in your*** `.env` ***file!!!***  
8. Run the Borrower Operations deployment script:  
`$ npx hardhat run ./scripts/1_deployBowOp.js --network rskSovrynTestnet`   
9. Wait for the outcome: it should be: `Contract 0xYXZ...00X verified`  
10. Run the Trove Manager deployment scripts:  
`$ npx hardhat run ./scripts/2_deployTrvMng.js --network rskSovrynTestnet`   
11. Wait for the outcome: it should be: `Contract 0xYXZ...00X verified`  


Happy coding!