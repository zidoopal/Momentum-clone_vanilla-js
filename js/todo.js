const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEYS = 'todos';

// ✨ 원하는 것 : paintToDo(newToDo); 가 될때 마다 그 텍스트를 array에 push 하고 싶다~
const toDos = []; // todo를 담을 배열 생성

// ToDo 목록을 local Storage에 저장
function saveToDos() {
  // localStorage.setItem(TODOS_KEYS, toDos);
  // just, 텍스트 형태로 value가 저장되는 상태 (→array 형태로 저장하고 싶대)

  //  JSON.stringify() : JavaScript 값이나 객체를 JSON 문자열로 변환
  localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
  // 아직도 새로고침하면 localStorage에는 남아있지만 화면에서는 날라감..
}

// 📌  local storage에 array로 저장이 안되기 때문에
// JSON.stringify로 array처럼 생긴 string으로 저장한 후
// 다시 JSON.parse 이용해 array로 꺼내는 방법

// todo삭제_생성되는 todo중 어떤 todo를 삭제하는 건지에 대한 정보가 필요함
// 생성된 모든 todo의 button이 같은 event와 함수를 실행_정보가 필요
function deleteToDo(event) {
  // target == 클릭된 HTML element
  // parentElement == 클릭된 element의 부모 (여기서 button의 부모는 li)
  // console.log(event.target.parentElement); // 고유한 속성으로의 접근하는 방법을 찾는 것
  // event에 많은 정보를 알 수 있고 그 정보들로 각 생성된 버튼의 고유한 값을 찾아내서
  // 그 값이 어떤 버튼을 특정하는지 알아야 그 버튼만을 지워줄 수 있는것이다.
  const li = event.target.parentElement;

  // li 삭제
  li.remove();
}

// todo 를 그리는 역할
function paintToDo(newToDo) {
  const span = document.createElement('span');
  span.innerText = newToDo;
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.innerText = '❌';
  btn.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

// todo를 입력하면 제출되는 역할
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ''; // 엔터 후 빈칸 되도록 toDoInput.value에 빈값 넣어주기
  // 이후 toDoInput.value 가 비워졌다고 하서 newToDo의 값이 비워지는 것 아님!

  // toDos에 newTodo를 넣어주는 것
  toDos.push(newToDo);

  // newTodo를 paintToDo에 보냄 -> newTodo는 값이 비워지지 않은 상태의 값으로
  // 즉, 입력값을 받아서 비워지기 전에 paintToDo로 값을 보내서 함수를 실행토록함
  paintToDo(newToDo);

  // ToDo 목록을 local Storage에 저장
  saveToDos();
  // console.log(newToDo); // 입력한 값 출력
  // console.log(toDoInput.value); // 빈 값 출력
  // 저장은 되지만 새로고침하면 화면에서는 사라짐
}
toDoForm.addEventListener('submit', handleToDoSubmit);

// function sayHello(item) {
//   console.log('Hello', item);
// }

const savedToDos = localStorage.getItem(TODOS_KEYS);

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  parsedToDos.forEach((item) => console.log('Hello', item));
  // parsedToDos 에 있는 각각의 item에 대해서 console.log 할거시다~ 여기 각각의 item을~

  // == // function sayHello(item) {
  //   console.log('Hello', item);
  // }
}
