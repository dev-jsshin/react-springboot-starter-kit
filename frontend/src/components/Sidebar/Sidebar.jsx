import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import SidebarItem from './SidebarItem'

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7%;
`

const Menu = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
`

function Sidebar() {
  
  const pathName = useLocation().pathname;

  const menus = [
    { name: "Home", path: "/" },
    { name: "Counter", path: "/counter" }
  ];
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{color: "gray", textDecoration: "none"}}
              to={menu.path}
              key={index}
              activeStyle={{color: "black"}}
            >
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;