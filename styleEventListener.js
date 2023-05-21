let style = document.querySelector("h1");
style.addEventListener("mouseover", function () {
  style.classList.add("my-style");
});

style.addEventListener("mouseout", function () {
  style.classList.remove("my-style");
});