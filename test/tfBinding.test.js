import axios from 'axios';

describe('dataset', () => {
  test('get tfBinding doc with ID [21064,21078,6,+,TTGATATTAGCCAA]', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getTFBindingById (_id: "[21064,21078,6,+,TTGATATTAGCCAA]") {
                _id
                chromosome
                chrLeftPosition
                chrRightPosition
                sequence
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getTFBindingById": {
            "_id": "[21064,21078,6,+,TTGATATTAGCCAA]",
            "chromosome": "NC_000913.3",
            "chrLeftPosition": 21064,
            "chrRightPosition": 21078,
            "sequence": "TTGATATTAGCCAA"
          }
        }
      });
  });
});