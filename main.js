const panel = document.querySelector("#painelEsquerda");
const revealButton = document.querySelector("#revelarSegredo");

revealButton.addEventListener("click", () => {
	const revealed = panel.classList.toggle("revelado");

	revealButton.setAttribute("aria-expanded", String(revealed));
	revealButton.textContent = revealed ? "Descer capa" : "Subir capa";
});
