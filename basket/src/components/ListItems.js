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
        <Item name={item} key={item} count={this.props.items[item]} />
      );
    }
    return items;
  };

  increment = (key) => {
    const items = this.state.items[key];
    items[key] += 1;
    this.setState({ items });
  };
}
