let secT = 0;
let minT = 0;
let hourT = 0;
i = 0;

setInterval(function sec() {
  secT = secT + 6;
  let sec = document.querySelector(".sec");
  sec.style.transform = `rotate(${secT}deg)`;
  i++;
  console.log(i);
}, 1000);
setInterval(function min() {
  minT = minT + 6 / 60;
  let sec = document.querySelector(".min");
  sec.style.transform = `rotate(${minT}deg)`;
  i++;
  console.log(i);
}, 1000);
setInterval(function sec() {
  hourT = hourT + 6 / 60 / 12;
  let sec = document.querySelector(".hour");
  sec.style.transform = `rotate(${hourT}deg)`;
  i++;
  console.log(i);
}, 1000);
