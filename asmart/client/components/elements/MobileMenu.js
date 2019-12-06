import React from 'react';
import {stack as Menu} from "react-burger-menu";
import {getMenu} from "../api/menu/top-menu";


export default class MobileMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menu: [],
            menuOpen: false
        }
    }

    componentDidMount() {
        let currentComponent = this;
        const lasts =   getMenu();
        lasts.then((resolve) =>{
            currentComponent.setState({menu: resolve.items});
            // console.log(resolve.items);
        });
    }
    closeMenu () {
        this.setState({menuOpen: false})
    }
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }
    render () {

        return (

            <Menu
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
                <a
                    key="-1"
                    id="-1"
                    className="menu-item"
                    href="/"
                    onClick={() => this.closeMenu()}
                >
                    Главная
                </a>
                {this.state.menu.map((item, index) => (
                        <a
                            key={index}
                            id={item.ID}
                            className="menu-item"
                            href={item.url}
                            onClick={() => this.closeMenu()}
                        >
                            {item.title}
                       </a>
                ))}
            </Menu>

        );
    }
}
