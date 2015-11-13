'use strict';

const celestial = require('./celestial')
  , cloud = require('./cloud')
  , fog = require('./fog')
  , lightning = require('./lightning')
  , precipitation = require('./precipitation');

module.exports = {
  cloud,
  fog,
  lightning,
  moon: celestial,
  raindrop: precipitation,
  snowflake: precipitation,
  sun: celestial
};