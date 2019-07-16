import React, { Component } from "react";
import Slider from "react-slick";
export default class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div key='1'>
                        <figure>
                            <img src="https://picsum.photos/id/250/646/380" alt=""/>
                        </figure>
                </div>
                <div key='2'>
                        <figure>
                            <img src="https://picsum.photos/id/251/646/380" alt="" />
                        </figure>
                </div>
                <div key='3'>
                        <figure>
                            <img src="https://picsum.photos/id/252/646/380" alt="" />
                        </figure>
                </div>
                <div key='4'>
                        <figure>
                            <img src="https://picsum.photos/id/253/646/380" alt="" />
                        </figure>
                </div>
                <div key='5'>
                        <figure>
                            <img src="https://picsum.photos/id/254/646/380" alt="" />
                        </figure>
                </div>
            </Slider>
        );
    }
}