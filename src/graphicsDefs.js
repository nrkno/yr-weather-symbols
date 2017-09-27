'use strict';

const BASE = {
  sun1: {
    primitive: 'sun',
    x: 9,
    y: 9
  },
  sun2: {
    primitive: 'sun',
    x: 4,
    y: 9
  },
  sun3: {
    primitive: 'sun',
    x: 0,
    y: 2,
    scaleX: 0.7,
    scaleY: 0.7
  },
  sunWinter1: {
    primitive: 'sun',
    x: 5,
    y: 37,
    winter: true
  },
  sunWinter2: {
    primitive: 'sun',
    x: 0,
    y: 37,
    winter: true
  },
  sunWinter3: {
    primitive: 'sun',
    x: 0,
    y: 19,
    scaleX: 0.7,
    scaleY: 0.7,
    winter: true
  },
  moon1: {
    primitive: 'moon',
    x: 20,
    y: 20
  },
  moon2: {
    primitive: 'moon',
    x: 15,
    y: 20
  },
  moon3: {
    primitive: 'moon',
    x: 2,
    y: 5,
    scaleX: 0.714285714,
    scaleY: 0.714285714
  },
  cloud1: {
    primitive: 'cloud',
    x: 43,
    y: 37,
    scaleX: 0.63,
    scaleY: 0.63,
    variation: 1
  },
  cloud2: {
    primitive: 'cloud',
    x: 3,
    y: 18,
    variation: 1
  },
  cloud3: {
    primitive: 'cloud',
    x: 3,
    y: 18,
    variation: 2
  },
  cloud4: {
    primitive: 'cloud',
    x: 3,
    y: 18,
    variation: 3
  },
  cloud5: {
    primitive: 'cloud',
    x: 3,
    y: 18,
    variation: 3
  },
  rain1: [
    {
      primitive: 'raindrop',
      x: 32,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 56,
      y: 78
    }
  ],
  rain2: [
    {
      primitive: 'raindrop',
      x: 32,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 45,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 78
    }
  ],
  rain3: [
    {
      primitive: 'raindrop',
      x: 18,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 32,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 47,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 74,
      y: 87
    }
  ],
  rainLightning1: [
    {
      primitive: 'raindrop',
      x: 28,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 58,
      y: 78
    }
  ],
  rainLightning2: [
    {
      primitive: 'raindrop',
      x: 29,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 50,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 65,
      y: 78
    }
  ],
  rainLightning3: [
    {
      primitive: 'raindrop',
      x: 18,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 29,
      y: 87
    },
    {
      primitive: 'raindrop',
      x: 55,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 68,
      y: 78
    },
    {
      primitive: 'raindrop',
      x: 82,
      y: 87
    }
  ],
  sleet1: [
    {
      primitive: 'snowflake',
      x: 29,
      y: 88
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 79
    }
  ],
  sleet2: [
    {
      primitive: 'snowflake',
      x: 30,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 46,
      y: 86
    },
    {
      primitive: 'raindrop',
      x: 60,
      y: 80
    }
  ],
  sleet3: [
    {
      primitive: 'snowflake',
      x: 15,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 32,
      y: 86
    },
    {
      primitive: 'raindrop',
      x: 47,
      y: 80
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 88
    },
    {
      primitive: 'raindrop',
      x: 74,
      y: 80
    }
  ],
  sleetLightning1: [
    {
      primitive: 'snowflake',
      x: 26,
      y: 88
    },
    {
      primitive: 'raindrop',
      x: 58,
      y: 79
    }
  ],
  sleetLightning2: [
    {
      primitive: 'snowflake',
      x: 27,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 50,
      y: 86
    },
    {
      primitive: 'raindrop',
      x: 64,
      y: 80
    }
  ],
  sleetLightning3: [
    {
      primitive: 'snowflake',
      x: 15,
      y: 79
    },
    {
      primitive: 'raindrop',
      x: 30,
      y: 86
    },
    {
      primitive: 'raindrop',
      x: 55,
      y: 80
    },
    {
      primitive: 'snowflake',
      x: 66,
      y: 88
    },
    {
      primitive: 'raindrop',
      x: 82,
      y: 80
    }
  ],
  snow1: [
    {
      primitive: 'snowflake',
      x: 29,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 79
    }
  ],
  snow2: [
    {
      primitive: 'snowflake',
      x: 30,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 44,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 79
    }
  ],
  snow3: [
    {
      primitive: 'snowflake',
      x: 15,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 29,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 44,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 72,
      y: 79
    }
  ],
  snowLightning1: [
    {
      primitive: 'snowflake',
      x: 26,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 58,
      y: 79
    }
  ],
  snowLightning2: [
    {
      primitive: 'snowflake',
      x: 26,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 52,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 66,
      y: 79
    }
  ],
  snowLightning3: [
    {
      primitive: 'snowflake',
      x: 13,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 27,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 55,
      y: 79
    },
    {
      primitive: 'snowflake',
      x: 69,
      y: 88
    },
    {
      primitive: 'snowflake',
      x: 83,
      y: 79
    }
  ],
  lightning: {
    primitive: 'lightning',
    x: 42,
    y: 51
  }
};

