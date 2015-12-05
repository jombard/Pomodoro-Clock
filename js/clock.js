$(function() {
	$(".js-pomodoro").click(function() {
		$("#timer_default").createTimer({
			time_in_seconds: 1500,
			autostart: true
		});
		resetPauseButton();
	});
	$(".js-short-break").click(function() {
		$("#timer_default").createTimer({
			time_in_seconds: 300,
			autostart: true
		});
		resetPauseButton();
	});
	$(".js-long-break").click(function() {
		$("#timer_default").createTimer({
			time_in_seconds: 600,
			autostart: true
		});
		resetPauseButton();
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
	var timerToggle = $("#timer_toggle");

	if (timer.data('countdown.state') == 'running') {
		timer.pauseTimer();
		timerToggle.find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
		changeDocumentTitle('pause');
		timerToggle.addClass('active');
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

! function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		p = /^http:/.test(d.location) ? 'http' : 'https';
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = p + '://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, 'script', 'twitter-wjs');