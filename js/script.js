var homeLink = document.getElementsByClassName("home__link")[0];
var homeLinkCircleOuter = document.getElementsByClassName('home__link-circle_outer')[0];
var homeLinkArrow = document.getElementsByClassName('home__link-arrow')[0];
homeLink.addEventListener('mouseover', function(){
	homeLinkCircleOuter.style.cssText = "background-color: #00CABD;";
	homeLinkArrow.style.cssText = "border-right-color: #00CABD;	border-bottom-color: #00CABD;";
});
homeLink.addEventListener('mouseout', function(){
	homeLinkCircleOuter.style.cssText = "background-color: #00A99D;";
	homeLinkArrow.style.cssText = "border-right-color: #00A99D;	border-bottom-color: #00A99D;";
});

$(document).on('click', 'a', function () {
  var id = $(this).attr('href'), //забираем идентификатор блока с атрибута href
  top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
  $('html, body').animate({ scrollTop: top }, 1000 ); //анимируем переход на расстояние - top за 1000 мс
  return false;
});

$(document).ready(function(){
  $("input, textarea").focus(function(){
    if ($(this).attr("value") == $(this).attr("title"))
      $(this).attr("value", "")
  });

  $("input, textarea").blur(function(){
    if ($(this).attr("value") == "")
      $(this).attr("value", $(this).attr("title"))
  });

});

var html = document.documentElement;

alert("screen.width x screen.height: " + screen.width + "x" + screen.height); 
alert("clientWidth x clientHeight: " + html.clientWidth + "x" + html.clientHeight);


function setHeight(elem){
	elem.style.minHeight = html.clientHeight + "px";
}

var home = document.getElementsByClassName("home")[0];
setHeight(home);

var homeWrap = document.getElementsByClassName("home__wrap")[0];
setHeight(homeWrap);

if(html.clientWidth > 991) {

	var amazingFeatures = document.getElementsByClassName("amazing-features")[0];
	setHeight(amazingFeatures);

	var sampleWorks = document.getElementsByClassName("sample-works")[0];
	setHeight(sampleWorks);

	var teamMembers = document.getElementsByClassName("team-members")[0];
	setHeight(teamMembers);

	var priceTables = document.getElementsByClassName("price-tables")[0];
	setHeight(priceTables);

}

var startuprr = document.getElementsByClassName("logo")[0];
if(html.clientWidth < 992 && html.clientWidth > 767) {	
	startuprr.setAttribute("src","images/fav.png");
}
else {
	startuprr.setAttribute("src","images/startuprr.png");
}

if(html.clientWidth < 768 && html.clientWidth > 319){
	var menu = document.getElementsByClassName("nav-menu")[0];
	menu.style.display = "block";
	var transparency = document.getElementsByClassName("transparency")[0];
	var headerWrap = document.getElementsByClassName("header__wrap")[0];
	var menuIcon = document.createElement("img");
	menuIcon.setAttribute("src", "images/iconMenu.png");
	menuIcon.style.cssText = "position: absolute; right: 5px; cursor: pointer; height: 40px; width: auto;";
	
	var value = -70;
	var flagFirst = 0;
	var interval;

	menuIcon.addEventListener("click", function(){
		value = -70;
		interval = setInterval(fluentOpening.bind(null, 0, 1.4), 10);
		transparency.style.display = "block";
		flagFirst++;
	});

	headerWrap.appendChild(menuIcon);

	function fluentOpening(number, speed){
		value += speed;
		if(value > number) {
			clearInterval(interval);
			return false
		}
		else {
			menu.style.left = Math.floor(value) + "%";
		}
	}
	function fluentClosing(number, speed){
		value += speed;
		if(value > number) {
			clearInterval(interval);
			return false
		}
		else {
			menu.style.left = "-" + Math.floor(value) + "%";
		}
	}

	transparency.addEventListener("click", function(){
		value = 0;
		interval = setInterval(fluentClosing.bind(null, 72, 1.4), 10);
		
		transparency.style.display = "none";
		flagFirst--;
		
	});
}

if(html.clientWidth < 320){
	document.body.style.overflowX = "auto";
}

//__________________________ what-we-offer __________________________

var mainDivForOffers = document.getElementById('offers');
function ConstructorForOffers(_img, _name, _text) {
	this.img = _img;
	this.name = _name;
	this.text = _text;
}

ConstructorForOffers.prototype.render = function() {
	var wrap = document.createElement('div');
	wrap.setAttribute("class", "offers__wrap");

	var image = document.createElement('img');
	image.setAttribute("src", this.img);
	image.setAttribute("class", "offers__wrap-image");
 
	var circle = document.createElement('div');
	circle.setAttribute("class", "offers__wrap-circle");
	circle.appendChild(image);

	var header = document.createElement('h3');
	header.textContent = this.name;
	header.setAttribute("class", "offers__wrap-header");
	
	var content = document.createElement('p');
	content.textContent = this.text;
	content.setAttribute("class", "offers__wrap-content");
	
	var button = document.createElement('button');
	button.textContent = 'READ MORE';
	button.setAttribute("class", "offers__wrap-button");
	
	wrap.appendChild(circle);
	wrap.appendChild(header);
	wrap.appendChild(content);
	wrap.appendChild(button);

	wrap.addEventListener("mouseover", function(){
		circle.style.backgroundColor = "#00A99D";
		button.style.backgroundColor = "#00A99D";
		button.style.color = "#D9DFDF";
	});
	wrap.addEventListener("mouseout", function(){
		circle.style.backgroundColor = "#383838";
		button.style.backgroundColor = "transparent";
		button.style.color = "#8A8A8A";
	});

	return wrap
}

var offers = [ 
	["images/comp.png", "RESPONSIVE & MULTIPURPOSE", "Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis."],
	["images/moz.png", "EAZY CUSTOMIZATION", "Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis."],
	["images/circle.png", "AWESOME FRIENDLY SUPPORT", "Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis."]
];

