import { Component } from 'react';
import Item from './Item';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items };
  }

  render() {
    return <ul onClick={this.props.onClick}>{this.createItems()}</ul>;
  }

  createItems = () => {
    const items = [];
    for (const item in this.props.items) {
      items.push(
        <Item
          name={item}
          key={item}
          count={this.props.type === 'Groceries' ? '' : this.props.items[item]}
          classType={
            this.props.type === 'Groceries' ? 'item' : 'item in-basket'
          }
          button={this.props.type === 'Groceries' ? <>✅</> : <>❌</>}
        />
      );
    }
    return items;
  };
}
