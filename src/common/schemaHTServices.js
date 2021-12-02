import { mergeTypeDefs } from '@graphql-tools/merge';
import fs from 'fs';

/** Reading each graphql schema of all services defined and parsing to String */
const HT_Dataset = fs.readFileSync('./src/htDataset/ht_dataset_schema.graphql').toString()

const HT_Peaks = fs.readFileSync('./src/peaks/peaks_schema.graphql').toString()

const HT_TF_Binding = fs.readFileSync('./src/tfBinding/tfBinding_schema.graphql').toString()

const AuthorsData = fs.readFileSync('./src/authorsData/authorsData_schema.graphql').toString()

const commonProperties = fs.readFileSync('./src/common/common_properties.graphql').toString()

const TranscriptionUnit = fs.readFileSync('./src/transcriptionUnit/transcriptionUnit_schema.graphql').toString()

const TranscriptionStartSite = fs.readFileSync('./src/TranscriptionStartSite/tss_schema.graphql').toString()

const TranscriptionTerminationSite = fs.readFileSync('./src/TranscriptionTerminationSite/tts_schema.graphql').toString()

const types = [HT_Dataset, HT_Peaks, HT_TF_Binding, AuthorsData, commonProperties, TranscriptionUnit, TranscriptionStartSite, TranscriptionTerminationSite]

/** Exports the merged Schema to the index to construct the GQL Server */
export const typeDefs = mergeTypeDefs(types);
