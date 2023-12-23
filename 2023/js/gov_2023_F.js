jQuery(document).ready(function(){
	

    jQuery('#section-2').hide();
    jQuery('#section-1-2').hide();

    jQuery('input[name="chk_02"]').change(function(){
        var section = jQuery(this).val();
        jQuery('#'+section).show().siblings().hide();
    });

    jQuery('input[name="chk_03"]').change(function(){
        var section2 = jQuery(this).val(); 
        jQuery('#'+section2).show().siblings(".input_wrap").hide();
    });
    
    jQuery('input[name="chk_01"]').change(function(){
    	var sms= jQuery('input[name="chk_01"]:checked').val();
        if(sms == 'phone'){
        	jQuery(".sms_only").hide();
        }else{
        	jQuery(".sms_only").show();
        }
        
    });
    
    

    jQuery("textarea").on("input",function(){
        if(jQuery(this).val().length >0) {
            jQuery(this).parent().css("border-color","#444");
        }else {
            jQuery(this).parent().css("border-color","#919191");
        }
    });
    

    
    //tab
    jQuery('.tabs_box li a').click(function(e){
	    
	    var tabs_value=jQuery(this).attr('href');
	    jQuery(tabs_value).addClass('active').siblings().removeClass('active');
	    jQuery(this).parents('li').addClass('active').siblings().removeClass('active');
	    e.preventDefault();
    });
    
    /*accordion*/
    jQuery('.accordion_ico').click(function(){
    	
    	var content=jQuery(this).parents(".accordion_header").next();
    	if(content.is(':hidden')){    		
    		content.slideDown();
			jQuery(this).addClass("open").find('span').text("닫기");
    	}else{
    		content.slideUp();
			jQuery(this).removeClass("open").find('span').text("열기");
    	}
    });
    
//left 조건 
    jQuery('.accor_tit').off().click(function(){
    	
    	var content=jQuery(this).next();
    	if(content.is(':hidden')){
    		content.slideDown(1);
    		jQuery(this).find(".arrow_btn").removeClass("down");
    		
    	}else{
    		content.slideUp(1);
    		jQuery(this).find(".arrow_btn").addClass("down");
    	}
    });
    
    jQuery('.inp_search_box').keyup(function() {
		var inputKey = jQuery('.inp_search_box').val();
		
		if (0 < inputKey.length) {
			jQuery('.search_box_layer').attr('style', 'display:block; z-index:9999;');
		} else {
			jQuery('.search_box_layer').attr('style', 'display:none;');
		}
		
	});

	jQuery('.main-input-search-mb').keyup(function() {
		var inputKey2 = jQuery('.main-input-search-mb').val();
				
		if (0 < inputKey2.length) {
			jQuery('.keyword-layer.mb').attr('style', 'display:block; z-index:9999;');
		} else {
			jQuery('.keyword-layer.mb').attr('style', 'display:none;');
		}
	});	
	
	jQuery(document).click(function(e){
		if (!jQuery(e.target).is('.search-box')) {
			jQuery('.keyword-layer').attr('style', 'display:none;');
		}
		
		var target = jQuery(e.target);
		if(!target.closest('.sel_box').length){
			jQuery('.sel_box ul').hide();
		}
	});
	
	/*모바일 통합검색 조건검색 레이어 */
	jQuery(".sort_tit.mo_only").click(function(){
		jQuery(".layer_mask").css("display","block");
		if(jQuery(".con_box").length > 0){
			jQuery(".con_box.active").find(".left_menu_box").css("display","block");
		}else{
			jQuery(".left_menu_box").css("display","block");
		}
		
		jQuery("body").css("overflow","hidden");
	});
	
	jQuery(".layer_close.mo_only").click(function(){
		jQuery(".layer_mask").css("display","none");
		if(jQuery(".con_box").length > 0){
			jQuery(".con_box.active").find(".left_menu_box").css("display","none");
		}else{
			jQuery(".left_menu_box").css("display","none");
		}
		jQuery("body").css("overflow","auto");
	});
	
	//모바일 통합검색 select 레이어 
	
	//QR 코드 열기, 닫기
    jQuery('.qr_layer').hide();
    jQuery('.link_txt a').on('click', function(e){
    	jQuery(this).parent().siblings('.qr_layer').show();
    	e.preventDefault();
    });
    jQuery('.qr_layer .closed').on('click', function(e){
    	jQuery(this).parent('.qr_layer').hide();
    	e.preventDefault();
    });
    
    
});
