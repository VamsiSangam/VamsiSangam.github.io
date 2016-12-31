/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
    $(document).ready(function(){
	
        $(".banner-image").backstretch('images/banner.jpg');
		
        // Fixed header
        //-----------------------------------------------
        $(window).scroll(function() {
            if (($(".header.fixed").length > 0)) { 
                if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            };
        });

        $(window).load(function() {
            if (($(".header.fixed").length > 0)) { 
                if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            };
        });

        //Scroll Spy
        //-----------------------------------------------
        if($(".scrollspy").length>0) {
            $("body").addClass("scroll-spy");
            $('body').scrollspy({ 
                target: '.scrollspy',
                offset: 152
            });
        }

        //Smooth Scroll
        //-----------------------------------------------
        if ($(".smooth-scroll").length>0) {
            $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top-151
                        }, 1000);
                        return false;
                    }
                }
            });
        }

        // Animations
        //-----------------------------------------------
        if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
            console.log("Animations in template.js");
            $("[data-animation-effect]").each(function () {
                var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
                if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
                    $this.appear(function() {
                        setTimeout(function() {
                            $this.addClass('animated object-visible ' + animationEffect);
                        }, 400);
                    }, {accX: 0, accY: -130});
                } else {
                    $this.addClass('object-visible');
                }
            });
        };

        // Isotope filters
        //-----------------------------------------------
        if ($('.isotope-container').length > 0) {
            $(window).load(function() {
                var $english = $('.isotope-container-english').isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.6s',
                    filter: ".EA"
                });

                var $hindi = $('.isotope-container-hindi').isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.6s',
                    filter: ".HA"
                });

                var $telugu = $('.isotope-container-telugu').isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.6s',
                    filter: ".TA"
                });

                var count = 1;
                var requests = [];

                // filter items on button click
                $('.filters').on('click', 'ul.nav li a', function () {
                    $('#english-loader').removeAttr('hidden');

                    var filterValue = $(this).attr('data-filter');
                    var id = filterValue.substring(1, 3);
                    var lang = id.substring(0, 1);
                    var height = 0;

                    if (requests.indexOf(id) === -1) {
                        $.getJSON("/api/LoadMovies/" + id, function (data) {
                            var imageWidth = 0;
                            var viewPortWidth = $(window).width();

                            /* calculate image dimensions */
                            if (viewPortWidth < 768) {
                                imageWidth = viewPortWidth * 0.4;     // col-xs-2
                            } else if (viewPortWidth < 992) {
                                imageWidth = 62 * 6 - 30 - 6;               // col-sm-3
                            } else if (viewPortWidth < 1200) {
                                imageWidth = 81 * 3 - 30 - 6;               // col-md-3
                            } else {
                                imageWidth = 97 * 3 - 30 - 6;              // col-lg-3
                            }

                            $.each(data, function (index) {
                                var name = this.name;

                                if (name.length > 20) {
                                    name = name.substring(0, 20) + "...";
                                }
                                
                                var str =
                                    '<div class="col-sm-6 col-md-3 isotope-item ' + id + '">' +
                                        '<div class="overlay-container">' +
                                            '<img class="movie-icon" src="/Content/img/movies/' + this.path + '" alt="' + name + '" style="height:' + imageWidth + 'px;width:' + imageWidth + 'px"/>' +
                                            '<a class="overlay" data-toggle="modal" data-target="#movie-' + count + '">' +
                                                '<i class="fa fa-search-plus"></i>' +
                                                '<span>' + this.name + '</span>' +
                                            '</a>' +
                                        '</div>' +
                                        '<a class="btn btn-default btn-block" data-toggle="modal" data-target="#movie-' + count + '">' + name + '</a>' +
                                        '<div class="modal fade" id="movie-' + count + '" tabindex="-1" role="dialog" aria-labelledby="movie-' + count + '-label" aria-hidden="true">' +
                                            '<div class="modal-dialog modal-lg">' +
                                                '<div class="modal-content">' +
                                                    '<div class="modal-header">' +
                                                        '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                                                        '<h4 class="modal-title" id="movie-' + count + '-label">' + this.name + '</h4>' +
                                                    '</div>' +
                                                    '<div class="modal-body">' +
                                                        '<div class="row">' +
                                                                '<div class="col-sm-12">' +
                                                                    
                                                                    '<div class="col-sm-7"><p>' +
                                                                        '<b>Year</b> - ' + this.year + '<br/><br/>' +
                                                                        '<b>Director</b> - ' + this.director + '<br/><br/>' +
                                                                        '<b>Stars</b> - ' + this.stars + '<br/><br/>' +
                                                                        '<b>Description</b> - ' + this.description + '<br/><br/>';

                                if (this.remarks !== null && this.remarks !== "") {
                                    str += '<b>Remarks</b> - ' + this.remarks + '<br/><br/>';
                                }

                                str += '</p></div>' +
                                                                        '<div class="col-sm-5"><img src="/Content/img/movies/' + this.path + '" alt="' + this.name + '"></div>' +
                                                                '</div>' +
                                                       '</div>' +
                                                    '</div>' +
                                                    '<div class="modal-footer">' +
                                                        '<button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>';

                                var element = $(str);
                                                                
                                if (lang === "E") {
                                    $english.isotope('insert', element);
                                } else if (lang === "H") {
                                    $hindi.isotope('insert', element);
                                } else {
                                    $telugu.isotope('insert', element);
                                }

                                $('.movie-icon').on('load', function () {
                                    $('.overlay-container img').addClass('img-responsive');
                                });

                                ++count;
                            });
                        });

                        requests.push(id);
                    }

                    

                    $(".filters").find("li.active").removeClass("active");
                    $(this).parent().addClass("active");

                    if (lang === "E") {
                        $english.isotope({ filter: filterValue });
                    } else if (lang === "H") {
                        $hindi.isotope({ filter: filterValue });
                    } else {
                        $telugu.isotope({ filter: filterValue });
                    }

                    $('#english-loader').attr('hidden', 'hidden');

                    return false;
                });

                $('#EA').click();
            });
        };

        //Modal
        //-----------------------------------------------
        if ($(".modal").length > 0) {
            console.log("Modal in template.js");
            $(".modal").each(function() {
                $(".modal").prependTo( "body" );
            });
        }

    }); // End document ready
})(this.jQuery);