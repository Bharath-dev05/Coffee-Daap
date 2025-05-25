require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL =
  " https://eth-sepolia.g.alchemy.com/v2/ZcVZd_XJe66Os77rvT8yrnQdw4ZzGAK5";
const PRIVATE_KEY =
  "0820b63778dadae7924857a54e0a4b98d1dc4e507848e9fb5638d2dd7366fa3b";

console.log(GOERLI_URL);
console.log(PRIVATE_KEY);

if (!GOERLI_URL || !PRIVATE_KEY) {
  throw new Error("Please set your GOERLI_URL and PRIVATE_KEY in a .env file");
}

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
