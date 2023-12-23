// ie closest polyfill
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
 }
 
 if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
	   var el = this;
 
	   do {
		  if (el.matches(s)) return el;
		  el = el.parentElement || el.parentNode;
	   } while (el !== null && el.nodeType === 1);
	return null;
	};
 }
 
// ie foreach
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

let pc_accordion = document.querySelectorAll('.accordion');
let pc_accordion_toggle = document.querySelectorAll('.accordion .toggle');

if( pc_accordion ){
	for(let j = 0; j < pc_accordion_toggle.length; j++) {
		let _this = pc_accordion_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.list');
			let cont = _list.querySelector('.content-wrap');

			if( _list.classList.contains('on') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('on')}
				});

				let x = document.getElementsByClassName('ir')[0];
				x.innerText="���ڵ�� �ݱ�";
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('on');}
				});
				

				let x = document.getElementsByClassName('ir')[0];
				x.innerText="���ڵ�� ����";

				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}



// pc_accordion2
let pc_accordion2 = document.querySelectorAll('.accordion2');
let pc_accordion2_toggle = document.querySelectorAll('.accordion2 .toggle');

if( pc_accordion2 ){
	for(let j = 0; j < pc_accordion2_toggle.length; j++) {
		let _this = pc_accordion2_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.list');
			let cont = _list.querySelector('.aco-cont');

			if( _list.classList.contains('off') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('off')}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('off');}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}


// pc_accordion3
let pc_accordion3 = document.querySelectorAll('.accordion3');
let pc_accordion3_toggle = document.querySelectorAll('.accordion3 .toggle');

if( pc_accordion3 ){
	for(let j = 0; j < pc_accordion3_toggle.length; j++) {
		let _this = pc_accordion3_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.tab02-info');
			let cont = _list.querySelector('.aco-cont');

			if( _list.classList.contains('off') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('off')}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('off');}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}

// pc_accordion4
let pc_accordion4 = document.querySelectorAll('.accordion4');
let pc_accordion4_toggle = document.querySelectorAll('.accordion4 .toggle');

