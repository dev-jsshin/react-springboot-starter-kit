import React from 'react';
import styled from "styled-components";

import Header from './header/header';
import Footer from './footer/footer';
import SidebarLayout from "../components/Sidebar/Sidebar";

const Center = styled.div`
  height: 94vh;
  display: flex;
`

function Layout({ children }) {
    return (
      <>
        <Header />
        <Center>
          <SidebarLayout />
          <main>{children}</main>
        </Center>
        <Footer />
      </>
    );
  }
  
export default Layout;