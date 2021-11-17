import { Component } from 'react';
import ListTitle from './ListTitle';
import ListItems from './ListItems';

export default class List extends Component {
  render() {
    return (
      <div className={'list'}>
        <ListTitle title={this.props.title} />
        <ListItems onClick={this.onClick} items={this.props.items} />
      </div>
    );
  }

  onClick = (e) => {
    if (e.target.tagName === 'LI') {
      const itemName = e.target.getAttribute('name');
      if (this.props.title === 'Groceries') this.props.tellBasket(itemName);
    }
  };
}

List.defaultProps = {
  title: 'Groceries',
  items: {},
};
