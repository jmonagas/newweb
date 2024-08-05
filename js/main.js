document.addEventListener("DOMContentLoaded", () => {
	const e = document.getElementById("navToggle"),
		t = document.getElementById("sideNav"),
		d = document.getElementById("closeNav"),
		n = () => {
			"225px" === t.style.width ? (t.style.width = "0") : (t.style.width = "225px");
		};
	e.addEventListener("click", () => {
		n();
	}),
		d.addEventListener("click", () => {
			n();
		}),
		window.addEventListener("click", (n) => {
			n.target === e || n.target === d || t.contains(n.target) || (t.style.width = "0");
		});
});
(() => (document.getElementById("currentYear").textContent = new Date().getFullYear()))();
