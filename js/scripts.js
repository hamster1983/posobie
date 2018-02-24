$(document).ready(function(){

	$('.theme').click(function(){ //при клике на тему
		var name = $(this).attr('name'); //заносим в переменную имя темы
		$('#themes, #main-title').slideUp(); //сворачиваем список тем и главный заголовок
		$('#'+name+', [data-title="'+name+'"]').slideDown(); //разворачиваем кокретную тему и заголовок темы
	});
	
	$('.menu-item.back').click(function(){ //при по кнопке "назад"
		$('.theme-detail, .theme-title').slideUp(); //сворачиваем любую открытую тему и заголовок темы
		$('#themes, #main-title').slideDown(); //и возвращаемся к списку тем и главному заголовку
	});
	
	$('.menu-item').not($('.menu-item.back')).click(function(){ //при клике на пункт меню кроме "назад"
		$(this).addClass('act-item'); //добавляем ему класс "активный"
		$('.menu-item').not($(this)).removeClass('act-item'); //удаляем этот класс у других пунктов
	});
	
	//проверка вводимых слов
	var check = function(input) {
	  input.keyup(function(){
		if(($(this).val()).toLowerCase() == $(this).attr('name')) {
		  $(this).css({'color':'#00FF00', 'border-bottom-color':'#00FF00'});
		}
		else {
		  $(this).css({'color':'white', 'border-bottom-color':'white'});
		}
	  });
	  input.blur(function(){
		if(($(this).val()).toLowerCase() == $(this).attr('name')) {
		  $(this).css({'color':'#00FF00', 'border-bottom-color':'#00FF00'});
		}
		else {
		  $(this).css({'color':'red', 'border-bottom-color':'red'});
		}
	  });
	}
	
	$('input.skip').each(function(){
		check($(this));
	});
	
	$('.clear').click(function(){
		$('input.skip').val('');
		$('input.skip').css({'color':'white', 'border-bottom-color':'white'});
	});

});