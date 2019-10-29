class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId;
	};

	startClick() {
    let currentTime = Date.now();
	  let this.interval = setInterval(() => {
	    this.currentTime = currentTime +1
	  }), 1000)
	};
	// The setInterval will be assigned to our intervalId property, this way we will be able to clear it later on.

	// getMinutes() {
	//  let minutes = 0;
	//  minutes = this.currentTime/60;
	// }

	// getSeconds() {
	//  let seconds = 0;
	//  seconds = this.currentTime-minutes*60;
	// }

	// twoDigitsNumber() {
	// ..
	// }

	// stopClick() {
	// ..
	// }

	// resetClick() {
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