if( pc_accordion4 ){
	for(let j = 0; j < pc_accordion4_toggle.length; j++) {
		let _this = pc_accordion4_toggle[j];

		_this.addEventListener('click', function(e){
			e.preventDefault();

			let _list = this.closest('.list');
			let cont = _list.querySelector('.content-wrap');

			if( _list.classList.contains('off') ){
				let tl = new TimelineMax({
					onComplete : function(){ _list.classList.remove('off')}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
			else {
				let tl = new TimelineMax({
					onStart : function(){ _list.classList.add('off');}
				});
				
				tl.to(cont, {duration: 0}).to(cont, {duration: 0.15});
			}
		});
	}
}

// modal layer
let pc_modal_wrap = document.querySelectorAll('.modal-blocker');
let pc_modal_open = document.querySelectorAll('.modal-open');
let pc_modal_close = document.querySelectorAll('.modal-close');
let pc_body = document.querySelector('body');

if( pc_modal_wrap ){
	for(let i =0 ; i < pc_modal_open.length ; i++ ){
		let _btn_open = pc_modal_open[i];

		_btn_open.addEventListener('click', function(e){
			e.preventDefault();

			let _href = this.getAttribute('href').replace(/\#/g,'');
			let _layer = document.getElementById(_href);

			let tl = new TimelineMax({
				onStart: function(){
					_layer.classList.add('on');
					pc_body.classList.add('overflow');
				}
			});
			
			tl.to(_layer, {duration: 0, opacity: 0}).to(_layer, {duration: 0.15, opacity: 1});
		});
	}

	for(let i =0 ; i < pc_modal_close.length ; i++ ){
		let _btn_close = pc_modal_close[i];

		_btn_close.addEventListener('click', function(e){
			e.preventDefault();
			let _layer = this.closest('.modal-blocker');

			let tl = new TimelineMax({
				onComplete: function(){
					_layer.classList.remove('on');
					pc_body.classList.remove('overflow');
				}
			});
			
			tl.to(_layer, {duration: 0.15, opacity: 0});
		});
	}
}

function modal_close(){
	let _layer = document.querySelector('.modal-blocker.on');

	let tl = new TimelineMax({
		onComplete: function(){
			_layer.classList.remove('on');
			pc_body.classList.remove('overflow');
		}
	});
	
	tl.to(_layer, {duration: 0.15, opacity: 0});
}

function fn_datepicker(){
	// datepicker
	$.datepicker.setDefaults({
		showOn: 'button',
		buttonText: '��¥ ����',
		buttonImageOnly: false,
		showButtonPanel: true,
		currentText: '����',
		closeText: '�޷� �ݱ�',
		dateFormat: 'yy.mm.dd',
		showOtherMonths: true,
		prevText: '���� ��',
		nextText: '���� ��',
		monthNames: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��'],
		monthNamesShort: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��'],
		dayNames: ['��', '��', 'ȭ', '��', '��', '��', '��'],
		dayNamesShort: ['��', '��', 'ȭ', '��', '��', '��', '��'],
		dayNamesMin: ['��', '��', 'ȭ', '��', '��', '��', '��'],
		showMonthAfterYear: true,
		changeYear: true,
		changeMonth : true
	});
	$('.datepicker input').datepicker();
}

$(function(){
	// ���̾� �ȿ��� ���̵�
	if( $('.modal').length > 0 ){
		var lm = $('.modal-blocker');
		var lmObj = lm.children(".modal");
		var lmObjTabbable = lmObj.find("button, input:not([type='hidden']), select, iframe, textarea, [href], [tabindex]:not([tabindex='-1'])");
		var lmObjTabbableFirst = lmObjTabbable && lmObjTabbable.first();
		var lmObjTabbableLast = lmObjTabbable && lmObjTabbable.last();
	
		lmObjTabbableLast.on("keydown", function(event) {
			if (!event.shiftKey && (event.keyCode || event.which) === 9) {
				event.preventDefault();
				lmObjTabbableFirst.focus();
			}
		});
	  
	}

	//main tab
	$(document).on('click', '[role="tab"]', function(e){
		e.preventDefault();
		
		var targetId = $(this).attr('aria-controls');
		var $this = $('#'+targetId);
		
		$(this).closest('[role="tablist"]').find('[role="tab"]').attr('aria-selected', false);
		$(this).attr('aria-selected', true);
		
		if( $(this).closest('.tab-area').hasClass('tab-layer') ){
			$(this).closest('.tab-area').find('.tab-cont-wrap').attr('hidden', true);
			$(this).parent().find('.tab').removeClass('on');
			$(this).addClass('on');
			$($this).removeAttr('hidden');
		}
		else {
			$(this).closest('.tab-area').find('.tab-cont').attr('hidden', true);
			$($this).removeAttr('hidden');
		}
		
	});

	
	//
	$(document).on('click', '.btn-pop-ctrl', function(){
		$(this).closest('.pop-ctrl-btn').find('.btn-pop-ctrl').removeClass('disabled');
		$(this).addClass('disabled');
		$(this).closest('.pop-search').find('.pop-roll-cont').toggleClass('on');
	});

	
	// date picker
	if ($(".datepicker").length > 0) fn_datepicker();

	// �˻�����
	$('.main-input-search-pc').keyup(function() {
		var inputKey = $('.main-input-search-pc').val();
		
		if (0 < inputKey.length) {
			$('.keyword-layer').attr('style', 'display:block; z-index:9999;');
		} else {
			$('.keyword-layer').attr('style', 'display:none;');
		}
		
	});

	$('.main-input-search-mb').keyup(function() {
		var inputKey2 = $('.main-input-search-mb').val();
				
		if (0 < inputKey2.length) {
			$('.keyword-layer.mb').attr('style', 'display:block; z-index:9999;');
		} else {
			$('.keyword-layer.mb').attr('style', 'display:none;');
		}
	});	
	
	$(document).click(function(e){
		if (!$(e.target).is('.search-box')) {
			$('.keyword-layer').attr('style', 'display:none;');
		}
	});
	
	 $('.fre_layer_box .layer_top_box button').click( function(){
    	$('.fre_layer_box').hide();
    });


	
	// tooltip
	if( $('.renew-tooltip').length > 0 ){
		$(document).on('click', '.tooltip-btn', function(){
			$(this).closest('body').find('.renew-tooltip').removeClass('on');
			$(this).closest('.renew-tooltip').toggleClass('on');
		});
		$(document).on('click', '.tooltip-close', function(){
			$(this).closest('.renew-tooltip').removeClass('on');
		});
	}

	//���α��� �˻��ɼ�
	$(document).on('click', '.btn-option', function(){
		$(this).toggleClass('on');
		$(this).closest('.renew-sub-search-box').find('.option-box').toggleClass('on');
	});

	//  
	if( $('.renew-sub-search-box').length > 0 ){
		$('.option-detail-box').each(function(){
			var _chk = $(this).find('[type="checkbox"]')
			
			_chk.on('change', function(){
				var _chk_leng01 = $(this).closest('.option-value-wrap').find('[type="checkbox"]:not(.all-chk):checked').length;
				
				if( $(this).hasClass('all-chk') ) {
					if( $(this).is(':checked') ){
						$(this).closest('.option-value-wrap').find('[type="checkbox"]:not(.all-chk)').prop('checked', false)
					}
				}
				else {
					$(this).closest('.option-value-wrap').find('[type="checkbox"].all-chk').prop('checked', false)
				}
				
				if( _chk_leng01 == 0 && $(this).closest('.option-value-wrap').find('[type="checkbox"].all-chk').not(':checked') ){
					$(this).closest('.option-value-wrap').find('[type="checkbox"].all-chk').prop('checked', true)
				}
			});
		});
		
		$(document).on('click', '.chk-reset', function(){
			$(this).closest('.option-box-wrap').find('[type="checkbox"]').prop('checked', false);
			$(this).closest('.option-box-wrap').find('[type="checkbox"].all-chk').prop('checked', true);
		});
	}

	
	//swiper
	// .button disabled class  
	$(document).on('click', '.button.disabled', function(e){
		e.preventDefault();
	});

	// .pagination disabled class  
	$(document).on('click', '.pagination .control.disabled', function(e){
		e.preventDefault();
	});

	// ���� - ���κ��־�
	let mainTopBanner = {};
	if ( $('.visual-wrap .swiper-slide').length == 1) {
		mainTopBanner = {
			loop: false,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination-main",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		}
	} else {
		mainTopBanner = {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: false,
			autoplay: {
				delay: 4000,
				disabledOnInteration: false,
			},
			pagination: {
				el: ".swiper-pagination-main",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		}
	}
	var banner_swiper = new Swiper('.visual-wrap', mainTopBanner);

	$('.swiper-button-stop').click(function(){
		banner_swiper.autoplay.stop();
		$('.swiper-button-stop').removeClass('on');
		$('.swiper-button-play').addClass('on');
		$('.swiper-button-play').focus();
	});
	$('.swiper-button-play').click(function(){
		banner_swiper.autoplay.start();
		$('.swiper-button-play').removeClass('on');
		$('.swiper-button-stop').addClass('on');
		$('.swiper-button-stop').focus();
	});

	
	$('.main-visual .visual-wrap .swiper-slide a').on({
		focus : function(){
		   banner_swiper.slideTo(0);
		   banner_swiper.autoplay.stop();
		   $('.swiper-button-stop').removeClass('on');
		   $('.swiper-button-play').addClass('on');
		}
	 });

	 // ���� - ������24 (�α��� �� �������� ����)
	 if( $('.main-subsidy-wrap').length > 0 ){
		 var main_subsidy_swiper = new Swiper('.main-subsidy-wrap', {
			 slidesPerView: 1,
			 spaceBetween: 12,
			 loop: true,
			 pagination: {
				 el: ".swiper-pagination",
				 type: "fraction",
			 },
			 navigation: {
				 nextEl: ".swiper-button-next9",
				 prevEl: ".swiper-button-prev9",
			 },
		 });
		 
	 }
	
	// ���� - MY ����
	if( $('.memory-wrap').length > 0 ){
		var visual_swiper = new Swiper('.memory-wrap', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: false,
			pagination: {
				el: ".swiper-pagination2",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next2",
				prevEl: ".swiper-button-prev2",
			},
		});
	}
	
	// ���� - ����ã�� ���� 
	if( $('.frequent-swiper-wrap').length > 0 ){
		var frequent_swiper = new Swiper('.frequent-swiper-wrap', {
			slidesPerView: 8,
			spaceBetween: 16,
			slidesPerGroup: 8,
			pagination: {
				el: ".swiper-pagination",
			},
			navigation: {
				nextEl: ".swiper-button-next3",
				prevEl: ".swiper-button-prev3",
			},
		});
	}

	// ���� - ����ã�� ���� - �����
	if( $('.frequent-swiper-wrap-mb').length > 0 ){
		var frequent_swiper = new Swiper('.frequent-swiper-wrap-mb', {
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: ".swiper-pagination",
			},
			navigation: {
				nextEl: ".swiper-button-next3-mb",
				prevEl: ".swiper-button-prev3-mb",
			},
			
		});
	}


	// ���� �ݱ�  
	$(document).on('click', '.tooltip .tooltip-close', function(){
		$(this).closest('.tooltip').hide();
	});

	// ���� - ������ ����
	if( $('.onestop-swiper').length > 0 ){
		var onestop_swiper = new Swiper('.onestop-swiper', {
			slidesPerView: 7,
			spaceBetween: 20,
			slidesPerGroup: 7,
			pagination: {
				el: ".swiper-pagination",
			},
			navigation: {
				nextEl: ".swiper-button-next4",
				prevEl: ".swiper-button-prev4",
			},
			breakpoints: {
				// pc 
				1280: {
					slidesPerView: 5,
					spaceBetween: 20,
					slidesPerGroup: 5,
				},
				720: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
			}
		});
	}


	// ���� - �̴��� ���� ����
	if( $('.video-news-box').length > 0 ){
		var video_swiper = new Swiper('.video-news-box', {
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next6",
				prevEl: ".swiper-button-prev6",
			},
			observer: true,
			observeParents: true,
		});
	}

	// ���� - ������
	if( $('.competition-news-box').length > 0 ){
		var competition_swiper = new Swiper('.competition-news-box', {
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next7",
				prevEl: ".swiper-button-prev7",
			},
			observer: true,
			observeParents: true,
		});
	}

	// ���� - �ϴ� ���
	let mainBotBanner = {};
	if ( $('.banner-wrap .swiper-slide').length == 1) {
		mainBotBanner = {
			slidesPerView: 1,
			spaceBetween: 20,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination8",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next8",
				prevEl: ".swiper-button-prev8",
			},
		}
	} else {
		mainBotBanner = {
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
				disabledOnInteration: false,
			},
			pagination: {
				el: ".swiper-pagination8",
				type: "fraction",
			},
			navigation: {
				nextEl: ".swiper-button-next8",
				prevEl: ".swiper-button-prev8",
			},
		}
	}
	var bot_banner_swiper = new Swiper('.banner-wrap', mainBotBanner);

	if( $('.banner-wrap').length > 0 ){
		$('.swiper-button-stop8').click(function(){
			bot_banner_swiper.autoplay.stop();
			$('.swiper-button-stop8').removeClass('on');
			$('.swiper-button-play8').addClass('on');
			$('.swiper-button-play8').focus();
		});
		$('.swiper-button-play8').click(function(){
			bot_banner_swiper.autoplay.start();
			$('.swiper-button-play8').removeClass('on');
			$('.swiper-button-stop8').addClass('on');
			$('.swiper-button-stop8').focus();
		});
	}
	
	$('.banner-box .banner-wrap .swiper-slide a').on({
		focus : function(){
			bot_banner_swiper.slideTo(0);
			bot_banner_swiper.autoplay.stop();
		   $('.swiper-button-stop8').removeClass('on');
		   $('.swiper-button-play8').addClass('on');
		}
	 });

	// ���μ���ä�� ���
	if( $('.channel-slide-new').length > 0 ){
		var channel_swiper = new Swiper('.channel-slide-new', {
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 12,
			navigation: {
				nextEl: ".swiper-button-next10",
				prevEl: ".swiper-button-prev10",
			},
			breakpoints: {
				// pc 
				1024: {
					slidesPerView: 4,
					spaceBetween: 10,
					slidesPerGroup: 4,
				},
				720: {
					slidesPerView: 3,
					spaceBetween: 10,
					slidesPerGroup: 3,
				},
			}
		});
	}

	if( $('.subsidy-swiper').length > 0 ){
		var subsidy_swiper = new Swiper('.subsidy-swiper', {
			slidesPerView: "auto",
			spaceBetween: 12,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				// pc ����
				750: {
					slidesPerView: "1",
					spaceBetween: 0,
				},
			}
		});
	}

	$('.tit-link-box a.more').click(function(){
		$('.fre_layer_box').show();
	})

});

