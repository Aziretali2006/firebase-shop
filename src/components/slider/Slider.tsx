import React from 'react';
import { Components } from '..';
import { List } from '../../utils/List';
import SliderButton from './sliderButton/SliderButton';

import cls from "./index.module.scss";

const Slider: React.FunctionComponent = () => {
  const [currentSlider , setCurrentSlider] = React.useState(0)

  const nextSlide = () => {
    if(currentSlider !== List.SliderLists.length - 1) {
      setCurrentSlider(prev => prev + 1)
    } else {
      setCurrentSlider(0)
    }
  }

  const prevSlide = () => {
    if(currentSlider > 0) {
      setCurrentSlider(prev => prev - 1)
    } else {
      setCurrentSlider(List.SliderLists.length - 1)
    }
  }

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.slider_wrapper}>
          {List.SliderLists.map(( el ,i) => 
            <img 
              src={el.img} 
              key={el.id} 
              alt=""
              className={currentSlider + i - 1 ? cls.activeSlide : null}
            />
          )}
          <SliderButton direct='prev' handleClick={prevSlide}/>
          <SliderButton direct="next" handleClick={nextSlide}/>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Slider;
