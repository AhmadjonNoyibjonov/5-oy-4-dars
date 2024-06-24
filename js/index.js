// const hiElement = document.getElementById("hi")
// const classname = document.getElementsByClassName("user");
// const tagname = document.getElementsByTagName("p");

// let users = document.querySelector('p');
// users.setAttrubute('user')

// p.innerHTML = "Ahrorbek"

const button1 = document.querySelector("header button:nth-child(1)");
const button2 = document.querySelector("header button:nth-child(2)");
const button3 = document.querySelector("header button:nth-child(3)");
const common = document.querySelector("main");
const ulLi = document.querySelector("section div:nth-child(1) ul");
const title = document.querySelector("section div:nth-child(2) .title");
const h6Text = document.querySelector("section div:nth-child(2) h6");
const blockTitle = document.querySelector(
  "section div:nth-child(3) .block_title"
);
const spanH5 = document.querySelectorAll("section .block3 .span_title h5");
const spanP = document.querySelectorAll("section .block3 .span_title p");

button1.addEventListener("click", function () {
  common.style.backgroundColor = "red";
  ulLi.style.color = "orange";
  title.style.color = "black";
  h6Text.style.color = "yellow";
  blockTitle.style.color = "red";
  spanH5[0].style.color = "blue";
  spanH5[1].style.color = "blue";
  spanH5[2].style.color = "blue";
  spanH5[3].style.color = "blue";
  spanH5[4].style.color = "blue";
  spanP[0].style.color = "white";
  spanP[1].style.color = "white";
  spanP[2].style.color = "white";
  spanP[3].style.color = "white";
  spanP[4].style.color = "white";
});

button2.addEventListener("click", function () {
  common.style.backgroundColor = "aqua";
  ulLi.style.color = "red";
  title.style.color = "green";
  h6Text.style.color = "blue";
  blockTitle.style.color = "red";
  spanH5[0].style.color = "yellow";
  spanH5[1].style.color = "yellow";
  spanH5[2].style.color = "yellow";
  spanH5[3].style.color = "yellow";
  spanH5[4].style.color = "yellow";
  spanP[0].style.color = "black";
  spanP[1].style.color = "black";
  spanP[2].style.color = "black";
  spanP[3].style.color = "black";
  spanP[4].style.color = "black";
});

button3.addEventListener("click", function () {
  common.style.backgroundColor = "grey";
  ulLi.style.color = "white";
  title.style.color = "grey";
  h6Text.style.color = "red";
  blockTitle.style.color = "brown";
  spanH5[0].style.color = "green";
  spanH5[1].style.color = "green";
  spanH5[2].style.color = "green";
  spanH5[3].style.color = "green";
  spanH5[4].style.color = "green";
  spanP[0].style.color = "orange";
  spanP[1].style.color = "orange";
  spanP[2].style.color = "orange";
  spanP[3].style.color = "orange";
  spanP[4].style.color = "orange";
});
