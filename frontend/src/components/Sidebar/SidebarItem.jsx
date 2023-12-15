import React from "react";

import styles from './Sidebar.styles.pcss';

function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className={styles.active}>
      <p>{menu.name}</p>
    </div>
  ) : (
    <div>
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;