# API Project
- npm init -y
- npm i express
- npm i dotenv
- npm i -D nodemon
  - Refresh node process when code changes are detected

# MongoDB

## Mongoose
Model objects and perform transactions on data without writing the queries directly.
docker compose -f ./docker/docker-compose.yml up

# Authentication
`auth.js`

# Middleware
```javascript
app.use((req, res, next) => {
   // middleware work here 
});
```

# Schema
[Mongoose Schema Type Options](https://mongoosejs.com/docs/api/schematypeoptions.html)
