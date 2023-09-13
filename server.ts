import express from 'express'
import { createServer } from '@graphql-yoga/node'
 
const app = express()
 
const graphQLServer = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello from Yoga!'
      }
    }
  }
})

// Bind GraphQL Yoga to `/graphql` endpoint
app.use('/graphql', graphQLServer)

const graphQLOtherServer = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        helloOther: String
      }
    `,
    resolvers: {
      Query: {
        helloOther: () => 'Hello from other Yoga!'
      }
    }
  }
})
 
// Bind GraphQL Yoga to `/graphql-other` endpoint
app.use('/graphql-other', graphQLOtherServer)
 
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql and http://localhost:4000/graphql-other')
})