$('.island-hugle').hover(function () {
	flip('.island-desc-hugle');
})

$('.island-mantrasphere').hover(function () {
	flip('.island-desc-mantrasphere');
})

$('.island-archive').hover(function () {
	flip('.island-desc-archive');
})

$('.island-chan').hover(function () {
	flip('.island-desc-chan');
})

function flip($txt) {
	$($txt).toggle();
	$('.default-desc').toggle();
}
