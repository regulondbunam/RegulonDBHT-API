import { GeneExpression } from './geneExpression_model';

class geneExpressionController {
    static async getAllGeneExpressionOfDataset(datasetId) {
        return GeneExpression.find({"datasetIds": datasetId})
    }
    static async getGeneExpressionById(_id) {
        return await GeneExpression.findOne({"_id": _id})
    }
}

export { geneExpressionController }