import React from 'react';
import ListItem from './Listitem';
import {getMenu} from "../api/menu/top-menu";


class Nav extends React.Component {
    state = {
        menu: []
    };
    componentDidMount() {
        let currentComponent = this;
        const lasts =   getMenu();

        lasts.then((resolve) =>{ 
            currentComponent.setState({menu: resolve.items});
        });
    }
    render() {
        return (
            <nav>
                <ul className="main-navigation d-flex w-100  justify-content-between">
                    {this.state.menu.map(item => (
                        <ListItem
                            key={item.ID}
                            title={item.title}
                            url={item.url}
                        />
                    ))}
                </ul>
            </nav>
        )
    }

}

export default Nav
