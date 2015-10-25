import { capitalizeWords } from './strings.js';

function parseUser(userJson) {
  return {
    id: userJson.registered,
    fullname: capitalizeWords(`${userJson.name.first} ${userJson.name.last}`),
    location: capitalizeWords(`${userJson.location.city}, ${userJson.location.state}`),
    picture: userJson.picture.thumbnail
  };
}

export function parseResponseJson(json) {
  let input = json.results || [],
      output = [];
  for (let r of input) {
    output.push(parseUser(r.user));
  }
  return output;
}
