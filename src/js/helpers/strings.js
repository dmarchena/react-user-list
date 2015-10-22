export function capitalizeWords(str) {
  return str.replace(/\w\S*/g, (token) => token.charAt(0).toUpperCase() + token.substr(1).toLowerCase());
};
