## Welcome to our project of NCKH2

This is a hybrid project with  

```

[Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 

```

and 

```

[Express.js](https://expressjs.com) server control and minimal API routes self designed.

```

The project will remain open source until further notices. 

Days until the project is completed : 30 days.

## Why does the project take so long ? 

We are a group of junior developer , with no prior experiences in working with Typescript , or API.
In fact , we are learning as we go ! 

## What does NCKH2 stand for ? 
It's a secret ! But here is our motto. 

```
We are glad to show you the result of our working as soon as possible .

As we believe only working hard will bring good results .

Even if it sound typical , its truth as old as the earth.
```

## The general flow of the data ##

## 1st: The client machines (Customers) first send the requests along with data (encrypted?) using the following procedure:

-> User connect wallet on front end.

-> Front end first get the following data: 

    + Wallet address of user (Recipient Address).

    + The remaining utxos of user

-> User picks files to mint into NFTs

-> Front end get the following data:

    + Name

    + Files

    + Quantity of items minted
    
    + Brief description of the items

-> User submit the information 

-> Front end send the data

## 2nd: The data is prepared using the following procedure:

-> Function receiving data and call the post function inside API

-> Post function redirect to the files uploading:
    
    + Upload multiple files at once to IPFS with Pinata API

    + Receive IPFS hash address

    + Copy the original files to new folder with new name "originalname-&&-IPFS hash" using bash script

-> Preparing data:

    + Passing the data into new variables

-> Inside Minting

    + Create an app wallet as a medium 

    + Get the app wallet receive address 

    + Forge a script for the receive address 

-> Craft the token/non-fungible token:

    + Name 

    + Image Source 

    + MediaType

    + Description

-> Assess the minting exclusive detail:

    + Determine the asset type:

        - Non fungible asset (721)

        - Fungible asset (20)
        
    + Quantity

    + Recipient Address

## 3rd: Crafting the transaction:
-> Wait for transaction build

## 4th: Open a new window for the user to enter their spending password and sign the transaction.

## 5th: After minting , the original digital assets on the server will be deleted permanently to protect privacy of the customers.

## How to run the project

- To test project ,please refer to following command , type it in terminal and run:
```
node server/testServer.js 
```

- Testing for multiple files pinning and extract the data, remember to set chmod for the script:
(Deprecated)

For older test (Deprecated):
```
chmod +x print.sh
node backend/mult/outerLayer.js

```

For new test (Dynamic address)(Deprecated, but still can run to test function separatedly):
```

chmod +x print.sh
node server/controllers/outerController.js 

```

- Testing for minting with multiple assets ( Static defined assets in array ):
```
npm run dev

-> and then click mint
``` 

## Current progress: ##

- Completed minting (static demo): Static minting by creating NFT from IPFS uploaded with Pinata service.
- Completed multiple files transferring on Rest APi (Originally used formiddable , now switching to multer )
- Integrated multiple files transfering interfaces. Tests ran successfully.
- Updated and repaired broken part due to statis pathing issues.
- Currently trying to async between file uploads and minting functions.

## Progress by completion : ##

Yes: 

- Upload multiple files to the server.
- Pinning multiple files to IPFS.
- Multiple minting in loop

Not yet:

- Automatic minting multiple files.
- The final goal: A server-client structure with minting fungible/NFT that is ready for production. 



## Side by side projects ##

Working on a project is never easy , and sometime , we do tests too. Installing a new system can be risky , as such , we decided to put the test project in a different repository , only people who need to know more about technical details behind each file should use the following examples as guides .

## 1. REST api test repo:
https://github.com/frozenproof/restApitest

## 2. Generating static js from ts (Very slow as we dont understand how the conversion worked)
https://github.com/frozenproof/tsTojs
