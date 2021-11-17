import { Component } from 'react';
import List from './List';

export default class Main extends Component {
  items = {
    Strawberry: 0,
    Blueberry: 0,
    Orange: 0,
    Banana: 0,
    Apple: 0,
    Carrot: 0,
    Celery: 0,
    Mushroom: 0,
    Green: 0,
    Pepper: 0,
    Eggs: 0,
    Cheese: 0,
    Butter: 0,
    Chicken: 0,
    Beef: 0,
    Pork: 0,
    Fish: 0,
    Rice: 0,
    Pasta: 0,
    Bread: 0,
  };
  basketItems = {};
  constructor(props) {
    super(props);
    this.state = { basketItems: this.basketItems };
  }
  render() {
    return (
      <main>
        <List items={this.items} tellBasket={this.tellBasket} />
        <List title={'Basket'} items={this.basketItems} />
      </main>
    );
  }

  tellBasket = (name) => {
    if (this.basketItems[name] || this.basketItems[name] === 0) {
      this.basketItems[name] += 1;
    } else this.basketItems[name] = 0;
    this.setState({ basketItems: this.basketItems });
  };
}
