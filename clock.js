"use strict";

$(document).ready(function () {
	// create the clock object
	const clock = createClock(
		$("#hours"),
		$("#minutes"),
		$("#seconds"),
		$("#ampm")
	);
	// create the stopwatch object
	const stopwatch = createStopwatch(
		$("#s_minutes"),
		$("#s_seconds"),
		$("#s_ms")
	);

	$("#start").click(() => {
		// do first tick of stop watch and then set interval timer to tick
		// stop watch every 10 milliseconds. Store timer object in stopwatchTimer
		// variable so next two functions can stop timer.
		stopwatch.start();
	});

	$("#stop").click(() => {
		// stop timer
		stopwatch.stop();
	});

	$("#reset").click(() => {
		// stop timer
		stopwatch.reset();
	});

	// set initial clock display and then set interval timer to display
	// new time every second. Don't store timer object because it
	clock.start();
}); // end ready()
