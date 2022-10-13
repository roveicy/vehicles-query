

## How to run
If it is the first time, and you are using a new database.
```sh
yarn install
yarn start:seed
```

If you already seeded database, or using my database.
```sh
yarn install
yarn start
```

http://localhost:4000/graphql

And run this query
```
query ExampleQuery {
  vehicles {
    makeId
    makeName
    vehicleTypes {
      typeId
      typeName
    }
  }
}
```

To retrieve a vehicle by makeid
```
//query
query ExampleQuery($makeId: Int!) {
  vehicle(makeId: $makeId) {
    makeName
    vehicleTypes {
      typeId
      typeName
    }
  }
}

// variable
{
    "makeId": 4877
}
```


To retrieve a vehicle by date.
```
//query
query ExampleQuery($dateBefore: String, $dateAfter: String) {
  vehicles(dateBefore: $dateBefore, dateAfter: $dateAfter) {
    makeName
    vehicleTypes {
      typeId
      typeName
    }
  }
}

// variable
{
  "dateBefore": "2022-10-11",
  "dateAfter": "2022-10-09"
}
```


## How to run with Docker
```sh
docker build . -t tag
docker run -p 4000:4000 tag
```
