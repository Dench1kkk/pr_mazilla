let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  console.log("Clicked image. Current src:", mySrc);
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Будь ласка, введіть своє ім’я:');
  if (!myName) {
    setUserName(); // якщо нічого не введено — запитати знову
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}