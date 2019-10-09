import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css'; 
import Slider from "react-slick";

export default class SimpleSliderLazyload extends Component {
    render() {
        var settings = {
            dots: true,
            lazyLoad: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div key='1'>
                    <LazyLoadImage
                        effect="blur"
                        className="wrapper-img"
                        wrapperClassName="sandor"
                        delayMethod="debounce"
                        placeholderSrc="https://libero.pe/assets/images/NewLibero/content/background/default-libero.jpg"
                        src="https://picsum.photos/id/250/646/380" />
                </div>
                <div key='2'>
                    <LazyLoadImage
                        effect="blur"
                        className="wrapper-img"
                        wrapperClassName="sandor"
                        src="https://picsum.photos/id/251/646/380" />
                </div>
                <div key='3'>
                    <LazyLoadImage
                        effect="blur"
                        className="wrapper-img"
                        delayMethod="debounce"
                        wrapperClassName="sandor"
                        src="https://picsum.photos/id/252/646/380" />
                </div>
                <div key='4'>
                    <LazyLoadImage
                        effect="blur"
                        className="wrapper-img"
                        delayMethod="debounce"
                        wrapperClassName="sandor"
                        src="https://picsum.photos/id/253/646/380" />
                </div>
                <div key='5'>
                    <LazyLoadImage
                        effect="blur"
                        className="wrapper-img"
                        delayMethod="debounce"
                        wrapperClassName="sandor"
                        src="https://picsum.photos/id/254/646/380" />
                </div>
            </Slider>
        );
    }
}