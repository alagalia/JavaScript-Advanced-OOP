function attachEventsListeners() {
	let btn = document.getElementById('convert');
	btn.addEventListener('click', convert);
	let dementions = {
		'km': 1000,
		'm': 1,
		'cm': 0.01,
		'mm': 0.001,
		'mi': 1609.34,
		'yrd': 0.9144,
		'ft': 0.3048,
		'in': 0.0254
	};

	function convert() {
		let inputUnits = document.getElementById('inputUnits');
		let inputDistance = Number(document.getElementById('inputDistance').value);

		let outputDistance = document.getElementById('outputDistance');
		let outputUnits = document.getElementById('outputUnits');

		outputDistance.value = inputDistance  * dementions[inputUnits.value] / dementions[outputUnits.value]

	}
}