var offer = [];

for(var i = 0; i < offers.length; i++) {
	offer.push( new ConstructorForOffers( offers[i][0],  offers[i][1], offers[i][2]) );
};

for(var i = 0; i < offer.length; i++) {
	mainDivForOffers.appendChild( offer[i].render() );
};

//____________________________ more-features ____________________________

var mainDivForFeatures = document.getElementById('features');
function ConstructorForFeatures(_img, _name, _underName, _text) {
	this.img = _img;
	this.name = _name;
	this.underName = _underName;
	this.text = _text;
}

ConstructorForFeatures.prototype.render = function() {

	var wrap = document.createElement('div');
	wrap.setAttribute("class", "features__wrap");
	
	var icon = document.createElement('div');
	icon.setAttribute("class", "features__icon");
	
	var rect = document.createElement('div');
	rect.setAttribute("class", "features__icon-rectangle");

	var image = document.createElement('img');
	image.setAttribute("src", this.img);
	image.setAttribute("class", "features__icon-rectangle-image");
	
	var arrow = document.createElement('div');
	arrow.appendChild(init());
	arrow.style.cssText = "position: absolute; top: 0;";
	
	rect.appendChild(image);
	icon.appendChild(rect);
	icon.appendChild(arrow);

	icon.addEventListener('mouseover', function(){
		rect.style.backgroundColor = "#00A99D";
	});
	icon.addEventListener('mouseout', function(){
		rect.style.backgroundColor = "#383838";
	})

	var header = document.createElement('h3');
	header.textContent = this.name;
	header.setAttribute("class", "features__header");
	
	var underHeader = document.createElement('h4');
	underHeader.textContent = this.underName;
	underHeader.setAttribute("class", "features__underHeader");
	
	var content = document.createElement('p');
	content.textContent = this.text;
	content.setAttribute("class", "features__content");

	wrap.appendChild(icon);
	wrap.appendChild(header);
	wrap.appendChild(underHeader);
	wrap.appendChild(content);

	return wrap
}

var features = [ 
	["images/comp.png", "RESPONSIVE & MULTIPURPOSE", "Desktops, Tables & Phones", "Proin in magna a ipsum viverra scelerisq eu nec turp. Nunc vestibulum fringilla accumsan. Praesent arcu turpis."],
	["images/moz.png", "EAZY CUSTOMIZATION", "One Click Demo Content Installation", "Proin in magna a ipsum viverra scelerisq eu nec turp. Nunc vestibulum fringilla accumsan. Praesent arcu turpis."],
	["images/star3.png", "UNLIMITED FEATURES", "Shortcodes, Typography & Different Layouts", "Proin in magna a ipsum viverra scelerisq eu nec turp. Nunc vestibulum fringilla accumsan. Praesent arcu turpis."],
	["images/menu.png", "CLEAN & MODULAR CODING", "100% Clean, Valid & Well-Commented Coding", "Proin in magna a ipsum viverra scelerisq eu nec turp. Nunc vestibulum fringilla accumsan. Praesent arcu turpis."],
	["images/stroller.png", "THE BEST E-COMMERCE SOLUTIONS", "WooCommerce Fully Integration", "Proin in magna a ipsum viverra scelerisq eu nec turp. Nunc vestibulum fringilla accumsan. Praesent arcu turpis."],
	["images/circle.png", "AWESOME FRIENDLY SUPPORT", "Free Lifetime Support & Updates", "Proin in magna a ipsum viverra scelerisq eu nec turp. Nunc vestibulum fringilla accumsan. Praesent arcu turpis."]
];

var feature = [];

for(var i = 0; i < features.length; i++) {
	feature.push( new ConstructorForFeatures( features[i][0],  features[i][1], features[i][2], features[i][3] ));
};

for(var i = 0; i < feature.length; i++) {
	mainDivForFeatures.appendChild( feature[i].render() );
};

function init() {
	var features = document.getElementById('features');
	var canvas = document.createElement("canvas");
	canvas.style.cssText = "padding-top: 40px; cursor: pointer";
	canvas.setAttribute("width", "40");
	canvas.setAttribute("height", "35");
	if (canvas.getContext){
	  var context = canvas.getContext("2d");
	 
	  context.beginPath();
	  context.moveTo(0, 0);
	  context.lineTo(0, 20);
	  context.lineTo(20, 35);
	  context.lineTo(40, 20);
	  context.lineTo(40, 0);
	  context.lineTo(20, 15);
	  context.lineTo(0, 0);
	  context.fillStyle = "#00A99D";
	  context.fill();
	  context.strokeStyle = "transparent";
	  context.stroke();

	  canvas.addEventListener('mouseover', function(){
	  	context.fillStyle = "#383838";
	    context.fill();
	  });
	  canvas.addEventListener('mouseout', function(){
	  	context.fillStyle = "#00A99D";
	   	context.fill();
	  });
	  features.appendChild(canvas);

	  return canvas
	}
	else {
	  alert('Ваш браузер не поддерживает canvas');
	}
}

//___________________________ powerful-skills ___________________________

var mainDivForSkills = document.getElementsByClassName("skills")[0];
function ConstructorForSkills(_percents, _name){
	this.percents = _percents;
	this.name = _name;
}

