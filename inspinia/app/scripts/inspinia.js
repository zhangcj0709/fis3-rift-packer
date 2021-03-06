/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7.1
 *
 */

$(document).ready(function () {


    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    // MetisMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Close menu in canvas mode
    $('.close-canvas-menu').on('click', function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    // Run menu of canvas
    $('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Initialize slimscroll for right sidebar
    $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Open close small chat
    $('.open-small-chat').on('click', function () {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });

    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

    // Small todo handler
    $('.check-link').on('click', function () {
        var button = $(this).find('i');
        var label = $(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });

    // Append config box / Only for demo purpose
    // Uncomment on server mode to enable XHR calls
    //$.get("skin-config.html", function (data) {
    //    if (!$('body').hasClass('no-skin-config'))
    //        $('body').append(data);
    //});

    // Minimalize menu
    $('.navbar-minimalize').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });

    // Tooltips demo
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });


    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarheight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarheight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarheight + "px");
        }

        if (navbarheight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarheight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarheight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    $("[data-toggle=popover]")
        .popover();

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })
});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

// Local Storage functions
// Set proper body class and plugins based on user configuration
$(document).ready(function () {
    if (localStorageSupport) {

        var collapse = localStorage.getItem("collapse_menu");
        var fixedsidebar = localStorage.getItem("fixedsidebar");
        var fixednavbar = localStorage.getItem("fixednavbar");
        var boxedlayout = localStorage.getItem("boxedlayout");
        var fixedfooter = localStorage.getItem("fixedfooter");

        var body = $('body');

        if (fixedsidebar == 'on') {
            body.addClass('fixed-sidebar');
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }

        if (collapse == 'on') {
            if (body.hasClass('fixed-sidebar')) {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }
            } else {
                if (!body.hasClass('body-small')) {
                    body.addClass('mini-navbar');
                }

            }
        }

        if (fixednavbar == 'on') {
            $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
            body.addClass('fixed-nav');
        }

        if (boxedlayout == 'on') {
            body.addClass('boxed-layout');
        }

        if (fixedfooter == 'on') {
            $(".footer").addClass('fixed');
        }
    }
});

// check if browser support HTML5 local storage
localStorageSupport = (function()  {
    return (('localStorage' in window) && window['localStorage'] !== null)
})();

// For demo purpose - animation css script
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}

// Config box
// Enable/disable fixed top navbar
$('#fixednavbar').on("click", function (){
  if ($('#fixednavbar').is(':checked')){
    $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
    $("body").removeClass('boxed-layout');
    $("body").addClass('fixed-nav');
    $('#boxedlayout').prop('checked', false);

    if (localStorageSupport) {
      localStorage.setItem("boxedlayout",'off');
      localStorage.setItem("fixednavbar",'on');
    }
  } else{
    $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
    $("body").removeClass('fixed-nav');
    $("body").removeClass('fixed-nav-basic');
    $('#fixednavbar2').prop('checked', false);

    if (localStorageSupport) {
      localStorage.setItem("fixednavbar",'off');
      localStorage.setItem("fixednavbar2",'off');
    }
  }
});

