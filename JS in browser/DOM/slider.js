/* function slider() {
  var Active = document.querySelector(".active");
  Active.nextElementSibling.classList.add("active");
  Active.classList.remove("active");
} */
setInterval(function() {
  var Active = document.querySelector(".active");
  if (Active.nextElementSibling) {
    Active.nextElementSibling.classList.add("active");
    Active.classList.remove("active");
  } else {
    Active.classList.remove("active");
    Active = document.getElementById("first");
    Active.classList.add("active");
  }
}, 2000);
