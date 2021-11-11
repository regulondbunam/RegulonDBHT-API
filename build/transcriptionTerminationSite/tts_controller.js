"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transcriptionTerminationSiteController = undefined;

var _tss_model = require("./tss_model");

class transcriptionTerminationSiteController {
    static async getTTSByID(id) {
        return _tss_model.TranscriptionTerminationSite.findOne({ "_id": id });
    }
    static async getAllTTSOfDataset(datasetId) {
        return _tss_model.TranscriptionTerminationSite.find({ "datasetIds": datasetId });
    }
}

exports.transcriptionTerminationSiteController = transcriptionTerminationSiteController;