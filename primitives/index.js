'use strict';

var celestial = require('./celestial');
var cloud = require('./cloud');
var fog = require('./fog');
var lightning = require('./lightning');
var precipitation = require('./precipitation');

module.exports = {
  cloud: cloud,
  fog: fog,
  lightning: lightning,
  moon: celestial,
  raindrop: precipitation,
  snowflake: precipitation,
  sun: celestial
};