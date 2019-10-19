import React from 'react';
import Slider from "react-slick";
import axios from "axios";
import './style.sass';
import SliderItem from "./SliderItem";

class HomeSlider extends React.Component {
    state = {
        items: [],
        activeSlide: 0,
    };

    componentDidMount() {
        let currentComponent = this;

        axios.get('http://localhost:6080/wp-json/wp/v2/slider')
            .then(function (response) {
                console.log(response.data);
                currentComponent.setState({items: response.data})
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
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
        };

        const {items, activeSlide} = this.state;
        return (
            <section className="home-slider">
                <Slider {...settings}>
                    {items.map(item => (
                        <SliderItem
                            key={item.id}
                            title={item.title.rendered}
                            text={item.content.rendered}
                            urlVideo={item.acf.link_video}
                            image={item.acf.image}
                            items={items}
                            current={activeSlide}
                        />
                    ))}
                </Slider>
            </section>
        );
    }
}

export default HomeSlider;