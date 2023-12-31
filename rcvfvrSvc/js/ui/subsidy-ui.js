var feJS = feJS || {};

(function (feJS, $, window, document, undefined) {

    // IE 
    feJS.IeCheck = function(){
        var agent = navigator.userAgent.toLowerCase();
        
        if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
            $('.gov-subsidy').addClass('is-ie');  
        };
    }
    feJS.IeCheck();

    // Focus
    feJS.Focus = function(){
        $('.gov-subsidy').on('mousedown', function(){   
            $('.gov-subsidy').addClass('using-mouse');
        });

        $('.gov-subsidy').on('keydown', function(){   
            $('.gov-subsidy').removeClass('using-mouse');
        });
    }
    feJS.Focus();

    // popup
    feJS.popup = function(){
        var btnLayer = $('.btn-layer');
        var btnClose = $('.btn-layer-close');
        var layer = $('.subsidy-layer');
        var dim = '<div class="dim"></div>';
        
        btnLayer.on('click', function(e){
            e.preventDefault();
            var self = $(this);
            var layerId = $(this).attr('href'); 
            
            $(layerId).addClass('on').attr('tabindex','0').focus();
            $('body').append(dim);
            $('html').css({'overflow':'hidden', 'height':'100%'});           
            
            btnClose.on('click', function(e){
                e.preventDefault();
                var thisClose = $(this);
                
                thisClose.parents().closest(layer).removeClass('on').removeAttr('tabindex');
                self.focus();
                $(this).off('click');
                $('body').find('.dim').remove();
                $('html').removeAttr('style');
            });
        });
    }
    feJS.popup();

    // tab
    feJS.Tab = function(){
        $('.tab-list:not("active")').attr('title', '선택안됨');
        $('.tab-list.active').attr('title', '선택됨');

        // 공통 탭 메뉴
        $('.tab-list').on('click', function(){
            var tabId = $(this).attr('data-tab');
            // 선택된 탭 활성화
            $(this).addClass('active').attr({"title": "선택됨"}).focus().siblings().removeClass("active").attr({"title": "선택안됨"});
            // 연관된 탭 패널 활성화
		    $("#" + tabId).addClass('active').siblings().removeClass('active');
        });

        // 필터 탭 메뉴
        $('.filter-tab-list:not("active")').attr('title', '선택안됨');
        $('.filter-tab-list.active').attr('title', '선택됨');

        if($(window).width() > 1000){
            $('.filter-tab-list').on('click', function(){
                var tabId = $(this).attr('data-tab');
                // 선택된 탭 활성화
                $(this).addClass('active').attr({"title": "선택됨"}).focus().siblings().removeClass("active").attr({"title": "선택안됨"});
                // 연관된 탭 패널 활성화
                $("#" + tabId).addClass('active').siblings().removeClass('active');
            });
    
            $('.filter-wrap').find('.filter-tab-list:nth-child(1) i').text('카드형으로 보기');
            $('.filter-wrap').find('.filter-tab-list:nth-child(2) i').text('축약형으로 보기');
        }else if($(window).width() <= 1000){
            $('.filter-wrap').find('.filter-tab-list:nth-child(1)').addClass('active').attr({"title": "선택됨"})
            .siblings().removeClass("active").attr({"title": "선택안됨"});
            $('.filter-wrap').next().find('.tab-content:nth-child(1)').addClass('active')
            .siblings().removeClass('active');
    
            $('.filter-wrap').find('.filter-tab-list:nth-child(1)').on('click', function(){
                var tabId = $(this).attr('data-tab');
                // 선택된 탭 활성화
                $(this).removeClass('active').attr({"title": "선택안됨"}).focus().next().addClass("active").attr({"title": "선택됨"});
                // 연관된 탭 패널 활성화
                $("#" + tabId).removeClass("active").next().addClass("active");
            });

            $('.filter-wrap').find('.filter-tab-list:nth-child(2)').on('click', function(){
                var tabId = $(this).attr('data-tab');
                // 선택된 탭 활성화
                $(this).removeClass('active').attr({"title": "선택안됨"}).focus().prev().addClass("active").attr({"title": "선택됨"});
                // 연관된 탭 패널 활성화
                $("#" + tabId).removeClass("active").prev().addClass("active");
            });
    
            $('.filter-wrap').find('.filter-tab-list:nth-child(1) i').text('축약형으로 보기');
            $('.filter-wrap').find('.filter-tab-list:nth-child(2) i').text('카드형으로 보기');
        };

        var executed = false;

        $(window).on('resize', function(){
            if($(window).width() > 1000){
                 // 필터 탭 메뉴
                $('.filter-tab-list').on('click', function(){
                    var tabId = $(this).attr('data-tab');
                    // 선택된 탭 활성화
                    $(this).addClass('active').attr({"title": "선택됨"}).focus().siblings().removeClass("active").attr({"title": "선택안됨"});
                    // 연관된 탭 패널 활성화
                    $("#" + tabId).addClass('active').siblings().removeClass('active');
                });
        
                $('.filter-wrap').find('.filter-tab-list:nth-child(1) i').text('카드형으로 보기');
                $('.filter-wrap').find('.filter-tab-list:nth-child(2) i').text('축약형으로 보기');
            }else if($(window).width() <= 1000){
                if(!executed){
                    $('.filter-wrap').find('.filter-tab-list:nth-child(1)').addClass('active').attr({"title": "선택됨"})
                    .siblings().removeClass("active").attr({"title": "선택안됨"});
                    $('.filter-wrap').next().find('.tab-content:nth-child(1)').addClass('active')
                    .siblings().removeClass('active');

                    executed = true;
                };
        
                $('.filter-wrap').find('.filter-tab-list:nth-child(1)').on('click', function(){
                    var tabId = $(this).attr('data-tab');
                    // 선택된 탭 활성화
                    $(this).removeClass('active').attr({"title": "선택안됨"}).focus().next().addClass("active").attr({"title": "선택됨"});
                    // 연관된 탭 패널 활성화
                    $("#" + tabId).removeClass("active").next().addClass("active");
                });
    
                $('.filter-wrap').find('.filter-tab-list:nth-child(2)').on('click', function(){
                    var tabId = $(this).attr('data-tab');
                    // 선택된 탭 활성화
                    $(this).removeClass('active').attr({"title": "선택안됨"}).focus().prev().addClass("active").attr({"title": "선택됨"});
                    // 연관된 탭 패널 활성화
                    $("#" + tabId).removeClass("active").prev().addClass("active");
                });
        
                $('.filter-wrap').find('.filter-tab-list:nth-child(1) i').text('축약형으로 보기');
                $('.filter-wrap').find('.filter-tab-list:nth-child(2) i').text('카드형으로 보기');

                if($('.filter-wrap').find('.filter-tab-list:nth-child(3)').hasClass('active')){
                    $(this).removeClass('active');
                    $('.filter-wrap').next('.tab-panel .tab-content:nth-child(3)').removeClass('active');

                    $('.filter-wrap').find('.filter-tab-list:nth-child(1)').addClass('active');
                    $('.filter-wrap').next('.tab-panel .tab-content:nth-child(1)').addClass('active');
                };
            };
        });  

        function cardLineClamp(){
            $('.card-wrap.card .card-title').each(function(){
                var cardHeight = $(this).height();
                
                if(cardHeight > 36){
                    $(this).parent('.card-head').addClass('line-clamp');
                };
            });

            $('.card-wrap.mini .card-title').each(function(){
                var cardHeight = $(this).height();
    
                if(cardHeight > 36){
                    $(this).parent('.card-head').addClass('line-clamp');
                };
            });

            $('.card-wrap.list .card-title').each(function(){
                var cardHeight = $(this).height();
    
                if(cardHeight > 36){
                    $(this).parent('.card-head').addClass('line-clamp');
                };
            });

            $('.main-box-title').each(function(){
                var cardHeight = $(this).height();
    
                if(cardHeight > 36){
                    $(this).parent('.main-box').addClass('line-clamp');
                    $(this).parent('.main-mo-box').addClass('line-clamp');
                };
            });
        };

        cardLineClamp();

        $(window).on('load', function(){
            cardLineClamp();
        });

        $('body *').on('click', function(){
            cardLineClamp();
        });

        $('body *').on('keydown', '.tab-list, .filter-tab-list', function(e){
            if(e.keyCode == 13 || e.keyCode == 32){
                cardLineClamp();
            };
        });

        $(document).on('click', '.card-more .btn-refresh', function(){
            cardLineClamp();
        });
    }
    feJS.Tab();

    // 메인 - 보조금 Slide
    feJS.mainSlide = function(){
        var slideLength = $('.main-slide .swiper-slide').length;

        if(slideLength > 2){
            var mainSwiper = new Swiper('.main-slide', {
                pagination: {
                    el: '.main-pagination',
                    type: 'fraction',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.main-controler .swiper-button-next',
                    prevEl: '.main-controler .swiper-button-prev',
                    clickable: true,
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                slidesPerView: 2,
                spaceBetween: 24,
                a11y: true,
                observer: true,
                observeParents: true,
                initialSlide: 0,
                autoplayDisableOnInteraction: false,
                roundLengths: true,
                centeredSlides: false,
                breakpoints: {
                    1140: {
                        slidesPerView: 2.1,
                        spaceBetween: 12,
                        centeredSlides: true,
                    },
                    1000: {
                        slidesPerView: 1.1,
                        spaceBetween: 12,
                        centeredSlides: true,
                    },
                    720: {
                        slidesPerView: 1.15,
                        spaceBetween: 12,
                        centeredSlides: true,
                    },
                },
                on: {
                    slideChangeTransitionStart: function(){
                        $('.main-slide .swiper-slide-active').attr('tabindex', '0').siblings().attr('tabindex', '-1');
                        $('.main-slide .swiper-slide-prev').attr('tabindex', '0');
                        $('.main-slide .swiper-slide-next').attr('tabindex', '0');
                        $('.main-slide .swiper-slide-active .main-mo-box').attr('tabindex', '0').parent('.swiper-slide-active').siblings().find('.main-mo-box').attr('tabindex', '-1')
                    },
                }
            });

            $('.main-slide-wrap .main-stop').on('click', function(){
                mainSwiper.autoplay.stop();
                $('.main-slide-wrap .main-stop').removeClass('active');
                $('.main-slide-wrap .main-start').addClass('active').focus();
    
                return false;
            });
    
            $('.main-slide-wrap .main-start').on('click', function(){
                mainSwiper.autoplay.start();
                $('.main-slide-wrap .main-start').removeClass('active');
                $('.main-slide-wrap .main-stop').addClass('active').focus();
    
                return false;
            });
            //2023.08.25 웹 접근성 수정
        	$('.main-stop').click(function(){
        		mainSwiper.autoplay.stop();
        		$('.main-stop').removeClass('on');
        		$('.main-start').addClass('on');
        		$('.main-start').focus();
        	});
        	$('.main-start').click(function(){
        		mainSwiper.autoplay.start();
        		$('.main-start').removeClass('on');
        		$('.main-stop').addClass('on');
        		$('.main-stop').focus();
        	});
    
            $('.main-slide-wrap .main-item').on('focus', function(){
                mainSwiper.autoplay.stop();
                $('.main-slide-wrap .main-stop').removeClass('active');
                $('.main-slide-wrap .main-start').addClass('active');
    
                return false;
            });
    
/*            $('.main-slide-wrap .btn-text').on('focus', function(){
                mainSwiper.autoplay.start();
                $('.main-slide-wrap .main-start').removeClass('active');
                $('.main-slide-wrap .main-stop').addClass('active');
                
                return false;
                
            });*/
    
            $('.main-slide-wrap .main-item').on('mouseenter', function(){
                mainSwiper.autoplay.stop();
                $('.main-slide-wrap .main-stop').removeClass('active');
                $('.main-slide-wrap .main-start').addClass('active');
            }).on('mouseleave', function(){
                mainSwiper.autoplay.start();
                $('.main-slide-wrap .main-start').removeClass('active');
                $('.main-slide-wrap .main-stop').addClass('active');
            });
    
            $('.main-item').on('mouseenter', function(){
                $(this).addClass('on');
            }).on('mouseleave', function(){
                $(this).removeClass('on');
            });
    
            $('.main-item').on('keydown', function(e){
                if(e.keyCode == 13){
                    $(this).toggleClass('on')
                };
    
                if($('.main-item').hasClass('on')){
                    $(this).find('a').attr({'tabindex': '-1', 'tabindex': '0'});
                }else{
                    $(this).find('a').attr({'tabindex': '0', 'tabindex': '-1'});
                };
            });
    
            $('.main-item a:last-child').on('focusout', function(){
                $(this).parents('.main-item').removeClass('on');
                $(this).attr({'tabindex': '0', 'tabindex': '-1'}).siblings().attr({'tabindex': '0', 'tabindex': '-1'});
            });
    
            $('.main-slide-wrap .swiper-button-next, .main-slide-wrap .swiper-button-prev').on('click', function(){
                $('.swiper-slide').removeClass('active');
            });
        };
    }
    feJS.mainSlide();

    // 메인 - 영상으로 보는 Slide
    feJS.movMainSlide = function(){
        var slideLength = $('.mov-slide .swiper-slide').length;

        if(slideLength > 1){
            var movSwiper = new Swiper('.mov-slide', {
                pagination: {
                    el: '.mov-pagination',
                    type: 'fraction',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.mov-control .swiper-button-next',
                    prevEl: '.mov-control .swiper-button-prev',
                },
                slidesPerView: 2,
                spaceBetween: 24,
                slidesPerGroup:2,
                a11y: true,
                observer: true,
                observeParents: true,
                loop: true,
                initialSlide: 0,
                slidesOffsetAfter:0,
                autoplayDisableOnInteraction: false,
                roundLengths: true,
                on: {
                    slideChangeTransitionStart: function(){
                        $('.mov-slide .swiper-slide-active').attr('tabindex', '0').siblings().attr('tabindex', '-1');
                    },
                },
                breakpoints: {
                    805: {
                      slidesPerView: 1,
                      slidesPerGroup:1,
                      slidesOffsetAfter:0,
                      spaceBetween: 0,
                    }
                  }
            });
        }else{
            $('.mov-wrap').addClass('swiper-disabled');
        };
    }
    feJS.movMainSlide();

    // 메인 - 보조금24 이모저모 Slide
    feJS.bannerMainSlide =  function(){
        var slideLength = $('.banner-slide .swiper-slide').length;

        if(slideLength > 1){
            var bannerSwiper = new Swiper('.banner-slide', {
                pagination: {
                    el: '.banner-pagination',
                    type: 'fraction',
                    clickable: true,
                },
                slidesPerView: 1,
                spaceBetween: 6,
                a11y: true,
                observer: true,
                observeParents: true,
                initialSlide: 0,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                autoplayDisableOnInteraction: false,
                roundLengths: true,
                on: {
                    slideChangeTransitionStart: function(){
                        $('.banner-slide .swiper-slide-active').attr('tabindex', '0').siblings().attr('tabindex', '-1');
                    },
                }
            });

            $('.banner-slide-wrap .banner-stop').on('click', function(){
                bannerSwiper.autoplay.stop();
                $('.banner-slide-wrap .banner-stop').removeClass('active');
                $('.banner-slide-wrap .banner-start').addClass('active').focus();
    
                return false;
            });
    
            $('.banner-slide-wrap .banner-start').on('click', function(){
                bannerSwiper.autoplay.start();
                $('.banner-slide-wrap .banner-start').removeClass('active');
                $('.banner-slide-wrap .banner-stop').addClass('active').focus();
    
                return false;
            });
            
        	$('.banner-stop').click(function(){
        		bannerSwiper.autoplay.stop();
	       		$('.banner-stop').removeClass('on');
	       		$('.banner-start').addClass('on');
	       		$('.banner-start').focus();
	       	});
        	
	       	$('.banner-start').click(function(){
	       		bannerSwiper.autoplay.start();
	       		$('.banner-start').removeClass('on');
	       		$('.banner-stop').addClass('on');
	       		$('.banner-stop').focus();
	       	});
    
            $('.banner-slide-wrap .banner-item').on('focus', function(){
                bannerSwiper.autoplay.stop();
                $('.banner-slide-wrap .banner-stop').removeClass('active');
                $('.banner-slide-wrap .banner-start').addClass('active');
    
                return false;
            });
    
            $('.banner-slide-wrap .banner-item').on('mouseenter', function(){
                bannerSwiper.autoplay.stop();
                $('.banner-slide-wrap .banner-stop').removeClass('active');
                $('.banner-slide-wrap .banner-start').addClass('active');
    
                return false;
            });
    
            $('.banner-slide-wrap .banner-item').on('mouseleave', function(){
                bannerSwiper.autoplay.start();
                $('.banner-slide-wrap .banner-start').removeClass('active');
                $('.banner-slide-wrap .banner-stop').addClass('active');
    
                return false;
            });

    
//            $('.application-wrap').on('focus', function(){
//                bannerSwiper.autoplay.start();
//                $('.banner-slide-wrap .banner-start').removeClass('active');
//                $('.banner-slide-wrap .banner-stop').addClass('active');
//    
//                return false;
//            });

            $('.q_link_wrap .q_link').on('focus', function(){
                bannerSwiper.autoplay.start();
                $('.banner-slide-wrap .banner-start').removeClass('active');
                $('.banner-slide-wrap .banner-stop').addClass('active');
    
                return false;
            });
        }else{
            $('.banner-slide-wrap').addClass('swiper-disabled');
        }
    }
    feJS.bannerMainSlide();

    // 메인 - Card Slide
    feJS.CardSlide = function(){
        var cardSlide = $('.card-slide .swiper-slide');
        var cardSlideLength = cardSlide.length;

        if(cardSlideLength > 1){
            var cardSwiper = new Swiper('.card-slide', {
                slidesPerView: 1.03,
                spaceBetween: 10,
                a11y: true,
				observer: true,
                observeParents: true,
            });

            $(document).on('click', '.card-more .btn-refresh', function(){
                var cardSwiper = new Swiper('.card-slide', {
                    slidesPerView: 1.03,
                    spaceBetween: 10,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
                
                cardSwiper.slideTo(0, 500, false);
            });
        };
    }
    feJS.CardSlide();

    // 메인 - 상황별케이스
    feJS.LogonFamilySlide = function(){
        var slideLength = $('.family-slide .swiper-slide').length;

        if(slideLength > 3){
            var LogonFamilySlide = new Swiper('.family-slide', {
                pagination: {
                    el: '.family-pagination',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.logon-slide-wrap .swiper-button-next',
                    prevEl: '.logon-slide-wrap .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 3.5,
                spaceBetween: 24,
                a11y: true,
                observer: true,
                observeParents: true,
                on: {
                    reachBeginning: function(){
                        $('.logon-slide-wrap').removeClass('lf-gradient');
                    },
                    reachEnd: function(){
                        $('.logon-slide-wrap').removeClass('ri-gradient');
                    },
                    sliderFirstMove: function(){
                        $('.logon-slide-wrap').addClass('lf-gradient');
                    },
                }   
            });
        }else{
            $('.logon-slide-wrap').addClass('swiper-disabled');
        };

        $('.logon-slide-wrap .swiper-button-next').on('click', function(){
            $('.logon-slide-wrap').addClass('lf-gradient');
        });

        $('.logon-slide-wrap .swiper-button-prev').on('click', function(){
            $('.logon-slide-wrap').addClass('ri-gradient');
        });
    }
    feJS.LogonFamilySlide();

    // 나의혜택 Slide
    feJS.BenfitSlide = function(){
        var benefitSlide = $('.benefit-slide .swiper-slide');
        var benefitSlideLength = benefitSlide.length;

		if(benefitSlideLength > 3){
            var benefitSwiper = new Swiper('.benefit-slide', {
                slidesPerView: 'auto',
                a11y: true,
                observer: true,
                observeParents: true,
            });
        };
    }
    feJS.BenfitSlide();

    // 탭 Slide
    feJS.tabSlide = function(){
        if($('.tab-top-slide .swiper-slide').length){
            var tabSwiper = undefined;
    
            function initSwiper(){
                if($(window).width() < 511 && tabSwiper == undefined){
                    tabSwiper = new Swiper('.tab-top-slide', {
                        clickable: false,
                        a11y: true,
                        observer: true,
                        observeParents: true,
                        breakpoints: {
                            510: {
                                slidesPerView: 'auto',
                            },
                        }
                    });
                }else if($(window).width() >= 510 && tabSwiper != undefined){
                    tabSwiper.destroy();
                    tabSwiper = undefined;
                };
            };
    
            initSwiper();
    
            $(window).on('resize load', function(){
                initSwiper();
            });
        };

        if($('.tab-slide .swiper-slide').length){
            var tabSwiper = undefined;
    
            function initSwiper(){
                if($(window).width() < 451 && tabSwiper == undefined){
                    tabSwiper = new Swiper('.tab-slide', {
                        clickable: true,
                        a11y: true,
                        observer: true,
                        observeParents: true,
                        slideToclickedSlide:true,
                        breakpoints: {
                            450: {
                                slidesPerView: 'auto',
                            },
                        }
                    });
                    
                    var $subSwiperItem = $ ('.tab-slide .swiper-slide');
                    $subSwiperItem.click(function(){
                    	var target = $(this);
                    	
                    	muCenter(target);
                    })
                    
                    function muCenter(target){
                    	var snbwrap=$('.tab-slide .swiper-wrapper');
                    	var targetPos=target.position();
                    	var box=$('.tab-slide');
                    	var boxHarf=box.width()/2;
                    	var pos;
                    	var listWidth=0;
                    	
                    	snbwrap.find('.swiper-slide').each(function(){listWidth+= $(this).outerWidth();})
                    	
                    	
                    	var selectTargetPos = targetPos.left + target.outerWidth()/2;
                    	if(selectTargetPos <= boxHarf){
                    		pos=0;
                    		
                    	}else if((listWidth - selectTargetPos) <= boxHarf){
                    		
                    		pos=listWidth-box.width()+40;
                    	}else{
                    		pos=selectTargetPos -boxHarf;
                    	}
                    	
                    	setTimeout(function(){snbwrap.css({
                    		"transform":"translate3d("+(pos*-1) +"px,0,0)",
                    		"transition-duration":"500ms"
                    	})},200);
                    }
                    
                    
                }else if($(window).width() >= 450 && tabSwiper != undefined){
                    tabSwiper.destroy();
                    tabSwiper = undefined;
                };
            };
    
            initSwiper();
    
            $(window).on('resize load', function(){
                initSwiper();
            });
        };

        if($('.link-tab-wrap .swiper-slide').length){
            var linkTabSwiper = undefined;
    
            function initSwiper(){
                if($(window).width() < 511 && linkTabSwiper == undefined){
                    linkTabSwiper = new Swiper('.link-tab-wrap', {
                        clickable: false,
                        a11y: true,
                        observer: true,
                        observeParents: true,
                        breakpoints: {
                            510: {
                                slidesPerView: 'auto',
                            },
                        }
                    });
                }else if($(window).width() >= 510 && linkTabSwiper != undefined){
                    linkTabSwiper.destroy();
                    linkTabSwiper = undefined;
                };
            };
    
            initSwiper();
    
            $(window).on('resize load', function(){
                initSwiper();
            });
        }
    }
    feJS.tabSlide();

    // 이용방법 Slide
    feJS.UsewaySlide = function(){
        if($('.useway-slide-wrap .swiper-slide').length){
            var useSwiper1 = new Swiper('.useway-slide1', {
                pagination: {
                    el: '.useway-pagination1',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slide1 .swiper-button-next',
                    prevEl: '.slide1 .swiper-button-prev',
                    clickable: true,
                },
                autoHeight: true,
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
            
            var useSwiper2 = new Swiper('.useway-slide2', {
                pagination: {
                    el: '.useway-pagination2',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slide2 .swiper-button-next',
                    prevEl: '.slide2 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
    
            var useSwiper3 = new Swiper('.useway-slide3', {
                pagination: {
                    el: '.useway-pagination3',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slide3 .swiper-button-next',
                    prevEl: '.slide3 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
            
            var useSwiper4 = new Swiper('.useway-slide4', {
                pagination: {
                    el: '.useway-pagination4',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slide4 .swiper-button-next',
                    prevEl: '.slide4 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
            
            //20231115 start
            //간편찾기 개인(가구)
            var useSwiper5 = new Swiper('.useway-slide5', {
                pagination: {
                    el: '.useway-pagination5',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slide5 .swiper-button-next',
                    prevEl: '.slide5 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });

            //간편찾기 소상공인
            var useSwiper6 = new Swiper('.useway-slide6', {
                pagination: {
                    el: '.useway-pagination6',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slide6 .swiper-button-next',
                    prevEl: '.slide6 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });

            //간편찾기 법인
            var useSwiper7 = new Swiper('.useway-slide7', {
                pagination: {
                    el: '.useway-pagination7',
                    type: 'progressbar',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.slide7 .swiper-button-next',
                    prevEl: '.slide7 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
            //20231115 end
            
            //20231115 start
            var useSwiper_mo1 = new Swiper('.useway-mo-slide1', {
                navigation: {
                    nextEl: '.mo-slide1 .swiper-button-next',
                    prevEl: '.mo-slide1 .swiper-button-prev',
                    clickable: true,
                },
                autoHeight: true,
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
            
            var useSwiper_mo2 = new Swiper('.useway-mo-slide2', {
                navigation: {
                    nextEl: '.mo-slide2 .swiper-button-next',
                    prevEl: '.mo-slide2 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
    
            var useSwiper_mo3 = new Swiper('.useway-mo-slide3', {
                navigation: {
                    nextEl: '.mo-slide3 .swiper-button-next',
                    prevEl: '.mo-slide3 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
            
            var useSwiper_mo4 = new Swiper('.useway-mo-slide4', {
                navigation: {
                    nextEl: '.mo-slide4 .swiper-button-next',
                    prevEl: '.mo-slide4 .swiper-button-prev',
                    clickable: true,
                },
                slidesPerView: 1,
                a11y: true,
                observer: true,
                observeParents: true,
            });
            //20231115 end

            $('.useway-tab-cont #tab7').on('click', function(){
                var useSwiper1 = new Swiper('.useway-slide1', {
                    pagination: {
                        el: '.useway-pagination1',
                        type: 'progressbar',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.slide1 .swiper-button-next',
                        prevEl: '.slide1 .swiper-button-prev',
                        clickable: true,
                    },
                    autoHeight: true,
                    slidesPerView: 1,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
            });

            $('.useway-tab-cont #tab8').on('click', function(){
                var useSwiper2 = new Swiper('.useway-slide2', {
                    pagination: {
                        el: '.useway-pagination2',
                        type: 'progressbar',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.slide2 .swiper-button-next',
                        prevEl: '.slide2 .swiper-button-prev',
                        clickable: true,
                    },
                    slidesPerView: 1,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
            });

            $('.useway-tab-cont #tab9').on('click', function(){
                var useSwiper3 = new Swiper('.useway-slide3', {
                    pagination: {
                        el: '.useway-pagination3',
                        type: 'progressbar',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.slide3 .swiper-button-next',
                        prevEl: '.slide3 .swiper-button-prev',
                        clickable: true,
                    },
                    slidesPerView: 1,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
            });
            $('.useway-tab-cont #tab10').on('click', function(){
                var useSwiper4 = new Swiper('.useway-slide4', {
                    pagination: {
                        el: '.useway-pagination4',
                        type: 'progressbar',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.slide4 .swiper-button-next',
                        prevEl: '.slide4 .swiper-button-prev',
                        clickable: true,
                    },
                    slidesPerView: 1,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
            });
            
            //20231115 start
            //간편찾기 개인(가구)
            $('.useway-tab-cont #tab11').on('click', function(){
                var useSwiper5 = new Swiper('.useway-slide5', {
                    pagination: {
                        el: '.useway-pagination5',
                        type: 'progressbar',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.slide5 .swiper-button-next',
                        prevEl: '.slide5 .swiper-button-prev',
                        clickable: true,
                    },
                    slidesPerView: 1,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
            });
            
            //간편찾기 소상공인
            $('.useway-tab-cont #tab12').on('click', function(){
                var useSwiper6 = new Swiper('.useway-slide6', {
                    pagination: {
                        el: '.useway-pagination6',
                        type: 'progressbar',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.slide6 .swiper-button-next',
                        prevEl: '.slide6 .swiper-button-prev',
                        clickable: true,
                    },
                    slidesPerView: 1,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
            });
            
            //간편찾기 법인
            $('.useway-tab-cont #tab13').on('click', function(){
                var useSwiper7 = new Swiper('.useway-slide7', {
                    pagination: {
                        el: '.useway-pagination7',
                        type: 'progressbar',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.slide7 .swiper-button-next',
                        prevEl: '.slide7 .swiper-button-prev',
                        clickable: true,
                    },
                    slidesPerView: 1,
                    a11y: true,
                    observer: true,
                    observeParents: true,
                });
            });
            //20231115 end
            
        };
        
        $('.useway-mo-slide select[name="sel-2"]').on('change', function(){
            var selValue = $(this).val();
            
            if(selValue == 'useway1'){
                $('.useway-slide-wrap.mo-slide1').addClass('active').siblings().removeClass('active');
            }else if(selValue == 'useway2'){
                $('.useway-slide-wrap.mo-slide2').addClass('active').siblings().removeClass('active');
            }else if(selValue == 'useway3'){
                $('.useway-slide-wrap.mo-slide3').addClass('active').siblings().removeClass('active');
            }else if(selValue == 'useway4'){
                $('.useway-slide-wrap.mo-slide4').addClass('active').siblings().removeClass('active');
            };
        });

        //20231115 start
        $('.useway-mo-slide select[name="sel-3"]').on('change', function(){
        	var selValue = $(this).val();
            
            if(selValue == 'useway5'){
                $('.useway-slide-wrap.slide5').addClass('active').siblings().removeClass('active');
            }else if(selValue == 'useway6'){
                $('.useway-slide-wrap.slide6').addClass('active').siblings().removeClass('active');
            }else if(selValue == 'useway7'){
                $('.useway-slide-wrap.slide7').addClass('active').siblings().removeClass('active');
            }
        });
        //20231115 end

        $('.intro-select select[name="sel-1"]').on('change', function(){
            var selValue2 = $(this).val();
            
            if(selValue2 == 'intro1'){
                $('.select-content.tab1').addClass('active').siblings().removeClass('active');
            }else if(selValue2 == 'intro2'){
                $('.select-content.tab2').addClass('active').siblings().removeClass('active');
            }else if(selValue2 == 'intro3'){
                $('.select-content.tab3').addClass('active').siblings().removeClass('active');
            };
        });
    }
    feJS.UsewaySlide();

    // 간편찾기 필터링
    feJS.TabFiltering = function(){
        var btnSelect = $(".tab-wrap").find(".btn_select");

        btnSelect.on('click', function(){
            var $this = $(this);
            
            $this.toggleClass('on');
            $this.next().toggleClass('on');

            if($this.hasClass('on')){
                $this.parent().siblings().find('.btn_select, .select-popup-wrap').removeClass('on');
                $this.parent().siblings().find('.btn_select').find('.bg_arrow').text('열기');
                $this.find('.bg_arrow').text('닫기');
            }else{
                $this.find('.bg_arrow').text('열기');
            };

            $this.next().find('.btn-md').focusout(function(){
                $this.removeClass('on');
                $this.next().removeClass('on');
            }).on('click', function(e){
                e.preventDefault();
                $this.removeClass('on');
                $this.next().removeClass('on');
            });
        });
    }
    feJS.TabFiltering();

    // All Check
    feJS.Allcheck = function(){
        // 신청서
        $('input[class="chkall"]').on('click', function(){
            // disabled 된것 뺌
            $(this).parents('.accordion-box').find('input[type="checkbox"]').not('input[disabled]').prop('checked', this.checked);
            $(this).parents('.service-list-inner').find('input[type="checkbox"]').not('input[disabled]').prop('checked', this.checked);
        
            $('.service-list-inner').each(function(){
                var checkedLength = $(this).find('input[data-element]:checked').length;
                
                $(this).find('.count').text(checkedLength);
            });
        });

        $('input[class="chk"]').on('click', function(){
            var $target = $(this).attr('data-element').split('-')[1];
            
            // disabled 된것 뺌
            if($('input[data-element="chk-' + $target + '"]:checked').not($('input[data-element="chk-' + $target + '"]:disabled')).length == $('input[data-element="chk-' + $target + '"]').not($('input[data-element="chk-' + $target + '"]:disabled')).length){
                $(this).parents('.accordion-box').find('input[class="chkall"]').prop('checked', true);
                $(this).parents('.service-list-inner').find('input[class="chkall"]').prop('checked', true);
            }else{
                $(this).parents('.accordion-box').find('input[class="chkall"]').prop('checked', false);
                $(this).parents('.service-list-inner').find('input[class="chkall"]').prop('checked', false);
            };

            $('.service-list-inner').each(function(){
                var checkedLength = $(this).find('input[data-element]:checked').length;
                
                $(this).find('.count').text(checkedLength);
            });
        });

        $('.service-list-inner').each(function(){
            // disabled 된것 뺌
            var checkTotalLength = $(this).find('input[data-element]').length - $(this).find('input[disabled]').length;

            $(this).find('.total').text(checkTotalLength);
        });

        // 보조금24 이용동의 팝업
        $('input[data-element="chk-all"]').on('click', function(){
            $('.layer-agree-wrap').find('input[type="checkbox"]').prop('checked', this.checked);
        });

        $('.layer-agree-wrap input[name="chk-type1"]').on('click', function(){
            if($('.layer-agree-wrap input[name="chk-type1"]:checked').length == $('.layer-agree-wrap input[name="chk-type1"]').length){
                $('input[data-element="chk-all"]').prop('checked', true);
            }else{
                $('input[data-element="chk-all"]').prop('checked', false);
            };
        });
    }
    feJS.Allcheck();

    // Card Pick
    feJS.CardPick = function(){
        $(document).on('click', '.card-pick', function(e){
            e.preventDefault();
            var $this = $(this);
            $(this).toggleClass('active');
            $(this).find('span').text('관심보조금 해제하기');

            if($(this).hasClass('active')){
                $(this).attr('href', '#');
            }else{
                $(this).attr('href', '#pop10');
                $(this).find('span').text('관심보조금 선택하기');
                $(this).next().show();
                $('body').find('.dim').remove();
                $('html').removeAttr('style');

                var autoClose = function(){
                    $this.next().hide();
                };

                setTimeout(autoClose, 1000);
            };
        });
        
        if($('.card-wrap.mini').find('.card-chk').length || $('.card-wrap.list').find('.card-chk').length || $('.card-wrap.mini').find('.check-wrap').length || $('.card-wrap.list').find('.check-wrap').length){
            $('.card-wrap.mini').find('.card-title').addClass('pick');
            $('.card-wrap.list').find('.card-title').addClass('pick');
        };
    }
    feJS.CardPick();

    // Accordion
    feJS.Accordion = function(){
        $(document).on('click', '.fnc', function(){
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().removeClass('active');
            
            if($(this).parent().hasClass('active')){
                $(this).find('.ico-accordion span').text('닫기');
                $(this).parent().siblings().find('.ico-accordion span').text('열기');
            }else{
                $(this).find('.ico-accordion span').text('열기');
            };
        });

        $(document).on('keydown', '.fnc', function(e){
            if(e.which == 13){
                $(this).parent().toggleClass('active');
                $(this).parent().siblings().removeClass('active');
                
                if($(this).parent().hasClass('active')){
                    $(this).find('.ico-accordion span').text('닫기');
                    $(this).parent().siblings().find('.ico-accordion span').text('열기');
                }else{
                    $(this).find('.ico-accordion span').text('열기');
                };
            };
        });

        $('.agreebox-title-wrap').find('.open-close').on('click', function(){
            $(this).toggleClass('active');
            $('.agreebox-cont').toggleClass('active');

            if($(this).hasClass('active')){
                $(this).find('span').text('자세히 보기');
            }else{
                $(this).find('span').text('자세히 보기 닫기');
            };
        });
    }
    feJS.Accordion();

    // 막대그래프 애니매이션
    feJS.GraphAnimation = function(){
        var progressbar1 = $('.board-app').find('.progress-bar');
        var progressbar2 = $('.board-check').find('.progress-bar');
        var progressbar3 = $('.board-benefit').find('.progress-bar');

        var progressWidth1 = progressbar1.attr('data-width');
        var progressWidth2 = progressbar2.attr('data-width');
        var progressWidth3 = progressbar3.attr('data-width');
        
        progressbar1.animate({width : progressWidth1 + '%'}, 1500);
        progressbar2.animate({width : progressWidth2 + '%'}, 1500);
        progressbar3.animate({width : progressWidth3 + '%'}, 1500);
    }
    feJS.GraphAnimation();

    // 맞춤혜택 Js
    feJS.MyBenefit = function(){
        var benefitItem =  $('.benefit-item');
        var benefitItemLength = benefitItem.length;

        benefitItem.on('click', function(e){
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).addClass('active').parent().siblings().find('.benefit-item').removeClass('active');
        });

        $(window).on('resize load', function(){
            if($('.my-benefit-board .mo-inbl').length){
                if($(window).width() < 1001){
                    $('.my-benefit-board').removeClass('fmY');
                }else{
                    $('.my-benefit-board').addClass('fmY');
                };
            };
        });
        
        if(benefitItemLength > 4){
            $('.my-benefit-list').addClass('fix');
        }else{
            $('.my-benefit-list').removeClass('fix');
        };

        if(benefitItemLength == 4){
            $('.my-benefit-list').addClass('len4');
        };

        if(benefitItemLength > 5){
            $('.my-benefit-list').find('.btn-toggle').show();
        };

        $('.my-benefit-list').find('.btn-toggle').on('click', function(){
            $(this).toggleClass('active');
            $('.my-benefit-list').toggleClass('active');

            if($(this).hasClass('active')){
                $(this).find('span').text('리스트 닫기');
            }else{
                $(this).find('span').text('리스트 열기');
            };
        });

        $('.benefit-slide .swiper-slide').on('click', function(e){
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
        });
    }
    feJS.MyBenefit();

    // 전체혜택 Js
    feJS.BenefitTotal = function(){
        // Search
        $('.benefit-search-wrap .inp-wrap input').on('keyup', function(){
            $('.search-result-wrap').addClass('active');

            var inputLength = $(this).val().length;
            
            if(inputLength == 0){
                $('.search-result-wrap').removeClass('active');
            };
        });

        // 조건검색
        var btnSearch =  $('.condi-search-btn');
        var benefitCond = $('.benefit-cond-wrap');
        var btnSelect = benefitCond.find('.btn-select');

        btnSearch.on('click', function(){
            $(this).toggleClass('active');
            benefitCond.toggleClass('active');

            if(btnSearch.hasClass('active')){
                btnSearch.find('span').text('조건 닫기');
            }else if($('.array-item').length > 0){
                btnSearch.find('span').text('조건 보기');
            }else{
                btnSearch.find('span').text('조건 검색');
            };
        });

        btnSelect.on('click', function(){
            $(this).toggleClass('active');
            $('.cond-popup-wrap').toggleClass('active');

            if($(this).hasClass('active')){
                $(this).find('span').text('닫기');
            }else{
                $(this).find('span').text('열기');
            };
        });

        $('.benefit-cond-wrap .accordion-box:nth-child(2) .check-box:first-child input').on('focus', function(){
            $('.btn-select').removeClass('active')
            $('.cond-popup-wrap').removeClass('active');
        });

        $('.benefit-cond-wrap').find('.type-2').on('keydown', function(e){
            var v_keyCode = e.keyCode || e.which;

            if(v_keyCode == 9){
                if(e.shiftKey){
                    // shift + tab event
                    $('.condi-search-btn').addClass('active').find('span').text('조건 닫기');
                    $('.benefit-cond-wrap').addClass('active');
                }else{
                    // tab event
                    $('.condi-search-btn').removeClass('active').find('span').text('조건 검색');
                    $('.benefit-cond-wrap').removeClass('active');
                };
            };
        });
    }
    feJS.BenefitTotal();

    // 간편찾기 Js
    feJS.SimpleSearch = function(){
        // 간편찾기 상세열기
        $('.simple_seq').find('.btn-detail').on('click', function(){
            $(this).toggleClass('active');
            $('.simple_seq').find('.detail-array-wrap').toggleClass('active');

            if($(this).hasClass('active')){
                $(this).find('span').text('상세 닫기');
            }else{
                $(this).find('span').text('상세 열기');
            };
        });

        // 간편찾기 메세지
        $('.simple-search-wrap').find('.tab-wrap.search button#tab2, .tab-wrap.search button#tab3').on('click', function(){
            $('.simple-hidden-msg').addClass('active');
        });

        $('.simple-search-wrap').find('.tab-wrap.search button#tab1').on('click', function(){
            $('.simple-hidden-msg').removeClass('active');
        });

        // 간편찾기 지역검색
        $('.region-wrap').find('input[type="radio"]').on('click', function(){
            var rdoVal = $('input[type="radio"]:checked').val();
        
            if(rdoVal == 'Y'){
                $('input[name="region-type1"]').parents('.accordion-box').addClass('active');
            }else{
                $('input[name="region-type1"]').parents('.accordion-box').removeClass('active');
            };
        });

        // 간편찾기 다시 찾기
        $('.simple-visual-wrap').find('.btn-re-searching').on('click', function(){
            $(this).toggleClass('active');
            $('.re-searching-contents').toggleClass('active');

            if($(this).hasClass('active')){
                $(this).find('span').text('접기');
            }else{
                $(this).find('span').text('다시 찾기');
            };
        });
    }
    feJS.SimpleSearch();

    // 맞춤안내 가족관리 Js
    feJS.FamManage = function(){
        $('.family-mng-table .btn-sm').on('mouseenter focus', function(){
            if($(window).width() > 1000){
                $('.tip_box').show();
                
                $(document).on('click', '.btn_seq_close', function(){
                    $(this).parent('.tip_box').hide();
                });
            };
        });
    }
    feJS.FamManage();

    // 라디오 체크
    feJS.RadioCheck = function(){
        // 가족변동 여부 확인 팝업
        // $('.fa-Y .family-check:nth-child(1) input[name="rdo-type1"]').on('click', function(){
        //     var rdocheckValue = $('.family-check:nth-child(1) input[name="rdo-type1"]:checked').val();
        
        //     if(rdocheckValue == "Y"){
        //         $('.family-check:nth-child(2)').addClass('active');
                
        //         $(this).parents('.layer-body').next().find('.type-1').attr('href', '가족 등록/관리 URL');
        //         $(this).parents('.layer-body').next().find('.type-1 span').text('가족 등록/관리');
        //     }else if(rdocheckValue == "N"){
        //         $('.family-check:nth-child(2)').removeClass('active');
        //         $('.family-check:nth-child(3)').removeClass('active');

        //         $(this).parents('.layer-body').next().find('.type-1').attr('href', '개인/가구 특성 관리 URL');
        //         $(this).parents('.layer-body').next().find('.type-1 span').text('개인/가구 특성 관리');
        //     };
        // });

        // $('.fa-Y .family-check:nth-child(2) input[name="rdo-type2"]').on('click', function(){
        //     var rdocheckValue = $('.family-check:nth-child(2) input[name="rdo-type2"]:checked').val();
        
        //     if(rdocheckValue == "Y"){
        //         $('.family-check:nth-child(3)').addClass('active');
        //     }else if(rdocheckValue == "N"){
        //         $('.family-check:nth-child(3)').removeClass('active');
        //     };
        // });

        // 가족변동 여부 확인 팝업 - 가족없음
        // $('.fa-N input[name="rdo-type4"]').on('click', function(){
        //     var rdocheckValue = $('input[name="rdo-type4"]:checked').val();
        
        //     if(rdocheckValue == "Y"){
        //         $(this).parents('.layer-body').next().find('.type-1').attr('href', '맞춤안내 조회하기 URL').removeClass('type-1').addClass('type-3');
        //         $(this).parents('.layer-body').next().find('.type-3 span').text('맞춤안내 조회하기');
        //     }else if(rdocheckValue == "N"){
        //         $(this).parents('.layer-body').next().find('.type-3').attr('href', '가족 추가하기 URL').removeClass('type-3').addClass('type-1');
        //         $(this).parents('.layer-body').next().find('.type-1 span').text('가족 추가하기');
        //     };
        // });
    }
    feJS.RadioCheck();

    // 맞춤안내 설정 소상공인 입력
    // feJS.InputData = function(){
    //     $('input[data-element="inp-data"]').on('click', function(){
    //         if($(this).is(':checked') == true){
    //             $(this).parents('.check-wrap').next().addClass('active');
    //         }else{
    //             $(this).parents('.check-wrap').next().removeClass('active');
    //         };
    //     });
    // }
    // feJS.InputData();

    // skeleton loading
    feJS.SkeletonLoading = function(){
        var skeletonItem = $('.skeleton-loading');

        function hideSkeleton(){
            skeletonItem.each(function(){
                $(this).fadeOut();
            });
        };

        $(window).on('load', function(){
            setTimeout(hideSkeleton, 4000);
        });
    }
    feJS.SkeletonLoading();

    // 바탕클릭
    feJS.AreaClick = function(){
        $(document).on('click', function(e){    
            if(!$(e.target).closest('.btn_select, .select-popup-wrap, .search-result-wrap, .btn-select, .cond-popup-wrap').length){
                $('body').find('.btn_select').removeClass('on');
                $('body').find('.select-popup-wrap').removeClass('on');
                $('body').find('.search-result-wrap').removeClass('active');
                $('body').find('.btn-select').removeClass('active');
                $('body').find('.cond-popup-wrap').removeClass('active');
            };
        });
    }
    feJS.AreaClick();

    // Window Scroll Event
    feJS.ScrollEvent = function(){
        var footerHeight = $('.footer-element').outerHeight();
        
//        if($('.docbar-wrap').length){
//            var val = $(document).height() - $(window).height() - footerHeight;
//            
//            $(window).on('scroll load', function(){
//                var winSct = $('.docbar-wrap').scrollTop();
//
//                if(winSct >= val){
//                    $('.docbar-wrap').addClass('sticky');
//                }else{
//                    $('.docbar-wrap').removeClass('sticky');
//                };
//            });
//        };
        
        if($('.docbar-wrap').length){
        	var buttonOffset = $(".docbar-wrap").offset().top;
            
        	$(window).scroll(function(){
	        	if($(window).scrollTop() + $(window).height() < buttonOffset -100){
	        		$('.docbar-wrap').addClass('sticky');
	        	}else{
	        		$('.docbar-wrap').removeClass('sticky');
	        	}
	        });
        };
        
//        
        if($('.docbar-wrap_fix').length){
	        var buttonOffset = $(".docbar-wrap_fix").offset().top;
	        $('.docbar-wrap_fix').addClass('sticky');
	        $(window).scroll(function(){
	        	if($(window).scrollTop() + $(window).height() < buttonOffset){
	        		$('.docbar-wrap_fix').addClass('sticky');
	        	}else{
	        		$('.docbar-wrap_fix').removeClass('sticky');
	        	}
	        });
        
        };


        if($('.my-benefit-wrap').find('.tab-slide').length){
            var tabOst = $('.my-benefit-wrap').find('.tab-slide').offset().top;
            // var val = $(document).height() - $(window).height() - footerHeight - 381;
            
            $(window).on('scroll', function(){
                var winSct = $(this).scrollTop();

                if(winSct >= tabOst){
                    $('.my-benefit-wrap').find('.tab-slide').addClass('sticky');
                }else{
                    $('.my-benefit-wrap').find('.tab-slide').removeClass('sticky');
                };

                // if(winSct >= val || winSct + $(window).height() == $(document).height()){
                //     $('.docbar-wrap').addClass('sticky');
                // }else{
                //     $('.docbar-wrap').removeClass('sticky');
                // };
            });

            $(document).on('click', '.my-benefit-wrap .tab-list', function(){
                if($('.tab-slide').hasClass('sticky')){
                    $('html, body').scrollTop(tabOst);
                };

                var val = $(document).height() - $(window).height() - footerHeight;
                
                $(window).on('scroll load', function(){
                    var winSct = $(this).scrollTop();
    
                    if(winSct >= val){
                        $('.docbar-wrap').addClass('sticky');
                    }else{
                        $('.docbar-wrap').removeClass('sticky');
                    };
                });
            });

            $('.my-benefit-wrap .tab-content').on('focus', function(){
                $('html, body').scrollTop(0);
            });
        };

        $(document).on('click', '.trait-mng-wrap .btn-md', function(e){
            e.preventDefault();
            var ost = $('.trait-mng-wrap').find('.accordion-box.family-box').offset().top;

            $('html, body').scrollTop(ost - 30);
        });

        $(document).on('click', '.tab-wrap.search .btn-md.type-1', function(e){
            e.preventDefault();
            var ost = $('.tab-wrap.search').find('.accordion-wrap').offset().top;

            $('html, body').scrollTop(ost - 20);
        });
    }
    feJS.ScrollEvent();

    // Click Event
    feJS.ClickEvent = function(){
        // 링크 막기
        $('.family-item.non-link').on('click', function(e){
            e.preventDefault();
        });

        // 가족 혜택 얼럿창 닫기
        $(".sub_alert_box").find(".btn_sub_close").on("click", function(e){
            $(this).parent().parent(".sub_alert_box").hide();
            e.preventDefault();
        });

        // 알림 닫기
        $('.notice-wrap .btn-close').on('click', function(){
            $(this).parents('.notice-wrap').hide();
        });

        // 툴팁
        $('.docbar-wrap .btn-lg').on('mouseenter', function(){
            $(this).next('.tip_box').show();
        });

        $('.add-family-btn-wrap .btn-md').on('mouseenter', function(){
            $(this).next('.tip_box').show();
        });

        $(document).on('click', '.btn-interest', function(e){
            e.preventDefault();
            $('.tip_box').show();
        });

        $(document).on('click', '.btn_seq_close', function(){
            $(this).parent('.tip_box').hide();
            $(this).parent().prev('a').focus();
            $(this).parent().prev('button').focus();
        });

        // 메인 배너
        $('.btn-cookie').on('click', function(){
            $('.cookie-banner-wrap').hide();
        });

        // 혜택상세
        $('.btn-share').on('click', function(e){
            e.preventDefault();
            $('.tip_box').show();
        });

        // 나의혜택 맞춤안내 설정
        $('.custom-set-btn').on('click', function(){
            $(this).next('.set-box').toggleClass('active');
        });

        // 맞춤안내 팝업 더보기
        $('.family-info .btn-more').on('click', function(){
            $(this).toggleClass('active');
        });

        // 맞춤안내 팝업 가족추가 툴팁
        $('.subsidy-layer .tooltip button').on('click',function(){
            $(this).parents('.tooltip').hide();
        });
        
        // 맞춤안내 팝업 가족추가 툴팁
        $('.subsidy-layer .tool_box .btn_tooltip').on('click',function(){
            $(this).next('.tooltip').show();
        });
        
    }
    feJS.ClickEvent();

    // 반응형 대응 
    feJS.ResizeWidth = function(){
        function resizeFnc(){
            var winWidth = $(window).width();
            var btnBox1 = $('.btn_box:nth-child(1)').width();
            var btnBox2 = $('.btn_box:nth-child(2)').width();
            var btnBoxWidth = btnBox1 + btnBox2 + 8;
            var docBarBtnLength = $('.docbar-wrap').find('.btn-lg').length;
            var bottomBtnLength = $('.bottom-btn-wrap').find('.btn-lg').length;
            var notiHeight = $('.notice-wrap').height();
            var searchWidth = $('.inp-wrap').width();

            $('.main_easy_searching').find("#panel1").find('.select-popup-wrap.wide-type').width(btnBoxWidth);
            $(".tab-wrap.logon").find("#panel1").find(".select-popup-wrap.wide-type").width(btnBoxWidth);
            
            if(winWidth > 1000){
                $('.simple_seq').find('.btn-detail').find('span').removeClass('blind');
                $(".simple_seq .btn_box:nth-child(4) .select-popup-wrap.chk-type").css('left', 0);
                $(".simple_seq .btn_box:nth-child(5) .select-popup-wrap.chk-type").css('left', -107 + '%');
                $('.search-result-wrap').width(searchWidth - 2);

                // Step
                $('.step-title').removeClass('blind');

                // 메인 - 나의혜택 하단
                if($('.subsidy-dir').hasClass('on')){
                    $('.subsidy-dir').removeClass('on');
                };

                if($('.subsidy-dir').length){
                	if(!$('#loadingPop').css('display') == "block"){
                		$('.dim').remove();
                	}
                };

                // button length
                if(docBarBtnLength === 1){
                    $('.docbar-wrap').removeClass('btn-len1');
                };

                if(bottomBtnLength === 1){
                    $('.bottom-btn-wrap').removeClass('btn-len1');
                };

                // 간편찾기 다시 찾기
                $('.btn-re-searching').find('span').removeClass('blind');

                // 이용방법
                $('.useway-cont-title').removeClass('underline');

                // 맞춤안내 높이
                if($('.subsidy_wide .notice-wrap').length){
                    $('.subsidy_wide').css('min-height', 174 + notiHeight + 'px');
                };

                if($('.subsidy_wide .notice-wrap').attr('style')){
                    $('.subsidy_wide').css('min-height', '144px');
                };

                $('.notice-wrap .btn-close').on('click', function(){
                    $('.subsidy_wide').css('min-height', '144px');
                });

                // 전체혜택
                
                $('.benefit-search-wrap').find("input[type='text']").attr('placeholder', '찾는 보조금 명 또는 검색어를 입력하세요.');
                $('.benefit-cond-wrap').find('.btn-accordion').removeClass('fnc').removeAttr('tabindex');
            }else if(winWidth < 1001){
                $('.simple_seq').find('.btn-detail').find('span').addClass('blind');
                $(".simple_seq .btn_box:nth-child(4) .select-popup-wrap.chk-type").css('left', 'auto').css('right', 0);
                $(".simple_seq .btn_box:nth-child(5) .select-popup-wrap.chk-type").css('left', 0);
                
                $('.search-result-wrap').width(searchWidth + 83);

                // Step
                $('.step-title').addClass('blind');
                if($('.step-item').hasClass('active')){
                    $('.step-item.active').find('.step-title').removeClass('blind');
                };
                
                // filter
                $('.filter-menu').find('.tab-list:first-child').addClass('active').siblings().removeClass('active');
                $('.filter_wrap').next('.tab-panel').find('.tab-content:first-child').addClass('active').siblings().removeClass('active');

                // button length
                if(docBarBtnLength === 1){
                    $('.docbar-wrap').addClass('btn-len1');
                };

                if(bottomBtnLength === 1){
                    $('.bottom-btn-wrap').addClass('btn-len1');
                };

                // 간편찾기 다시 찾기
                $('.btn-re-searching').find('span').addClass('blind');

                // 메인 이름 class
                $('.logon-profile').removeClass('line-clamp');

                // 이용방법
                $('.useway-cont-title').addClass('underline');

                // 맞춤안내 높이
                if($('.subsidy_wide .notice-wrap').length){
                    $('.subsidy_wide').css('min-height', 146 + notiHeight + 'px');
                };

                if($('.subsidy_wide .notice-wrap').attr('style')){
                    $('.subsidy_wide').css('min-height', 'auto');
                };

                $('.notice-wrap .btn-close').on('click', function(){
                    $('.subsidy_wide').css('min-height', 'auto');
                });

                // 전체혜택
                $('.benefit-search-wrap').find('input').attr('placeholder', '검색어 입력');
                $('.benefit-cond-wrap').find('.btn-accordion').addClass('fnc').attr('tabindex', '0');
            };
        };
        
        $(window).on("resize load", function(){
            resizeFnc();
        });
    }
    feJS.ResizeWidth();

    // 이용후기
    feJS.LengthCount = function(){
        $('textarea').on('keyup', function(){
            $('.textarea-counter').html("( " + $(this).val().length + " / 1,000 )");
    
            if($(this).val().length > 1000){
                $(this).val($(this).val().substring(0, 1000));
                $('.textarea-counter').html('( 1,000 / 1,000 )');
            };
        });  
    }
    feJS.LengthCount();

})(feJS, jQuery, window, document);