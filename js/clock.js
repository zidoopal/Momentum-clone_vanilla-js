const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const Min = String(date.getMinutes()).padStart(2, '0');
  const Sec = String(date.getSeconds()).padStart(2, '0');

  // .padStar() 사용하면 원하는 자릿수만큼 원하는 '문자'로 채울 수 있다!
  // .padStar(문자열의 길이, '길이만큼 채울 문자')

  // 근데 date.getHours()엔 padStar()쓸수 없다 > 왜? > getHours()는 Number임
  // so, String() 사용하여 형변환 해주장!
  clock.innerText = `${hours} : ${Min} : ${Sec}`;
}

// 이 라인을 보자마자 바로 실행
// sayHello();

// setInterval(실행할 함수, ms초마다);
// setInterval(sayHello, 5000);

// setInterval(실행할 함수, ms초 후에 실행);
getClock(); // 1초뒤에 setInterval이 실행되니까 getClock();를 즉시 호출해서 바로 시간보기;
setInterval(getClock, 1000);

// 근데 0초말고 보기 좋게 00초 로 맞추고싶어 >> text formatting 필요
