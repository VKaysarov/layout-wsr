let burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	document.querySelector(".nav-menu").classList.toggle("is-open");
})