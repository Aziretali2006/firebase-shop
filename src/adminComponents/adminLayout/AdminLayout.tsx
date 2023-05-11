import React from 'react';
import { AdminComponents } from '..';
import { Route, Routes as Switch } from 'react-router-dom';
import { Components } from '../../components';
import { PATH } from '../../service/Path';
import { Routers } from '../../pages';

const AdminLayout: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <section className='admin_layout'>
        <aside>
          <AdminComponents.Sidebar />
        </aside>
      </section>
      <main>
        <React.Suspense fallback={<Components.Loader fullHeight='50vh'/>}>
          <Switch>
            <Route path={PATH.AdminPath.profile} element={<h1>Profile</h1>}/>
            <Route path={PATH.AdminPath.products} element={<h1>Products</h1>}/>
            <Route path={PATH.AdminPath.contacts} element={<h1>Contacts</h1>}/>
            <Route path={PATH.AdminPath.categories} element={<h1>Categories</h1>}/>
          </Switch>
        </React.Suspense>
      </main>
    </React.Fragment>
  )
}

export default AdminLayout;
