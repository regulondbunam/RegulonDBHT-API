'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geneExpressionController = undefined;

var _geneExpression_model = require('./geneExpression_model');

var _mongodbFilterObjectParser = require('mongodb-filter-object-parser');

/**
# [geneExpression Service Controller]
	
## Description

[Defines functions to resolve GraphQL queries of HT geneExpression Service]

## Usage 

```javascript
import {geneExpressionController} from './geneExpression_controller.js';
```

## Arguments/Parameters

N/A

## Examples

N/A

## Return 

N/A

## Category

RegulonDB HT Web Service

## License

MIT License

## Author 

RegulonDB Team: Lopez Almazo Andres Gerardo
**/

class geneExpressionController {
    /** Get all geneExpression Docs that are linked to a specific Dataset
     *  @param {String} datasetId the ID of the Dataset that is linked to the document
     *  @param {String} limit the number of results to be showed
     *  @param {String} page the page to be showed; this is used to calculate how many
     *  documents will be skiped to be showed
     */
    static async getAllGeneExpressionOfDataset(datasetId, limit = 10, page = 0) {
        let offset = page * limit;
        return _geneExpression_model.GeneExpression.find({ "datasetIds": datasetId }).limit(limit).skip(offset);
    }

    /** Get a single document based on its unique ID
     *  @param {String} _id the unique ID of the document to be queried
     */
    static async getGeneExpressionById(_id) {
        return await _geneExpression_model.GeneExpression.findOne({ "_id": _id });
    }

    static async getGeneExpressionFromSearch(advancedSearch, limit = 10, page = 0) {
        let offset = page * limit;
        let filter = (0, _mongodbFilterObjectParser.advancedSearchFilter)(advancedSearch);
        return await _geneExpression_model.GeneExpression.find(filter).limit(limit).skip(offset);
    }
}

exports.geneExpressionController = geneExpressionController;