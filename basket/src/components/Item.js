import { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { showButton: false };
  }
  render() {
    return (
      <li
        onMouseEnter={this.enter}
        onMouseOut={this.out}
        className={this.props.classType}
        name={this.props.name}
      >
        {this.state.showButton ? this.props.button : ''} {this.props.count}{' '}
        {this.props.name}
      </li>
    );
  }

  enter = (e) => {
    this.setState({ showButton: true });
  };

  out = (e) => {
    this.setState({ showButton: false });
  };
}

Item.defaultProps = {
  button: <>❌</>,
};
