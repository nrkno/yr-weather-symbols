import { render } from 'react-dom';
import { Grid } from './grid';
import * as React from 'react';
import * as icons from '../graphicsDefs';

require('./styles.css');

const ICONS: string[] = Object.keys(icons);

render(<Grid ids={ICONS} />, document.getElementById('viewport'));
