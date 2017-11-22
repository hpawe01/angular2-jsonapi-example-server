var jsonApi = require('jsonapi-server');
var faker = require('faker');
var helpers = require('../helpers.js');

var {
  random,
  hacker,
} = faker;

jsonApi.define(
  helpers.resource(
    'comments',
    {
      title: jsonApi.Joi.string(),
      // Relationships
      post: jsonApi.Joi.one('posts'),
      user: jsonApi.Joi.one('users'),
    },
    getExamples()
  )
)


function getExamples() {
  return [1,2,3,4,5,6].map(index => (
    {
      title: hacker.phrase(),
      post: {
        type: 'posts',
        id: random.number({min: 1, max: 6}).toString(),
      },
      user: {
        type: 'users',
        id: random.number({min: 1, max: 6}).toString(),
      },
    }
  ));
}
