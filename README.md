# Server for implemented example of angular2-jsonapi 

Based on `jsonapi-server` (https://github.com/holidayextras/jsonapi-server).
Is used as server component to have the example from angular2-jsonapi fully
working. Uses [faker.js](https://github.com/Marak/Faker.js) to generate mock
data on startup.

See the [example client](https://github.com/hpawe01/angular2-jsonapi-example)
where the example from angular2-jsonapi is implemented using Angular CLI.

## Installation

*   `git clone https://github.com/hpawe01/angular2-jsonapi-example-server.git`
*   `cd angular2-jsonapi-example-server.git`
*   `npm install`

## Running / Development

*   `npm start`

Keep in mind that we use an **in-memory database**, which means, that your changes
throught the API (POST, PUT, DELETE) will not be persisted!

When other example data is needed, the resource files in `resources` can be updated.

## Further Reading / Useful Links
*   [JsonAPI-Server](https://github.com/holidayextras/jsonapi-server/tree/master/documentation)
