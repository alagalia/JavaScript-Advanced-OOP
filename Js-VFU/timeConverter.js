function attachEventsListeners() {
	let daysInput = document.getElementById('days');
	let daysBtn = document.getElementById('daysBtn');

	let hoursInput = document.getElementById('hours');
	let hoursBtn = document.getElementById('hoursBtn');

	let minutesInput = document.getElementById('minutes');
	let minutesBtn = document.getElementById('minutesBtn');

	let secondsInput = document.getElementById('seconds');
	let secondsBtn = document.getElementById('secondsBtn');

	daysBtn.addEventListener('click', function (){
		let daysInputVal = daysInput.value;
		hoursInput.value = daysInputVal*24;
		minutesInput.value = daysInputVal*1440;
		secondsInput.value = daysInputVal*86400 ;
	});

	hoursBtn.addEventListener('click', function (){
		let hoursInputVal = hoursInput.value;
		daysInput.value = hoursInputVal/24;
		minutesInput.value = daysInput.value*1440;
		secondsInput.value = daysInput.value*86400 ;
	});

	minutesBtn.addEventListener('click', function (){
		let minutesInputVal = minutesInput.value;
		hoursInput.value = minutesInputVal/60;
		daysInput.value = hoursInput.value/24;
		secondsInput.value = daysInput.value*86400 ;
	});

	secondsBtn.addEventListener('click', function (){
		let secondsInputVal = secondsInput.value;
		minutesInput.value = secondsInputVal/60;
		hoursInput.value = secondsInputVal/3600;
		daysInput.value = hoursInput.value/24;
	});
}
