import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Components } from '../../components';
import useRedirect from '../../hooks/useRedirect';
import { Providers } from '../../providers';
import { PATH } from '../../service/Path';
import { LayoutPages } from '../Lazy';

const LayoutRoutes: React.FunctionComponent = () => {
  const { token } = Providers.useAuth();
  const { actions } = useRedirect();

  React.useEffect(() => {
    if(token === undefined) {
      actions.goToLogin();
    }
  }, [token]);

  if(!token) return <Components.Loader fullHeight={"50vh"}/>;

  return (
    <React.Fragment>
      <Switch>
        <Route path={PATH.connectedAuthPath.layout} element={<LayoutPages.Screen />}/>
        <Route path={PATH.connectedAuthPath.profile} element={<LayoutPages.Profile />}/>
        <Route path={PATH.connectedAuthPath.products} element={<LayoutPages.Products />}/>
      </Switch>
    </React.Fragment>
  )
}

export default LayoutRoutes;
