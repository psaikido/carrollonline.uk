const navKites = document.querySelector('.nav-kites');
const kites = document.querySelector('.kites');


navKites.addEventListener('click', function(event) {
	this.style.setProperty( 'transform', 'translateX(200px) translateZ(400px)');

	kites.style.setProperty('transform', 'translateX(0) translateZ(100px)');
});


kites.addEventListener('click', function(event) {
	this.style.setProperty( 'transform', 'translateX(-400px) translateZ(-600px)');

	navKites.style.setProperty('transform', 'translateX(0) translateZ(100px)');
});
