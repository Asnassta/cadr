$(document).ready(function() {

/*==========Menu=============*/
$(".header__burger").on("click", function() {
	$(this).toggleClass("active");
	$(".header__menu").slideToggle();
	$('.blur').fadeToggle();
});
$(".blur").on("click", function() {
	$(this).fadeToggle();
	$(".header__menu").slideToggle();
	$(".header__burger").toggleClass("active");
});
/*=========/menu==============*/

/*==========Account=============*/
$(".account").on("click", function() {
	$(this).toggleClass("active");
	$('.account__dropdown').slideToggle();
	$(".header__menu").slideUp();
	$(".header__burger").removeClass("active");
	$(".blur").fadeOut();
});
/*=========/account==============*/

/*==========Menu=============*/
$(".menu__item").hover(function() {
	if ($(window).width() > 1024){
        $(this).toggleClass("active");
		$(this).find('.menu__sub').fadeToggle();
    };
});

$(".menu__sub .menu__item").hover(function() {
	if ($(window).width() > 1024){
        $(this).toggleClass("active");
		$(this).find('.menu__subsub').fadeToggle(); 
    };
});

$(".submenu-open").on("click", function() {
	if ($(window).width() <= 1024){
        $(this).toggleClass("active");
		$(this).next('.menu__sub').slideToggle();
		$(".submenu-open").not(this).next('.menu__sub').slideUp();
		$(".submenu-open").not(this).removeClass("active");
    };
});

$(".subsubmenu-open").on("click", function() {
	if ($(window).width() <= 1024){
        $(this).toggleClass("active");
		$(this).next('.menu__subsub').slideToggle(); 
		$(".subsubmenu-open").not(this).next('.menu__subsub').slideUp();
		$(".subsubmenu-open").not(this).removeClass("active");
    };
});
/*=========/menu==============*/

/*==========Dropdown=============*/
$(".dropbtn").on("click", function() {
	$(this).toggleClass("active");
	$('.dropbtn__dropdown').slideToggle();
});
/*=========/dropdown==============*/

/*==========Filters=============*/
$(".tools__showbtn").on("click", function() {
	$(this).toggleClass("active");
	$('.filters').slideToggle();
});

$(".filters__hide").on("click", function() {
	$(".tools__showbtn").removeClass("active");
	$('.filters').slideUp();
});
/*=========/filters==============*/

/*==========hint=============*/
$(".workers__stat").hover(function() {
	if ($(window).width() > 1024){
        $(this).find(".hint").fadeToggle();
    };
});
$(".workers__stat").on("click", function() {
	if ($(window).width() <= 1024){
        $(this).find(".hint").fadeToggle();
    };
});
/*=========/hint==============*/

/*==========Password=============*/
$('.form__input-btn').on('click', function(){
	if ($('.form__input_password input').attr('type') == 'password'){
		$(this).addClass('active');
		$('.form__input_password input').attr('type', 'text');
	} else {
		$(this).removeClass('active');
		$('.form__input_password input').attr('type', 'password');
	}
});  
/*=========/password==============*/

/*==========Sidemenu=============*/
$(".sidemenu__title_drop").on("click", function() {
	$(this).find('.sidemenu__name').toggleClass("active");
	$(this).next('.sidemenu__dropdown').slideToggle();
	$(".sidemenu__title_drop").not(this).find('.sidemenu__name').removeClass("active");
	$(".sidemenu__title_drop").not(this).next('.sidemenu__dropdown').slideUp();
});

$(".btn-hide").on("click", function() {
	$(this).toggleClass("active");
	$(".sidemenu").toggleClass("hide");
	$(".section").toggleClass("hide");
	$('.sidemenu__name').removeClass("active");
	$('.sidemenu__dropdown').slideUp();
	$('.sidemenu__name').fadeToggle();
});

$(".sidemenu__icon").on("click", function() {
	$(".sidemenu").removeClass("hide");
	$(".section").removeClass("hide");
	$('.sidemenu__name').fadeIn();
	$(".btn-hide").removeClass("active");
});
/*=========/sidemenu==============*/

/*==========Table (check)=============*/
$(".table_check .table__content .table__row").on("click", function() {
	if ($(this).hasClass("checked")){
        $(this).removeClass("checked");
        $(".buttons-table_all").fadeIn();
		$(".buttons-table_string").hide();
    }
    else {
    	$(this).toggleClass("checked");
		$(".table__row").not(this).removeClass("checked");
		$(".buttons-table_all").hide();
		$(".buttons-table_string").fadeIn();
    }
});
/*=========/table (check)==============*/

/*======Selectcheckbox=============*/
$(".selectcheckbox").on("click", function(event) {
  event.preventDefault();
    $(this).find('.selectcheckbox__dropdown').slideToggle(333);
    //$(this).find('.selectcheckbox__select').toggleClass('active');
    $(".selectcheckbox").not(this).find('.selectcheckbox__dropdown').slideUp(333);
    //$(this).find('.selectcheckbox__select').toggleClass('active');
});
$(".selectcheckbox__option").on("click", function(event) {
  event.preventDefault();
  $(this).parent().find(".selectcheckbox__option").removeClass('selected');
  $(this).parent().parent().parent().find('.selectcheckbox__select').html($(this).html());
  $(this).addClass('selected');
});
/*==========/selectcheckbox=========*/

/*===============Popup=================*/
$(".open-popup").on("click", function (event) {
    name_pop = $(this).attr('data-popup');
    event.preventDefault();
    $(".popup."+name_pop).fadeIn(333);
    $(".popup."+name_pop+" .popup__inner").fadeIn(333);
    $('body').addClass("hidden");
});
$(".popup__close,  .closex").on("click", function (event) {
    event.preventDefault();
    $(".popup").fadeOut(333);
    $(".popup__inner").fadeOut(333);
    $('body').removeClass("hidden");
});
$(".close-popup").on("click", function () {
    $(".popup").fadeOut(333);
    $(".popup__inner").fadeOut(333);
    $('body').removeClass("hidden");
});
/*==============/popup=================*/
});

/*=========Scroll=========*/
  window.onload = function () {
    var scr = $(".table");
    scr.mousedown(function () {
        var startX = this.scrollLeft + event.pageX;
        var startY = this.scrollTop + event.pageY;
        scr.mousemove(function () {
            this.scrollLeft = startX - event.pageX;
            this.scrollTop = startY - event.pageY;
            return false;
        });
    });
    $(window).mouseup(function () {
        scr.off("mousemove");
    });
};
/*=========/scroll=========*/