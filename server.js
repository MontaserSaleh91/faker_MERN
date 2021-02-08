const express = require("express");
const app = express();
const faker = require('faker');
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }
}
console.log(new User)

app.get("/api/users", (req, res) => {
    res.json( users );
});

class Company {
    constructor(){
        this.name = faker.company.companyName();
        this.suffixes = faker.company.suffixes();
    }
}
console.log(new Company)

app.get("/api/company", (req, res) => {
    res.json( company );
});


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );