import React from 'react';
import { Providers } from '../../providers';
import { List } from '../../utils/List';
import { NavLink } from 'react-router-dom';

import cls from "./index.module.scss";

const Sidebar: React.FunctionComponent<any> = () => {
  const { changeState } = Providers.useAuth();

  const adminSidebarLeftList = [
    {
      id:1,
      title: "Web",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Emblem-web.svg/1200px-Emblem-web.svg.png",
      event: () => {
        changeState("web")
      }
    }
  ]
  return (
    <React.Fragment>
      <section className={cls.sidebar}>
        <section className={cls.sidebar_left}>
          {
            adminSidebarLeftList.map(item => {
              return (
                <div 
                  className={cls.sidebar_left_list} 
                  key={item.id}
                  onClick={item.event}
                >
                  <img

                    src={item.img} 
                    alt="" 
                  />
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </section>
        <section className={cls.sidebar_right_list}>
          <h1>Administration</h1>

          <ul>
            {
              List.adminList.map(item => {
                return (
                  <li key={item.id}>
                    <NavLink className={({isActive}) => isActive ? cls.active : null} to={item.route}>
                      <item.icons />
                      {item.title}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Sidebar;
