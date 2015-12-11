$(function() {
	$(".js-pomodoro").click(function() {
		$("#timer_pomodoro").createTimer({
			time_in_seconds: 1500,
			autostart: true
		});
		resetPauseButton();
		addTimerToLog('Pomodoro 25 mins', 'danger');
	});
	$(".js-short-break").click(function() {
		$("#timer_shortbreak").createTimer({
			time_in_seconds: 300,
			autostart: true
		});
		resetPauseButton();
		addTimerToLog('Short break 5 mins', 'info');
	});
	$(".js-long-break").click(function() {
		$("#timer_longbreak").createTimer({
			time_in_seconds: 600,
			autostart: true
		});
		resetPauseButton();
		addTimerToLog('Long break 10 mins', 'primary');
	});
	$("#timer_toggle").click(timerToggle);
	$("#timer_reset").click(resetTimer);
});

function countdownAlert() {
	var sound = new Howl({
		urls: ['sounds/alarmwatch.mp3']
	}).play();
	changeDocumentTitle();
}

function timerToggle() {
	var timer = $("#timer_default");
	var btnTimerToggle = $("#timer_toggle");

	if (timer.data('countdown.state') == 'running') {
		timer.pauseTimer();
		btnTimerToggle.find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
		changeDocumentTitle('pause');
		btnTimerToggle.addClass('active');
	} else {
		timer.startTimer();
		resetPauseButton();
	}
}

function resetTimer() {
	$("#timer_default").resetTimer();
	resetPauseButton();
}

function resetPauseButton() {
	$("#timer_toggle").find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
	$("#timer_toggle").removeClass('active');
}

function updateTitle(time) {
	document.title = time + ' | Pomodoro Clock';
}

function changeDocumentTitle(status) {
	if (status === 'pause') {
		document.title = '❚❚ ' + document.title;
	} else {
		document.title = 'ALERT! ' + document.title;
	}
}

function addTimerToLog(history, type) {
	$('.history-log').prepend('<p class="list-group-item list-group-item-' + type + '">' + history + '</p>');
}