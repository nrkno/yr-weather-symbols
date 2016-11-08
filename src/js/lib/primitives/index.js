'use strict';

const celestial = require('./celestial');
const cloud = require('./cloud');
const fog = require('./fog');
const lightning = require('./lightning');
const precipitation = require('./precipitation');

module.exports = {
  cloud,
  fog,
  lightning,
  moon: celestial,
  raindrop: precipitation,
  snowflake: precipitation,
  sun: celestial
};