
import React from 'react';
import "./index.css";

interface ILoader {
  fullHeight: string
}

const Loader: React.FunctionComponent<ILoader> = ({fullHeight}) => {
  return (
    <div className='center_loading' style={{height: fullHeight}}>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;