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
	$("#timer_toggle").click(function() {
		if ($("#timer_default").data('countdown.state') == 'running') {
			$("#timer_default").pauseTimer();
		} else {
			$("#timer_default").startTimer();
		}
	});
	$("#timer_reset").click(function() {
		$("#timer_default").resetTimer();
	});
});