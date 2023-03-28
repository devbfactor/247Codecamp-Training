//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RandomNFT is ERC721URIStorage  {
using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string _tokenURI = "https://ipfs.io/ipfs/QmXSY5GaCXpmKUiSJcDKBcW2YPFhfNnXxBDX3zn42vynLk/1.json";

    constructor() ERC721("RandomNFTCollection", "RNFT") {}

    function mint(string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}