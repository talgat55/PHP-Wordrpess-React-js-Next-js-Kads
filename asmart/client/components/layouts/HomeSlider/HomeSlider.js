import React from 'react';
import Slider from "react-slick";
import axios from "axios";
import './style.sass';
// import SliderItem from "./SliderItem";

class HomeSlider extends React.Component {
    state = {
        sliders: []
    };

    componentDidMount() {
        let currentComponent = this;

        //   acf api    http://localhost:6080/wp-json/acf/v3/slider
        axios.get('http://localhost:6080/wp-json/wp/v2/slider')
            .then(function (response) {
                // handle success
                // console.log(response.data );
                // console.log(response.data[0]._links['wp:featuredmedia'][0].href);
                // let newArray = response.data;
                // newArray.map(item =>  (
                //
                //     { ...item, test: 'false' })
                // );
                //
                // console.log(newArray);
                // console.log(item);

                currentComponent.setState({sliders: response.data})
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
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section className="home-slider">
                <Slider {...settings}>
                    {/*{this.state.sliders.map(item => (*/}
                        {/*<SliderItem*/}
                            {/*key={item.id}*/}
                            {/*title={item.title.rendered}*/}
                            {/*text={item.content.rendered}*/}
                            {/*urlVideo={item.acf.link_video}*/}
                            {/*image={item._links.wp:featuredmedia[0]}*/}
                        {/*/>*/}
                    {/*))}*/}
                </Slider>
            </section>
        );
    }
}

export default HomeSlider;