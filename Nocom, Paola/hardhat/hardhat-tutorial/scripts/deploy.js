const hre = require('hardhat');

async function main() {
  const contract = await hre.ethers.getContractFactory('RandomNFT');
  const contractDeploy = await contract.deploy();
  await contractDeploy.deployed();

  console.log(`The contract adress is: ${contractDeploy.address}`);

}

main()
  .then(() => process.exitCode(0))
  .catch((error)=> {
    console.log(error);
    process.exitCode(1);
})