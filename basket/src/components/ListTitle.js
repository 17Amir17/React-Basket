import { Component } from 'react';

export default class ListTitle extends Component {
  render() {
    return (
      <>
        <>{this.props.title === 'Groceries' ? <>🍃</> : <>💰</>}</>
        <h1>this.props.title</h1>
      </>
    );
  }
}
