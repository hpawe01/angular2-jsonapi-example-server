var jsonApi = require('jsonapi-server');
var faker = require('faker');
var helpers = require('../helpers.js');

var {
  name,
} = faker;

jsonApi.define(
  helpers.resource(
    'users',
    {
      name: jsonApi.Joi.string(),
      // Relationships
      posts: jsonApi.Joi.belongsToMany({
        resource: 'posts',
        as: 'author'
      }),
      comments: jsonApi.Joi.belongsToMany({
        resource: 'comments',
        as: 'user',
      }),
    },
    getExamples()
  )
)


function getExamples() {
  return [1,2,3,4,5,6].map(index => (
    {
      name: name.findName(),
    }
  ));
}
