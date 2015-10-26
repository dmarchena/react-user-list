import { parseResponseJson } from '../../src/js/helpers/random-user-api.js';

describe('parseResponseJson', () => {
  const expectedResult = {
    id: 1,
    fullname: 'Robert Steeves',
    location: 'Burbank, Oklahoma',
    picture: 'https://randomuser.me/api/portraits/thumb/men/27.jpg'
  };
  const randomUserApiResponse = JSON.parse(`{
      "results": [
          {
              "user": {
                  "gender": "male",
                  "name": {
                      "title": "mr",
                      "first": "robert",
                      "last": "steeves"
                  },
                  "location": {
                      "street": "8623 country club rd",
                      "city": "burbank",
                      "state": "oklahoma",
                      "zip": 86617
                  },
                  "email": "robert.steeves@example.com",
                  "username": "brownfrog713",
                  "password": "popper",
                  "salt": "9PqFFrKz",
                  "md5": "509594b5f699574bc2cdc2bde656d3a5",
                  "sha1": "7e0751125f030e1869e310271df3af9d3d8c58a5",
                  "sha256": "e3d49118fdfdec743a4b098f8ad7a39fa7866010a209ce8c87769822408b692c",
                  "registered": 1232328196,
                  "dob": 1297879611,
                  "phone": "(359)-770-3113",
                  "cell": "(447)-075-2676",
                  "SSN": "524-09-4013",
                  "picture": {
                      "large": "https://randomuser.me/api/portraits/men/27.jpg",
                      "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
                      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
                  }
              }
          }
      ],
      "nationality": "US",
      "seed": "08c06bd50723118f07",
      "version": "0.7"
  }`);

  let parsedUser = null;

  beforeEach(() => {
    parsedUser = parseResponseJson(randomUserApiResponse)[0];
  });

  it('should transform randomuser API response to our User format', () => {
    expect(parsedUser.fullname).toEqual(expectedResult.fullname);
    expect(parsedUser.location).toEqual(expectedResult.location);
    expect(parsedUser.picture).toEqual(expectedResult.picture);
  });
});
