'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = undefined;

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _apolloServerExpress = require('apollo-server-express');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Reading each graphql schema of all services defined and parsing to String */
const HT_Dataset = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/htDataset/ht_dataset_schema.graphql').toString()}
`;

const HT_Peaks = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/peaks/peaks_schema.graphql').toString()}
`;

const HT_TF_Binding = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/tfBinding/tfBinding_schema.graphql').toString()}
`;

const AuthorsData = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/authorsData/authorsData_schema.graphql').toString()}
`;

const commonProperties = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/common/common_properties.graphql').toString()}
`;

const TranscriptionUnit = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/transcriptionUnit/transcriptionUnit_schema.graphql').toString()}
`;

const TranscriptionStartSite = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/TranscriptionStartSite/tss_schema.graphql').toString()}
`;

const TranscriptionTerminationSite = _apolloServerExpress.gql`
  ${_fs2.default.readFileSync('./src/TranscriptionTerminationSite/tts_schema.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
const types = exports.types = (0, _mergeGraphqlSchemas.mergeTypes)([HT_Dataset, commonProperties, HT_Peaks, HT_TF_Binding, AuthorsData, TranscriptionUnit], { all: true });