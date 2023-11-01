// import React, { useState } from "react";
// function App() {
//   // <---- 자바스크립트 영역 ---->
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");

//   console.log("id", id);
//   console.log("password", password);
//   const onIdChangeHandler = (event) => {
//     setId(event.target.value);
//   };
//   const onPwChangeHandler = (event) => {
//     setPassword(event.target.value);
//   };
//   return (
//     /* <---- HTML/JSX 영역  ---->*/
//     <div>
//       <p>
//         아이디 : <input type="text" value={id} onChange={onIdChangeHandler} />
//       </p>
//       <p>
//         비밀번호 :{" "}
//         <input type="password" value={password} onChange={onPwChangeHandler} />
//       </p>
//       <button
//         onClick={() => {
//           alert(
//             `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${password}입니다.`
//           );
//           setId("");
//           setPassword("");
//         }}
//       >
//         로그인
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setName("박할아버지");
        }}
      >
        할아버지 이름 바꾸기
      </button>
      <div>{props.grandFatherName}</div>
    </div>
  );
}

function Mother(props) {
  return (
    <Child grandFatherName={props.grandFatherName} setName={props.setName} />
  );
}

function GrandFather() {
  const [name, setName] = useState("김할아버지");
  return <Mother grandFatherName={name} setName={setName} />;
}

function App() {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />
      <p>Input 값: {value}</p>
      <GrandFather />
    </div>
  );
}

export default App;
