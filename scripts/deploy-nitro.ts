// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const DistributerAddress = "0x085a958427aaA3Ac8Be6174F630a96641538E280"; //Naeemz

  // We get the contract to deploy
  const Nitro = await ethers.getContractFactory("Nitro");
  const nitro = await Nitro.deploy(DistributerAddress);

  await nitro.deployed();

  console.log("Nitro contract deployed to:", nitro.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
