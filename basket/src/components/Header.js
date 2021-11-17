import {Component} from 'react';

export default class Header extends Component{
    render(){
        return (
            <header>
                <h1>Basket</h1>
                <img src={this.props.src} alt={''}></img>
            </header>
        )
    }
}

Header.defaultProps = {
    src: 'https://merriam-webster.com/assets/ld/images/legacy_print_images/basket.gif'
}
