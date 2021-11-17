import axios from 'axios';

describe('peaks', () => {
  test('get peak doc with ID DS00022_peak_1', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query{
            getPeakById(_id: "DS00022_peak_1") {
                _id
                name
                closestGenes {
                _id
                name
                distanceTo
                productName
                }
                chromosome
                peakLeftPosition
                peakRightPosition
            }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getPeakById": {
            "_id": "DS00022_peak_1",
            "name": "DS00022_peak_1",
            "closestGenes": [
              {
                "_id": "RDBECOLIGNC00986",
                "name": "thrA",
                "distanceTo": 19.5,
                "productName": [
                  "fused aspartate kinase/homoserine dehydrogenase 1"
                ]
              },
              {
                "_id": "RDBECOLIGNC01250",
                "name": "thrL",
                "distanceTo": 127.5,
                "productName": [
                  "<i>thr</i> operon leader peptide"
                ]
              }
            ],
            "chromosome": "NC_000913.3",
            "peakLeftPosition": 120,
            "peakRightPosition": 515
          }
        }
      });
  });
});