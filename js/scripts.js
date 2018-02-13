$(document).ready(function(){

	$('.theme').click(function(){
		var name = $(this).attr('name');
		$('#themes').slideUp();
		$('#'+name).slideDown();
	});

});