// Enable/disable fixed top navbar
$('#fixednavbar2').on("click", function (){
  if ($('#fixednavbar2').is(':checked')){
    $(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
    $("body").removeClass('boxed-layout');
    $("body").addClass('fixed-nav').addClass('fixed-nav-basic');
    $('#boxedlayout').prop('checked', false);

    if (localStorageSupport) {
      localStorage.setItem("boxedlayout",'off');
      localStorage.setItem("fixednavbar2",'on');
    }
  } else {
    $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
    $("body").removeClass('fixed-nav').removeClass('fixed-nav-basic');
    $('#fixednavbar').prop('checked', false);

    if (localStorageSupport) {
      localStorage.setItem("fixednavbar2",'off');
      localStorage.setItem("fixednavbar",'off');
    }
  }
});

// Enable/disable fixed sidebar
$('#fixedsidebar').on("click", function (){
  if ($('#fixedsidebar').is(':checked')){
    $("body").addClass('fixed-sidebar');
    $('.sidebar-collapse').slimScroll({
      height: '100%',
      railOpacity: 0.9
    });

    if (localStorageSupport) {
      localStorage.setItem("fixedsidebar",'on');
    }
  } else{
    $('.sidebar-collapse').slimScroll({destroy: true});
    $('.sidebar-collapse').attr('style', '');
    $("body").removeClass('fixed-sidebar');

    if (localStorageSupport) {
      localStorage.setItem("fixedsidebar",'off');
    }
  }
});

// Enable/disable collapse menu
$('#collapsemenu').on("click", function (){
  if ($('#collapsemenu').is(':checked')){
    $("body").addClass('mini-navbar');
    SmoothlyMenu();

    if (localStorageSupport) {
      localStorage.setItem("collapse_menu",'on');
    }

  } else{
    $("body").removeClass('mini-navbar');
    SmoothlyMenu();

    if (localStorageSupport) {
      localStorage.setItem("collapse_menu",'off');
    }
  }
});

// Enable/disable boxed layout
$('#boxedlayout').on("click", function (){
  if ($('#boxedlayout').is(':checked')){
    $("body").addClass('boxed-layout');
    $('#fixednavbar').prop('checked', false);
    $('#fixednavbar2').prop('checked', false);
    $(".navbar-fixed-top").removeClass('navbar-fixed-top').addClass('navbar-static-top');
    $("body").removeClass('fixed-nav');
    $("body").removeClass('fixed-nav-basic');
    $(".footer").removeClass('fixed');
    $('#fixedfooter').prop('checked', false);

    if (localStorageSupport) {
      localStorage.setItem("fixednavbar",'off');
      localStorage.setItem("fixednavbar2",'off');
      localStorage.setItem("fixedfooter",'off');
      localStorage.setItem("boxedlayout",'on');
    }
  } else{
    $("body").removeClass('boxed-layout');

    if (localStorageSupport) {
      localStorage.setItem("boxedlayout",'off');
    }
  }
});

// Enable/disable fixed footer
$('#fixedfooter').on("click", function (){
  if ($('#fixedfooter').is(':checked')){
    $('#boxedlayout').prop('checked', false);
    $("body").removeClass('boxed-layout');
    $(".footer").addClass('fixed');

    if (localStorageSupport) {
      localStorage.setItem("boxedlayout",'off');
      localStorage.setItem("fixedfooter",'on');
    }
  } else{
    $(".footer").removeClass('fixed');

    if (localStorageSupport) {
      localStorage.setItem("fixedfooter",'off');
    }
  }
});

// SKIN Select
$('.spin-icon').on("click", function (){
  $(".theme-config-box").toggleClass("show");
});

// Default skin
$('.s-skin-0').on("click", function (event){
  event.preventDefault();
  $("body").removeClass("skin-1");
  $("body").removeClass("skin-2");
  $("body").removeClass("skin-3");
  if (localStorageSupport) {
    localStorage.setItem("skinname",'');
  }
});

// Blue skin
$('.s-skin-1').on("click", function (event){
  event.preventDefault();
  $("body").removeClass("skin-2");
  $("body").removeClass("skin-3");
  $("body").removeClass("md-skin");
  $("body").addClass("skin-1");
  if (localStorageSupport) {
    localStorage.setItem("skinname",'skin-1');
  }
});

// Inspinia ultra skin
$('.s-skin-2').on("click", function (event){
  event.preventDefault();
  $("body").removeClass("skin-1");
  $("body").removeClass("skin-3");
  $("body").removeClass("md-skin");
  $("body").addClass("skin-2");
  if (localStorageSupport) {
    localStorage.setItem("skinname",'skin-2');
  }
});

// Yellow skin
$('.s-skin-3').on("click", function (event){
  event.preventDefault();
  $("body").removeClass("skin-1");
  $("body").removeClass("skin-2");
  $("body").removeClass("md-skin");
  $("body").addClass("skin-3");
  if (localStorageSupport) {
    localStorage.setItem("skinname",'skin-3');
  }
});

// MATERIAL DESIGN skin
$('.s-md-skin').on("click", function (event){
  event.preventDefault();
  $("body").removeClass("skin-1");
  $("body").removeClass("skin-2");
  $("body").removeClass("skin-3");
  $("body").addClass("md-skin");
  if (localStorageSupport) {
    localStorage.setItem("skinname",'md-skin');
  }
});

if (localStorageSupport) {
  var collapse = localStorage.getItem("collapse_menu");
  var fixedsidebar = localStorage.getItem("fixedsidebar");
  var fixednavbar = localStorage.getItem("fixednavbar");
  var fixednavbar2 = localStorage.getItem("fixednavbar2");
  var boxedlayout = localStorage.getItem("boxedlayout");
  var fixedfooter = localStorage.getItem("fixedfooter");

  if (collapse == 'on'){
    $('#collapsemenu').prop('checked','checked')
  }
  if (fixedsidebar == 'on'){
    $('#fixedsidebar').prop('checked','checked')
  }
  if (fixednavbar == 'on'){
    $('#fixednavbar').prop('checked','checked')
  }
  if (fixednavbar2 == 'on'){
    $('#fixednavbar2').prop('checked','checked')
  }
  if (boxedlayout == 'on'){
    $('#boxedlayout').prop('checked','checked')
  }
  if (fixedfooter == 'on') {
    $('#fixedfooter').prop('checked','checked')
  }
}



//菜单激活当前页面对应的链接
$("#side-menu").find("[href='"+location.pathname+"']").parents("li").addClass("active").siblings().removeClass("active");

//页面内容载入的渐变效果
$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});
$('.wrapper.wrapper-content').animateCss("fadeInRight");

