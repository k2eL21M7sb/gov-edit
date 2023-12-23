/*
 * UX 분석 뷰저블 트래킹 코드  (정부24)
 * 해당 js 각 프로젝트 헤더에 include
 * 보조금24는 해당 js include 하지 않고 보조금24 자체 공통 jsp에 선언
 */


var hostChk = window.location.hostname;     
	
if(hostChk == 'gov.kr' || hostChk == 'www.gov.kr'){
	
	//정부24 뷰저블
	/*(function(w, d, a){
	    w.__beusablerumclient__ = {
	        load : function(src){
	            var b = d.createElement("script");
	            b.src = src; b.async=true; b.type = "text/javascript";
	            d.getElementsByTagName("head")[0].appendChild(b);
	        }
	    };w.__beusablerumclient__.load(a);
	})(window, document, "//rum.beusable.net/script/b210825e135620u973/309f0c3455");*/
	
	//정부24 뷰저블 20230601 
	(function(w, d, a){
	    w.__beusablerumclient__ = {
	        load : function(src){
	            var b = d.createElement("script");
	            b.src = src; b.async=true; b.type = "text/javascript";
	            d.getElementsByTagName("head")[0].appendChild(b);
	        }
	    };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
	})(window, document, "//rum.beusable.net/load/b201201e110113u450");
	
	//보조금24 뷰저블
	/*
	(function(w, d, a){
	    w.__beusablerumclient__ = {
	        load : function(src){
	            var b = d.createElement("script");
	            b.src = src; b.async=true; b.type = "text/javascript";
	            d.getElementsByTagName("head")[0].appendChild(b);
	        }
	    };w.__beusablerumclient__.load(a);
	})(window, document, "//rum.beusable.net/script/b201201e110113u450/f41fc5f0a9");
	
	//보조금24 BA
	(function(w, d, a){
	    w.__baclient__ = {
	        load : function(src){
	            var b = d.createElement("script");
	            b.src = src; b.async=true; b.type = "text/javascript";
	            d.getElementsByTagName("head")[0].appendChild(b);
	        }
	    };w.__baclient__.load(a);
	})(window, document, "//ba.beusable.net/script/ba/d49af19d5f");
	*/
}
