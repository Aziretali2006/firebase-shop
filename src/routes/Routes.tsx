import React from 'react';
import Header from '../components/header/Header';
import { Route , Routes as Switch } from "react-router-dom";
import { Components } from '../components';
import { Routers } from '../pages';
import { PATH } from '../service/Path';

const Routes: React.FunctionComponent<any> = () => {
  return (
    <React.Fragment>
      <Header />
      <React.Suspense fallback={<Components.Loader fullHeight={"50vh"}/>}>
        <Switch>
          <Route path={PATH.mainPath.layout} element={<Routers.LayoutRoutes />}/>
          <Route path={PATH.mainPath.auth} element={<Routers.AuthRoutes />}/>
        </Switch>
      </React.Suspense>
    </React.Fragment>
  )
}

export default Routes;