import { Component } from 'react';
import ListTitle from './ListTitle';
import ListItems from './ListItems';

export default class List extends Component {
  render() {
    return (
      <div className={'list'}>
        <ListTitle onClick={this.props.onTitleClick} title={this.props.title} />
        <ListItems
          type={this.props.title}
          onClick={this.props.onItemsClick}
          items={this.props.items}
        />
      </div>
    );
  }
}

List.defaultProps = {
  title: 'Groceries',
  items: {},
};
