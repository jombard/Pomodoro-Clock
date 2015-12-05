$(function() {
	$(".js-pomodoro").click(function() {
		$("#timer_default").createTimer({
			time_in_seconds: 1500,
			autostart: true
		});
	});
	$(".js-short-break").click(function() {
		$("#timer_default").createTimer({
			time_in_seconds: 5,
			autostart: true
		});
	});
	$(".js-long-break").click(function() {
		$("#timer_default").createTimer({
			time_in_seconds: 600,
			autostart: true
		});
	});
	$("#timer_toggle").click(timerToggle);
	$("#timer_reset").click(resetTimer);
});

function countdownAlert() {
	var sound = new Howl({
		urls: ['sounds/alarmwatch.mp3']
	}).play();
}

function timerToggle() {
	var timer = $("#timer_default");
	var timerToggle = $("#timer_toggle");

	timerToggle.toggleClass('active');
	if (timer.data('countdown.state') == 'running') {
		timer.pauseTimer();
		timerToggle.find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
		$('.pause-timer').text('Resume Timer');
	} else {
		timer.startTimer();
		timerToggle.find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
		$('.pause-timer').text('Pause Timer');
	}
}

function resetTimer() {
	$("#timer_default").resetTimer();
	$("#timer_toggle").find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
	$('.pause-timer').text('Pause Timer');
	$("#timer_toggle").removeClass('active');
}