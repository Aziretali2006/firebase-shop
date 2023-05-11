
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Components } from '..';
import { Providers } from '../../providers';
import { List } from '../../utils/List';

import cls from "./Check.module.scss";

const Check = () => {
  const { user , token } = Providers.useAuth();

  return (
    <React.Fragment>
      <ul>
        {
          List.headerTopIcons.map(item => (
            <li key={item.id} className={item.id === 3 ? cls.stick : ""}>
              {
                (user && token) 
                    ?
                  <NavLink 
                    className={({isActive}) => isActive ? cls.activeLink : ""} 
                    to={item.route || ""}
                  >
                    {item.icon && <item.icon />}
                  </NavLink>
                  : 
                    !user
                      ? null
                      : <NavLink 
                          className={({isActive}) => isActive ? cls.activeLink : ""} 
                          to={item.route || ""}
                        >
                          {item.icon && <item.icon />}
                          {item.caption}
                        </NavLink>
              }
            </li>
          ))
        }
      </ul>
      {
        (user && token) ? <Components.Avatar w={"35px"} h={"35px"} avatar={user?.avatar}/> : null
      }
    </React.Fragment>
  )
}

export default Check
