const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const greeting = document.querySelector('#greeting');

// stirng만 포함된 const변수는 대문자로 표기, string저장하고 싶을 때 사용(관습)
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'currentUserName';
// const link = document.querySelector('a');

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const currentUserName = loginInput.value;
  // localStorage.setItem('저장될 key_name', value);
  localStorage.setItem(USERNAME_KEY, currentUserName);
  sayGreetings(currentUserName);
}

function sayGreetings(currentUserName) {
  greeting.innerText = `Hello! ${currentUserName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);
// link.addEventListener('click', handleLinkClick);
// handleLinkClick({information about the event that just happend(object)})
// ↑ handleLinkClick를 위한 EventListener 함수의 첫번째 인자로 주어짐

// getItem() 으로 USERNAME_KEY 의 value 값을 savedUserName 변수에 저장~
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // savedUserName 값이 null == storage에 유저정보가 없으면 null
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 정보 없으면 show the form
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // 정보 있으면 show the greetings
  sayGreetings(savedUserName);
}
