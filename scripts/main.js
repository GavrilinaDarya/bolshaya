// hero ->
function createButton(index){
	var seletedHero = document.getElementsByClassName('section-content hero--js open')
	var currentHero = document.getElementsByClassName('section-content hero--js')[index]
	var button = document.createElement('button');
	button.className    = 'hero-switch-elem';
	button.onclick 		= function(){
		for (var i = 0; i < document.getElementsByClassName('section-content hero--js').length; i++) {
			document.getElementsByClassName('section-content hero--js')[i].classList.remove('open')
		}
		currentHero.classList.add('open')
		for (var i = 0; i < document.getElementsByClassName('hero-switch-elem').length; i++) {
			document.getElementsByClassName('hero-switch-elem')[i].classList.remove('selected')
		}
		this.classList.add('selected')
	}
	return button;
}

for (var i = 0; i < document.getElementsByClassName('section-content hero--js').length; i++) {
	document.getElementById('hero-switch--js').appendChild(createButton(i));
}

document.getElementsByClassName('section-content hero--js')[0].classList.add('open')
document.getElementsByClassName('hero-switch-elem')[0].classList.add('selected')
// <- hero




// chronicle ->
const chronicleVals = [
	{
		"title":"Создание улицы",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"year":"1721"
	},
	{
		"title":"Создание улицы",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"year":"1722"
	},
	{
		"title":"Создание улицы",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"year":"1723"
	},
	{
		"title":"Создание улицы",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"year":"1724"
	},
	{
		"title":"Создание улицы",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"year":"1725"
	}
]

function createChronicleLine(elem){	
	var divChronicleLine 		= document.createElement('div');
	divChronicleLine.className  = 'chronicle-line';

	var divYear 		 = document.createElement('div');
	divYear.className    = 'chronicle-line__year';
	divYear.innerText  	 = elem.year;

	var divInfo 			= document.createElement('div');
	divInfo.className    	= 'chronicle-line__info';
	
	var divInfoTitle 		= document.createElement('div');
	divInfoTitle.className  = 'chronicle-line__info-title';
	divInfoTitle.innerText	= elem.title
	var divInfoText 		= document.createElement('div');
	divInfoText.className   = 'chronicle-line__info-text';
	divInfoText.innerText	= elem.decription

	divInfo.appendChild(divInfoTitle);
	divInfo.appendChild(divInfoText);

	divChronicleLine.appendChild(divYear)
	divChronicleLine.appendChild(divInfo)

	return divChronicleLine;
}


var firstChronicleVal = 0
document.getElementById('chronicle-lines--js').appendChild(createChronicleLine(chronicleVals[firstChronicleVal]));
document.getElementById('chronicle-lines--js').appendChild(createChronicleLine(chronicleVals[firstChronicleVal + 1]));
document.getElementById('chronicle-lines--js').appendChild(createChronicleLine(chronicleVals[firstChronicleVal + 2]));

function changeFirstChronicleVal(n){
	if (firstChronicleVal + n >= 0 && firstChronicleVal + n <= chronicleVals.length - 3){
		firstChronicleVal = firstChronicleVal + n;
		document.getElementById('chronicle-lines--js').replaceChild(createChronicleLine(chronicleVals[firstChronicleVal]), document.getElementsByClassName('chronicle-line')[0])
		document.getElementById('chronicle-lines--js').replaceChild(createChronicleLine(chronicleVals[firstChronicleVal + 1]), document.getElementsByClassName('chronicle-line')[1])
		document.getElementById('chronicle-lines--js').replaceChild(createChronicleLine(chronicleVals[firstChronicleVal + 2]), document.getElementsByClassName('chronicle-line')[2])
	}	
}
// <- chronicle




