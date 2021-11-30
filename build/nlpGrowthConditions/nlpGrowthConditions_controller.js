"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nlpGrowthConditionsController = undefined;

var _nlpGrowthConditions_model = require("./nlpGrowthConditions_model");

class nlpGrowthConditionsController {
    static async getAllNLPGrowthConditions() {
        return _nlpGrowthConditions_model.NLPGrowthConditions.find({});
    }
    static async getNLPGrowthConditionById(_id) {
        return await _nlpGrowthConditions_model.NLPGrowthConditions.findOne({ "_id": _id });
    }
}

exports.nlpGrowthConditionsController = nlpGrowthConditionsController;