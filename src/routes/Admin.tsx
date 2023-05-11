
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Components } from '../components';
import { AdminComponents } from '../adminComponents';

const Admin: React.FunctionComponent<any> = () => {
  const auth = true;

  return (
    <React.Fragment>
      {auth ? <AdminComponents.AdminLayout /> : <AdminComponents.AccessAdmin />}
    </React.Fragment>
  )
}

export default Admin;
