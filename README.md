# My E-Commerse Back end

  
## Description:

The backend database has been setup for the purpose of an E-Commerse site. Using Express.js and Sequelisze technologies the database has the ability to use GET, POST, PUT, and DELETE request in order to manipulate and add data. 

## Table of Contents:
- [My E-Commerse Back end](#my-e-commerse-back-end)
  - [Description:](#description)
  - [Table of Contents:](#table-of-contents)
- [Overview](#overview)
  - [The Task](#the-task)
  - [The Challenge:](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Usage Instructions](#usage-instructions)
  - [Repository Link:](#repository-link)
  - [Walkthrough Video:](#walkthrough-video)
  - [Screenshots.](#screenshots)
    - [Figure 1. Command line interface](#figure-1-command-line-interface)
  - [Installation Process](#installation-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Author](#author)

# Overview

## The Task

## The Challenge:
This challenge requires the creation of an e-commerce back-end site that meets specific user requirements. These requirements include the ability to connect to a MySQL database using Sequelize, create a development database that is seeded with test data, sync Sequelize models to the MySQL database, and display data from categories, products, and tags in a formatted JSON. The application should also be able to create, update, and delete data in the database.

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```


## Usage Instructions

1. Repository: Open documentation run 'npm i' and update '.env'.
2. Create database: use the schema.sql file in the db folder with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.
3. Run 'node ./seeds/index.js' to seed the database with test data. Then, run 'npm start' or 'nodemon' to start the server and sync the Sequelize models to the MySQL database.
4. Generate a development database with test data, use the schema and seed commands.
5. Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.


## Repository Link:
[Repository Link 'Click Here'.](https://github.com/MaxKeable/My-E-Commerse-Back-End)

## Walkthrough Video:
[Click Here to Watch.](https://drive.google.com/file/d/1eag0wZ3NT2LPphbYQh8bjEVNlU5YpenN/view)

## Screenshots.
### Figure 1. Command line interface
![screen shot 1](./Assets/13-orm-homework-demo-01%20copy.gif)

![screen shot 2](./Assets/13-orm-homework-demo-02%20copy.gif)

![screen shot 3](./Assets/13-orm-homework-demo-03%20copy.gif)

## Installation Process
1. Clone the Repository from GitHub (or) Download Zip Folder from Repository from GitHub.
2. Open the cloned (or downloaded) repository in any source code editor.
3. Open the integrated terminal of the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Built With

- JSON:[ JSON](https://www.npmjs.com/package/json)
- JavaScript
- Dotenv: [8.6.0](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Node.js: [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Node MySql2: [2.3.3](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.29.3](https://www.npmjs.com/package/sequelize)
- Insomnia: [by Kong](https://insomnia.rest/)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
1. How to use Express.js to create a functional back end for an e-commerce website.
2. How to connect to a MySQL database using Sequelize and update environment variable files accordingly.
3. How to generate a development database with test data using schema and seed commands.
4. How to opperate insomnia for an array of different request including: GET, POST, PUT, and DELETE. 

## Author

Follow me on Github at [MaxKeable](https://github.com/MaxKeable)! Additional questions or concerns? feel free to contact me at keabledev@gmail.com


© 2023 [MaxKeable](https://github.com/MaxKeable). Confidential and Proprietary. All Rights Reserved.