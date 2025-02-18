"use strict";

const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
	// private state
	let stopwatchTimer = null;
	const padSingleDigit = (num) => num.toString().padStart(2, "0");
	let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

	/**
	 * Method that do first tick of stop watch.
	 */
	const tickStopwatch = () => {
		// increment milliseconds by 10 milliseconds
		elapsed.milliseconds = elapsed.milliseconds + 10;

		// if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
		if (elapsed.milliseconds == 1000) {
			elapsed.seconds++;
			elapsed.milliseconds = 0;
		}
		// if seconds total 60, increment minutes by one and reset seconds to zero
		if (elapsed.seconds == 60) {
			elapsed.minutes++;
			elapsed.seconds = 0;
		}

		//display new stopwatch time
		$(minuteSpan).text(padSingleDigit(elapsed.minutes));
		$(secondSpan).text(padSingleDigit(elapsed.seconds));
		$(msSpan).text(elapsed.milliseconds);
	};

	// public methods
	return {
		/**
		 * Method that do first tick of stop watch and then set interval timer to tick
		 * stop watch every 10 milliseconds. Store timer object in stopwatchTimer
		 * variable so next two methods can stop timer.
		 * @returns
		 */
		start() {
			tickStopwatch();
			stopwatchTimer = setInterval(tickStopwatch, 10);
			return this;
		},
		/**
		 * Method that stops the stopwatch by clearing the interval.
		 * @returns
		 */
		stop() {
			// stop timer
			clearInterval(stopwatchTimer);
			return this;
		},
		/**
		 * Method that stops the stopwatch by clearing the interval
		 * and then reset the values of the stopwatch and elapsed object.
		 * @returns
		 */
		reset() {
			// stop timer
			clearInterval(stopwatchTimer);

			// clear elapsed object and stopwatch display
			elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

			$(minuteSpan).text("00");
			$(secondSpan).text("00");
			$(msSpan).text("000");
			return this;
		},
	};
};
