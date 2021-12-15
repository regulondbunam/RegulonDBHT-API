import axios from 'axios';

describe('dataset', () => {
  test('get nlpGrowthConditions with ID SRR057747', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getNLPGrowthConditionById(datasetId:"SRR057747")
                {
                    _id
                    datasetIds
                    medium {
                        value
                        score
                        associatedPhrase
                    }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getNLPGrowthConditionById": {
            "_id": "GC_SRR057747",
            "datasetIds": [
              "SRR057747"
            ],
            "medium": [
              {
                "value": "DY330 ( W3110 )",
                "score": 0,
                "associatedPhrase": "strain : <Med> DY330 ( W3110 ) </Med> "
              }
            ]
          }
        }
      });
  });
});