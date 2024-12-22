# Get started
Start the dependencies
```bash
docker compose -f ./docker/docker-compose.yml up
```

# API Project
- npm init -y
- npm i express
- npm i dotenv
- npm i -D nodemon
  - Refresh node process when code changes are detected

# MongoDB

## Useful Commands
```mongo
db.getCollectionNames()

db.getSiblingDB("test").getCollection("users")
    .find({})
    .limit(21)

db.users.drop()
```

## Mongoose
Model objects and perform transactions on data without writing the queries directly.
https://mongoosejs.com/docs/api/model.html
https://mongoosejs.com/docs/api/model.html#Model.findOne()

# Authentication
`feature/authentication/controller/authController.js`

# Middleware
```javascript
app.use((req, res, next) => {
   // middleware work here 
});
```

# Schema
[Mongoose Schema Type Options](https://mongoosejs.com/docs/api/schematypeoptions.html)

# Auth
brcrypt for hashing with a salt and then comparing
Never save the password directly to the DB

# Http Request Logging
morgan in development
```javascript
import morgan from "morgan";

app.use(morgan("dev"));
```