module.exports = {
  '01d': [BASE.sun1],
  '02d': masked(BASE.sun2, BASE.cloud1, 4),
  '03d': masked(BASE.sun3, BASE.cloud2, 5),
  '40d': masked(BASE.sun3, BASE.cloud3, 5).concat(BASE.rain1)
  /*   '05d': base.sun3.concat(base['05']),
  '41d': base.sun3.concat(base['41']),
  '42d': base.sun3.concat(base['42']),
  '07d': base.sun3.concat(base['07']),
  '43d': base.sun3.concat(base['43']),
  '44d': base.sun3.concat(base['44']),
  '08d': base.sun3.concat(base['08']),
  '45d': base.sun3.concat(base['45']),
  '24d': base.sun3.concat(base['24']),
  '06d': base.sun3.concat(base['06']),
  '25d': base.sun3.concat(base['25']),
  '26d': base.sun3.concat(base['26']),
  '20d': base.sun3.concat(base['20']),
  '27d': base.sun3.concat(base['27']),
  '28d': base.sun3.concat(base['28']),
  '21d': base.sun3.concat(base['21']),
  '29d': base.sun3.concat(base['29']),

  '01m': base.sunWinter1,
  '02m': base.sunWinter2.concat(base['02']),
  '03m': base.sunWinter3.concat(base['03']),
  '40m': base.sunWinter3.concat(base['40']),
  '05m': base.sunWinter3.concat(base['05']),
  '41m': base.sunWinter3.concat(base['41']),
  '42m': base.sunWinter3.concat(base['42']),
  '07m': base.sunWinter3.concat(base['07']),
  '43m': base.sunWinter3.concat(base['43']),
  '44m': base.sunWinter3.concat(base['44']),
  '08m': base.sunWinter3.concat(base['08']),
  '45m': base.sunWinter3.concat(base['45']),
  '24m': base.sunWinter3.concat(base['24']),
  '06m': base.sunWinter3.concat(base['06']),
  '25m': base.sunWinter3.concat(base['25']),
  '26m': base.sunWinter3.concat(base['26']),
  '20m': base.sunWinter3.concat(base['20']),
  '27m': base.sunWinter3.concat(base['27']),
  '28m': base.sunWinter3.concat(base['28']),
  '21m': base.sunWinter3.concat(base['21']),
  '29m': base.sunWinter3.concat(base['29']),

  '01n': base.moon1,
  '02n': base.moon2.concat(base['02']),
  '03n': base.moon3.concat(base['03']),
  '40n': base.moon3.concat(base['40']),
  '05n': base.moon3.concat(base['05']),
  '41n': base.moon3.concat(base['41']),
  '42n': base.moon3.concat(base['42']),
  '07n': base.moon3.concat(base['07']),
  '43n': base.moon3.concat(base['43']),
  '44n': base.moon3.concat(base['44']),
  '08n': base.moon3.concat(base['08']),
  '45n': base.moon3.concat(base['45']),
  '24n': base.moon3.concat(base['24']),
  '06n': base.moon3.concat(base['06']),
  '25n': base.moon3.concat(base['25']),
  '26n': base.moon3.concat(base['26']),
  '20n': base.moon3.concat(base['20']),
  '27n': base.moon3.concat(base['27']),
  '28n': base.moon3.concat(base['28']),
  '21n': base.moon3.concat(base['21']),
  '29n': base.moon3.concat(base['29']),

  15: [
    {
      primitive: 'cloud',
      x: 3,
      y: 18,
      variation: 1
    },
    {
      primitive: 'fog',
      x: 0,
      y: 76
    }
  ],
  '04': [
    {
      primitive: 'cloud',
      x: 3,
      y: 18,
      variation: 1
    }
  ],
  46: base['40'],
  '09': base['05'],
  10: base['41'],
  47: base['42'],
  12: base['07'],
  48: base['43'],
  49: base['44'],
  13: base['08'],
  50: base['45'],
  30: base['24'],
  22: base['06'],
  11: base['25'],
  31: base['26'],
  23: base['20'],
  32: base['27'],
  33: base['28'],
  14: base['21'],
  34: base['29']
 */
};

function masked(back, front, offset) {
  return [Object.assign({ mask: Object.assign({ offset }, front) }, back), front];
}
