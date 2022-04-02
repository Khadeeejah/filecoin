/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
const { PRIVATE_KEY } = process.env;
// const { ETHERSCAN_API_KEY } = process.env;
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    
  },

  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
