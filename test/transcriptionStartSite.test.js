import axios from 'axios';

describe('dataset', () => {
  test('get TSS with ID ECOLITS000000001', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getTSSByID(_id:"ECOLITS000000001")
                {
                    _id
                    chromosome
                    leftEndPosition
                    rightEndPosition
                    datasetIds
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getTSSByID": {
            "_id": "ECOLITS000000001",
            "chromosome": "NC_000913.3",
            "leftEndPosition": 38,
            "rightEndPosition": 38,
            "datasetIds": [
              "RHTECOLITSD00173"
            ]
          }
        }
      });
  });
});