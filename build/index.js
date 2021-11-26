'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _schemaHTServices = require('./common/schemaHTServices');

var _resolverHTServices = require('./common/resolverHTServices');

var _htPlaygroundOptions = require('./config/htPlaygroundOptions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { buildSubgraphSchema } = require("@apollo/federation"); /** 
                                                               # openTools.js
                                                               
                                                               ## Description
                                                               Configures Graphql server
                                                               
                                                               ## Usage
                                                               ```shell
                                                               npm start
                                                               ```
                                                               
                                                               ## Arguments/Parameters
                                                               N/A
                                                               
                                                               ## Examples
                                                               N/A
                                                               
                                                               ## Return 
                                                               N/A
                                                               
                                                               ## Category
                                                               RegulonDB Coexpression web service
                                                               
                                                               ## License
                                                               
                                                               ## Author 
                                                               
                                                               
                                                               **/

// imports needed libraries

const conectarDB = require('./config/dbConnection');
require('dotenv').config();

//Make the connection to mongoDB
conectarDB();

const federatedSchema = buildSubgraphSchema([{
    typeDefs: _schemaHTServices.typeDefs,
    resolvers: _resolverHTServices.resolvers
}]);

//Defining graphql server
const htServer = new _apolloServerExpress.ApolloServer({
    playground: true,
    schema: federatedSchema,
    playground: _htPlaygroundOptions.playgroundTabs,
    introspection: true,
    formatError: err => ({
        message: err.message,
        status: err.extensions.exception.status,
        statusCode: err.extensions.exception.statusCode
    })
});

// create an instance of express to be used with ApolloServer
const app = (0, _express2.default)();

//Set a variable to limit requests
const limiter = (0, _expressRateLimit2.default)({
    windowMs: 60000,
    max: 1000,
    message: {
        message: 'Too many requests',
        statusCode: 429
    }
});
//Assign limit to the API
app.use(limiter);

// apply express instance to apolloserver
htServer.applyMiddleware({
    app,
    cors: {
        origin: '*',
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});

//Set an enviroment variable for the port (4000 by default)
const PORT = process.env.GRAPHQL_HT_SERVICES_PORT || 4004;

//Server start
const servExpress = app.listen(PORT);
console.log(`El servidor esta funcionando en http://localhost:${servExpress.address().port}${htServer.graphqlPath}`);