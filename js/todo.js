const toDoForm = document.querySelector('.todo-form');
const toDoInput = document.querySelector('.todo-form input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEYS = 'todos';

// ✨ 원하는 것 : paintToDo(newToDo); 가 될때 마다 그 텍스트를 array에 push 하고 싶다~
// const toDos = []; // todo를 담을 배열 생성
let toDos = [];

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

  // 우리가 클릭한 li.id와 다른 toDo는 list에 남겨두고싶어!
  // toDos = toDos.filter((toDo) => toDo.id !== li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //parseInt() 로 li.id 형변환
  // 오 근데 지워도 local에 또 남아있음
  // 👉 datatype때문임, typeof (toDos.id )== number / typeof (li.id) == string 😞
  saveToDos();
}

// todo 를 그리는 역할
function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  // span.innerText = newToDo;
  span.innerText = newToDo.text; // object.text
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

  // toDos에 newTodo를 넣어주는 것 → newToDoObj로 변경(id 부여)
  const newToDoObj = {
    text: newToDo,
    id: Date.now(), // Date.now() == ms 를 반환 해 주는 메서드
  };
  toDos.push(newToDoObj);

  // newTodo를 paintToDo에 보냄 -> newTodo는 값이 비워지지 않은 상태의 값으로
  // 즉, 입력값을 받아서 비워지기 전에 paintToDo로 값을 보내서 함수를 실행토록함
  // paintToDo(newToDo);
  paintToDo(newToDoObj); // text였던 newToDo가 아닌 obj인 newToDoObj로 변경

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

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // array.foreach는 받아온 array를 for 반복문 없이 item 하나씩 function에 넣을 수 있는 신기한 뇨슥
  // ✨✨ forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행해주고 있따아 ✨✨

  // (item) => console.log('Hello', item)
  // ==
  // function sayHello(item) {
  //   console.log('Hello', item);
  // }
}

function sexyFilter(item) {
  return item !== 3; // item이 3일 경우 false 반환, 요소가 3일 경우 3은 제외된다~
  // The sexyFilter() should return true, if you want to keep this obj in your new array.
  // If you return false, that item is not going to be including in your new array
  // 새 obj에도 1, 2, 3, 4 포함하고 싶으면! false 리턴하면 그 item은 새 arr에 포함 안됨
}
[1, 2, 3, 4].filter(sexyFilter); // filter가 sexyFilter에 1, 2, 3, 4를 차례대로 넣어서 부를거야
// filter()
// 원하는 요소만 가지고 새 arr 만들긔 (item을 지우는 것이 아니라 item을 '제외'하는 것!)

//📌
// application이 시작 될 때, toDos arr는 항상 비어있어서 +
// (js:62) toDos.push(newToDo); 작성하고 form을 submit 할 때 마다 > 빈 arr에 그냥 push하게 되어서
// function saveToDos(); 실행할 때 새로운 toDo들만 포함하고있는 array를 저장하고 있음.
// 이러한 이유로 새로 저장할 때 마다 이전 저장한 것은 사라지고 새로 추가한것만 덮어씌워져서 저장되고있음
// == 우리가 갖고있던 toDos의 이전 복사본들은 잊어버리고 있다

// so, const toDos = []; 를 let으로 변경해서 update 가능하도록 만들고,
// localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어 전에 있던 toDo를 복원하는 코드를 써주자 (toDos = parsedToDos;)

//📌
// ㅋㅋㅋㅋ근데 이제 새로고침해도 안날라가고 localStorage에 있는것도 화면에 잘 보이는데
// delete btn 누르고 새로고침하면 다시 죽지도않고 살아서 돌아옴 → (localStorage 에선 안지워졌기때문)
// del btn 누를때 == localStr도 같이 업데이트 되게 해보잣

// local storage == toDos array 를 복사해두는 곳
// toDos array !== local Storage

//📌
// todo들에게 ID 같은 것을 주자!
// 같은 value를 가진 요소들이 있을 때, id로 각각의 li item을 구별하기 위해서!
// ((ex. ['a', 'b', 'c', 'a']) 어떤 'a'가 지워졌는지 알 수 없음)

//📌
// const arr = [1, 2, 3, 4]

// arr.filter(item => item > 2)  // [3, 4]
// const newArr = arr.filter(item => item > 2)

// arr  // 1, 2, 3, 4]  👉 filter는 기존 arr를 변경하지 않는다!
// newArr  // (2) [3, 4]