ConstructorForSkills.prototype.render = function(){

	var wrap = document.createElement("div");
	wrap.setAttribute("class", "skills__wrap");

	var circle = document.createElement("div");
	circle.setAttribute("class", "skills__wrap-circle");

	var canvas = document.createElement("canvas");
	canvas.setAttribute("class", "skills__wrap-canvas");
	var context = canvas.getContext("2d");
	var x = canvas.width / 2;
	var y = canvas.height / 2;
	var radius = 52;

	var props = {
	  startAngle: -180,
	  speed: 2,
	  color: '#00A99D',
	  lineWidth: 3        
	};
		
	setInterval(draw.bind(null,this.percents), 10);

	var degrees = -180;
	var percents = 0;
	var endPercents = document.createElement("div");
	endPercents.setAttribute("class", "skills__wrap-percents");
	
	function draw(number) {
	  var endDegrees = (number * 360 / 100) - 178;
	  degrees += props.speed;
	  percents += props.speed/4;
	  if (percents > number) {
	  	return false;
	  }
	  else {
		  endPercents.textContent = Math.floor(percents) + "%";
	  }
	  if (degrees >= endDegrees) {
	   	return false;
	  }
	  else{
		  context.beginPath();
	    context.arc(
	      x,
	      y,
	      radius,
	      getRadians(props.startAngle),
	      getRadians(degrees)
	    );
	    context.lineWidth = props.lineWidth;
	    context.strokeStyle = props.color;
	    context.stroke();
	  }
	} 

	function getRadians(degrees) {
	  return degrees * (Math.PI / 180);
	}

	var name = document.createElement("h3");
	name.textContent = this.name;
	name.setAttribute("class", "skills__wrap-name");

	circle.appendChild(canvas);
	circle.appendChild(endPercents);
	wrap.appendChild(circle);
	wrap.appendChild(name);

  return wrap

}

var skills = [ 
	[75, "WEB DESIGN"],
	[92, "WEB DEVELOPMENT"],
	[68, "SPEED OPTIMIZATION"],
	[100, "CUSTOMER SUPPORT"],
	[83, "MARKETING"],
	[50, "ADVERTISEMENT"]
];

var skill = [];

for(var i = 0; i < skills.length; i++) {
	skill.push( new ConstructorForSkills( skills[i][0],  skills[i][1]));
};

window.addEventListener("scroll", scrollForSkills);

function scrollForSkills(){
	if(mainDivForSkills.parentNode.getBoundingClientRect().bottom < html.clientHeight){
		for(var i = 0; i < skill.length; i++) {
			mainDivForSkills.appendChild( skill[i].render() );
			window.removeEventListener("scroll", scrollForSkills);
		};
	}
}

//_________________________ sample-works _________________________

var mainDivForWorks = document.getElementsByClassName("works")[0];
function ConstructorForWorks(_imgOne, _imgTwo, _name, _underName, _likes) {
	this.imgOne = _imgOne;
	this.imgTwo = _imgTwo;
	this.name = _name;
	this.underName = _underName;
	this.likes = _likes;
}

ConstructorForWorks.prototype.render = function(){

	var wrap = document.createElement("div");
	wrap.setAttribute("class", "works__wrap");

	var images = document.createElement("div");
	images.setAttribute("class", "images-wrap");

	var rhombusOne = document.createElement("div");
	rhombusOne.setAttribute("class", "images-wrap__rhombus_one");

	var imgOne = document.createElement("img");
	imgOne.setAttribute("src", this.imgOne);
	imgOne.setAttribute("class", "images-wrap__rhombus_one-image");
	
	var rhombusTwo = document.createElement("div");
	rhombusTwo.setAttribute("class", "images-wrap__rhombus_two");
	
	var imgTwo = document.createElement("img");
	imgTwo.setAttribute("src", this.imgTwo);
	imgTwo.setAttribute("class", "images-wrap__rhombus_two-image");

	var name = document.createElement("h3");
	name.textContent = this.name;
	name.setAttribute("class", "works__wrap-name");

	var underName = document.createElement("h4");
	underName.textContent = this.underName;
	underName.setAttribute("class", "works__wrap-underName");

	var likesWrap = document.createElement("div");
	likesWrap.setAttribute("class", "likes-wrap");
	
	var heart = document.createElement("img");
	heart.setAttribute("src", "images/heartWhite.png");
	heart.setAttribute("class", "likes-wrap-image");

	var likes = document.createElement("p");
	likes.setAttribute("class", "likes-wrap-likes");
	likes.textContent = this.likes;

	likesWrap.appendChild(heart);
	likesWrap.appendChild(likes);
	
	var overWrap = document.createElement("div");
	overWrap.setAttribute("class", "works__wrap-overWrap");

	rhombusOne.appendChild(imgOne);
	rhombusTwo.appendChild(imgTwo);
	images.appendChild(rhombusOne);
	images.appendChild(rhombusTwo);
	wrap.appendChild(images);
	wrap.appendChild(name);
	wrap.appendChild(underName);
	wrap.appendChild(likesWrap);
	wrap.appendChild(overWrap);
	
	wrap.addEventListener("mouseover", function(){
		overWrap.style.display = "none";
	});
	wrap.addEventListener("mouseout", function(){
		overWrap.style.display = "inline-block";
	});

	return wrap
}

var works = [ 
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138],
	["images/clip.png", "images/loupe2.png", "Corporate Brochure", "Illustration / Print", 138]
];

var work = [];

for(var i = 0; i < works.length; i++) {
	work.push( new ConstructorForWorks( works[i][0],  works[i][1], works[i][2],  works[i][3], works[i][4] ));
};

