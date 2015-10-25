var g = require('dyson-generators');

module.exports = {
  path: '/users',
  collection: true,
  size: 10,
  template: {
      id: g.id,
      fullname: g.name,
      location: g.address.city
  }
};