'use strict';

var celestial = require('./celestial'),
    cloud = require('./cloud'),
    fog = require('./fog'),
    lightning = require('./lightning'),
    precipitation = require('./precipitation');

module.exports = {
  cloud: cloud,
  fog: fog,
  lightning: lightning,
  moon: celestial,
  raindrop: precipitation,
  snowflake: precipitation,
  sun: celestial
};