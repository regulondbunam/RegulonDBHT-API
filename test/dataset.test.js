import axios from 'axios';

describe('dataset', () => {
  test('get dataset with ID DS00022', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getDatasetByID(datasetID: "DS00022") {
                _id
                publication {
                    pmid
                    doi
                    authors
                    title
                    date
                }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getDatasetByID": {
            "_id": "DS00022",
            "publication": {
              "pmid": 23818864,
              "doi": "10.1371/journal.pgen.1003565",
              "authors": [
                "Myers KS",
                "Yan H",
                "Ong IM",
                "Chung D",
                "Liang K",
                "Tran F",
                "Keles S",
                "Landick R",
                "Kiley PJ"
              ],
              "title": "Genome-scale analysis of escherichia coli FNR reveals complex features of transcription factor binding.",
              "date": "2013 Jun"
            }
          }
        }
      });
  });
});