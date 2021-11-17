import { Component } from 'react';

export default class ListContainer extends Component {
    render(){
        return (
            <Title title={this.props.title}/>
            <List items={this.props.items} />
        )
    }
}

ListContainer.defailtProps = {
    title: 'Groceries',
    items: {}
}
