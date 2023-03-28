import { create } from 'ipfs-core';
 
 async function toIPFS() {
     const node = await create()
     const fileAdded = await node.add({
         path: "./metadata/images"
     })
	 console.log("Added file:", fileAdded.path, fileAdded.cid);
 }
 
toIPFS();