import React, { Component } from 'react';
import { WeatherSymbol } from '../index';

interface IGridProps {
  ids: string[];
}

export class Grid extends Component<IGridProps> {
  render() {
    return (
      <div>
        {this.props.ids.map(id => (
          <div className={'graphic'} id={`graphic-${id}`} key={id}>
            <h2> {id}</h2>
            <span className={'graphics-group'}>
              <WeatherSymbol id={`s${id}`} />
              <h3> svg</h3>
            </span>
            <span className={'graphics-group'}>
              <WeatherSymbol rootImagePath={'png/100'} id={id} type={'img'} />
              <h3> png</h3>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
