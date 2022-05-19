let bulb = document.getElementById('bulb');

bulb.addEventListener('click', () => {
	// I could do this. and it would work, asuming that the
	// 'on' class styles came after the
	// 'off' styles in the stylesheet:

	// bulb.classList.toggle('on');

	// This works for all cases
	if (bulb.classList.contains('off')) {
		bulb.classList.remove('off');
		bulb.classList.add('on');
	} else {
		bulb.classList.remove('on');
		bulb.classList.add('off');
	}
});
