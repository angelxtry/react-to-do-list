import React from "react";
import { connect } from "react-redux";

import Main from "../components/Main";

const MainContainer = props => {
  // console.log("MainContainer: ", props);
  return <Main mainContainer={props} />;
};

const mapStateToProps = state => ({
  searchText: state.todoList.searchText
});

export default connect(mapStateToProps)(MainContainer);
