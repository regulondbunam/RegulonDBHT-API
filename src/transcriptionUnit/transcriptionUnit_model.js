import mongoose from 'mongoose'

const geneSchema = new mongoose.Schema({
    _id: String,
    name: String,
    bnunmber: String
});

const transcriptionUnitSchema = new mongoose.Schema({
    _id: String,
    chromosome: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    name: String,
    strand: String,
    length: Number,
    termType: String,
    genes: [geneSchema],
    phantom: Number,
    pseudo: Number,
    datasetIds: [String],
    temporalId: String
});

const TranscriptionUnit = mongoose.model('ht_transcription_units', transcriptionUnitSchema, 'TranscriptionUnitCollection');

export { TranscriptionUnit }