const scene = document.querySelector('.scene');
const navKites = document.querySelector('.nav-kites');
const navPoems = document.querySelector('.nav-poems');
const kites = document.querySelector('.kites');
const poems = document.querySelector('.poems');


navKites.addEventListener('click', function(event) {
	scene.style.setProperty('transform', 
		'translateX(350px) translateY(-150px) translateZ(1000px) ');
});


kites.addEventListener('click', function(event) {
	scene.style.setProperty('transform', 
		'translateX(0px) translateY(0px) translateZ(0px) ');
});

navPoems.addEventListener('click', function(event) {
	scene.style.setProperty('transform', 
		'translateX(-400px) translateY(-150px) translateZ(1000px) ');
});

poems.addEventListener('click', function(event) {
	scene.style.setProperty('transform', 
		'translateX(0px) translateY(0px) translateZ(0px) ');
});
