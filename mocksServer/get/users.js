var g = require('dyson-generators');

module.exports = {
  path: '/users',
  collection: true,
  size: 10,
  template: {
      id: g.id,
      name: g.name,
      city: g.address.city
  }
};