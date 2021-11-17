import { Component } from 'react';

export default class Sorter extends Component {
  render() {
    return (
      <span
        className={'sorter'}
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.underline ? 'underline' : 'none',
        }}
      >
        {this.props.title}
      </span>
    );
  }
}

Sorter.defaultProps = {
  underline: false,
};
