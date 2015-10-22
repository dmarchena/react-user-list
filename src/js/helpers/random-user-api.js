import { capitalizeWords } from './strings.js';

function parseUser(userJson) {
  return {
    id: userJson.registered,
    fullname: capitalizeWords(`${userJson.name.first} ${userJson.name.last}`),
    city: capitalizeWords(userJson.location.city),
    picture: userJson.picture.thumbnail
  }
}

export function parseResponseJson(json) {
  let results = [];
  for (let r of json.results) {
    results.push(parseUser(r.user));
  }
  return results;
}
