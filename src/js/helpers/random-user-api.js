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
  const input = json.results || [];
  const output = [];
  // ES7: return [for (let r of input) parseUser(r.user)];
  /*
  // ES6: Commented to avoid a Jasmine strange error
  for (let r of input) {
    output.push(parseUser(r.user));
  }
  */
  input.forEach((r) => {
    output.push(parseUser(r.user));
  });
  return output;
}
