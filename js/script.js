function hideall() {
	$("#home").hide();	
	$("#about").hide();
	$("#service").hide();
	$("#work").hide();
	$("#client").hide();	
	$("#contact").hide();
	
	$("#home_label").css('visibility', "hidden");	
	$("#about_label").css('visibility', "hidden");
	$("#service_label").css('visibility', "hidden");
	$("#work_label").css('visibility', "hidden");
	$("#client_label").css('visibility', "hidden");	
	$("#contact_label").css('visibility', "hidden");
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
	$("#home_label").css('visibility',"visible");

	$("#home_button").click(function(){
		hideall();
		$("#home").show();
		$("#home_label").css('visibility',"visible");
	});

	$("#about_button").click(function(){
		hideall();
		$("#about").show();
		$("#about_label").css('visibility',"visible");

		$("#about .cn-title").hide();
		$("#about .cn-title").fadeIn();

		showLines($("#about article p"));

	});

	$("#service_button").click(function(){
		hideall();
		$("#service").show();
		$("#service_label").css('visibility',"visible");

		$("#service .cn-title").hide();
		$("#service .cn-title").fadeIn();

		showLines($("#service article p"));
	});

	$("#work_button").click(function(){
		hideall();
		$("#work").show();
		$("#work_label").css('visibility',"visible");
	});

	$("#client_button").click(function(){
		hideall();
		$("#client").show();
		$("#client_label").css('visibility',"visible");
	});

	$("#contact_button").click(function(){
		hideall();
		$("#contact").show();
		$("#contact_label").css('visibility',"visible");

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
			$("#home_label").css('visibility',"visible");
		},
		function () {
			// Out
			if($("#home").is(':hidden')) {
				$("#home_label").css('visibility', "hidden");
			}
		}
	);
	$("#about_button").hover(
		function () {
			// Over
			$("#about_label").css('visibility',"visible");

		},
		function () {
			// Out
			if($("#about").is(':hidden')) {
				$("#about_label").css('visibility', "hidden");
			}
		}
	);
	$("#service_button").hover(
		function () {
			// Over
			$("#service_label").css('visibility',"visible");

		},
		function () {
			// Out
			if($("#service").is(':hidden')) {
				$("#service_label").css('visibility', "hidden");
			}
		}
	);
	$("#work_button").hover(
		function () {
			// Over
			$("#work_label").css('visibility',"visible");

		},
		function () {
			// Out
			if($("#work").is(':hidden')) {
				$("#work_label").css('visibility', "hidden");
			}
		}
	);
	$("#client_button").hover(
		function () {
			// Over
			$("#client_label").css('visibility',"visible");
		},
		function () {
			// Out
			if($("#client").is(':hidden')) {
				$("#client_label").css('visibility', "hidden");
			}
		}
	);
	$("#contact_button").hover(
		function () {
			// Over
			$("#contact_label").css('visibility',"visible");

		},
		function () {
			// Out
			if($("#contact").is(':hidden')) {
				$("#contact_label").css('visibility', "hidden");
			}
		}
	);
});