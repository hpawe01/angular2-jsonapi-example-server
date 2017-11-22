var jsonApi = require('jsonapi-server');
var faker = require('faker');
var helpers = require('../helpers.js');

var {
  company,
  lorem,
  random,
} = faker;

jsonApi.define(
  helpers.resource(
    'posts',
    {
      title: jsonApi.Joi.string(),
      content: jsonApi.Joi.string(),
      // Relationships
      author: jsonApi.Joi.one('users'),
      comments: jsonApi.Joi.belongsToMany({
        resource: 'comments',
        as: 'post',
      }),
    },
    getExamples()
  )
)


function getExamples() {
  return [1,2,3,4,5,6].map(index => (
    {
      title: company.catchPhrase(),
      content: lorem.paragraphs(),
      author: {
        type: 'users',
        id: random.number({min: 1, max: 6}).toString(),
      },
    }
  ));
}
