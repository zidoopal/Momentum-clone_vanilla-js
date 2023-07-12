const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ''; // 엔터 후 빈칸 되도록 toDoInput.value에 빈값 넣어주기
  // 이후 toDoInput.value 가 비워졌다고 하서 newToDo의 값이 비워지는 것 아님!
  paintToDo(newToDo);
  // console.log(newToDo); // 입력한 값 출력
  // console.log(toDoInput.value); // 빈 값 출력
}
toDoForm.addEventListener('submit', handleToDoSubmit);

function paintToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}

// todo 리스트 만듬!
// 😐😞 but 새로고침 하면 list가 날라감. 저장도 안되는 상태.
// 저장하기 && 리스트 삭제버튼 만들기 해보자
