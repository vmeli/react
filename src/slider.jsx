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
                    <img src="https://picsum.photos/id/250/646/380" alt=""/>
                </div>
                <div key='2'>
                    <img src="https://picsum.photos/id/251/646/380" alt="" />
                </div>
                <div key='3'>
                    <img src="https://picsum.photos/id/252/646/380" alt="" />
                </div>
                <div key='4'>
                    <img src="https://picsum.photos/id/253/646/380" alt="" />
                </div>
                <div key='5'>
                    <img src="https://picsum.photos/id/254/646/380" alt="" />
                </div>
            </Slider>
        );
    }
}