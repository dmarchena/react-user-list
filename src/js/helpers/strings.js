const wordRegExpr = /\w\S*/g;

export function capitalizeWords(str) {
  return str.replace(wordRegExpr, (token) => token.charAt(0).toUpperCase() + token.substr(1).toLowerCase());
}
