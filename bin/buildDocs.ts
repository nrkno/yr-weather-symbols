import { weatherSymbolKeys, TWeatherSymbolKey, TWeatherSymbolId, convertSymbolKeyToId } from '../src/index';
import * as en from "../locales/en.json";
import * as nb from "../locales/nb.json";
import * as nn from "../locales/nn.json";
import { promises as fs} from 'fs';

type TWeatherSymbolPeriod = 'day' | 'night' | 'polartwilight';

interface IWeatherSymbolPeriod {
  key: TWeatherSymbolKey;
  id: TWeatherSymbolId;
}

interface IWeatherSymbolGroup {
  day?: IWeatherSymbolPeriod;
  night?: IWeatherSymbolPeriod;
  polartwilight?: IWeatherSymbolPeriod;
}

const groupedWeatherSymbols: { [key: string]: IWeatherSymbolGroup} = {};

for (const symbolKey of Object.keys(weatherSymbolKeys)) {
  const symbolId = convertSymbolKeyToId(symbolKey as TWeatherSymbolKey);
  if (symbolId == null) {
    throw new Error(`Could not convert weather symbol key "${symbolKey}" to id`);
  }

  // Split symbol keys like "clearsky_day" into "clearsky" and "day"
  let [name, type] = symbolKey.split('_');

  // Default to day if the weather symbol key has no type (e.g. "cloudy")
  if (type == null) {
    type = 'day';
  }

  if (groupedWeatherSymbols[name] == null) {
    groupedWeatherSymbols[name] = {};
  }

  groupedWeatherSymbols[name][type as TWeatherSymbolPeriod] = {
    key: symbolKey as TWeatherSymbolKey,
    id: symbolId
  };
}

// TODO(scb): Loop through weatherSymbolKeys and group by first part of key (before _)


function createTable(path: string) {
  const rows = [];
  for (const [name, group] of Object.entries(groupedWeatherSymbols)) {
    const row = createRow({ group, path });
    rows.push(row);
  }

  return `<table class="symbol-table">
  <thead>
    <tr>
      <th>Day</th>
      <th>Night</th>
      <th>Midnight sun</th>
      <th class="symbol-table__description-heading">Description</th>
    </tr>
  </thead>

  <tbody>
    ${rows.join('')}
  </tbody>
  </table>`;
}

function createRow({ group, path}: { group: IWeatherSymbolGroup, path: string }) {
  if (group.day == null) {
    throw new Error(`Unable to create symbol row because group is missing "day" period`);
  }

  const numericId = group.day.id.replace(/\D/g,'');

  return `<tr>
    ${createSymbolCell({period: group.day, path})}
    ${createSymbolCell({period: group.night, path})}
    ${createSymbolCell({period: group.polartwilight, path})}

    <td>
      <p class="symbol-table__description" lang="en">${en[numericId]}</p>
      <p class="symbol-table__description" lang="nb-no">${nb[numericId]}</p>
      <p class="symbol-table__description" lang="nn-no">${nn[numericId]}</p>
    </td>
  </tr>`;
}

function createSymbolCell({ period, path }: {period?: IWeatherSymbolPeriod; path: string}) {
  if (period == null) {
    return '<td class="symbol-table__symbol"></td>';
  }

  return `<td class="symbol-table__symbol">
    <img src="${path}/${period.id}.svg" width="50" height="50" />

    <dl class="symbol-table__definition-list">
      <dt>Old id</dt>
      <dd>${period.id}</dd>

      <dt>New id</dt>
      <dd>${period.key}</dd>
    </dl>
  </td>`
}

async function createHtml() {
  const lightModeDefaultTable = createTable("symbols/light-mode/default");
  const lightModeShadowsTable = createTable("symbols/light-mode/shadows");
  const table = `<!doctype html>
<html>
  <head>
    <title>@nrk/yr-weather-symbols</title>
    <script src="https://static.nrk.no/core-components/major/7/core-tabs/core-tabs.min.js"></script>
    <style>
      body {
        margin: 0;
        font-family: system-ui, sans-serif;
      }

      .main {
        max-width: 100ch;
        margin: 0 auto;
      }

      .symbol-table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
      }
      
      .symbol-table__description-heading {
        text-align: left;
        padding-left: 1rem;
      }
      
      .symbol-table th,
      .symbol-table td {
        border: 1px solid #ccc;
      }

      .symbol-table td {
        vertical-align: middle;
        padding: 1rem;
      }

      .symbol-table tbody tr:nth-child(even) {
        background-color: #efefef;
      }
      
      .symbol-table__symbol {
        text-align: center;
      }

      .symbol-table__definition-list {
        margin: 1rem 0 0 0;
      }
      
      .symbol-table__definition-list dt {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        clip: rect(0, 0, 0, 0);
      }
      
      .symbol-table__definition-list dd {
        margin: 0;
      }
      
      .symbol-table__description {
        margin: 0;
      }
      
      .symbol-table__description + .symbol-table__description {
        margin-top: 0.8rem;
      }
    </style>
  </head>
  
  <body>
    <main class="main">
      <core-tabs>
        <button>Default</button>                  
        <button>Shadows</button>
      </core-tabs>

      <div>
        ${lightModeDefaultTable}
      </div>

      <div>
        ${lightModeShadowsTable}
      </div>
    </main>
  </body>
</html>`;

  await fs.writeFile('docs/index.html', table, 'utf-8');
}

createHtml();
