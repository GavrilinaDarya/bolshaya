function createButton(index){
	var seletedHero = document.getElementsByClassName('section-content hero open')
	var currentHero = document.getElementsByClassName('section-content hero')[index]
	var button = document.createElement('button');
	button.className    = 'hero-switch-elem';
	button.onclick 		= function(){
		for (var i = 0; i < document.getElementsByClassName('section-content hero').length; i++) {
			document.getElementsByClassName('section-content hero')[i].classList.remove('open')
		}
		currentHero.classList.add('open')
		for (var i = 0; i < document.getElementsByClassName('hero-switch-elem').length; i++) {
			document.getElementsByClassName('hero-switch-elem')[i].classList.remove('selected')
		}
		this.classList.add('selected')
	}
	return button;
}




for (var i = 0; i < document.getElementsByClassName('section-content hero').length; i++) {
	document.getElementById('hero-switch').appendChild(createButton(i));
}

document.getElementsByClassName('section-content hero')[0].classList.add('open')
document.getElementsByClassName('hero-switch-elem')[0].classList.add('selected')