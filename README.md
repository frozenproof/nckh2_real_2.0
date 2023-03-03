## Welcome to our project of NCKH2

Currrent stable test : v1.0.15  

# What is our goal?

We have seen too many injustices with closed source apps on a supposed open system , espcially like blockchain structures. 

We made the project open source , and ready for production , in this way , people can tell what is going on , even able to run and host their all servers and services locally , as long as one connection to the mainnet/testnet is available.



# This was a hybrid project with  

```

[Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 

```

# But now it's different !
We are using Express , which actually use a very complicated system . Lessons learned : never attempt to use Nextjs template , because the integration alone took like a month and it doesn't scale well.

```

[Express.js](https://expressjs.com) server control and minimal API routes self designed.

```


The project will remain open source until further notices. 

Days until the project is completed : 24 days.

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

-> User picks files to mint into NFTs

-> Front end get the following data:

    + Name

    + Files

    + Quantity of items minted
    
    + Brief description of the items 

-> User submit the information 

-> Front end send the data

## 2nd: The data is prepared using the following procedure:

-> Server start uploading files to IPFS

-> Server log the files and IPFS addresses

## 3rd: Prepare for minting:

-> User is redirected to Mint step

-> User connect wallet on front end.

-> Front end first get the following data: 

    + Wallet address of user (Recipient Address).

    + The remaining utxos of user

-> Function receiving data and call the post function inside API

## 4th: Start minting:

-> Preparing data:

    + Passing the data into new variables

-> Forge a script 

-> Initiate a transaction with user wallet address as the start

-> Start a loop for building 

-> Craft the metadata:

    + Name 

    + Image Source 

    + MediaType

    + Description

-> Assess the minting exclusive detail:

    + Determine the asset type:

        - Non fungible asset (721)

        - Fungible asset (20)
        
    + Quantity

-> Complete loop with transaction contained all items

-> Begin transaction

-> Return unsignedTx to the front end

## 5th: User sign the transaction with the spending key , aka skey in a new window.

## 6th: After minting , the original digital assets on the server will be deleted permanently to protect privacy of the customers.

## How to run the project

- To test project ,please refer to following command , type it in terminal and run:
```
node testServer.js 

After uploading, wait for server to process request

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

All side projects are deprecated as they do not work / scale well with the current project progresss.