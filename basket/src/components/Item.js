import { Component } from 'react';

export default class Item extends Component {
  render() {
    return <li name={this.props.name}>{this.props.name}</li>;
  }
}