// day-history ->
const historyDays = [
	{
		"title":"В 2009 году на улице Карла Маркса появились аншлаги с ее историческим названием",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"permalink":"#",

		"lastLike":"Кирилл Сечкарь, Евгений Борисов и еще 113",
		"comment":"20",
		"share":"52"
	},
	{
		"title":"В 2010 году на улице Карла Маркса появились аншлаги с ее историческим названием",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"permalink":"#",

		"lastLike":"Кирилл Сечкарь, Евгений Борисов и еще 113",
		"comment":"20",
		"share":"52"
	},
	{
		"title":"В 2011 году на улице Карла Маркса появились аншлаги с ее историческим названием",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"permalink":"#",

		"lastLike":"Кирилл Сечкарь, Евгений Борисов и еще 113",
		"comment":"20",
		"share":"52"
	},
	{
		"title":"В 2012 году на улице Карла Маркса появились аншлаги с ее историческим названием",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"permalink":"#",

		"lastLike":"Кирилл Сечкарь, Евгений Борисов и еще 113",
		"comment":"20",
		"share":"52"
	},
	{
		"title":"В 2013 году на улице Карла Маркса появились аншлаги с ее историческим названием",
		"decription":"В 1726 году по указанию Саввы Рагузинского посад в Иркутске был обнесён валом с палисадом и рвом, которые тянулись от протоки реки Ангары до реки Ушаковки. К 1760 году палисад обветшал, ров частично осыпался. По решению магистрата остатки укреплений были уничтожены, на их месте была проложена новая улица, которая получила название — Большая Першпективная, в просторечии — Большая.",
		"permalink":"#",

		"lastLike":"Кирилл Сечкарь, Евгений Борисов и еще 113",
		"comment":"20",
		"share":"52"
	}
]

function createDayHistory(elem){	
	var divBox		  = document.createElement('div');
	divBox.className  = 'day-history__info-box';

	var aTitle 		 	= document.createElement('a');
	aTitle.className    = 'info-box__title';
	aTitle.innerText  	= elem.title;
	aTitle.setAttribute('href',elem.permalink);


	var divText 			= document.createElement('div');
	divText.className    	= 'info-box__text';
	divText.innerText  		= elem.decription;
	
	var divLastLike 		= document.createElement('div');
	divLastLike.className  	= 'info-box__last-likes';
	divLastLike.innerText	= elem.title

	
	var divCommunicatios	= document.createElement('div');
	divCommunicatios.className   = 'info-box__communicatios';

	var divLike 		= document.createElement('div');
	divLike.className  	= 'info-box-communications__elem like';
	divLike.innerText	= "Мне нравится"

	var divComment 			= document.createElement('div');
	divComment.className  	= 'info-box-communications__elem comment';
	divComment.innerText	= `${elem.comment} Комментировать`

	var divShare		= document.createElement('div');
	divShare.className  = 'info-box-communications__elem share';
	divShare.innerText	= `${elem.share} Поделиться`


	divCommunicatios.appendChild(divLike);
	divCommunicatios.appendChild(divComment);
	divCommunicatios.appendChild(divShare);

	divBox.appendChild(aTitle)
	divBox.appendChild(divText)
	divBox.appendChild(divLastLike)
	divBox.appendChild(divCommunicatios)

	return divBox;
}

var firstHistoryDaysVal = 0
document.getElementById('day-history__data-box--js').appendChild(createDayHistory(historyDays[firstChronicleVal]));
document.getElementById('day-history__data-box--js').appendChild(createDayHistory(historyDays[firstChronicleVal + 1]));
document.getElementById('day-history__data-box--js').appendChild(createDayHistory(historyDays[firstChronicleVal + 2]));

function changeFirstHistoryDaysVal(n){
	if (firstHistoryDaysVal + n >= 0 && firstHistoryDaysVal + n <= historyDays.length - 3){
		firstHistoryDaysVal = firstHistoryDaysVal + n;
		document.getElementById('day-history__data-box--js').replaceChild(createDayHistory(historyDays[firstHistoryDaysVal]), document.getElementsByClassName('day-history__info-box')[0])
		document.getElementById('day-history__data-box--js').replaceChild(createDayHistory(historyDays[firstHistoryDaysVal + 1]), document.getElementsByClassName('day-history__info-box')[1])
		document.getElementById('day-history__data-box--js').replaceChild(createDayHistory(historyDays[firstHistoryDaysVal + 2]), document.getElementsByClassName('day-history__info-box')[2])
	}	
}

// <- day-history