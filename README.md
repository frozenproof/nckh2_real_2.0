This WAS a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Welcome to our project of NCKH2, as you can see , the project is clearly vectored and built from Next.js original idea. However, we made many changes , and basically have diverted very far from the original snippet. 

We are glad to show you the result of our working as soon as possible , as we believe only working hard will bring good results , even if it sound typical , its truth as old as the earth. Also , original plan was cut short , and time was reduced, but we made sure that the progress will be sufficient for a preview after the deadline.

Days until the project is completed : 38 days.

##The general flow of the data 

The client machines (Customers) first send the requests along with data (encrypted), the server side will receive the request , parse it and paste it into temporary folder on the server. The data is then minted into the NFTs through smart contract, we extract the mint fee and gas fee from the client utxos and keep it in our wallet .

The remaining UTXOs are passed over to a new UTXOs, and sent back into the client wallet address along with the minted NFT. After minting , the original digital assets on the server will be deleted permanently to protect privacy of the customers.

##How to run the project

Please refer to following command , type it in terminal and run:
```node server/testServer.js ```

##Current progress:

- Completed minting (static demo): Static minting by creating NFT from IPFS uploaded with Pinata service.
- Completed multiple files transferring on Rest APi (Originally used formiddable , now switching to multer )
- Integrated multiple files transfering interfaces. Tests ran successfully.
- Updated and repaired broken part due to statis pathing issues.
- Currently trying to async between file uploads and minting functions.


##Side by side projects##

Working on a project is never easy , and sometime , we do tests too. Installing a new system can be risky , as such , we decided to put the test project in a different repository , only people who need to know more about technical details behind each file should use the following examples as guides .

##1. REST api test repo:
https://github.com/frozenproof/restApitest