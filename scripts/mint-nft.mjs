const CONTRACT_ADDRESS = "0x0da1805eA8Ac2A7B43f872f93f1FAc9172B3b147";
const META_DATA_URL =
  "ipfs://bafyreiabt5rqqyar3otpyym2vlafvazdj2osschcg7dbvd2vv3ewndacfi/metadata.json";

async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
