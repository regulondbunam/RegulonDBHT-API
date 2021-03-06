"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tfBindingResolvers = undefined;

var _tfBinding_controller = require("./tfBinding_controller");

const tfBindingResolvers = exports.tfBindingResolvers = {
    Query: {
        getAllTFBindingOfDataset: (root, { datasetId, limit, page }) => _tfBinding_controller.tfBindingController.getAllTFBindingOfDataset(datasetId, limit, page),
        getTFBindingById: (root, { _id }) => _tfBinding_controller.tfBindingController.getTFBindingById(_id)
    }
}; /**
   # [HT TF Binding Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for HT TF Binding Service]
   
   ## Usage 
   
   ```javascript
   import {tfBindingResolvers} from './tfBinding_resolver'
   ```
   
   ## Arguments/Parameters
   
   N/A
   
   ## Examples
   
   N/A
   
   ## Return 
   
   N/A
   
   ## Category
   
   HT web service
   
   ## License
   
   MIT License
   
   ## Author 
   
   RegulonDB Team: Lopez Almazo Andres Gerardo
   **/

/** import the tfBindingController that contains the resolver functions */