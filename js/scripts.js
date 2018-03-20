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
	

	$('.theme-detail').each(function(){
		var themeId = $(this).attr('id'); //получаем id раздела
		$('#'+themeId+' .menu-item').not($('.menu-item.back')).click(function(){ //при клике на пункт меню раздела кроме "назад"
			$(this).addClass('act-item'); //добавляем ему класс "активный"
			$('#'+themeId+' .menu-item').not($(this)).removeClass('act-item'); //удаляем этот класс у других пунктов раздела
		});
	});


	//минимальная высота .theme-detail
	var minHeight = $(window).height() - ($('.head').outerHeight() + $('.footer').outerHeight());
	$('.theme-detail').css('min-height', minHeight + 'px');

	$(window).resize(function(){
		minHeight = $(window).height() - ($('.head').outerHeight() + $('.footer').outerHeight());
		$('.theme-detail').css('min-height', minHeight + 'px');
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
	

	//проверка составления предложений из слов; подстановка картинок
	var greetingAlert = function() {
		var greeting = ['Great!', 'You are right!', 'Bingo!', 'Brilliantly!', 'Good!', 'Let\'s make English great again!', 'Excellent!'];
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
		var num = getRandomInt(0,7);
		alert(greeting[num]);
	}


	var placeBlock = function(wrapper) {
	
	  wrapper.find('.word.draggable, .pic.draggable').draggable({
		 snap: '.droppable',
		 snapMode: 'inner',
		 snapTolerance: 20
	  });
  
	  wrapper.find('.word.droppable, .pic.droppable').droppable({
		drop: function(event, ui) {
		  if($(this).attr('data-name') == ui.draggable.attr('data-value')) {
			 $(this).attr('data-value','yes');
		  }
		  var allTrue = true;
		  wrapper.find('.word.droppable, .pic.droppable').each(function(index, elem){
			if($(elem).attr('data-value') != 'yes'){
			  allTrue = false;
			}
		  });
		  if(allTrue == true){
			wrapper.find('.word.draggable, .pic.draggable').css('border-color','#00FF00');
			setTimeout(function(){
				greetingAlert();
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
		placeBlock($(this));
	});

	placeBlock($('.pic-block'));


	//часы
	var count = 0;

	$('.clock-btn').click(function(){
			count++;
	    $(this).attr('disabled', true).text('What time is it?');
	    $('.time-question').css('display', 'block');
	    
			switch(count) {
	    	case 1:
	        $('.big').css('animation-name', 'one-big');
	        $('.small').css('animation-name', 'one-small');
	        break;
	      case 2:
	        $('.big').css('animation-name', 'two-big');
	        $('.small').css('animation-name', 'two-small');
	        break;
	      case 3:
	        $('.big').css('animation-name', 'three-big');
	        $('.small').css('animation-name', 'three-small');
	        break;
	      case 4:
	        $('.big').css('animation-name', 'four-big');
	        $('.small').css('animation-name', 'four-small');
	        break;
	      case 5:
	        $('.big').css('animation-name', 'five-big');
	        $('.small').css('animation-name', 'five-small');
	        break;
	      case 6:
	        $('.big').css('animation-name', 'six-big');
	        $('.small').css('animation-name', 'six-small');
	        break;
	      case 7:
	        $('.big').css('animation-name', 'seven-big');
	        $('.small').css('animation-name', 'seven-small');
	        break;
	      case 8:
	        $('.big').css('animation-name', 'eight-big');
	        $('.small').css('animation-name', 'eight-small');
	        break;
	      case 9:
	        $('.big').css('animation-name', 'nine-big');
	        $('.small').css('animation-name', 'nine-small');
	        break;
	    }
	});

	var answers = ['five past four',
	               'quarter past six',
	               'five to eight',
	               'ten past ten',
	               'half past eleven',
	               'quarter to two',
	               'twenty five past three',
	               'twenty to six',
	               'twenty past eight'];
	               
	$('.time-text').keyup(function(){
		if(count == 9 && $('.time-text').val().toLowerCase() == 'twenty past eight') {
	  		setTimeout(function() { $('.clock, .clock-btn, .time-question').fadeOut('1000'); }, 100);
	    	setTimeout(function() { $('.clock-wrapper h1').fadeIn('1000'); }, 600)
		}

		for(var i = 1; i <= answers.length; i++) {
		    if(count == i && $('.time-text').val().toLowerCase() == answers[i-1]) {
		        $('.clock-btn').attr('disabled', false).text('Click me to see time!');
		        $('.time-text').val('');
		        $('.time-question').css('display', 'none');
		        greetingAlert();
		    }
		}
	});

});