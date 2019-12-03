import React from 'react';
import {stack as Menu} from "react-burger-menu";
import {getMenu} from "../api/menu/top-menu";


export default class MobileMenu extends React.Component {
    state = {
        menu: []
    };
    componentDidMount() {
        let currentComponent = this;
        const lasts =   getMenu();
        lasts.then((resolve) =>{
            currentComponent.setState({menu: resolve.items});
            // console.log(resolve.items);
        });
    }
    render () {

        return (

            <Menu>
                {this.state.menu.map((item, index) => (
                        <a key={index} id={item.ID} className="menu-item"  href={item.url}>{item.title}</a>
                ))}
            </Menu>

        );
    }
}
