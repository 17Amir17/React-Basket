import { Component } from 'react';

export default class ListTitle extends Component {
  render() {
    return (
      <div className={'list-title-container'}>
        <h1>
          <>{this.props.title === 'Groceries' ? <>🍃</> : <>💰</>}</>
          {this.props.title}
        </h1>
      </div>
    );
  }
}
