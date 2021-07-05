
// Header fixed in scroll
$(function() {
	let header = $('#mainHeader');
	let hederHeight = header.height(); 
	 
	$(window).scroll(function() {
	  if($(this).scrollTop() > 1) {
	   header.addClass('fixed');
	   $('body').css({
		  'paddingTop': hederHeight+'px'
	   });
	  } else {
	   header.removeClass('fixed');
	   $('body').css({
		'paddingTop': 0 
	   })
	  }
	});
});

//Burger mobile 
$(document).ready(function(){
	$('.logoBurgerContainer').click(function(event) {
		$('.logoBurgerContainer, .headerNav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//Slick main slider block
$(document).ready(function(){
	$('.mainSlider').slick({
		dots: true,
		autoplay: true,
 		speed: 400,
		adaptiveHeight: true,
		draggable: false
	});
});


// Hide show image content 
$(".popopo").each(function() {
    let more = $(this).find(".morePhotoButton");
    let hide = $(this).find(".mainPhotoProductionnone");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    });
});



$(".popopo_mob").each(function() {
    let more = $(this).find(".morePhotoButton");
    let hide = $(this).find(".mainPhotoProductionnone");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    });
});

// Form controls
;(function() {
	'use strict';

	var form = document.getElementById('feedback');
	if (!form) return;

	var	elements	= form.querySelectorAll('.form-control'),
		btn			= document.getElementById('send_mess'),
		patternName	= /^[а-яёА-ЯЁ\s]+$/,
		patternMail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,
		patternCompany = /^[а-яёА-ЯЁ\s]+$/,
		patternSpam	= /[^\<\>\[\]%\&'`]+$/,
		errorMess	= [
			'Заполните поле', // 0
			'Введите Ваше реальное имя', // 1
			'Укажите Вашу электронную почту', // 2
			'Неверный формат email', // 3
		],
		iserror		= false;

	btn.addEventListener('click', validForm);
	form.addEventListener('focus', function() {
		var el = document.activeElement;
		if (el !== btn) cleanError(el);
	}, true);


	function validForm(e) {
		e.preventDefault();
		var formVal = getFormData(form),
			error;

		for (var property in formVal) {
			error = getError(formVal, property);
			if (error.length != 0) {
				iserror = true;
				showError(property, error);
			}
		}
		if (!iserror){
			showMessage();
			greeting();
		}
		return false;
	}


	function showMessage() {
			document.querySelector('#modal').classList.add('show');
			document.querySelector('.mainForm').classList.add('show');
	};

	function greeting() {
		var user= document.getElementsByName("username");
		var hello = document.getElementById("userValue");
		hello.innerHTML = user[0].value;
	};


	function getError(formVal, property) {
		var error = '',
			validate = {
			'username': function() {
				if (formVal.username.length == 0) {
					error = errorMess[0];
				} else if (patternName.test(formVal.username) == false) {
					error = errorMess[1];
				}
			},
			'usermail': function() {
				if (formVal.usermail.length == 0) {
					error = errorMess[0];
				} else if (patternMail.test(formVal.usermail) == false) {
					error = errorMess[3];
				}
			},
			'projectPlaceholder': function() {
				if (formVal.projectPlaceholder.length == 0) {
					error = errorMess[0];
				}
			}
		};
		validate[property]();
		return error;
	}

	[].forEach.call(elements, function(element) {
		element.addEventListener('blur', function(e) {
			var formElement = e.target,
				property = formElement.getAttribute('name'),
				dataField = {};

			dataField[property] = formElement.value;

			var error = getError(dataField, property);
			if (error.length != 0) {
				showError(property, error);
			}
			return false;
		});
	});

	function showError(property, error) {
		var formElement = form.querySelector('[name=' + property + ']'),
			errorBox	= formElement.parentElement.nextElementSibling;

		formElement.classList.add('form-control_error');
		errorBox.innerHTML = error;
		errorBox.style.display = 'block';
	}

	function cleanError(el) {
		var errorBox = el.parentElement.nextElementSibling;
		el.classList.remove('form-control_error');
		errorBox.removeAttribute('style');
	}

	function getFormData(form) {
		var controls = {};
		if (!form.elements) return '';
		for (var i = 0, ln = form.elements.length; i < ln; i++) {
			var element = form.elements[i];

			if (element.tagName.toLowerCase() !== 'button') {
				controls[element.name]= element.value;
			}
		}
		return controls;
	}
})();

//Footer

$('.js-form-validate').submit(function () {
    var form = $(this);
    var field = [];
    form.find('input[data-validate]').each(function () {
      field.push('input[data-validate]');
      var value = $(this).val(),
          line = $(this).closest('.some-form__line');
      for(var i=0;i<field.length;i++) {
        if( !value ) {
          line.addClass('some-form__line-required');
          setTimeout(function() {
            line.removeClass('some-form__line-required')
          }.bind(this),2000);
          event.preventDefault();
        }
      }
    });
  });