if(html.clientWidth > 1199){
	
	for(var i = 0; i < 8; i++) {
		mainDivForWorks.appendChild( work[i].render() );
	};

	var worksButton = document.getElementsByClassName("sample-works__button")[0];
	var worksFlag = 0;
	worksButton.addEventListener("click", function(){
		if(worksFlag == 0) {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < work.length; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "HIDE ALL WORKS";
			worksFlag++;
		}
		else {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < 8; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "VIEW ALL WORKS";
			worksFlag--;
		}
	});
}
else if (html.clientWidth < 1200 && html.clientWidth > 991){

	for(var i = 0; i < 6; i++) {
		mainDivForWorks.appendChild( work[i].render() );
	};

	var worksButton = document.getElementsByClassName("sample-works__button")[0];
	var worksFlag = 0;
	worksButton.addEventListener("click", function(){
		if(worksFlag == 0) {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < work.length; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "HIDE ALL WORKS";
			worksFlag++;
		}
		else {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < 6; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "VIEW ALL WORKS";
			worksFlag--;
		}
	});
}
else if (html.clientWidth < 992 && html.clientWidth > 767){

	for(var i = 0; i < 4; i++) {
		mainDivForWorks.appendChild( work[i].render() );
	};

	var worksButton = document.getElementsByClassName("sample-works__button")[0];
	var worksFlag = 0;
	worksButton.addEventListener("click", function(){
		if(worksFlag == 0) {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < work.length; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "HIDE ALL WORKS";
			worksFlag++;
		}
		else {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < 4; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "VIEW ALL WORKS";
			worksFlag--;
		}
	});
}
else{

	for(var i = 0; i < 2; i++) {
		mainDivForWorks.appendChild( work[i].render() );
	};

	var worksButton = document.getElementsByClassName("sample-works__button")[0];
	var worksFlag = 0;
	worksButton.addEventListener("click", function(){
		if(worksFlag == 0) {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < work.length; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "HIDE ALL WORKS";
			worksFlag++;
		}
		else {
			mainDivForWorks.innerHTML = "";
			for(var i = 0; i < 2; i++) {
				mainDivForWorks.appendChild( work[i].render() );
			};
			worksButton.textContent = "VIEW ALL WORKS";
			worksFlag--;
		}
	});
}

//_________________________ company-facts _________________________

var mainDivForFacts = document.getElementsByClassName("facts")[0];
function ConstructorForFacts(_number, _image, _name){
	this.number = _number;
	this.image = _image;
	this.name = _name;
}

ConstructorForFacts.prototype.render = function(){

	var wrap = document.createElement("div");
	wrap.setAttribute("class", "facts__wrap");

	var divForNumber = document.createElement("div");

	setInterval(counter.bind(null,this.number), 10);

	var number = document.createElement("h2");
	number.setAttribute("class", "facts__wrap-number");
	
	var value = 0;
	function counter(numb) {
	  value += 2;
	  if (value > numb) {
	  	return false;
	  }
	  else {
		  number.textContent = Math.floor(value);
	  }
	}
	
	var rhombusLeft = document.createElement("div");
	rhombusLeft.setAttribute("class", "facts__wrap-rhombus_left");

	var rhombusRight = document.createElement("div");
	rhombusRight.setAttribute("class", "facts__wrap-rhombus_right");

	divForNumber.appendChild(rhombusLeft);
	divForNumber.appendChild(number);
	divForNumber.appendChild(rhombusRight);

	var divForIcon = document.createElement("div");
	
	var lineLeft = document.createElement("div");
	lineLeft.setAttribute("class", "facts__wrap-line_left");

	var lineRight = document.createElement("div");
	lineRight.setAttribute("class", "facts__wrap-line_right");

	var icon = document.createElement("img");
	icon.setAttribute("src", this.image);

	divForIcon.appendChild(lineLeft);
	divForIcon.appendChild(icon);
	divForIcon.appendChild(lineRight);

	var name = document.createElement("h4");
	name.textContent = this.name;
	name.setAttribute("class", "facts__wrap-name");

	wrap.addEventListener("mouseover", function(){
		rhombusLeft.style.backgroundColor = "#00A99D";
		rhombusRight.style.backgroundColor = "#00A99D";
	});
	wrap.addEventListener("mouseout", function(){
		rhombusLeft.style.backgroundColor = "#484848";
		rhombusRight.style.backgroundColor = "#484848";
	});

	wrap.appendChild(divForNumber);
	wrap.appendChild(divForIcon);
	wrap.appendChild(name);

	return wrap
}

var facts = [ 
	[218, "images/checkMark.png", "COMPLETED PROJECTS"],
	[360, "images/hourglass.png", "HOURS OF WORK / MONTH"],
	[135, "images/ticket.png", "SOLVED TICKETS"],
	[174, "images/thumbsUp.png", "SATISFIED CLIENTS"]
];

var fact = [];

for(var i = 0; i < facts.length; i++) {
	fact.push( new ConstructorForFacts( facts[i][0],  facts[i][1], facts[i][2] ));
};

window.addEventListener("scroll", scrollForFacts);

function scrollForFacts(){
	if(mainDivForFacts.parentNode.getBoundingClientRect().bottom < html.clientHeight){
		for(var i = 0; i < fact.length; i++) {
			mainDivForFacts.appendChild( fact[i].render() );
			window.removeEventListener("scroll", scrollForFacts);
		};
	}
}

//_________________________ team-members _________________________

var mainDivForMembers = document.getElementsByClassName("members")[0];
function ConstructorForMembers(_name, _position, _mail, _phone){
	this.name = _name;
	this.position = _position;
	this.mail = _mail;
	this.phone = _phone;
}

