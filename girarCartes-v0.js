
const cartaAmunt = (element) => {
  element.src = element.title;
}
const cartaAvall = (element) => {
  element.src = "img/coberta.png";
}
const girarCarta = (element) => {
  if (element.src.includes("coberta.png")) element.src = element.title;
  else element.src = "img/coberta.png";
}
const girarTotes = (com) => {
	//versió getElementsByClassName i for
	
		let elementsImg = document.getElementsByClassName('carta');
		for (let element of elementsImg){
			if (com == 'amunt') cartaAmunt(element);
			else if (com == 'avall') cartaAvall(element);
			else girarCarta(element);
		}
	
	//versió querySelectorAll i forEach
	/*
	let elementsImg = document.querySelectorAll('.carta');
	elementsImg.forEach(function(element) {
	  if (com == 'amunt') cartaAmunt(element);
	  else if (com == 'avall') cartaAvall(element);
	  else girarCarta(element);
	});
	*/
}

window.onload = function(){
	let cartes = document.querySelectorAll('.carta');
	cartes.forEach(function(carta){
	  carta.onclick = () => girarCarta(carta)	  
	});
	document.getElementById('boto1').onclick = () => girarTotes();
	document.getElementById('boto2').onclick = () => girarTotes('amunt');
	document.getElementById('boto3').onclick = () => girarTotes('avall')
}