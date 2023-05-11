import React from 'react';
import { Components } from '../../../components';
import genericName from '../../../helpers/genericHeader';
import { Providers } from '../../../providers';
import { ICONS } from '../../../icons/Icons';

import cls from "./Index.module.scss";

const Profile: React.FunctionComponent = () => {
  const {user , token, signOut , changeState } = Providers.useAuth();

  if(!user) return <Components.Loader fullHeight={"50vh"}/>

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.profile_page}>
          <div className={cls.profile_page_wrapper}>
            <Components.Divider>
              {
                (user && token) && 
                  <Components.Avatar 
                    w={"200px"} 
                    h={"200px"} 
                    avatar={user?.avatar}
                />
              }
            </Components.Divider>

            <div className={cls.profile_page_wrapper_info}>
              <h1>{user?.displayName || genericName()}</h1>
              <p>{user?.email}</p>
            </div>
          </div>
          
          <button onClick={() => changeState("admin")} className={cls.admin}>
            <ICONS.MdAdminPanelSettings />
            Admin
          </button>
          <button onClick={signOut} className={cls.sign_out}>
            <ICONS.VscSignOut />
            Sign Out
          </button>
        </section>
      </Components.Container>
    </React.Fragment>
  )
}

export default Profile;
