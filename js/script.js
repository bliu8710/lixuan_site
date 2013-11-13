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

$(document).ready(function(){

	hideall();
	//$("#home").show();
	//$("#home_label").show();

	$("#about").show();
	$("#about_label").show();


	$("#home_button").click(function(){
		hideall();
		$("#home").show();
		$("#home_label").show();
	});

	$("#about_button").click(function(){
		hideall();
		$("#about").show();
		$("#about_label").show();
	});

	$("#service_button").click(function(){
		hideall();
		$("#service").show();
		$("#service_label").show();
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
	});

});