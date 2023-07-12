const images = ['01.png', '02.jpeg', '03.jpg'];

const randomImages = images[Math.floor(Math.random() * images.length)];

// createElement() : html에서 직접 추가하지 않고 js에서 추가하는 방법
const bgImage = document.createElement('img');

bgImage.src = `img/${randomImages}`;

// syntax- appendChild() : 문서에 있는 바디 요소의 끝에 붙인다. (prepend는 가장 앞에)
// var aChild = element.appendChild(aChild);//

document.body.appendChild(bgImage);
bgImage.classList.add('bg');
