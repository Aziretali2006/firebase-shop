
import React from 'react';
import { Link } from 'react-router-dom';
  import { PATH } from '../../service/Path';

const Logo: React.FunctionComponent<any> = () => 
  <h2><Link to={PATH.connectedAuthPath.layout}>FireBase Shop App</Link></h2>

export default Logo;