import { Component } from 'react';

export default class ListTitle extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={'list-title-container'}>
        <h1>
          <>{this.props.title === 'Groceries' ? <>🍃</> : <>💰</>}</>
          {this.props.title}
        </h1>
        <div className={'bin'}>
          {this.props.title === 'Groceries' ? <></> : <>🚮</>}
        </div>
      </div>
    );
  }
}
