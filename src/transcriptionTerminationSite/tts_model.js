import mongoose from 'mongoose';

const PromoterSchema = new mongoose.Schema({
    _id: String,
    name: String,
    sequence: String,
    leftEndPosition: Number,
    rightEndPosition: String,
    strand: String
});

const TranscriptionUnitSchema = new mongoose.Schema({
    _id: String,
    name: String,
    promoter: PromoterSchema
});

const TerminatorSchema = new mongoose.Schema({
    _id: String,
    name: String,
    transcriptionUnit: [TranscriptionUnitSchema]
});

const ClosestGenesSchema = new mongoose.Schema({
    _id: String,
    name: String,
    distanceTo: Number
});

const TTSSchema = new mongoose.Schema({
    _id: String,
    chromosome: String,
    leftEndPosition: Number, 
    rightEndPosition: Number,
    name: String,
    closestGenes: [ClosestGenesSchema],
    terminators: [TerminatorSchema],
    datasetIds: [String],
    temporalId: String
});

const TranscriptionTerminationSite = new mongoose.model('ht_transcription_start_site', TTSSchema, 'TranscriptionTerminationSiteCollection')

export { TranscriptionTerminationSite }