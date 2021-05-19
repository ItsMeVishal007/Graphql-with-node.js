const express = require('express');
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql');


const hostname = '127.0.0.1';
const port = 4000;
const app = express();

const schema = buildSchema(``)


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, hostname, () => {
  console.log(`The server is running at http://${hostname}:${port}`)
})