const jsonApi = require('jsonapi-server');
const faker = require('faker');
const extend = require('extend');
var exports = module.exports = {};

const {
  date,
} = faker;

const defaultResourceObject = {
  handlers: new jsonApi.MemoryHandler(),
}

// Regex from https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime
exports.timestamp = function() {
  return jsonApi.Joi.string().regex(/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/);
}

exports.resource = function(resource, attributes, examples) {
  extend(attributes, {
    createdAt: exports.timestamp(),
    updatedAt: exports.timestamp(),
  });
  let i = 1;
  examples = examples || [],
  examples.forEach(function(example) {
    example.id = i.toString();
    i++;
    example.type = resource;
    example.createdAt = date.past();
    example.updatedAt = date.past();
  });

  return extend({}, defaultResourceObject, {
    resource: resource,
    attributes: attributes,
    examples: examples,
  });
}