ConstructorForMembers.prototype.render = function(){
	
	var wrap = document.createElement("div");
	wrap.setAttribute("class", "members__wrap");
	
	var overWrap = document.createElement("div");
	overWrap.setAttribute("class", "members__wrap-overWrap");

	var imagesWrap = document.createElement("div");
	imagesWrap.setAttribute("class", "members__wrap-imagesWrap");

	var images = document.createElement("div");
	images.setAttribute("class", "members__wrap-imagesWrap-images");
	
	var facebook = document.createElement("a");
	facebook.setAttribute("href", "#");
	var facebookIcon = document.createElement("img");
	facebookIcon.setAttribute("src", "images/facebook.png");
	facebookIcon.style.cssText = "top: 4px; left: 8px;";
	facebook.appendChild(facebookIcon);
	facebook.addEventListener("mouseover", function(){
		facebook.style.backgroundColor = "#363636";
		facebookIcon.setAttribute("src", "images/facebookWhite.png");
		facebook.style.zIndex = "10";
	});
	facebook.addEventListener("mouseout", function(){
		facebook.style.backgroundColor = "#E4E4E4";
		facebookIcon.setAttribute("src", "images/facebook.png");
		facebook.style.zIndex = "1";
	});

	var twitter = document.createElement("a");
	twitter.setAttribute("href", "#");
	var twitterIcon = document.createElement("img");
	twitterIcon.setAttribute("src", "images/twitter.png");
	twitterIcon.style.cssText = "top: 5px; left: 5.5px;";
	twitter.appendChild(twitterIcon);
	twitter.addEventListener("mouseover", function(){
		twitter.style.backgroundColor = "#363636";
		twitterIcon.setAttribute("src", "images/twitterWhite.png");
		twitter.style.zIndex = "10";
	});
	twitter.addEventListener("mouseout", function(){
		twitter.style.backgroundColor = "#E4E4E4";
		twitterIcon.setAttribute("src", "images/twitter.png");
		twitter.style.zIndex = "1";
	});
	
	var gplus = document.createElement("a");
	gplus.setAttribute("href", "#");
	var gplusIcon = document.createElement("img");
	gplusIcon.setAttribute("src", "images/google.png");
	gplusIcon.style.cssText = "top: 5px; left: 5px;";
	gplus.appendChild(gplusIcon);
	gplus.addEventListener("mouseover", function(){
		gplus.style.backgroundColor = "#363636";
		gplusIcon.setAttribute("src", "images/googleWhite.png");
		gplus.style.zIndex = "10";
	});
	gplus.addEventListener("mouseout", function(){
		gplus.style.backgroundColor = "#E4E4E4";
		gplusIcon.setAttribute("src", "images/google.png");
		gplus.style.zIndex = "1";
	});
	
	var vimeo = document.createElement("a");
	vimeo.setAttribute("href", "#");
	var vimeoIcon = document.createElement("img");
	vimeoIcon.setAttribute("src", "images/vimeo.png");
	vimeoIcon.style.cssText = "top: 4px; left: 5px;";
	vimeo.appendChild(vimeoIcon);
	vimeo.addEventListener("mouseover", function(){
		vimeo.style.backgroundColor = "#363636";
		vimeoIcon.setAttribute("src", "images/vimeoWhite.png");
		vimeo.style.zIndex = "10";
	});
	vimeo.addEventListener("mouseout", function(){
		vimeo.style.backgroundColor = "#E4E4E4";
		vimeoIcon.setAttribute("src", "images/vimeo.png");
		vimeo.style.zIndex = "1";
	});
	
	var dribbble = document.createElement("a");
	dribbble.setAttribute("href", "#");
	var dribbbleIcon = document.createElement("img");
	dribbbleIcon.setAttribute("src", "images/dribbble.png");
	dribbbleIcon.style.cssText = "top: 4px; left: 5px;";
	dribbble.appendChild(dribbbleIcon);
	dribbble.addEventListener("mouseover", function(){
		dribbble.style.backgroundColor = "#363636";
		dribbbleIcon.setAttribute("src", "images/dribbbleWhite.png");
		dribbble.style.zIndex = "10";
	});
	dribbble.addEventListener("mouseout", function(){
		dribbble.style.backgroundColor = "#E4E4E4";
		dribbbleIcon.setAttribute("src", "images/dribbble.png");
		dribbble.style.zIndex = "1";
	});

	images.appendChild(facebook);
	images.appendChild(twitter);
	images.appendChild(gplus);
	images.appendChild(vimeo);
	images.appendChild(dribbble);
	imagesWrap.appendChild(images);

	var name = document.createElement("p");
	name.textContent = this.name;
	name.setAttribute("class", "members__wrap-name");

	var info = document.createElement("div");
	info.setAttribute("class", "members__wrap-info");

	var position = document.createElement("p");
	position.textContent = this.position;
	position.setAttribute("class", "position");

	var mailWrap = document.createElement("div");
	mailWrap.setAttribute("class", "mailWrap");
	var iconMailWrap = document.createElement("div");
	iconMailWrap.setAttribute("class", "mailWrap__iconMailWrap");
	var iconMail = document.createElement("img");
	iconMail.setAttribute("src", "images/mail.png");
	iconMail.setAttribute("class", "mailWrap__iconMailWrap-iconMail");
	var mail = document.createElement("p");
	mail.setAttribute("class", "mailWrap__mail");
	mail.textContent = this.mail;
	iconMailWrap.appendChild(iconMail);
	mailWrap.appendChild(iconMailWrap);
	mailWrap.appendChild(mail);

	var phoneWrap = document.createElement("div");
	phoneWrap.setAttribute("class", "phoneWrap");
	var iconPhoneWrap = document.createElement("div");
	iconPhoneWrap.setAttribute("class", "phoneWrap__iconPhoneWrap");
	var iconPhone = document.createElement("img");
	iconPhone.setAttribute("src", "images/phone.png");
	iconPhone.setAttribute("class", "phoneWrap__iconPhoneWrap-iconPhone");
	var phone = document.createElement("p");
	phone.setAttribute("class", "phoneWrap__phone");
	phone.textContent = this.phone;
	iconPhoneWrap.appendChild(iconPhone);
	phoneWrap.appendChild(iconPhoneWrap);
	phoneWrap.appendChild(phone);

	wrap.addEventListener("mouseover", function(){
		overWrap.style.display = "none";
		name.style.backgroundColor = "#383838";
		mail.style.color = "#00A99D";
	});
	wrap.addEventListener("mouseout", function(){
		overWrap.style.display = "block";
		name.style.backgroundColor = "#00A99D";
		mail.style.color = "#AAAAAA";
	});

	info.appendChild(position);
	info.appendChild(mailWrap);
	info.appendChild(phoneWrap);

	wrap.appendChild(imagesWrap);
	wrap.appendChild(overWrap);
	wrap.appendChild(name);
	wrap.appendChild(info);

	return wrap
}

