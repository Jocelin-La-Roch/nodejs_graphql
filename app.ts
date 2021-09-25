import express from "express";
import {ApolloServer} from "apollo-server-express";
import {resolvers, typeDefs} from "./graphql/index";


const app = express();
const port = 6060;
// @ts-ignore
const server = new ApolloServer({ typeDefs, resolvers});

server.applyMiddleware({app, path: "/api"});
app.listen(port);

console.log(`[app] : http://localhost:${port}`);