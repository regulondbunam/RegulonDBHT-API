import axios from 'axios';

describe('dataset', () => {
  test('get dataset with ID RHTECOLIBSD00009', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
              getDatasetByID(datasetID:"RHTECOLIBSD00009")
              {
                  _id
                  objectTested {
                      _id
                      name
                      genes{
                        _id
                        name
                      }
                  }
              }
          }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getDatasetByID": {
          "_id": "RHTECOLIBSD00009",
          "objectTested": {
            "_id": "RDBECOLITFC00180",
            "name": "AscG",
            "genes": [
              {
                "_id": "RDBECOLIGNC00083",
                "name": "ascG"
              }
            ]
          }
        }
      }
    });
  });
});