# MongoDB Intro

## Mongo DB Overview

1. NoSQL (Not Only SQL)

- supports SQL queries, but there is more flexibility in the storage of data other than basic tabular storage
- no formal relationships like in a relational SQL DB
- every piece of data is unaware of other pieces
- everything stored in a MongoDB is a JSON object

---

### Advantages

- free
- faster to get started because it's not as strictly structured
- no joins, joins are expensive, so MongoDB has a speed benefit by not needing joins
- speed because of no joins
- more easily store data that changes structure (shape) frequently due to flexibility
- scalable via horizontal scaling, add more servers to scale (sharding) vs SQL using vertical scaling (more processing power on same server)

---

## SQL Joins analogy

- ![Join Card Catalog Visual](./card-catalog-drawers.png)
  - Each drawer is a table, each card in the drawer is a row in the table
  - Imagine one drawer is full of cards with information about a Sales Agent
  - Imagine the other drawer is full of cards with information about a Customer
  - 1 sales agent is related to many customers
  - In order to get the information about 1 sales agent and all of their customers info
    1. Find the sales agent card by flipping through (find by id or name)
    2. Flip through all the customer cards to find each customer that has the sales agents id on it (Foreign Key)
    3. Join the data on these cards together so you have info for 1 sales agent and their many customers

---

### Disadvantages

- too unstructured, can get messy
  - when we start using mongoose, library / node module used to talk to mongo with js
    - we will define our schemas structure more strictly
- not ideal for multi-row transactions - such as an accounting system
- relational data is stored inside the entity itself, nested data inside object, rather than having it's own table, so the related data cannot be queried all together, separate from what it is inside of

---

## SQL => Mongo Correlates

- Schema => DB
- Tables => Collections
- Row / Record => Document (JSON)

---

## Installation

- I had to create dir `C:\data\db` folder and you might have to as well if you get an error specifying this dir not found
- that way any logged in user on the computer will be able to interact with the DB

---

## Mongo Shell

1. start server via `mongod.exe` (usually already running)
   - `call "c:/Program Files/MongoDB/Server/{{folder name with version number in it}}/bin/mongod.exe"`
   - `mongod` if added to path
2. `mongo.exe` opens shell
   - `call "C:\Program Files\MongoDB\Server\{{folder name with version number in it}}\bin\mongo.exe"`
   - `mongo` if added to path
3. `show dbs`
4. `use db_name`
   - will create db if it doesn't exist
5. `show collections`

- after today you'll be writing queries in js instead of shell, similar to what you did with py

### Add to path windows

- this is to avoid having to `cd` to the above path in order to run the server or shell

1. press windows key
2. type environment
3. open "edit the system environment variables"
4. click Environment Variables
5. click Path row
6. click Edit
7. add your directory path to your MongoDB `bin` folder
   - `C:\Program Files\MongoDB\Server\{{folder with version number in it}}\bin\`

---

## Queries

---

### Select all

- `db.collectionName.find()`
  - `.find({})` also works
  - `.pretty()` at end to format

---

### Insert

- `db.collectionName.insertOne({key1: val1, key2: val2})`
- inserting to a collection that doesn't exist will auto create that collection
- can insert something with an entirely different structure into the collection unlike SQL
  - no required 'columns' (props / keys)
  - insert a differently structured object to show

---

### Delete

- `db.quotes.remove({key1: val1, key2: val2})`
- `db.dropDatabase()`
- `db.COLLECTION_NAME.drop()`

---

### Find

- `db.collectionName.find({key1: val1, key2: val2})`
- `db.collectionName.findById(ObjectId("id"));`

---

### Mongo Docs

- [Mongo CRUD](https://docs.mongodb.com/manual/crud/)
