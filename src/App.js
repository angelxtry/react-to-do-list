import React, { Fragment } from "react";
import "./App.css";

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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

// sidebar에 목록 추가 버튼 or 링크 추가
// 목록 추가를 누르면 sidebar에 목록이 생성되고 포커스가 옮겨진다.
// 목록을 클릭혀면 이름을 변경할 수 있다.
// 오른쪽 창을 main이라고 하자.
// 목록을 클릭하면 main의 제목과 할일이 변경된다.
// 첫 라인을 클릭하면 할일을 입력할 수 있다.
// 입력 후 엔터를 치면 다름 라인으로 넘어간다.
// 여러 행이 있을 때 중간행을 지우면 위로 밀려 올라가는 이벤트
// 할일은 앞에 체크박스가 있다.
// 체크박스를 클릭하면 흐리게 변한다.

// components
// 1. sidebar
// 1.1 목록 추가 버튼
// 1.2 목록 리스트
// 2. main
// 2.1 main title
// 2.2 main list
// 2.3 to do create button
// 2.4 to do check box

// data
// [{
//   id key
//   order
//   title
//   todos [{
//     id key
//     order
//     title
//     complete
//   }]
// }]
// action
// add category
// delete category
// add todo
// delete todo
// toggle complete
