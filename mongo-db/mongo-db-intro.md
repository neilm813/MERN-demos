# Mongo DB Intro

- Start the [stopwatch](https://www.timeanddate.com/stopwatch/) for the intro chapter then press split on each subsequent chapter for YouTube chapter timestamps.

## Chapter - Intro

### Zoom pulse check #1

- How well did you understand yesterday's reading material?

### Learning objectives

- [platform - MongoDB Overview](https://login.codingdojo.com/m/130/6418/45635)
- [platform - MongoDB Basics](https://login.codingdojo.com/m/130/6418/45741)
- [platform - MongoDB Documents](https://login.codingdojo.com/m/130/6418/45743)

### Big picture & background information of lecture

We'll use the terminal and MongoDB shell to create a database, add a table (collection), insert a few documents, and run a few queries to search for documents.

We're going to keep this pretty simple because we won't be using the shell much, we'll be writing JS code with a package to help interact with the DB.

## Chapter - MongoDB Overview

NoSQL stands for (Not Only SQL)

- Supports SQL queries, but there is more flexibility in the storage of data other than basic tabular storage
- Everything stored in a MongoDB is a JSON object
- Relationships work differently than SQL but have some similarities. SQL is preferred for very relational data.

### Advantages

- Free
- Faster to get started because it doesn't enforce as strict of a structure to the data as SQL
- No traditional joins, joins are expensive, so MongoDB has a speed benefit by favoring nested data verse joining separate collections
- Joining can be simulated to some degree
- More easily store data that changes structure (shape) frequently due to flexibility
- Scalable via horizontal scaling (add more servers to scale (sharding)) vs SQL using vertical scaling (more processing power on same server)

### Disadvantages

- Too unstructured which can lead to messy data storage
  - We will use a package called `mongoose` to add some more strict structure to help with this
- Not ideal for multi-row transactions, such as an accounting system
- Not ideal for highly relational data, one-to-many can be supported pretty easily, many to many is ab it more challenging, but when you have lot's of relational data SQL is better

### SQL => Mongo Correlates

- Schema => DB
- Tables => Collections
- Row / Record => Document (JSON)

## Chapter - Installation notes

On windows, I had to create a dir `c:\data\db` folder because of an error. If you see an error that mentions this path not existing, you can simply create it.

### Add to path windows

This is to avoid having to `cd` to the path where the executable is in order to run the server or shell, it's usually already added on mac automatically.

Adding to path makes the executables at that location available to be called from the terminal just by typing the exe file name instead of the whole path.

1. press windows key
1. type environment
1. open "edit the system environment variables"
1. click Environment Variables
1. click Path row
1. click Edit
1. Add your directory path to your MongoDB `bin` folder
   - `C:\Program Files\MongoDB\Server\{{folder with version number in it}}\bin\`

## Chapter - Mongo Shell

1. Start server via `mongod.exe` (usually already running and not needed)
   - Windows (you can drag drop file into terminal to auto fill path): `call "c:/Program Files/MongoDB/Server/{{folder name with version number in it}}/bin/mongod.exe"`
   - `mongod` if added to path
1. `mongo.exe` opens shell
   - Windows: `call "C:\Program Files\MongoDB\Server\{{folder name with version number in it}}\bin\mongo.exe"`
   - `mongo` if added to path
1. `show dbs`
1. `use db_name`
   - This will create the db if it doesn't exist
1. `show collections`
   - A collection is created when the first document is inserted into a collection that doesn't exist

## Chapter - Basic queries

The advanced operators shown in the platform that start with `$` will not be needed for the exam so I'm not going to cover them here.

Don't spend too long on assignments that require those advanced queries. Get help and move on quickly or submit the assignment if it's close to complete.

99% of the queries you need for the red belt exam will be shown in the upcoming lectures, they are the basic CRUD queries with a single entity (no relationships): create, get all, get one, update one, delete one.

Some of the names of the query methods we use will change slightly when we start using `mongoose` in the next lecture.

### Insert one

- `db.collectionName.insertOne({key1: val1, key2: val2})`
- Inserting to a collection that doesn't exist will auto create that collection
- You can insert something with an entirely different structure into the collection unlike SQL until `mongoose` is added to enforce a structure

```js
use trip-planner

db.trips.insertOne({ destination: "Japan", description: "Pet shibe" })
db.trips.insertOne({ destination: "Japan", description: "Learn about self-mummification" })
db.trips.insertOne({ destination: "Ancient Egypt", description: "See how the pyramids were built" })

// Allows any structure...
db.trips.insertOne({ dest: "test", desc: 5 })
```

### Find all

```js
// No query passed into find will find everything
db.trips.find().pretty();
```

### Find with query

```js
db.trips.find({ destination: 'Japan' });
```

```js
// Find only documents that match all key-value pairs.
db.trips.find({ destination: 'Japan', description: 'Pet shibe' });
```

### Delete

```js
// Delete the one that match all key-value pairs.
db.trips.remove({ dest: 'test', desc: 5 });
```

## Chapter - Outro

### Wrap up - High-level

Now you can see the simple appeal of MongoDB, it's easy to interface with JavaScript because the syntax mirrors JavaScript and the data is already structured in a way that is easy to convert into JavaScript objects.

However, MongoDB can be used with other back-end languages.

### Zoom pulse check #2

- How well did you understand the lecture material?
- **Show what they should be working on for the rest of the day**
