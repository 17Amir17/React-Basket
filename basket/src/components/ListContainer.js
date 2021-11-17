import { Component } from 'react';
import ListTitle from './ListTitle';

export default class ListContainer extends Component {
  render() {
    return (
      <>
        <ListTitle title={this.props.title} />
        <List items={this.props.items} />
      </>
    );
  }
}

ListContainer.defailtProps = {
  title: 'Groceries',
  items: {},
};