var members = [ 
	["ALEXIS SIMPSON", "CEO & Developer", "a.simpson@unique.com", "+1 911 (77) 222-1111"],
	["STEVEN COLE", "User Interface Designer", "s.cole@unique.com", "+1 911 (77) 222-1111"],
	["FRANK PIENER", "Sales Manager", "f.piener@unique.com", "+1 911 (77) 222-1111"],
	["ASHLEY LENNON", "IT Specialist", "a.lennon@unique.com", "+1 911 (77) 222-1111"],
	["SASHA ZAICEV", "Backend developer", "sasha.zaicev@gmail.com", "+1 911 (77) 222-1111"],
	["KRISTINA KOLB", "HR Manager", "kris.kolb@unique.com", "+1 911 (77) 222-1111"],
	["JIM SMITT", "Marketer", "j.smitt@unique.com", "+1 911 (77) 222-1111"],
	["ANTON KAPILOV", "Backend developer", "a.kapilov@unique.com", "+1 911 (77) 222-1111"],
	["VLAD KIRDUN", "Frontend Developer", "kirdun.vlad@mail.ru", "+1 911 (77) 222-1111"],
	["MAKS RUSHAKOV", "Sales Manager", "maks.rushakov@gmail.com", "+1 911 (77) 222-1111"],
	["SASHA AKULOV", "User Interface Designer", "s.akulov@gmail.com", "+1 911 (77) 222-1111"],
	["VIKA BUGAENKO", "UX/UI Designer", "v.bugaenko@mail.ru", "+1 911 (77) 222-1111"]
];

var member = [];

for(var i = 0; i < members.length; i++) {
	member.push( new ConstructorForMembers( members[i][0],  members[i][1], members[i][2], members[i][3] ));
};

