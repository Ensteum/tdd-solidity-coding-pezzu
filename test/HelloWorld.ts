import { expect } from "chai";
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("HelloWorld", function () {


  async function deployContract() {
  
  
    const accounts = await ethers.getSigners();
  
  
    const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
  
    const helloWorldContract = await helloWorldFactory.deploy();
  
    await helloWorldContract.waitForDeployment();
  
    return {helloWorldContract, accounts};
  }

  it("Should give a Hello World", async function () {
  
    const { helloWorldContract } = await loadFixture(deployContract);
  
  
    const helloWorldBytes = await helloWorldContract.helloWorld();
  
    const helloWorldText = ethers.decodeBytes32String(helloWorldBytes);
  
    expect(helloWorldText).to.equal("Hello World!");
  });

  it("Should set owner to deployer account", async function () {
    
     const { helloWorldContract, accounts } = await loadFixture(deployContract);
  
  
    const contractOwner = await helloWorldContract.owner();
  
    expect(contractOwner).to.equal(accounts[0].address);
  });

  it("Should not allow anyone other than owner to call transferOwnership", async function () {
  
    const { helloWorldContract, accounts } = await loadFixture(deployContract);
  
  
  
  
    await expect(
      helloWorldContract
        .connect(accounts[1])
        .transferOwnership(accounts[1].address)
    ).to.be.revertedWith("Caller is not the owner");
  });

  it("Should execute transferOwnership correctly", async function () {
  
    throw Error("Not implemented");
  });

  it("Should not allow anyone other than owner to change text", async function () {
  
    throw Error("Not implemented");
  });

  it("Should change text correctly", async function () {
  
    throw Error("Not implemented");
  });
});
```
