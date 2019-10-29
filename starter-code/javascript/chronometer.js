class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId;
	};

	startClick() {
		this.intervalId = setInterval(function () {
			this.currentTime += 1;
			printTime(this);
		}, 1000);
	};

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		return (this.currentTime - (this.getMinutes() * 60))
	}

	twoDigitsNumber(anyFormat) {
		if (anyFormat < 10) {
			return ("0" + anyFormat);
		} else {
			return anyFormat.toString();
		};
	}

	resetClick() {
		this.currentTime = 0;
		this.intervalId = 0;
	}

	stopClick() {
		clearInterval(this.intervalId);
		delete this.intervalId;
	}

	// stopClick() {
	// ..
	// }

	// splitClick() {
	// ..
	// }
}



/*
Save interval id in variable: 
const intervalId = setInterval(() => {
  console.log(Date.now() - start);
}, 1000);

Stop interval after 10 seconds:
setTimeOut(() => {
  clearInterval(intervalID);
}, 10000);
*/