import { Component } from 'react';
import Sorter from './Sorter';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { underline: [true, false, false] };
  }
  render() {
    console.log(this.state.underline);
    return (
      <footer className={'footer'}>
        <div>
          <Sorter
            title={'All'}
            onClick={this.onAll}
            underline={this.state.underline[0]}
          />
          <Sorter
            title={'Pending'}
            onClick={this.onPending}
            underline={this.state.underline[1]}
          />
          <Sorter
            title={'Purchased'}
            onClick={this.onPurchased}
            underline={this.state.underline[2]}
          />
        </div>
        <i>Made by Amir</i>
      </footer>
    );
  }

  onAll = () => {
    for (const item of document.querySelectorAll('.in-basket')) {
      item.hidden = false;
    }
    this.updateUnderline(0);
  };

  onPending = () => {
    for (const item of document.querySelectorAll('.in-basket')) {
      item.hidden = !item.classList.contains('markout');
    }
    this.updateUnderline(1);
  };

  onPurchased = () => {
    for (const item of document.querySelectorAll('.in-basket')) {
      item.hidden = item.classList.contains('markout');
    }
    this.updateUnderline(2);
  };

  updateUnderline = (index) => {
    const newUnderline = [false, false, false];
    newUnderline[index] = true;
    this.setState({ underline: newUnderline });
  };
}

Footer.defaultProps = {
  underline: 0,
};
