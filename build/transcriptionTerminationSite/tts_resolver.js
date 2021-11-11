'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionStartSiteResolvers = undefined;

var _tts_controller = require('./tts_controller');

const transcriptionStartSiteResolvers = exports.transcriptionStartSiteResolvers = {
    Query: {
        getTTSByID: (root, { _id }) => _tts_controller.transcriptionTerminationSiteController.getTTSByID(_id),
        getAllTTSOfDataset: (root, { datasetId }) => _tts_controller.transcriptionTerminationSiteController.getAllTTSOfDataset(datasetId)
    }
}; /**
   # [HT Transcription Termination Site Service Resolver]
   	
   ## Description
   
   [Resolves the GraphQL Query based on controller's response
   for HT Transcription Termination Site Service]
   
   ## Usage 
   
   ```javascript
   import { transcriptionTerminationSiteController } from './tts_controller'
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