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
	

	//проверка составления предложений из слов
	var placeWord = function(wrapper) {
	
	  wrapper.find('.word.draggable').draggable({
		 snap: '.droppable',
		 snapMode: 'inner',
		 snapTolerance: 20
	  });
  
	  wrapper.find('.word.droppable').droppable({
		drop: function(event, ui) {
		  if($(this).attr('data-name') == ui.draggable.attr('data-value')) {
			 $(this).attr('data-value','yes');
		  }
		  var allTrue = true;
		  wrapper.find('.word.droppable').each(function(index, elem){
			if($(elem).attr('data-value') != 'yes'){
			  allTrue = false;
			}
		  });
		  if(allTrue == true){
			wrapper.find('.word.draggable').css('border-color','#00FF00');
			setTimeout(function(){
				var greeting = ['Great!', 'You are right!', 'Bingo!', 'Good!', 'Let\'s make English great again!'];
				function getRandomInt(min, max) {
					return Math.floor(Math.random() * (max - min)) + min;
				}
				var num = getRandomInt(0,4);
				alert(greeting[num]);
				wrapper.css('display','none');
				wrapper.next().css('display','block');
			}, 300);
		  }
		},
		out: function(event, ui) {
		  if($(this).attr('data-name') == ui.draggable.attr('data-value')) {
			 $(this).removeAttr('data-value');
		  }
		}
	  });
	}
	
	$('.sent-item').each(function(){
		placeWord($(this));
	});

});