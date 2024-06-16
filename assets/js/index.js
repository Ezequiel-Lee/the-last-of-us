const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const audio = document.querySelector('audio')

const som = new Audio('./assets/background/tlou-music.mp3');
som.play();
som.volume = 0.1;

botoes.forEach((botao, indice) => {

	if(botao.classList.contains('selecionado')) {trocaAudio(indice)}

	botao.addEventListener("click", () => {

		const botaoSelecionado = document.querySelector(".botao.selecionado");
		botaoSelecionado.classList.remove("selecionado");

		const personagemSelecionado = document.querySelector(".personagem.selecionado");
		personagemSelecionado.classList.remove("selecionado");

		botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
		trocaAudio(indice)

	});
});

function trocaAudio(i) {
	audio.src = "assets/audio/" + i + ".mp3"
}

window.onload = function () {
	setTimeout(function () {
	  document.querySelector('.loading').remove();
	}, 300);
};
 