import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "hardhat-prettier";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
