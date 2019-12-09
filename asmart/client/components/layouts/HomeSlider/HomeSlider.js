import React from 'react';
import Slider from "react-slick";
import './style.sass';
import SliderItem from "./SliderItem";
import {getSlides} from "../../api/slider/slider";

class HomeSlider extends React.Component {
    state = {
        items: [],
        activeSlide: 0,
    };
    componentDidMount() {
        let currentComponent = this;
        const lasts =   getSlides();
        lasts.then((resolve) =>{
            currentComponent.setState({items: resolve});
        });
    }
    ChangeSlide = e =>{
        console.log(e);
       this.slider.slickGoTo(e);
    };
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
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {items.map(item => (
                        <SliderItem
                            key={item.id}
                            title={item.title.rendered}
                            text={item.content.rendered}
                            urlVideo={item.acf.link_video}
                            items={items}
                            current={activeSlide}
                            customOnChange={this.ChangeSlide}
                        />
                    ))}
                </Slider>
            </section>
        );
    }
}

export default HomeSlider;