import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function SidebarLayout() {

  const pathName = useLocation().pathname;

  const menus = [
    { parent_name: "home", child : [{ child_name : "home", path : "/"}] },
    { parent_name: "counter", child : [{ child_name : "Counter", path : "/counter"}] }
  ];

  return (
    <Sidebar>
      <Menu menuItemStyles={{
              button: ({ level, active, disabled }) => {
                return {
                  color: active ? '#448FFF' : undefined ,
                  borderRight : active ? '2px solid #448FFF' : undefined ,
                  backgroundColor: active ? '#E5F6FF' : undefined ,
                  "&:hover": {
                     backgroundColor: "#E5F6FF"
                   },
                };
              },
      }}>
        {menus.map((parents) => (
          <SubMenu label={parents.parent_name}>
            {parents.child.map((child) => (
              <MenuItem active={pathName === child.path} component={<Link to={child.path} />}> {child.child_name} </MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default SidebarLayout;