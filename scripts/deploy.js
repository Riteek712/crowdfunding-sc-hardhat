//import {ethers} from "hardhat";
const hre = require("hardhat");

async function main() {
  

  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log(
    `Smart contract deployed to ${crowdFunding.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
