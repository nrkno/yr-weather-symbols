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
    primitive: 'sunWinter',
    x: 5,
    y: 37,
    winter: true
  },
  sunWinter2: {
    primitive: 'sunWinter',
    x: 0,
    y: 37,
    winter: true
  },
  sunWinter3: {
    primitive: 'sunWinter',
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
    variation: 4
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
    x: 37,
    y: 51
  },
  fog: {
    primitive: 'fog',
    x: 0,
    y: 76
  }
};

module.exports = {
  '15': [BASE.cloud2, BASE.fog],
  '04': [BASE.cloud2],
  '46': [BASE.cloud3, BASE.rain1],
  '09': [BASE.cloud4, BASE.rain2],
  '10': [BASE.cloud5, BASE.rain3],
  '47': [BASE.cloud3, BASE.sleet1],
  '12': [BASE.cloud4, BASE.sleet2],
  '48': [BASE.cloud5, BASE.sleet3],
  '49': [BASE.cloud3, BASE.snow1],
  '13': [BASE.cloud4, BASE.snow2],
  '50': [BASE.cloud5, BASE.snow3],
  '30': [masked(BASE.cloud3, BASE.lightning, 4), BASE.lightning, BASE.rainLightning1],
  '22': [masked(BASE.cloud4, BASE.lightning, 4), BASE.lightning, BASE.rainLightning2],
  '11': [masked(BASE.cloud5, BASE.lightning, 4), BASE.lightning, BASE.rainLightning3],
  '31': [masked(BASE.cloud3, BASE.lightning, 4), BASE.lightning, BASE.sleetLightning1],
  '23': [masked(BASE.cloud4, BASE.lightning, 4), BASE.lightning, BASE.sleetLightning2],
  '32': [masked(BASE.cloud5, BASE.lightning, 4), BASE.lightning, BASE.sleetLightning3],
  '33': [masked(BASE.cloud3, BASE.lightning, 4), BASE.lightning, BASE.snowLightning1],
  '14': [masked(BASE.cloud4, BASE.lightning, 4), BASE.lightning, BASE.snowLightning2],
  '34': [masked(BASE.cloud5, BASE.lightning, 4), BASE.lightning, BASE.snowLightning3],

  '01d': [BASE.sun1],
  '02d': [masked(BASE.sun2, BASE.cloud1, 5), BASE.cloud1],
  '03d': [masked(BASE.sun3, BASE.cloud2, 5), '04'],
  '40d': [masked(BASE.sun3, BASE.cloud2, 5), '46'],
  '05d': [masked(BASE.sun3, BASE.cloud2, 5), '09'],
  '41d': [masked(BASE.sun3, BASE.cloud2, 5), '10'],
  '42d': [masked(BASE.sun3, BASE.cloud2, 5), '47'],
  '07d': [masked(BASE.sun3, BASE.cloud2, 5), '12'],
  '43d': [masked(BASE.sun3, BASE.cloud2, 5), '48'],
  '44d': [masked(BASE.sun3, BASE.cloud2, 5), '49'],
  '08d': [masked(BASE.sun3, BASE.cloud2, 5), '13'],
  '45d': [masked(BASE.sun3, BASE.cloud2, 5), '50'],
  '24d': [masked(BASE.sun3, BASE.cloud2, 5), '30'],
  '06d': [masked(BASE.sun3, BASE.cloud2, 5), '22'],
  '25d': [masked(BASE.sun3, BASE.cloud2, 5), '11'],
  '26d': [masked(BASE.sun3, BASE.cloud2, 5), '31'],
  '20d': [masked(BASE.sun3, BASE.cloud2, 5), '23'],
  '27d': [masked(BASE.sun3, BASE.cloud2, 5), '32'],
  '28d': [masked(BASE.sun3, BASE.cloud2, 5), '33'],
  '21d': [masked(BASE.sun3, BASE.cloud2, 5), '14'],
  '29d': [masked(BASE.sun3, BASE.cloud2, 5), '34'],

  '01n': [BASE.moon1],
  '02n': [masked(BASE.moon2, BASE.cloud1, 5), BASE.cloud1],
  '03n': [masked(BASE.moon3, BASE.cloud2, 5), '04'],
  '40n': [masked(BASE.moon3, BASE.cloud2, 5), '46'],
  '05n': [masked(BASE.moon3, BASE.cloud2, 5), '09'],
  '41n': [masked(BASE.moon3, BASE.cloud2, 5), '10'],
  '42n': [masked(BASE.moon3, BASE.cloud2, 5), '47'],
  '07n': [masked(BASE.moon3, BASE.cloud2, 5), '12'],
  '43n': [masked(BASE.moon3, BASE.cloud2, 5), '48'],
  '44n': [masked(BASE.moon3, BASE.cloud2, 5), '49'],
  '08n': [masked(BASE.moon3, BASE.cloud2, 5), '13'],
  '45n': [masked(BASE.moon3, BASE.cloud2, 5), '50'],
  '24n': [masked(BASE.moon3, BASE.cloud2, 5), '30'],
  '06n': [masked(BASE.moon3, BASE.cloud2, 5), '22'],
  '25n': [masked(BASE.moon3, BASE.cloud2, 5), '11'],
  '26n': [masked(BASE.moon3, BASE.cloud2, 5), '31'],
  '20n': [masked(BASE.moon3, BASE.cloud2, 5), '23'],
  '27n': [masked(BASE.moon3, BASE.cloud2, 5), '32'],
  '28n': [masked(BASE.moon3, BASE.cloud2, 5), '33'],
  '21n': [masked(BASE.moon3, BASE.cloud2, 5), '14'],
  '29n': [masked(BASE.moon3, BASE.cloud2, 5), '34'],

  '01m': [BASE.sunWinter1],
  '02m': [masked(BASE.sunWinter2, BASE.cloud1, 5), BASE.cloud1],
  '03m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '04'],
  '40m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '46'],
  '05m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '09'],
  '41m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '10'],
  '42m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '47'],
  '07m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '12'],
  '43m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '48'],
  '44m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '49'],
  '08m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '13'],
  '45m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '50'],
  '24m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '30'],
  '06m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '22'],
  '25m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '11'],
  '26m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '31'],
  '20m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '23'],
  '27m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '32'],
  '28m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '33'],
  '21m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '14'],
  '29m': [masked(BASE.sunWinter3, BASE.cloud2, 5), '34']
};

function masked(back, front, offset) {
  return Object.assign({ mask: Object.assign({ offset }, front) }, back);
}
