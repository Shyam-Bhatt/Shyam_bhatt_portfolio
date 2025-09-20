const texts = ["Data Analyst", "Python Programmer", "Frontend Developer", "Power BI Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0; // restart loop
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".text").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // wait before next word
  } else {
    setTimeout(type, 100); // typing speed
  }
})();
