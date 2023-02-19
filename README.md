This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Welcome to our project of NCKH2, as you can see , the project is clearly vectored and built from Next.js. 
We are glad to show you the result of our working as soon as possible , as we believe only working hard will bring good results , even if it sound typical , its truth as old as the earth.

Days until the project is completed : 40 days.

Read the current status of the project in /control/report

##The general flow of the data 

The client machines (Customers) first send the requests along with data (encrypted), the server side will receive the request , parse it and paste it into temporary folder on the server. The data is then minted into the NFTs through smart contract, we extract the fee and gas fees from the client utxos and keep it in our wallet .
The remaining UTXOs are passed over to a new UTXOs, and sent back into the client wallet address. After minting , the digital assets on the server will be deleted permanently to protect privacy of the customers.

##How to run the project

Please refer to following code in the project:
```node server/testServer.js ```

##Current progress:

- Completed minting (static demo): Static minting by creating NFT from IPFS uploaded with Pinata service.
- Completed files transfering demo using post method with Rest API
- Currently making dynamic minting
- Completed testing for multiple files transferring on Rest APi (Originally used formiddable , now switching to multer )


##Side by side projects##

Working on a project is never easy , and sometime , we do tests too. Installing a new system can be risky , as such , we decided to put the test project in a different repository , only people who need to know more about technical details behind each file should use the following examples as guides .

##1. REST api test repo:
https://github.com/frozenproof/restApitest