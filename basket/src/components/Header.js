import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className={'header'}>
        <h1>Basket</h1>
        <img style={{ width: '300px' }} src={this.props.src} alt={''}></img>
      </header>
    );
  }
}

Header.defaultProps = {
  src: 'https://png2.cleanpng.com/sh/100ddc1fc85614984bc64b0d0eb777b3/L0KzQYi4UcI5N2I8fZGAYUHnQoq6gcI2a5I6SZCEOUi2QYe6VsE2OWI9TqIAM0i0RYWBTwBvbz==/5a1d293a25ca51.9983163615118605381548.png',
};
