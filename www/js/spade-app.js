var myApp = new Framework7({});

var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


var mySwiper= false;
	// Callbacks to run specific code for specific pages, for example for About page:
	myApp.onPageInit('swiper-horizontal', function (page) {
	// run createContentPage func after link was clicked
		var mySwiper = myApp.swiper('.swiper-container', {
		pagination:'.swiper-pagination swiper-aa',
		spaceBetween: 10,
		slidesPerView: 3
	});
});

myApp.onPageInit('allgames', function (page) {
    // run createContentPage func after link was clicked
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination2 swiper-aa2',
        spaceBetween: 0,
        slidesPerView: 3,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
});

myApp.onPageInit('allgames', function (page) {
    // run createContentPage func after link was clicked
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination3 swiper-list-games',
        spaceBetween: 10,
        slidesPerView: 3
    });
});

myApp.onPageInit('gamedetail', function (page) {
    // run createContentPage func after link was clicked
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination3 swiper-list-games',
        spaceBetween: 10,
        slidesPerView: 3
    });
});

myApp.onPageInit('profile', function (page) {
    // run createContentPage func after link was clicked
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination3 swiper-list-games',
        spaceBetween: 10,
        slidesPerView: 3
    });
});

 

  

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

