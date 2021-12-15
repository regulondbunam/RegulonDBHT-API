import axios from 'axios';

describe('dataset', () => {
  test('get geneExpression with ID ERR1218301', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getAllGeneExpressionOfDataset(datasetId:"ERR1218301" limit:3 page:0)
                {
                    _id
                    gene {
                        _id
                        name
                        bnumber
                    }
                    fpkm
                    datasetIds
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getAllGeneExpressionOfDataset": [
            {
              "_id": "ERR1218301,b0001",
              "gene": {
                "_id": "RDBECOLIGNC01250",
                "name": "thrL",
                "bnumber": "b0001"
              },
              "fpkm": "0.000000",
              "datasetIds": [
                "ERR1218301"
              ]
            },
            {
              "_id": "ERR1218301,b0002",
              "gene": {
                "_id": "RDBECOLIGNC00986",
                "name": "thrA",
                "bnumber": "b0002"
              },
              "fpkm": "8.586969",
              "datasetIds": [
                "ERR1218301"
              ]
            },
            {
              "_id": "ERR1218301,b0003",
              "gene": {
                "_id": "RDBECOLIGNC00987",
                "name": "thrB",
                "bnumber": "b0003"
              },
              "fpkm": "10.319941",
              "datasetIds": [
                "ERR1218301"
              ]
            }
          ]
        }
      });
  });
});