# Welcome to our project of NCKH2

Currrent stable test : v1.0.15  

# What is our goal?

We have seen too many injustices with closed source apps on a supposed open system , espcially like blockchain structures. 

We made the project open source , and ready for production , in this way , people can tell what is going on , even able to run and host their all servers and services locally , as long as one connection to the mainnet/testnet is available.

# What is this ?
This is a server for minting both native tokens and NFT, you can host it anywhere with a connection !

We are using Express as our backend , and only used simple front end with a tiny bit of (React)

```

[Express.js](https://expressjs.com) server control and minimal API routes self designed.

```


The project will remain open source until further notices. 

Days until the project is completed : 6 days.

## Why does the project take so long ? 

We are a group of junior developer , with no prior experiences in working with Typescript , or API.
In fact , we are learning as we go ! 

## What does NCKH2 stand for ? 
It's a secret ! But here is our motto. 

```
We are glad to show you the result of our working as soon as possible .

As we believe only working hard will bring good results .

Even if it sound typical , its truth as old as the world.
```

## The general flow of the data ##

## 1st: The client machines (Customers) first send the requests along with data (encrypted?) using the following procedure:

-> User connect wallet on front end.

-> User picks files to mint into NFTs

-> Front end get the following data:

    + Name

    + Files

    + Quantity of items minted
    
    + Brief description of the items 

    + Wallet Address

-> User submit the information 

-> Front end send the data

## 2nd: The data is prepared using the following procedure:

-> Server generate a seperate folder for each wallet address, serve as root folder for each user

-> Server start uploading files to IPFS

-> Server log the files and IPFS addresses

## 3rd: Generate transaction

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

## 4th: User sign the transaction with the spending key , aka skey in a new window.

## 5th: After minting , the original digital assets on the server will be deleted permanently to protect privacy of the customers.

# How to run the project
- To install the needed modules , please use the following command:
```
npm install
```

- To test project ,please refer to following command , type it in terminal and run:
```
node testServer.js 
```

- Server run at port 3001 , but you can change it inside testServer.js

- Connect wallet, click Start Minting.

- Change information in the form , pick files, current limit is 64 files per request, can be edited but not recommended for production as it may become very heavy load for multiple users.

- Click Create

- After the alert of unsignedTx , user can click Sign button to sign the transaction with skey.

- And done!

# This server identify each user by their wallet address upon making a request. The clients files are stored in iClient folder upon running ! This can be tinkered a bit to change too ~

# This server is ready for mainnet production as well.

## Current progress: ##

- Completed minting (static demo): Static minting by creating NFT from IPFS uploaded with Pinata service.
- Completed multiple files transferring on Rest APi (Originally used formiddable , now switching to multer )
- Integrated multiple files transfering interfaces. Tests ran successfully.
- Updated and repaired broken part due to statis pathing issues.
- Automatic redirection to Minting after Pinning .
- Upgraded handlers for longer names .
- Added support for multiple users by connecting to server address.

## Progress by completion : ##

Yes: 

- Upload multiple files to the server.
- Pinning multiple files to IPFS.
- Multiple minting in loop
- Automatic minting multiple files.
- Running on REST API to save server power
- Server - Client structure with minting fungible/NFT that is ready for production. 

Not yet:

- The final goal: Make it look better and migrate some key feature to secure spot.

## Side by side projects ##

Working on a project is never easy , and sometime , we do tests too. Installing a new system can be risky , as such , we decided to put the test project in a different repository , only people who need to know more about technical details behind each file should use the following examples as guides .

All side projects are deprecated as they do not work / scale well with the current project progresss.

# About me
I'm the leader of the devs team , and i'm responsible for all the backend programming .
My colleagues take care of the front end.
Feel free to contact me at tuanmoc21200@gmail.com , and I will respond as the representative for this project.

# Project final words
It has been a great point of interests for us , but as of current time, this project will now be archived and secret API keys will be removed from the project to protect privacy of the creators.