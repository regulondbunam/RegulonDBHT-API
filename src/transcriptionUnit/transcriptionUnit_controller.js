import {TranscriptionUnit} from './transcriptionUnit_model'

class transcriptionUnitController {
    static async getTUByID(id) {
        console.log(id)
        return TranscriptionUnit.findOne({"_id":id})
    }
    static async getAllTransUnitsOfDataset(datasetId) {
        return TranscriptionUnit.find({"datasetIds": datasetId})
    }
}

export { transcriptionUnitController }