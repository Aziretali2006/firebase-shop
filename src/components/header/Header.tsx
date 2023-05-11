
import React from 'react';
import { Link } from 'react-router-dom';
import { Components } from '..';
import { Providers } from '../../providers';
import { List } from '../../utils/List';

import cls from "./index.module.scss";

const Header: React.FunctionComponent = () => {
  const { user , token } = Providers.useAuth();

  const handleSearch = (e : any) => {
    if(e.key === "Enter") {
      
    }
  }

  return (
    <React.Fragment>
      <Components.Container>
        <header>
          <section className={cls.header_top}>
            <Components.Logo />

            <div>
              <Components.Check />
            </div>
          </section>
          <section className={cls.header_bottom}>
            <ul>
              {List.headerBottomElements.map(item => (
                <li key={item.id}>
                  <Link to={item.route || ""}>
                    {item.caption}
                  </Link>
                </li>
              ))}
            </ul>

            <form onKeyDown={handleSearch}>
              <input 
                type={"text"}
                placeholder="Search..."
              />
            </form>
          </section>
        </header>
      </Components.Container>
    </React.Fragment>
  )
}

export default Header;