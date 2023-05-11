import React from 'react';
import { ICONS } from '../../../icons/Icons';
import classNames from 'classnames';

import cls from "./index.module.scss";

interface ISliderBtn  {
  direct: string,
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const SliderButton: React.FunctionComponent<ISliderBtn> = ({direct , handleClick}) => {
  return (
    <React.Fragment>
      <button
        onClick={handleClick}
        className={
          direct === "prev"
            ? classNames(cls.sliderBtn , cls.prev_button)
            : classNames(cls.sliderBtn , cls.next_button)
        }>
        {
          direct === "prev"
            ? <ICONS.BiArrowToLeft />
            : <ICONS.BiArrowToRight />
        }
      </button>
    </React.Fragment>
  )
}

export default SliderButton;
