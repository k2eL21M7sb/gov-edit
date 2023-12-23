//xss 검색어 방지
function specCharChkForSearch(strVal){
	strVal = strVal.replace(/[\<\>\'\\\"\/\%\(\)\{\}\;\=]/g,"");
	return strVal;
}

function moreViewSearch(isMobile) {
	
	var searchForm = $("#headerSearchForm");
	var query = $("#headerSearchForm input[name=srhQuery]");
	var target = ""; //$("#sltTarget option:selected").val(); //$("#headerSearchForm input[id=sltTarget]").val(); 
	var selCol = "";
	var policyType = "";
	var link = window.location.protocol+'//'+window.location.hostname;
	
	//xss 검색어 방지
	query.val(specCharChkForSearch(query.val()));
	
	if( isMobile == "N")  {
		target = $("#sltTarget").val();	
				
		if(target == "pi" ) policyType = "G00301";
		if(target == "news" ) selCol = "local";
		$("#policyType").val(policyType); 
	}
		
	if(query.val() == $("#headerSearchForm input[name=srhQuery]").attr("placeholder")) {
		alert("검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()) == '') {
		alert('검색어를 입력해주시기 바랍니다.');
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length < 2) {
		alert("2자 이상의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length > 50) {
		alert("50자 이하의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	//내가 찾은 검색어 추가
	setMyKeyword(query.val());
	
	var targetUrl = "/search";
	   
    if("" != target && undefined != target){
    	targetUrl = "/search/"+target;
    }
    
    if("" != selCol && undefined != selCol){
    	targetUrl += "/"+selCol;
    }
    targetUrl += "?srhQuery="+encodeURI( query.val() , 'UTF-8'); //query.val();
	
    if( policyType != "" ) {
    	targetUrl += "&policyType="+policyType;
    }
    
    location.href = link+targetUrl;
	
	return true;
}


function moreViewSearch1(isMobile) {
	
	var searchForm = $("#headerSearchForm1");
	var query = $("#headerSearchForm1 input[name=srhQuery]"); //searchForm.srhQuery;
	var target = ""; //$("#sltTarget option:selected").val(); //$("#headerSearchForm input[id=sltTarget]").val(); 
	var selCol = "";
	var policyType = "";
	var link = window.location.protocol+'//'+window.location.hostname;	
	query.val(specCharChkForSearch(query.val()));
	if(query.val() == $("#headerSearchForm1 input[name=srhQuery]").attr("placeholder")) {
		alert("검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()) == '') {
		alert('검색어를 입력해주시기 바랍니다.');
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length < 2) {
		alert("2자 이상의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length > 50) {
		alert("50자 이하의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	//내가 찾은 검색어 추가
	setMyKeyword(query.val());
	
	var targetUrl = "/search";
	   
    if("" != target && undefined != target){
    	targetUrl = "/search/"+target;
    }
    
    if("" != selCol && undefined != selCol){
    	targetUrl += "/"+selCol;
    }
    targetUrl += "?srhQuery="+encodeURI( query.val() , 'UTF-8'); //query.val();
	
    if( policyType != "" ) {
    	targetUrl += "&policyType="+policyType;
    }
    
    location.href = link+targetUrl;
	
	return true;
}

// 포탈 메인 웹접근성 조치 (모바일메인 검색)
function moreViewSearch2(isMobile) {
	
	var searchForm = $("#headerSearchForm2");
	var query = $("#headerSearchForm2 input[name=srhQuery]"); //searchForm.srhQuery;
	var target = ""; //$("#sltTarget option:selected").val(); //$("#headerSearchForm input[id=sltTarget]").val(); 
	var selCol = "";
	var policyType = "";
	var link = window.location.protocol+'//'+window.location.hostname;	
	query.val(specCharChkForSearch(query.val()));
	if(query.val() == $("#headerSearchForm2 input[name=srhQuery]").attr("placeholder")) {
		alert("검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()) == '') {
		alert('검색어를 입력해주시기 바랍니다.');
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length < 2) {
		alert("2자 이상의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length > 50) {
		alert("50자 이하의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	//내가 찾은 검색어 추가
	setMyKeyword(query.val());
	
	var targetUrl = "/search";
	   
    if("" != target && undefined != target){
    	targetUrl = "/search/"+target;
    }
    
    if("" != selCol && undefined != selCol){
    	targetUrl += "/"+selCol;
    }
    targetUrl += "?srhQuery="+encodeURI( query.val() , 'UTF-8'); //query.val();
	
    if( policyType != "" ) {
    	targetUrl += "&policyType="+policyType;
    }
    
    location.href = link+targetUrl;
	
	return true;
}

// GNB 검색
function moreViewSearch3(isMobile) {
	
	var searchForm = $("#headerSearchForm3");
	var query = $("#headerSearchForm3 input[name=srhQuery]"); //searchForm.srhQuery;
	var target = ""; //$("#sltTarget option:selected").val(); //$("#headerSearchForm input[id=sltTarget]").val(); 
	var selCol = "";
	var policyType = "";
	var link = window.location.protocol+'//'+window.location.hostname;	
	query.val(specCharChkForSearch(query.val()));
	if(query.val() == $("#headerSearchForm3 input[name=srhQuery]").attr("placeholder")) {
		alert("검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()) == '') {
		alert('검색어를 입력해주시기 바랍니다.');
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length < 2) {
		alert("2자 이상의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length > 50) {
		alert("50자 이하의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	//내가 찾은 검색어 추가
	setMyKeyword(query.val());
	
	var targetUrl = "/search";
	   
    if("" != target && undefined != target){
    	targetUrl = "/search/"+target;
    }
    
    if("" != selCol && undefined != selCol){
    	targetUrl += "/"+selCol;
    }
    targetUrl += "?srhQuery="+encodeURI( query.val() , 'UTF-8'); //query.val();
	
    if( policyType != "" ) {
    	targetUrl += "&policyType="+policyType;
    }
    
    location.href = link+targetUrl;
	
	return true;
}


function moreViewSearch4(isMobile) {
	
	var searchForm = $("#searchFormNew");
	var query = $("#searchFormNew input[name=srhQuery]");
	var target = ""; //$("#sltTarget option:selected").val(); //$("#headerSearchForm input[id=sltTarget]").val(); 
	var selCol = "";
	var policyType = "";
	var link = window.location.protocol+'//'+window.location.hostname;
	
	//xss 검색어 방지
	query.val(specCharChkForSearch(query.val()));
	
	if( isMobile == "N")  {
		target = $("#sltTarget").val();	
				
		if(target == "pi" ) policyType = "G00301";
		if(target == "news" ) selCol = "local";
		$("#policyType").val(policyType); 
	}
		
	if(query.val() == $("#searchFormNew input[name=srhQuery]").attr("placeholder")) {
		alert("검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()) == '') {
		alert('검색어를 입력해주시기 바랍니다.');
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length < 2) {
		alert("2자 이상의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	if($.trim(query.val()).length > 50) {
		alert("50자 이하의 검색어를 입력해주시기 바랍니다.");
		query.focus();
		return false;
	}
	
	//내가 찾은 검색어 추가
	setMyKeyword(query.val());
	
	var targetUrl = "/search";	
	   
    if("" != target && undefined != target){
    	targetUrl = "/search/"+target;
    }
    
    if("" != selCol && undefined != selCol){
    	targetUrl += "/"+selCol;
    }
    targetUrl += "?srhQuery="+encodeURI( query.val() , 'UTF-8'); //query.val();
	
    if( policyType != "" ) {
    	targetUrl += "&policyType="+policyType;
    }
    
    location.href = link+targetUrl;
	
	return true;
}

function doKeywordHeader() {
	//$("#headerSearchForm").submit();
	moreViewSearch();
}

function setPage(pageIndex) {
	$("#pageIndex").val(Math.round(pageIndex));
	$("#moreViewForm").submit();
}

function applySetPage(pageIndex) {
	$("#pageIndex").val(Math.round(pageIndex));
	$('#searchFormNew').submit();
}



/*
 * 공통 - 결과내 재검색
 * 라디오 버튼 체크/해제
 */
var rstInReSrchIeChkVal = null;
var rstInReSrchChkVal = false;
var rstInReSrchTmpVal = false;
function rstInReSrchChek(id, val, collectionCd) {
		var e = navigator.userAgent.toLowerCase();
		// ie 일때
		var name = $('#' + id).attr("name");
		if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
			
			rstInReSrchIeChkVal = radChkForIe(rstInReSrchIeChkVal, id, name);
			
		// ie 이외
		} else {
			
			var rstToggleBtn = radToggleBtn(rstInReSrchChkVal, rstInReSrchTmpVal, id, val); 
			
			rstInReSrchChkVal = rstToggleBtn[0];
			rstInReSrchTmpVal = rstToggleBtn[1];
			
			//선택된 조건 검색하기 버튼 css처리
			fltrCondChk();
			
		}
		
}




/*
 * 통합검색 > 민원서비스 탭 > 서비스 유형 라디오 토글
 * GovSvcChek
 */
var GovSvcIeChkVal = null;
var GovSvcChkVal = false;
var GovSvcTmpVal = false;
function GovSvcChek(id, val) {
		var e = navigator.userAgent.toLowerCase();
		// ie 일때
		var name = $('#' + id).attr("name");
		if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
			
			GovSvcIeChkVal = radChkForIe(GovSvcIeChkVal, id, name);
			
		// ie 이외
		} else {
			
			var rstToggleBtn = radToggleBtn(GovSvcChkVal, GovSvcTmpVal, id, val); 
			
			GovSvcChkVal = rstToggleBtn[0];
			GovSvcTmpVal = rstToggleBtn[1];
			
			//선택된 조건 검색하기 버튼 css처리
			fltrCondChk();
			
		}
		
}


/*
 * 통합검색 > 보조금 24 > 지역 라디오 토글
 * RcvSidoChek
 */
var RcvSidoIeChkVal = null;
var RcvSidoChkVal = false;
var RcvSidoTmpVal = false;
function RcvSidoChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		RcvSido = radChkForIe(RcvSido, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(RcvSidoChkVal, RcvSidoTmpVal, id, val); 
		
		RcvSidoChkVal = rstToggleBtn[0];
		RcvSidoTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}


/*
 * 통합검색 > 보조금 24 > 지원형태 라디오 토글
 * RcvTccdChek
 */
var RcvTccdIeChkVal = null;
var RcvTccdChkVal = false;
var RcvTccdTmpVal = false;
function RcvTccdChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		RcvTccdIeChkVal = radChkForIe(RcvTccdIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(RcvTccdChkVal, RcvTccdTmpVal, id, val); 
		
		RcvTccdChkVal = rstToggleBtn[0];
		RcvTccdTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}


/*
 * 통합검색 > 보조금 24 > 신청방법 라디오 토글
 * RcvMeanCdChek
 */
var RcvMeanCdIeChkVal = null;
var RcvMeanCdChkVal = false;
var RcvMeanCdTmpVal = false;
function RcvMeanCdChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		RcvMeanCdIeChkVal = radChkForIe(RcvMeanCdIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(RcvMeanCdChkVal, RcvMeanCdTmpVal, id, val); 
		
		RcvMeanCdChkVal = rstToggleBtn[0];
		RcvMeanCdTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}


/*
 * 통합검색 > 보조금 24 > 사용자 구분 라디오 토글
 * RcvSvcCdChek
 */
var RcvSvcCdIeChkVal = null;
var RcvSvcCdChkVal = false;
var RcvSvcCdTmpVal = false;
function RcvSvcCdChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		RcvSvcCdIeChkVal = radChkForIe(RcvSvcCdIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(RcvSvcCdChkVal, RcvSvcCdTmpVal, id, val); 
		
		RcvSvcCdChkVal = rstToggleBtn[0];
		RcvSvcCdTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}


//보조금24-서비스븐류 전체선택
function checkAll(){
	if($('#chkAll').is(":checked")){
		$('input:checkbox[name="rcvServiceType"]').prop("checked",true);
		$("#filterBtn").attr("class","active")
	}else{
		$('input:checkbox[name="rcvServiceType"]').prop("checked",false);
		
		//보조금 나머지조건 선택이 없을 때 검색하기 박스 파란버튼 비활성화 
		if(!$('input:radio[name="reQueryFlag"]').is(":checked") && 
				!$('input:radio[name="sido"]').is(":checked") &&
				!$('input:radio[name="tccd"]').is(":checked") &&
				!$('input:radio[name="meancd"]').is(":checked") &&
				!$('input:radio[name="svccd"]').is(":checked")){
			$("#filterBtn").attr("class","")
		}
	}
}

function unCheckAll(){
	$("#chkAll").prop("checked",false);
	//보조금 나머지조건 선택이 없을 때 검색하기 박스 파란버튼 비활성화 
	if(!$('input:checkbox[name="rcvServiceType"]').is(":checked")){
		if(!$('input:radio[name="reQueryFlag"]').is(":checked") && 
				!$('input:radio[name="sido"]').is(":checked") &&
				!$('input:radio[name="tccd"]').is(":checked") &&
				!$('input:radio[name="meancd"]').is(":checked") &&
				!$('input:radio[name="svccd"]').is(":checked")){
			$("#filterBtn").attr("class","")
		} 
	} else if ($('input:checkbox[name="rcvServiceType"]:checked').length > 9){
		$("#chkAll").prop("checked",true);
	}

}





/*
 * 통합검색 > 정책정보, 기관정보 > 기간 라디오 토글
 * RcvSvcCdChek
 */
var DateDvsIeChkVal = null;
var DateDvsChkVal = false;
var DateDvsTmpVal = false;
function DateDvsCdChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		DateDvsIeChkVal = radChkForIe(DateDvsIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(DateDvsChkVal, DateDvsTmpVal, id, val); 
		
		DateDvsChkVal = rstToggleBtn[0];
		DateDvsTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}


/*
 * 통합검색 > 기관정보 > 운영누리집 > 누리집 유형
 * RcvSvcCdChek
 */
var SiteDvsIeChkVal = null;
var SiteDvsChkVal = false;
var SiteDvsTmpVal = false;
function SiteDvsCdChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		SiteDvsIeChkVal = radChkForIe(SiteDvsIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(SiteDvsChkVal, SiteDvsTmpVal, id, val); 
		
		SiteDvsChkVal = rstToggleBtn[0];
		SiteDvsTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}


/*
 * 민원서비스(헤더) > 민원 신청 안내 > 서비스 분류 라디오 토글
 * ApplyMw
 */
var ApplyMwIeChkVal = null;
var ApplyMwChkVal = false;
var ApplyMwTmpVal = false;
function ApplyMwChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		ApplyMwIeChkVal = radChkForIe(ApplyMwIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(ApplyMwChkVal, ApplyMwTmpVal, id, val); 
		
		ApplyMwChkVal = rstToggleBtn[0];
		ApplyMwTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
	}
	
}



/*
 * 민원서비스(헤더) > 분야별 서비스 > 서비스 분류 라디오 토글
 * ByFildSvcChek
 */
var ByFildSvcIeChkVal = null;
var ByFildSvcChkVal = false;
var ByFildSvcTmpVal = false;
function ByFildSvcChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		ByFildSvcIeChkVal = radChkForIe(ByFildSvcIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(ByFildSvcChkVal, ByFildSvcTmpVal, id, val); 
		
		ByFildSvcChkVal = rstToggleBtn[0];
		ByFildSvcTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}



/*
 * 민원서비스(헤더) > 분야별 서비스 > 중앙서비스, 지자체 서비스 선택 라디오
 * ByFildSvcMidLocChek
 */
var ByFildSvcMidLocIeChkVal = null;
var ByFildSvcMidLocChkVal = false;
var ByFildSvcMidLocTmpVal = false;
function ByFildSvcMidLocChek(id, val) {
	var e = navigator.userAgent.toLowerCase();
	// ie 일때
	var name = $('#' + id).attr("name");
	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
		
		ByFildSvcMidLocIeChkVal = radChkForIe(ByFildSvcMidLocIeChkVal, id, name);
		
		// ie 이외
	} else {
		
		var rstToggleBtn = radToggleBtn(ByFildSvcMidLocChkVal, ByFildSvcMidLocTmpVal, id, val); 
		
		ByFildSvcMidLocChkVal = rstToggleBtn[0];
		ByFildSvcMidLocTmpVal = rstToggleBtn[1];
		
		//선택된 조건 검색하기 버튼 css처리
		fltrCondChk();
		
	}
	
}

//function ByFildSvcMidLocChek(id, val) {
//	var e = navigator.userAgent.toLowerCase();
//	// ie 일때
//	var name = $('#' + id).attr("name");
//	if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
//		
//		ByFildSvcMidLocIeChkVal = radChkForIe(ByFildSvcMidLocIeChkVal, id, name);
//		
//		// ie 이외
//	} else {
//		
//		
//		var name = $('#' + id).attr("name");
//		
//		if(ByFildSvcMidLocChkVal){
//			if(val===ByFildSvcMidLocTmpVal){ //체크해제
//					ByFildSvcMidLocChkVal = false;
//					$('#'+id).prop('checked', false);
//					$("#selOrgNm").css("display","none");
//					$("#selSido").css("display","none");
//					$("#selSigngu").css("display","none");
//			} else { //체크된상태에서 다른 라디오 버튼 체크할 때
//				ByFildSvcMidLocChkVal = true;
//				$('#'+id).prop('checked', true);
//				ByFildSvcMidLocTmpVal=val;
//				if(val=='mid'){
//					$("#selOrgNm").css("display","");
//					$("#selSido").css("display","none");
//					$("#selSigngu").css("display","none");
//				} else if(val=='loc'){
//					$("#selOrgNm").css("display","none");
//					$("#selSido").css("display","");
//					$("#selSigngu").css("display","");
//				} else {
//					$("#selOrgNm").css("display","none");
//					$("#selSido").css("display","none");
//					$("#selSigngu").css("display","none");
//				}
//			}
//		} else {
//			if(val===ByFildSvcMidLocTmpVal){ //체크해제후 다시 체크 할 때
//				ByFildSvcMidLocChkVal = true;
//				$('#'+id).prop('checked', true);
//				if(val=='mid'){
//					$("#selOrgNm").css("display","");
//					$("#selSido").css("display","none");
//					$("#selSigngu").css("display","none");
//				} else if(val=='loc'){
//					$("#selOrgNm").css("display","none");
//					$("#selSido").css("display","");
//					$("#selSigngu").css("display","");
//				} else {
//					$("#selOrgNm").css("display","none");
//					$("#selSido").css("display","none");
//					$("#selSigngu").css("display","none");
//				}
//			} else { //아무것도 체크되지 않은 상태에서 체크할 때
//				ByFildSvcMidLocChkVal = true;
//				$('#'+id).prop('checked', true);
//				ByFildSvcMidLocTmpVal=val;
//				if(val=='mid'){
//					$("#selOrgNm").css("display","");
//					$("#selSido").css("display","none");
//					$("#selSigngu").css("display","none");
//				} else if(val=='loc'){
//					$("#selOrgNm").css("display","none");
//					$("#selSido").css("display","");
//					$("#selSigngu").css("display","");
//				} else {
//					$("#selOrgNm").css("display","none");
//					$("#selSido").css("display","none");
//					$("#selSigngu").css("display","none");
//				}
//			}
//			
//		}
//		
//		if(val !== 'mid' && val !== 'loc'){
//			$('#jrsdOrgNm').val('');
//			$('#jrsdDptNm').val('');
//			$('#DEPT_INC_CD').val('');
//			$('#srchArea').val('');
//			$('#SVC_DIV').val('');
//			$('#lrgAstCd').val('');
//			$('#radio3_2').prop('checked', false);
//			$('#radio3_3').prop('checked', false);
//		}
//		
//		
//
//		//선택된 조건 검색하기 버튼 css처리
//		fltrCondChk();
//		
//	}
//	
//}



/*
 * 민원서비스(헤더) > 기업/단체 서비스 > 서비스 분류 라디오 토글
 * ByComSvcChek
 */
var ByComSvcIeChkVal = null;
var ByComSvcChkVal = false;
var ByComSvcTmpVal = false;
function ByComSvcChek(id, val) {
		var e = navigator.userAgent.toLowerCase();
		// ie 일때
		var name = $('#' + id).attr("name");
		if( "Netscape"==navigator.appName&&-1!=navigator.userAgent.search("Trident")||-1!=e.indexOf("msie")){
			
			ByComSvcIeChkVal = radChkForIe(ByComSvcIeChkVal, id, name);
			
		// ie 이외
		} else {
			
			var rstToggleBtn = radToggleBtn(ByComSvcChkVal, ByComSvcTmpVal, id, val); 
			
			ByComSvcChkVal = rstToggleBtn[0];
			ByComSvcTmpVal = rstToggleBtn[1];
			
			//선택된 조건 검색하기 버튼 css처리
			fltrCondChk();
			
		}
		
}





/*
 * 라디오 버튼 토글 로직
 */
function radToggleBtn(chkVal, tmpVal, id, val){
	var name = $('#' + id).attr("name");
	
	if(chkVal){
		if(val===tmpVal){ //체크해제
			chkVal = false;
			$('#'+id).prop('checked', false);
			
			//공통 - 결과내 재검색 라디오 버튼 모두 해제시 
			//input창 안에 검색어 제거
			if(name === 'reQueryFlag'){
				$('#reSrchQueryVal').val('');
				$('#reSrchQuery').val('');
			}
			
			//통합검색 > 정책정보, 기관정보 - 기간 초기화
			if(name === 'dateDvs'){
				$("#num1").val('');
				$("#num2").val('');
				$('#num1').attr("readonly",false);
				$('#num2').attr("readonly",false);
			}
			
		} else { //체크된상태에서 다른 라디오 버튼 체크할 때
			chkVal = true;
			$('#'+id).prop('checked', true);
			tmpVal=val;
			
		}
	} else {
		
		if(val===tmpVal){ //체크해제후 다시 체크 할 때
			chkVal = true;
			$('#'+id).prop('checked', true);
		} else { //아무것도 체크되지 않은 상태에서 체크할 때
			chkVal = true;
			$('#'+id).prop('checked', true);
			tmpVal=val;
		}
		
	}
	
	return [chkVal, tmpVal];
	
}


/*
 * 각 토글 버튼의 ie에서 처리
 */
function radChkForIe(ieChkVal, id, name){
	
	var chkId = null;
	
	$("div[class='rad_box']").find("input[name='"+name+"']:checked").each(function(i){
		chkId = $("input[name='"+name+"']:checked").eq(i).attr("id");
	});
	
	if( (ieChkVal === chkId) ){
		$('input[name="'+name+'"]:radio[id="'+id+'"]').prop('checked', false);
		ieChkVal = "null";
		$("#filterBtn").attr("class","")
	} else {
		$('input[name="'+name+'"]:radio[id="'+id+'"]').prop('checked', true);
		ieChkVal = chkId;
		$("#filterBtn").attr("class","active")
	}
	
	
	return ieChkVal;
	
}



/*
 * 결과화면 좌측 조건검색
 * 라디오버튼 체크 여부에 따른
 * '선택된 조건 검색하기' 버튼의 css 변경 처리
*/
function fltrCondChk() {
	
	var radChk = $("div[class='rad_box']").find("input[type='radio']");
	var boxChk = $("div[class='check_box']").find("input[type='checkbox']");
	
	
	
	for(var i = 0; i < radChk.length; i++){
			var $this = $(radChk[i]);
			//통합검색 > 기관정보 > 운영누리집 > 누리집, 모바일앱 버튼 클릭시 '선택된 조건 검색하기' css 처리 안함
			//민원서비스(헤더) > 분야별 서비스  > 전체, 중앙서비스, 지자체서비스 버튼 클릭시 '선택된 조건 검색하기' css 처리 안함
			//if($this[0].name !== 'SITE_DIV' && $this[0].name !== 'MID_LOC_DIV'){
				if(!$this.is(":checked")){
					$("#filterBtn").attr("class","");
					
					//보조금24에서는 체크박스도 확인해야됨
					if($('[name=collectionCd]').val()==='rcv'){
						$('[name="rcvServiceType"]').each(function(i){ 
							 if($('[name="rcvServiceType"]').eq(i).prop("checked") == true){
								 $("#filterBtn").attr("class","active");
							 } 					 
						 });
					}
						
					
				} else if($this.is(":checked")){
					$("#filterBtn").attr("class","active");
					return;
				}
			//} 
		}
		
}
