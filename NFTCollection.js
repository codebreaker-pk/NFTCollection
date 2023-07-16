/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, artist, description) {
    let nft = {
        name: name,
        artist: artist,
        description: description
};
nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
      console.log("Name: " + nftCollection[i].name);
      console.log("Artist: " + nftCollection[i].artist);
      console.log("Description: " + nftCollection[i].description);
      console.log("-----------------------------");
    }
  }

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
  }

// call your functions below this line
mintNFT("NFT 1", "Ravi Varma", "Depicting the cultural heritage of India");
mintNFT("NFT 2", "Amrita Sher-Gil", "Portraying the political landscape of India");
mintNFT("NFT 3", "Tagore", "Celebrating the art of Indian classical dance");
mintNFT("NFT 4", "S.H. Raza", "Exploring the spiritual aspects of existence");
mintNFT("NFT 5", "MF Husain", "Reflecting the diverse experiences of life in India");

listNFTs();

console.log("Total NFTs: " + getTotalSupply());


