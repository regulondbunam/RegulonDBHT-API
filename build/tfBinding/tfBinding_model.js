'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TFBinding = exports.citationsSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transcriptionUniteSchema = new _mongoose2.default.Schema({
    _id: String,
    name: String
});

const gene = new _mongoose2.default.Schema({
    _id: String,
    name: String,
    distanceTo: Number,
    transcriptionUnits: [transcriptionUniteSchema]
});

const evidenceSchema = new _mongoose2.default.Schema({
    id: String,
    name: String,
    code: String,
    type: String
});

const citationsSchema = exports.citationsSchema = new _mongoose2.default.Schema({
    evidence: evidenceSchema,
    publication: {
        id: String,
        pmid: String,
        citation: String,
        url: String,
        authors: [String],
        title: String,
        year: Number
    }
});

const foundRIsSchema = new _mongoose2.default.Schema({
    _id: String,
    tfbsLeftPosition: Number,
    tfbsRightPosition: Number,
    relativeGeneDistance: Number,
    relativeTSSDistance: Number,
    strand: String,
    sequence: String,
    citations: [citationsSchema],
    origin: String
});

const tfBindingSchema = new _mongoose2.default.Schema({
    _id: String,
    chromosome: String,
    chrLeftPosition: Number,
    chrRightPosition: Number,
    closestGenes: [gene],
    foundRIs: [foundRIsSchema],
    peakId: String,
    score: Number,
    strand: String,
    sequence: String,
    datasetIds: [String],
    temporalId: String,
    nameCollection: String
});

const TFBinding = _mongoose2.default.model('tfBinding_ht', tfBindingSchema, 'tfBinding');

exports.TFBinding = TFBinding;