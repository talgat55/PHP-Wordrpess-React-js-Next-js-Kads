import React from 'react';

import axios from 'axios';
import ListItem from './Listitem';

class Nav extends React.Component {
    state = {
        menu: []
    };

    componentDidMount() {
        let currentComponent = this;
        axios.get('http://localhost:6080/wp-json/menus/v1/menus/top_menu')
            .then(function (response) {
                // handle success
                // console.log(response.data.items);
                currentComponent.setState({menu: response.data.items})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
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
