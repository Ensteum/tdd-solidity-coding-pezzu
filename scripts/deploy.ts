import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

async function deployContract() {
  const accounts = await ethers.getSigners();
  const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
  const helloWorldContract = await helloWorldFactory.deploy();

  await helloWorldContract.waitForDeployment();

  return { helloWorldContract, accounts };
}

async function main() {
  const { helloWorldContract, accounts } = await loadFixture(deployContract);
  const tx = await helloWorldContract.transferOwnership(accounts[1]);
  await tx.wait();
  console.log("New owner:", helloWorldContract.owner);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
