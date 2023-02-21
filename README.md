This WAS a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Welcome to our project of NCKH2, as you can see , the project is clearly vectored and built from Next.js original idea. However, we made many changes , and basically have diverted very far from the original snippet. 

We are glad to show you the result of our working as soon as possible , as we believe only working hard will bring good results , even if it sound typical , its truth as old as the earth. Also , original plan was cut short , and time was reduced, but we made sure that the progress will be sufficient for a preview after the deadline. 

The project will remain open source until further notices. 

Days until the project is completed : 38 days.

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

-> Post function redirect to the Transaction crafting 

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



## 

5th: After minting , the original digital assets on the server will be deleted permanently to protect privacy of the customers.

##How to run the project

Please refer to following command , type it in terminal and run:
```node server/testServer.js ```

## Current progress: ##

- Completed minting (static demo): Static minting by creating NFT from IPFS uploaded with Pinata service.
- Completed multiple files transferring on Rest APi (Originally used formiddable , now switching to multer )
- Integrated multiple files transfering interfaces. Tests ran successfully.
- Updated and repaired broken part due to statis pathing issues.
- Currently trying to async between file uploads and minting functions.


## Side by side projects ##

Working on a project is never easy , and sometime , we do tests too. Installing a new system can be risky , as such , we decided to put the test project in a different repository , only people who need to know more about technical details behind each file should use the following examples as guides .

## 1. REST api test repo:
https://github.com/frozenproof/restApitest