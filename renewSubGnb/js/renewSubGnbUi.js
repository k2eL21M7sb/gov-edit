/* renewSearchUi.js | 정부24 서브 GNB | PCN UIT dw.do */
var rsUI = rsUI || {};
(function(rsUI, $, window, document, undefined) {
	'use strict';
	// common variable
	var ClassName = {
		ACTIVE: 'active',
		CURRENT: 'current'
	};
	var $DOCUMENT = $(document);
	// keywordSearch pc GNB
	rsUI.keywordSearch = (function() {
		var $keywordGroup = $DOCUMENT.find('.keyword-group'),
			$keywordSearch = $keywordGroup.find('.keyword-search'),
			$keywordForm = $keywordSearch.find('.form'),
			$keywordInput = $keywordSearch.find('.search input'),
			$keywordLayer = $keywordSearch.find('.keyword-layer'),
			aniSpeed = 200;

		var EVENT_KEY = '.rsUI.keywordSearch',
			EVENT = {
				CLICK: 'click' + EVENT_KEY,
				KEYUP: 'keyup' + EVENT_KEY,
				KEYDOWN: 'keydown' + EVENT_KEY
			};

		function keywordOpen() {
			$keywordForm.css('z-index', '205');
			$keywordLayer.fadeIn(aniSpeed);
		}
		function keywordClose() {
			$keywordForm.removeAttr('style');
			$keywordLayer.fadeOut(aniSpeed);
		}
		function keywordReset() {
			$keywordInput.val('');
		}
		return {
			execution: function () {
				$keywordInput.off(EVENT_KEY).on(EVENT.KEYUP + ' ' + EVENT.CLICK, function(e) {
					if (!$keywordInput.val()) {
						keywordClose();
						return false;
					}
					if (($keywordInput.val()).trim().length > 0) {
						keywordOpen();
					}
				});
				$DOCUMENT.off(EVENT_KEY).on(EVENT.CLICK, function(e) {
					if (!$(e.target).closest($keywordGroup).length) keywordClose();
				});
			},
			// public method
			keywordOpen: function() {
				keywordOpen();
			},
			keywordClose: function() {
				keywordClose();
			},
			keywordReset: function() {
				keywordReset();
			}
		}
	})();
	rsUI.keywordSearch.execution();

	// keywordSearch mobile layer
	rsUI.keywordSearchMob = (function() {
		var $headerSearchLayer = $DOCUMENT.find('.header-search-layer'),
			$keywordInput = $headerSearchLayer.find('.input-search'),
			$keywordLayer = $headerSearchLayer.find('.keyword-layer'),
			aniSpeed = 200;

		var EVENT_KEY = '.rsUI.keywordSearchMob',
			EVENT = {
				CLICK: 'click' + EVENT_KEY,
				KEYUP: 'keyup' + EVENT_KEY,
				KEYDOWN: 'keydown' + EVENT_KEY
			};

		function keywordOpen() {
			$keywordLayer.fadeIn(aniSpeed);
		}
		function keywordClose() {
			$keywordLayer.fadeOut(aniSpeed);
		}
		function keywordReset() {
			$keywordInput.val('');
		}
		return {
			execution: function () {
				$keywordInput.off(EVENT_KEY).on(EVENT.KEYUP + ' ' + EVENT.CLICK, function(e) {
					if (!$keywordInput.val()) {
						keywordClose();
						return false;
					}
					if ($keywordInput.val().length > 0) {
						keywordOpen();
					}
				});
			},
			// public method
			keywordOpen: function() {
				keywordOpen();
			},
			keywordClose: function() {
				keywordClose();
			},
			keywordReset: function() {
				keywordReset();
			}
		}
	})();
	rsUI.keywordSearchMob.execution();

	// toggleLang
	rsUI.toggleLang = (function () {
		var toggleGroup = '.toggle-group',
			toggleTarget = '.toggle-target',
			toggleBtn = '.toggle-btn',
			aniSpeed = 150;

		var EVENT_KEY = '.rsUI.toggleLang',
			EVENT = {
				CLICK: 'click' + EVENT_KEY
			};

		function toggleOpen(target, cbFunc) {
			$(target).addClass(ClassName.ACTIVE).parents(toggleGroup).find(toggleTarget).addClass(ClassName.ACTIVE)
				.stop().slideDown(aniSpeed);
			if (arguments[1] !== undefined && typeof cbFunc === 'function') cbFunc();
		}
		function toggleClose(target, cbFunc) {
			$(target).removeClass(ClassName.ACTIVE).parents(toggleGroup).find(toggleTarget).removeClass(ClassName.ACTIVE)
				.stop().slideUp(aniSpeed);
			if (arguments[1] !== undefined && typeof cbFunc === 'function') cbFunc();
		}
		return {
			execution: function () {
				$(toggleBtn).off().on(EVENT.CLICK, function (e) {
					var $this = $(this);

					($this.hasClass(ClassName.ACTIVE)) ? toggleClose(this) : toggleOpen(this);
					e.preventDefault();
				});
			},
			// method
			toggleOpen: function () {
				toggleOpen(target, cbFunc);
			},
			toggleClose: function () {
				toggleClose(target, cbFunc);
			}
		}
	})();
	rsUI.toggleLang.execution();
})(rsUI, jQuery, window, document);
