const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// function to return a random / fake "User"
const createUser = () => {
  let first_name = faker.name.firstName();
  let last_name = faker.name.lastName();
  const newFake = {
    password: faker.internet.password(),
    phoneNumber: faker.phone.number('###-###-####'),
    firstName: first_name,
    lastName: last_name,
    email: faker.internet.email(first_name,last_name),
    id: faker.datatype.uuid()
  };
  return newFake;
};

// function to return a random / fake "Company"
const createCompany = () => {
  let state_abbr = faker.address.stateAbbr();
  const newFake = {
    id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(false),
      city: faker.address.cityName(),
      state: state_abbr,
      zipCode: faker.address.zipCodeByState(state_abbr),
      country: faker.address.country()
    }
  };
  return newFake;
};


app.get("/api/users/new", (req,res) => {
  const newFakeUser = createUser();
  res.json( newFakeUser );
});

app.get("/api/companies/new", (req,res) => {
  const newFakeCompany = createCompany();
  res.json( newFakeCompany );
});

app.get("/api/user/company", (req,res) => {
  const newFakeUser = createUser();
  const newFakeCompany = createCompany();
  res.json( {newFakeUser, newFakeCompany} );
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);