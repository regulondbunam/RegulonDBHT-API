import mongoose from 'mongoose'

const transcriptionUniteSchema = new mongoose.Schema({
    _id: String,
    name: String
});

const gene = new mongoose.Schema({
    _id: String,
    name: String,
    distanceTo: Number,
    transcriptionUnits: [transcriptionUniteSchema],
});

const EvidenceSchema = new mongoose.Schema({
    id: String,
    name: String,
    code: String, 
    type: String
});

const PublicationSchema = mongoose.Schema({
    id: String,
    authors: [String],
    citation: String,
    pmid: String,
    title: String,
    url: String,
    year: Number
})

const CitationsSchema = new mongoose.Schema({
    evidence: EvidenceSchema,
    publication: PublicationSchema
});

const foundRIsSchema = new mongoose.Schema({
    _id: String,
    tfbsLeftPosition: Number,
    tfbsRightPosition: Number,
    relativeGeneDistance: Number, 
    relativeTSSDistance: Number,
    strand: String,
    sequence: String,
    citations: [CitationsSchema],
    origin: String
});

const tfBindingSchema = new mongoose.Schema({
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

const TFBinding = mongoose.model('tfBinding_ht', tfBindingSchema, 'tfBinding');

export { TFBinding };