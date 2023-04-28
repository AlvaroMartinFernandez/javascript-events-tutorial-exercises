window.onload = function loadFn() {
	var btn1 = document.getElementById("btn1");
	var anchor1 = document.getElementById("anchor1");
	var img1 = document.getElementById("img1");
	btn1.addEventListener("click", function(event) {
		alert(`Se hizo clic en ${event.target.id}`);
	});
	anchor1.addEventListener("click", function(event) {
		alert(`Se hizo clic en ${event.target.id}`);
	});
	img1.addEventListener("click", function(event) {
		alert(`Se hizo clic en ${event.target.id}`);
	});
};
