import { NLPGrowthConditions } from './nlpGrowthConditions_model';

class nlpGrowthConditionsController {
    static async getAllNLPGrowthConditions() {
        return NLPGrowthConditions.find({})
    }
    static async getNLPGrowthConditionById(_id) {
        return await NLPGrowthConditions.findOne({"_id": _id})
    }
}

export { nlpGrowthConditionsController }