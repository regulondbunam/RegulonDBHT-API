'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.typeDefs = undefined;

var _merge = require('@graphql-tools/merge');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _nlpGrowthConditions_model = require('../nlpGrowthConditions/nlpGrowthConditions_model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Reading each graphql schema of all services defined and parsing to String */
const HT_Dataset = _fs2.default.readFileSync('./src/htDataset/ht_dataset_schema.graphql').toString();

const HT_Peaks = _fs2.default.readFileSync('./src/peaks/peaks_schema.graphql').toString();

const HT_TF_Binding = _fs2.default.readFileSync('./src/tfBinding/tfBinding_schema.graphql').toString();

const AuthorsData = _fs2.default.readFileSync('./src/authorsData/authorsData_schema.graphql').toString();

const commonProperties = _fs2.default.readFileSync('./src/common/common_properties.graphql').toString();

const TranscriptionUnit = _fs2.default.readFileSync('./src/transcriptionUnit/transcriptionUnit_schema.graphql').toString();

const TranscriptionStartSite = _fs2.default.readFileSync('./src/TranscriptionStartSite/tss_schema.graphql').toString();

const TranscriptionTerminationSite = _fs2.default.readFileSync('./src/TranscriptionTerminationSite/tts_schema.graphql').toString();

const GeneExpression = _fs2.default.readFileSync('./src/geneExpression/geneExpression_schema.graphql').toString();

const nlpGrowthConditions = _fs2.default.readFileSync('./src/nlpGrowthConditions/nlpGrowthConditions_schema.graphql').toString();

const types = [HT_Dataset, HT_Peaks, HT_TF_Binding, AuthorsData, commonProperties, TranscriptionUnit, TranscriptionStartSite, TranscriptionTerminationSite, GeneExpression, nlpGrowthConditions];

/** Exports the merged Schema to the index to construct the GQL Server */
const typeDefs = exports.typeDefs = (0, _merge.mergeTypeDefs)(types);