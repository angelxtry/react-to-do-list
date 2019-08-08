import React, { Fragment } from "react";

import SidebarContainer from "./containers/SidebarContainer";
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <Fragment>
      <div className="sidenav">
        <SidebarContainer />
      </div>
      <div className="main">
        <MainContainer />
      </div>
    </Fragment>
  );
}

export default App;