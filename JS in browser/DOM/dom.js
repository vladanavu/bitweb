// //Selecting One/Multiple Elements

// function selectAndAddClass(id, style) {
//   var selected = document.getElementById(id);
//   selected.className = style;
// }

// selectAndAddClass("second", "sample");

// function allOfKind(name, style) {
//   var selected = document.querySelectorAll(name);
//   for (var i = 0; i < selected.length; i++) {
//     selected[i].className = style;
//   }
// }
// allOfKind("li", "li-color");

// function elementAndId(id, element, style) {
//   var selected = document.getElementById(id);
//   var elements = selected.querySelectorAll(element);
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].className = style;
//   }
// }

// elementAndId("third", "li", "third-lis");

//Traversing
/* 
function selectListItem() {
  var selected = document.querySelector(".active");
  var previousLi = document.querySelector(".active").previousElementSibling;
  var nextLi = document.querySelector(".active").nextElementSibling;

  selected.className = "";
  previousLi.className = "sample";
  nextLi.className = "third-lis";
}

selectListItem(); */

// Access/Update Text Node

function alertContent(id) {
  var selected = document.getElementById(id);
  alert(selected.textContent);
}
alertContent("alert");

function changeTextContent(newText, id) {
  var selected = document.getElementById(id).lastElementChild;
  selected.inner = newText;
}
changeTextContent("NOVI TEXT", "first");

function testingQuery() {
  var selected = document.querySelectorAll("#fifth > li");
  for (var i = 0; i < selected.length; i++) {
    selected[i].innerHTML = "<img class='slika' src='../1.jpg'>";
  }
}
testingQuery();
