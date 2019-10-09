import React from 'react';
import SimpleSliderLazyload from './sliderLazyload';
import SimpleSlider from './slider';

const GridSlider = () => (
    <>
        <div className="slider-wrapper">
            <SimpleSliderLazyload />
        </div>
        <div className="slider-wrapper">
            <SimpleSlider />
        </div>
    </>
)

export default GridSlider;