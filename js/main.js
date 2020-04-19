$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

/*===========================================================================*/

$(function() {
  $('.header__menu [href]').each(function() {
    if (this.href == window.location.href) {
      $(this).addClass('header__link-active');
    }
  });
});

/*===============================================================================*/

const authButton = document.querySelector("#auth-button");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const authmobButton = document.querySelector("#auth-button-mob");
const details = document.querySelector("#det");
const modalDet = document.querySelector(".modal-details");
const closeDet = document.querySelector(".close-details");





authButton.addEventListener('click', toggleModalAuth);
closeAuth.addEventListener('click', toggleModalAuth);


function toggleModalAuth(){
	modalAuth.classList.toggle("is-open-auth");
};
authmobButton.addEventListener('click', toggleModalAuth);
closeAuth.addEventListener('click', toggleModalAuth);


function toggleModalAuth(){
	modalAuth.classList.toggle("is-open-auth");
};

details.addEventListener('click', toggleModalDet);
closeDet.addEventListener('click', toggleModalDet);


function toggleModalDet(){
	modalDet.classList.toggle("is-open");
	$('body').toggleClass('lock');
};




