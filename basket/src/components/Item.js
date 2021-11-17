import { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
      <li className={'item'} name={this.props.name}>
        {this.props.count} {this.props.name}
      </li>
    );
  }
}
