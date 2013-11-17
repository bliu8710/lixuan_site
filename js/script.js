function hideall() {
	$("#home").hide();	
	$("#about").hide();
	$("#service").hide();
	$("#work").hide();
	$("#client").hide();	
	$("#contact").hide();
	
	$("#home_label").hide();	
	$("#about_label").hide();
	$("#service_label").hide();
	$("#work_label").hide();
	$("#client_label").hide();	
	$("#contact_label").hide();
}

function showLines(lines) {
	$(lines).hide();
	_showLines(lines, 0);
}

function _showLines(lines, from) {
	$(lines[from]).css('opacity', 0);
	$(lines[from]).css('top', '2px');
	$(lines[from]).show();
	if (from == lines.length - 1)  {
		$(lines[from]).animate({ opacity: 1, top: "0px" }, 'fast');
	} else {
		$(lines[from]).animate({ opacity: 1, top: "0px" }, 'fast', function(){
			_showLines(lines, from + 1);
		});
	}
}

$(document).ready(function(){

	hideall();
	$("#home").show();
	$("#home_label").show();

	$("#home_button").click(function(){
		hideall();
		$("#home").show();
		$("#home_label").show();
	});

	$("#about_button").click(function(){
		hideall();
		$("#about").show();
		$("#about_label").show();

		$("#about .cn-title").hide();
		$("#about .cn-title").fadeIn();

		showLines($("#about article p"));

	});

	$("#service_button").click(function(){
		hideall();
		$("#service").show();
		$("#service_label").show();

		$("#service .cn-title").hide();
		$("#service .cn-title").fadeIn();

		showLines($("#service article p"));
	});

	$("#work_button").click(function(){
		hideall();
		$("#work").show();
		$("#work_label").show();
	});

	$("#client_button").click(function(){
		hideall();
		$("#client").show();
		$("#client_label").show();
	});

	$("#contact_button").click(function(){
		hideall();
		$("#contact").show();
		$("#contact_label").show();

		$("#contact .cn-title").hide();
		$("#contact .cn-title").fadeIn();
		showLines($("#contact article p"));
	});

	$('#slides').slidesjs({
		width: 1373,
		height: 613,
		navigation: {
			active: false,
		},
		play: {
			active: false,
			auto: true,
			interval: 5000,
			swap: true,
			restartDelay: 1000
		},
		callback: {
			complete: function(number) {
			}
		}
	});


	$("#home_button").hover(
		function () {
			// Over
			$("#home_label").fadeIn('fast');

		},
		function () {
			// Out
			if($("#home").is(':hidden')) {
				$("#home_label").fadeOut('fast');
			}
		}
	);
	$("#about_button").hover(
		function () {
			// Over
			$("#about_label").fadeIn('fast');

		},
		function () {
			// Out
			if($("#about").is(':hidden')) {
				$("#about_label").fadeOut('fast');
			}
		}
	);
	$("#service_button").hover(
		function () {
			// Over
			$("#service_label").fadeIn('fast');

		},
		function () {
			// Out
			if($("#service").is(':hidden')) {
				$("#service_label").fadeOut('fast');
			}
		}
	);
	$("#work_button").hover(
		function () {
			// Over
			$("#work_label").fadeIn('fast');

		},
		function () {
			// Out
			if($("#work").is(':hidden')) {
				$("#work_label").fadeOut('fast');
			}
		}
	);
	$("#client_button").hover(
		function () {
			// Over
			$("#client_label").fadeIn('fast');

		},
		function () {
			// Out
			if($("#client").is(':hidden')) {
				$("#client_label").fadeOut('fast');
			}
		}
	);
	$("#contact_button").hover(
		function () {
			// Over
			$("#contact_label").fadeIn('fast');

		},
		function () {
			// Out
			if($("#contact").is(':hidden')) {
				$("#contact_label").fadeOut('fast');
			}
		}
	);
});