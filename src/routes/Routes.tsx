import React from 'react';
import { Route , Routes as Switch } from "react-router-dom";
import Header from '../components/header/Header';
import { Routers } from '../pages';
import { PATH } from '../service/Path';

const Routes: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <React.Suspense fallback={<>Loading...</>}>
        <Switch>
          <Route path={PATH.mainPath.layout} element={<Routers.LayoutRoutes />}/>
          <Route path={PATH.mainPath.auth} element={<Routers.AuthRoutes />}/>
        </Switch>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;