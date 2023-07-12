const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

function deleteToDo(event) {
  // target == 클릭된 HTML element
  // parentElement == 클릭된 element의 부모 (여기서 button의 부모는 li)
  const li = event.target.parentElement;
  // li 삭제
  li.remove();
}

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
  deleteToDo(newToDo);
}

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
