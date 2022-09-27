const ethers = require("ethers");
const fs = require("fs-extra");


async function main() {
    const provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:7545"

    );

    const wallet = new ethers.Wallet(
      "962c70c1be9dba5290407156c4d5045423aa7c10d8d4f9435b2e81067c76bfa9",
      provider
    );

    const abi = fs.readFileSync("./PeopleProfile_sol_PeopleProfile.abi", "utf8"); 
    const binary = fs.readFileSync("./PeopleProfile_sol_PeopleProfile.bin", "utf8"); 

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Contract is deploying...");

    const contract = await contractFactory.deploy();
    console.log(contract);
    console.log("Contract deployed! 🥂🥂");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });