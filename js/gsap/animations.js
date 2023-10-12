function modeSwitcher() {
	document.body.classList.toggle('dark-mode');
}

let timeline = gsap.timeline({
	defaults: {
		ease: "power4.inOut",
		duration: 2
	}
});

timeline.from('section h1', {x: '5000px'});
