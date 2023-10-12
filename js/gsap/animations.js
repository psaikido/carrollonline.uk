function modeSwitcher() {
	document.body.classList.toggle('dark-mode');
}

// let timeline = gsap.timeline({
// 	defaults: {
// 		ease: "Power0.inOut",
// 		duration: 1
// 	}
// });
//
// timeline.from(
// 	'section h1', 1.5, {x: '-150px', opacity: 0, ease: 'Elastic.easeOut'}
// );
// timeline.from(
// 	'section ul', 1.5, {x: '-150px', opacity: 0, ease: 'Elastic.easeOut'}
// );
// timeline.from(
// 	'section img', 2, {opacity: 0, ease: 'Power0.easeIn'}
// );

TweenMax.from(
 	'section h1', 1.5, {x: '-150px', opacity: 0, ease: 'Elastic.easeOut'}
);
TweenMax.from(
	'section ul', 1.5, {x: '-150px', opacity: 0, ease: 'Elastic.easeOut', delay: .5}
);
TweenMax.from(
	'section img', 2, {opacity: 0, ease: 'Power0.easeIn', delay: 1}
);