if(html.clientWidth > 1199) {
	var it = 0;
	if(member.length > 4) {
		for(var i = 0; i < 4; i++) {
			mainDivForMembers.appendChild( member[i].render() );
			it++;
		};
	}
	else {
		for(var i = 0; i < member.length; i++) {
			mainDivForMembers.appendChild( member[i].render() );
		};
	}

	var arrowRight = document.getElementsByClassName("team-members__arrow_right")[0];
	arrowRight.addEventListener("click", function(){
		if(it+4 <= member.length){
			var itt = it+4;
			mainDivForMembers.innerHTML = "";	
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});

	var arrowLeft = document.getElementsByClassName("team-members__arrow_left")[0];
	arrowLeft.addEventListener("click", function(){
		if(it-8 >= 0){
			mainDivForMembers.innerHTML = "";
			it -= 8;
			var itt = it + 4;
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});
}
else if(html.clientWidth > 991 && html.clientWidth < 1200){
	var it = 0;
	if(member.length > 3) {
		for(var i = 0; i < 3; i++) {
			mainDivForMembers.appendChild( member[i].render() );
			it++;
		};
	}
	else {
		for(var i = 0; i < member.length; i++) {
			mainDivForMembers.appendChild( member[i].render() );
		};
	}

	var arrowRight = document.getElementsByClassName("team-members__arrow_right")[0];
	arrowRight.addEventListener("click", function(){
		if(it+3 <= member.length){
			var itt = it+3;
			mainDivForMembers.innerHTML = "";	
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});

	var arrowLeft = document.getElementsByClassName("team-members__arrow_left")[0];
	arrowLeft.addEventListener("click", function(){
		if(it-6 >= 0){
			mainDivForMembers.innerHTML = "";
			it -= 6;
			var itt = it + 3;
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});
}
else if(html.clientWidth > 767 && html.clientWidth < 992){
	var it = 0;
	if(member.length > 2) {
		for(var i = 0; i < 2; i++) {
			mainDivForMembers.appendChild( member[i].render() );
			it++;
		};
	}
	else {
		for(var i = 0; i < member.length; i++) {
			mainDivForMembers.appendChild( member[i].render() );
		};
	}

	var arrowRight = document.getElementsByClassName("team-members__arrow_right")[0];
	arrowRight.addEventListener("click", function(){
		if(it+2 <= member.length){
			var itt = it+2;
			mainDivForMembers.innerHTML = "";	
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});

	var arrowLeft = document.getElementsByClassName("team-members__arrow_left")[0];
	arrowLeft.addEventListener("click", function(){
		if(it-4 >= 0){
			mainDivForMembers.innerHTML = "";
			it -= 4;
			var itt = it + 2;
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});
}
else {
	var it = 0;
	if(member.length > 1) {
		for(var i = 0; i < 1; i++) {
			mainDivForMembers.appendChild( member[i].render() );
			it++;
		};
	}
	else {
		for(var i = 0; i < member.length; i++) {
			mainDivForMembers.appendChild( member[i].render() );
		};
	}

	var arrowRight = document.getElementsByClassName("team-members__arrow_right")[0];
	arrowRight.addEventListener("click", function(){
		if(it+1 <= member.length){
			var itt = it+1;
			mainDivForMembers.innerHTML = "";	
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});

	var arrowLeft = document.getElementsByClassName("team-members__arrow_left")[0];
	arrowLeft.addEventListener("click", function(){
		if(it-2 >= 0){
			mainDivForMembers.innerHTML = "";
			it -= 2;
			var itt = it + 1;
			for(var i = it; i < itt; i++) {
				mainDivForMembers.appendChild( member[i].render() );
				it++;
			};
		}
	});
}

//____________________________ quotes ____________________________

var mainDivForQuotes = document.getElementsByClassName("quotes-list")[0];
function ConstructorForQuotes(_name, _position, _comment){
	this.name = _name;
	this.position = _position;
	this.comment = _comment;
}

ConstructorForQuotes.prototype.render = function(){

	var wrap = document.createElement("div");
	wrap.setAttribute("class", "quotes-list__wrap");

	var name = document.createElement("p");
	name.setAttribute("class", "quotes-list__wrap-name");
	name.innerHTML = this.name + "<span class='quotes-list__wrap-name-position'> - " + this.position + "</span>"; 

	var comment = document.createElement("p");
	comment.setAttribute("class", "quotes-list__wrap-comment");
	comment.textContent = this.comment;

	wrap.appendChild(name);
	wrap.appendChild(comment);

	return wrap
}

var quotes = [ 
	["ALEXIS SIMPSON", "CEO & Developer", "Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sigittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis."],
	["FRANK PIENER", "Sales Manager", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam expedita ab explicabo, dicta sequi quos dolorum veniam eius similique recusandae officiis voluptates consequatur maxime adipisci voluptatem tenetur, facere praesentium, sint!"],
	["ASHLEY LENNON", "IT Specialist", "Ipsam expedita ab explicabo, dicta sequi quos dolorum veniam eius similique recusandae officiis voluptates consequatur maxime adipisci voluptatem tenetur, facere praesentium, sint!"]
];

var quote = [];

for(var i = 0; i < quotes.length; i++) {
	quote.push( new ConstructorForQuotes( quotes[i][0], quotes[i][1], quotes[i][2] ));
};

for(var i = 0; i < 1; i++) {
	mainDivForQuotes.appendChild( quote[i].render() );
};

var itQuotes = 1;
var quotesArrowRight = document.getElementsByClassName("quotes__arrow_right")[0];
quotesArrowRight.addEventListener("click", function(){
	if(itQuotes+1 <= quote.length){
		var itt = itQuotes + 1;
		mainDivForQuotes.innerHTML = "";	
		for(var i = itQuotes; i < itt; i++) {
			mainDivForQuotes.appendChild( quote[i].render() );
		};
		itQuotes++;
	}
});

var quotesArrowLeft = document.getElementsByClassName("quotes__arrow_left")[0];
quotesArrowLeft.addEventListener("click", function(){
	if(itQuotes-2 >= 0){
		mainDivForQuotes.innerHTML = "";
		itQuotes -= 2;
		var itt = itQuotes + 1;
		for(var i = itQuotes; i < itt; i++) {
			mainDivForQuotes.appendChild( quote[i].render() );
		};
		itQuotes++;
	}
});

//____________________________ clients ____________________________

var mainDivForClients = document.getElementsByClassName("clients-list")[0];
function ConstructorForClients(_image){
	this.image = _image;
}

ConstructorForClients.prototype.render = function(){

	var wrap = document.createElement("div");
	wrap.setAttribute("class", "clients-list__wrap");

	var image = document.createElement("img");
	image.setAttribute("src", this.image);
	image.setAttribute("class", "clients-list__wrap-image");

	var transparency = document.createElement("div");
	transparency.setAttribute("class", "clients-list__wrap-transparency");

	wrap.addEventListener("mouseover", function(){
		transparency.style.opacity = "0";
	});
	wrap.addEventListener("mouseout", function(){
		transparency.style.opacity = ".7";
	});

	wrap.appendChild(image);
	wrap.appendChild(transparency);

	return wrap
}

var clients = [ 
	["images/scenthound.png"],
	["images/vividways.png"],
	["images/hobnobjobs.png"],
	["images/burnabox.png"],
	["images/ibm.png"],
	["images/polartec.png"]
];

var client = [];

for(var i = 0; i < clients.length; i++) {
	client.push( new ConstructorForClients( clients[i][0] ));
};

if(html.clientWidth > 1199){
	var itClients = 0;
	if(client.length > 4) {
		for(var i = 0; i < 4; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
		itClients++;
	}
	else {
		for(var i = 0; i < client.length; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
	}

	var clientsArrowRight = document.getElementsByClassName("clients__arrow_right")[0];
	clientsArrowRight.addEventListener("click", function(){
		if(itClients+4 <= client.length){
			var itt = itClients + 4;
			mainDivForClients.innerHTML = "";	
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});

	var clientsArrowLeft = document.getElementsByClassName("clients__arrow_left")[0];
	clientsArrowLeft.addEventListener("click", function(){
		if(itClients-2 >= 0){
			mainDivForClients.innerHTML = "";
			itClients -= 2;
			var itt = itClients + 4;
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});
}
else if(html.clientWidth > 991 && html.clientWidth < 1200) {
	var itClients = 0;
	if(client.length > 3) {
		for(var i = 0; i < 3; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
		itClients++;
	}
	else {
		for(var i = 0; i < client.length; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
	}

	var clientsArrowRight = document.getElementsByClassName("clients__arrow_right")[0];
	clientsArrowRight.addEventListener("click", function(){
		if(itClients+3 <= client.length){
			var itt = itClients + 3;
			mainDivForClients.innerHTML = "";	
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});

	var clientsArrowLeft = document.getElementsByClassName("clients__arrow_left")[0];
	clientsArrowLeft.addEventListener("click", function(){
		if(itClients-2 >= 0){
			mainDivForClients.innerHTML = "";
			itClients -= 2;
			var itt = itClients + 3;
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});
}
else if(html.clientWidth > 767 && html.clientWidth < 992) {
	var itClients = 0;
	if(client.length > 2) {
		for(var i = 0; i < 2; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
		itClients++;
	}
	else {
		for(var i = 0; i < client.length; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
	}

	var clientsArrowRight = document.getElementsByClassName("clients__arrow_right")[0];
	clientsArrowRight.addEventListener("click", function(){
		if(itClients+2 <= client.length){
			var itt = itClients + 2;
			mainDivForClients.innerHTML = "";	
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});

	var clientsArrowLeft = document.getElementsByClassName("clients__arrow_left")[0];
	clientsArrowLeft.addEventListener("click", function(){
		if(itClients-2 >= 0){
			mainDivForClients.innerHTML = "";
			itClients -= 2;
			var itt = itClients + 2;
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});
}
else{
	var itClients = 0;
	if(client.length > 1) {
		for(var i = 0; i < 1; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
		itClients++;
	}
	else {
		for(var i = 0; i < client.length; i++) {
			mainDivForClients.appendChild( client[i].render() );
		};
	}

	var clientsArrowRight = document.getElementsByClassName("clients__arrow_right")[0];
	clientsArrowRight.addEventListener("click", function(){
		if(itClients+1 <= client.length){
			var itt = itClients + 1;
			mainDivForClients.innerHTML = "";	
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});

	var clientsArrowLeft = document.getElementsByClassName("clients__arrow_left")[0];
	clientsArrowLeft.addEventListener("click", function(){
		if(itClients-2 >= 0){
			mainDivForClients.innerHTML = "";
			itClients -= 2;
			var itt = itClients + 1;
			for(var i = itClients; i < itt; i++) {
				mainDivForClients.appendChild( client[i].render() );
			};
			itClients++;
		}
	});
}

//_________________________ price-tables _________________________

var mainDivForPrices = document.getElementsByClassName("prices")[0];
function ConstructorForPrices(_plan, _wholePart, _fraction, _projects, _storage, _users, _bandwith, _security){
	this.plan = _plan;
	this.wholePart = _wholePart;
	this.fraction = _fraction;
	this.projects = _projects;
	this.storage = _storage;
	this.users = _users;
	this.bandwith = _bandwith;
	this.security = _security;
}

ConstructorForPrices.prototype.render = function(){

	var wrap = document.createElement("div");
	wrap.setAttribute("class", "prices__wrap");

	var plan = document.createElement("div");
	plan.textContent = this.plan;
	plan.setAttribute("class", "prices__wrap-plan");

	var dollars = document.createElement("div");
	dollars.setAttribute("class", "prices__wrap-dollars");
	dollars.innerHTML = "<span class='prices__wrap-dollars-icon'>$</span><span class='prices__wrap-dollars-wholePart'>" + this.wholePart + "</span><span class='prices__wrap-dollars-fraction'>" + this.fraction + "</span><div class='prices__wrap-dollars-rhombus'></div> Monthly";

	var list = document.createElement("ul");
	list.innerHTML = "<li>" + this.projects + "</li><li>" + this.storage + "</li><li>" + this.users + "</li><li>" + this.bandwith + "</li><li>" + this.security + "</li>";
	list.setAttribute("class", "prices__wrap-list");

	var button = document.createElement("button");
	button.textContent = "SIGN UP NOW";
	button.setAttribute("class", "prices__wrap-button");

	wrap.addEventListener("mouseover", function(){
		plan.style.backgroundColor = "#00A99D";
	});
	wrap.addEventListener("mouseout", function(){
		plan.style.backgroundColor = "#383838";
	});

	wrap.appendChild(plan);
	wrap.appendChild(dollars);
	wrap.appendChild(list);
	wrap.appendChild(button);

	return wrap
}

var prices = [
	["STANDARD PLAN", 19, 99, "5 Projects", "5 GB Storage", "Unlimited Users", "10 GB Bandwith", "Enhanced Security"], 
	["PREMIUM PLAN", 29, 99, "10 Projects", "15 GB Storage", "Unlimited Users", "20 GB Bandwith", "Enhanced Security"],
	["ADVANCED PLAN", 49, 99, "15 Projects", "30 GB Storage", "Unlimited Users", "50 GB Bandwith", "Enhanced Security"], 
	["ULTIMATE PLAN", 99, 99, "Unlimited Projects", "Unlimited Storage", "Unlimited Users", "Unlimited Bandwith", "Enhanced Security"]
];

var price = [];

for(var i = 0; i < prices.length; i++) {
	price.push( new ConstructorForPrices( prices[i][0], prices[i][1], prices[i][2], prices[i][3], prices[i][4], prices[i][5], prices[i][6], prices[i][7] ));
};

for(var i = 0; i < price.length; i++) {
	mainDivForPrices.appendChild( price[i].render() );
};

//_________________________ footer _________________________

var map;
window.onload = function() {
	// Устанавливаем некоторые параметры карты. В данном примере 
	// устанавливаются начальный уровень масштабирования и тип карты. 
	// Информацию о других параметрах см. в документации по Google Maps.
	var myOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	
	// Создаем карту, используя установленные выше параметры
	map = new google.maps.Map(document.getElementById("geolocation__map"), myOptions);
	
	// Пытаемся определить местоположение пользователя
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
	}
	else {
		goToDefaultLocation();
	}
}

function geolocationSuccess(position) {
	
  // Преобразуем местоположение в объект LatLng
	var location = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	
	// Отображаем эту точку на карте
	map.setCenter(location);
	
	var marker = new google.maps.Marker({
    position: location,
    title: "Your location"
	});

	marker.setMap(map);
}

function geolocationFailure(positionError) {
	goToDefaultLocation();
}

function goToDefaultLocation() {
	// Примерные координаты центра Минска
	var minsk = new google.maps.LatLng(53.904454,27.559190);
	map.setCenter(minsk);
}

var geolocationWrap = document.getElementsByClassName("geolocation")[0];
var geolocationIterator = 0;
var form = document.getElementsByTagName("form")[0];
var mailIcon = document.createElement("img");
mailIcon.setAttribute("src", "images/formIcon.png");
mailIcon.setAttribute("class", "geolocation__mailIcon");

mailIcon.addEventListener("click", function(){
	if(geolocationIterator == 0){
		form.style.display = "block";
		geolocationIterator++;
	}
	else{
		form.style.display = "none";
		geolocationIterator--;
	}
});

geolocationWrap.appendChild(mailIcon);

if(html.clientWidth < 992){
	form.style.display = "none";
	mailIcon.style.display = "block";
}
else{
	mailIcon.style.display = "none";
}