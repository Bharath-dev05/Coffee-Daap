require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL =
  " https://eth-sepolia.g.alchemy.com/v2/ZcV*******Zd_XJe66Qdw4ZzGAK5";
const PRIVATE_KEY =
  "0820b63778dadae7924857a54e0a0*******7848e9fb5638d2dd7366fa3b";

if (!SEPOLIA_URL || !PRIVATE_KEY) {
  throw new Error("Please set your GOERLI_URL and PRIVATE_KEY in a .env file");
}

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
