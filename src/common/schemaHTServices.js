import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import fs from 'fs';

/** Reading each graphql schema of all services defined and parsing to String */
const HT_Dataset = gql`
  ${fs.readFileSync('./src/htDataset/ht_dataset_schema.graphql').toString()}
`;

const HT_Peaks = gql`
  ${fs.readFileSync('./src/peaks/peaks_schema.graphql').toString()}
`;

const HT_TF_Binding = gql`
  ${fs.readFileSync('./src/tfBinding/tfBinding_schema.graphql').toString()}
`;

const AuthorsData = gql`
  ${fs.readFileSync('./src/authorsData/authorsData_schema.graphql').toString()}
`;

const commonProperties = gql`
  ${fs.readFileSync('./src/common/common_properties.graphql').toString()}
`;

const TranscriptionUnit = gql`
  ${fs.readFileSync('./src/transcriptionUnit/transcriptionUnit_schema.graphql').toString()}
`;

const TranscriptionStartSite = gql`
  ${fs.readFileSync('./src/TranscriptionStartSite/tss_schema.graphql').toString()}
`;

const TranscriptionTerminationSite = gql`
  ${fs.readFileSync('./src/TranscriptionTerminationSite/tts_schema.graphql').toString()}
`;

/** Exports the merged Schema to the index to construct the GQL Server */
export const types = mergeTypes([ HT_Dataset, commonProperties, HT_Peaks, HT_TF_Binding, AuthorsData ], {all: true});
