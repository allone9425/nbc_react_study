import React from "react";

function Child() {
  return <div>나는 자녀입니다.</div>;
}

function Mom() {
  return <Child />;
}

function GrandMom() {
  return <Mom />;
}
function App() {
  return <GrandMom />;
  // return (
  //   <div>
  //     <Child />
  //     <Child />
  //     <Child />
  //     <Child />
  //   </div>
  // );
  // // <---- 자바스크립트 영역 ---->
  // function onClickButtonHandler() {
  //   alert("클릭");
  // }
  // return (
  //   /* <---- HTML/JSX 영역  ---->*/
  //   <div
  //     style={{
  //       height: "100vh",
  //       display: " flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
  //     <p>이것은 내가 만든 APP 컴포넌트입니다.</p>
  //     <button onClick={onClickButtonHandler}>클릭!</button>
  //   </div>
  // );
}

export default App;
