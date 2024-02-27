var slideCard = 1;
var cardchange = setInterval(changevalShowCard, 5000, 1);
var formcontact = document.getElementById("email-form");

var navbar = document.getElementsByClassName("headernav");
// var navPosition = navbar.getBoundingClientRect().top;
var navbarLinks = document.querySelectorAll("nav a");

// console.log("Nav positon " + navPosition);

// window.addEventListener("scroll", (event) => {
// 	let scrollPosition = window.scrollY;
// 	console.log("scroll " + scrollPosition);
// 	if (scrollPosition > navPosition) {
// 		navbar.classList.add("sticky");
// 	} else {
// 		navbar.classList.remove("sticky");
// 	}

// 	navbarLinks.forEach(link => {
// 		let section = document.querySelector(link.hash);
// 		if (scrollPosition + 150 > section.offsetTop && scrollPosition + 150 < section.offsetTop + section.offsetHeight) {
// 			link.classList.add("active");
// 		} else {
// 			link.classList.remove("active");
// 		}
// 	});
// });

const imgContent = document.querySelector('#Image-Desc'),
	txtContent = document.querySelector('#Text-Desc');
const configuration = {
	threshold: 0.3,
	rootMargin: '0px 0px -30% 0px',
};
const imgObserver = new IntersectionObserver(entries => {
	const [{isIntersecting}] = entries
	if(isIntersecting) {
		imgContent.classList.remove('Image-Desc-rm');
	}
	else {
		imgContent.classList.add('Image-Desc-rm');
	}
}, configuration);
const txtObserver = new IntersectionObserver(entries => {
	const [{isIntersecting}] = entries
	if(isIntersecting) {
		txtContent.classList.remove('Text-Desc-rm');
	}
	else {
		txtContent.classList.add('Text-Desc-rm');
	}
}, configuration);

window.addEventListener('load', () => {
	if('IntersectionObserver' in window) {
		imgObserver.observe(imgContent);
		txtObserver.observe(txtContent);
	}
},false);
$(document).ready(function() {
	window.setInterval(function() {
		$('.wave').toggleClass('effectmve');
		$('.mail').toggleClass('mailmove');
		$('.hand').toggleClass('handmove');
	}, 2750)
});

var topnav = document.querySelector(".flex-headernav");
var iconnav = document.querySelector(".icon-nav");
const buttoniconnav = () => {
	topnav.classList.toggle("responsive");
	iconnav.classList.toggle("icon-nav-active");
};

iconnav.addEventListener("click", () => buttoniconnav());

const listhighlight = document.querySelectorAll(".highlight").
	forEach(text => {
		$(text).css({'color':getRandomColor()});
});
const listbuttonskill = document.querySelectorAll(".button-skill");
listbuttonskill[0].classList.add("active");
listbuttonskill.forEach((button, index) => {
	button.addEventListener("click", function() {
		currentShowCard(index + 1);
		clearTime();
	})
});
const buttonprev = document.querySelector(".fa-arrow-left").
addEventListener("click", function () {
	showCard(slideCard -= 1);
	clearTime();
});
const buttonnext = document.querySelector(".fa-arrow-right").
addEventListener("click", function () {
	showCard(slideCard += 1);
	clearTime();
});
const btnsendmail = document.getElementById("submit").
addEventListener("click", function( event ) {
	sendemail();
}); 

function getRandomColor() {
	var letters = '0123456789ABCDEF';
    var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	  }
	return color;
}
function changevalShowCard(n) {
	showCard(slideCard += n);
}
function currentShowCard(n) {
	showCard(slideCard = n);
}
function clearTime(){
	clearInterval(cardchange);
	cardchange = setInterval(changevalShowCard, 5000, 1);
}
function showCard(n) {
	// var i;
	var x = document.getElementsByClassName("slider-content");
	var y = document.querySelectorAll(".button-skill");

	if(n > x.length) {slideCard = 1}
	if(n < 1) {slideCard = x.length}
	for (i = 0; i < x.length; i++) {
		y[i].classList.remove("active");
	}

	var position = (slideCard - 1) * 100;
	y[slideCard - 1].classList.add("active");
	$(x).css({'transform':'translateX(-' + position + '%)'});
}
function sendemail() {

	var sender = document.forms["email-form"]["fname"].value;
	var rmail = "kittipong.ktrcr@gmail.com";
	var subject = document.forms["email-form"]["subject"].value;
	var body = document.getElementById("message").value;
	var toggle = true;

	if(sender == " " || sender == "") {
		toggle = false;
	} else if (subject == " " || subject == "") {
		toogle = false;
	}
	if (toggle == true) {
		formcontact.addEventListener("submit", function(event) {
			event.preventDefault();
			location.href = "mailto:" + rmail + "?" +
			"subject=" + subject + "&" +
			"body=" + body + "%0D%0A%0D%0A" + sender;
		});
	}
	else {
		return false;
	}
}