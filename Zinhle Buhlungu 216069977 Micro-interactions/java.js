// JavaScript Document



$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('.sidebar').toggleClass('active');
		$('.sidebar').toggleClass('toggle');
	});
 });

$(document).ready(function(){
	$('.icon').click(function(){
		$('.icon').toggleClass('active');
	});
});



 $(document).ready(function(){
 	$('.anim').click(function(){
 		$('.hamburgerLeft').toggleClass('active');
		$('.hamburgerUp').toggleClass('active');
 		$('anim').toggleClass('close');
 	});
  });
