import { capitalizeWords } from './strings.js';

function parseUser(userJson) {
  return {
    id: userJson.email,
    fullname: capitalizeWords(`${userJson.name.first} ${userJson.name.last}`),
    location: capitalizeWords(`${userJson.location.city}, ${userJson.location.state}`),
    picture: userJson.picture.thumbnail
  };
}

export function parseResponseJson(json) {
  const input = json.results || [];
  return input.map(r => parseUser(r));
}
