
import React from 'react';

interface iSubmit {
  location: string
}

const AuthSubmit: React.FunctionComponent<iSubmit> = ({location}) => {
  return (
    <button type='submit'>{location}</button>
  );
};

export default AuthSubmit;