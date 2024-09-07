# E-commerce-Back-End

## Description

This project presents the back end for an e-commerce site. It utilizes such technologies like Express.js, Sequelize, and PostgreSQL. It allows user to take get all avaliable product, search particular product via it's ID, create new product, update existing product and delete product. Also just the same operation can be done with the categories and tags of the product

## Table of Contents (Optional)

Not provided
    

## Installation

1.First you need to clone such repository. Enter in you terminal following command: 
git clone https://github.com/NarSulEsz/E-commerce-Back-End.git

2.Install nessessary packages entering following command:
npm install

3.Create a .env file to store PostgreSQL credentials entering following command:
cp .env.EXAMPLE .env

4.Swith to SQL shell entering following command:
psql -U postgres

5.Create the database by entering the following command:
\i db/schema.sql

6.Quit the SQL environment entering the following command:
\q

7.Seed the database entering the following command:
npm run seed

8.Force the server to work entering the following command:
npm start

## Usage
Use an program using API client  Insomnia to make request via routes to get, create, update and delete categories, products, and tags. Use appropriate routes to get requests fulfiiled. For this look to folder structure and find the appropriate files in routes/api directory. In that files routes for each requests are written.



This is link of repository: https://github.com/NarSulEsz/E-commerce-Back-End

This is link of GoogleDrive: https://drive.google.com/file/d/1UNpsf0Hb2En3HfaCh7FzDDE0wKoXQM_L/view?usp=sharing