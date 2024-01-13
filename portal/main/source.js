var lvinfoAgree = "";
var userDtlSectCd = "";
var prscYn = "";

var lifeSprtcost_flag = "N"; //생활지원비 바로가기 클릭 flag

$(function () {

    //접속제한 202004
    var ip = '220.94.17.17';
    var my = "N";
    var hstNm = window.location.hostname;
    if (hstNm == 'gov.kr' || hstNm == 'www.gov.kr') {
        if (my != 'Y') {
            checkAPI('gov.kr/main', '220.94.17.17', '80', 'main', '220.94.17.17');
            $('#title_id').html('');
        }
    }

    //딥링크 얼럿메세지
    if (my == 'Y') {
        var deepLinkMsg = '';
        if (deepLinkMsg != "" && deepLinkMsg != undefined) {
            alert(deepLinkMsg);
        }
    }

    $("#btnPopCloseSub").click(function () {
        $(".popWrap").hide();
        $(".overlay").hide();
        $('html').attr('style', 'overflow: hidden;'); // 팝업 표출시 배경 스크롤 제한
    });


    //팝업관리 기능(쿠키 체크)
    var popupCookieList = 'checkPopup_simple_certi_guide';
    var splitPopupCookieList = popupCookieList.split('||');
    var popWrapLength = $(".popWrap").length;
    var subsidyLayerLength = $(".subsidy-layer").length;
    //var ckCheckFlag = popupCookieCheck(splitPopupCookieList);
    var ckCheckFlag = false;

    // 2023-07-20 다중 팝업 처리
    if (popWrapLength > 0) {
        var openPopupCookieList = [];
        var openPopupCnt = 0;
        for (var j = 0; j < splitPopupCookieList.length; j++) {
            var cookieNm = splitPopupCookieList[j];
            ckCheckFlag = popupCookieCheckLs(cookieNm);

            if (ckCheckFlag) {
                openPopupCookieList.push(cookieNm);
            }
        }

        for (var k = 0; k < openPopupCookieList.length; k++) {
            if (k == (openPopupCookieList.length - 1)) {
                if (openPopupCookieList[k] != '') {
                    $("." + openPopupCookieList[k]).attr("class", "btn-dayclose");
                }
            } else {
                if (openPopupCookieList[k] != '') {
                    $("." + openPopupCookieList[k]).attr("onclick", "mainPopupChange('" + openPopupCookieList[k] + "', '" + openPopupCookieList[k + 1] + "');");
                    $("." + openPopupCookieList[k]).attr("class", "btn-dayclose");
                }
            }
        }
    }
    // 다중 팝업 처리 끝

    for (var i = 0; i < splitPopupCookieList.length; i++) {
        ckCheckFlag = popupCookieCheckLs(splitPopupCookieList[i]);

        // 쿠키 값 체크 후, 팝업 오픈
        if ((popWrapLength > 0 || subsidyLayerLength > 0) && ckCheckFlag) {
            var userAgent = "CyotekWebCopy/1.9 CyotekHTTP/6.4";
            var androidYn = "N";
            var androidversion = parseFloat(userAgent.slice(userAgent.indexOf("Android") + 8));
            // 안드로이드 버전이 5보다 낮으면 팝업 오픈하지 않음
            if (!(androidYn == "Y" && androidversion < 5)) {

                //2천만이벤트 팝업상세요소 렌더링 추가 로직
                if (splitPopupCookieList[i].indexOf("checkPopup_evntAgree") > -1) {
                    evntAgreePopupDetailShow();
                }

                $('.wrap').before($(".popWrap"));
                //$(".popWrap #popWrap_"+splitPopupCookieList[i]).show();
                $("#popWrap_" + splitPopupCookieList[i]).show();
                //$('body').append('<div class="overlay" style="display:none; opacity:0.5;"></div>');
                //$(".overlay").show();

                if ('N' == 'Y') {
                    if ('N' == "Y") {
                        $("#android_" + splitPopupCookieList[i]).attr('style', 'display: block;');
                    } else if ('N' == "Y") {
                        $("#ios_" + splitPopupCookieList[i]).attr('style', 'display: block;');
                    } else {
                        $("#mo_" + splitPopupCookieList[i]).attr('style', 'display: block;');
                    }
                }

                $(".dim").show();
                $('html').attr('style', 'overflow: hidden;'); // 팝업 표출시 배경 스크롤 제한
                break;
            }
        }

    }



    // overlay 클릭시 팝업 창닫기(close-box 외 클릭 시)
    /* $(".popWrap").click(function(e) {
        if(!$(e.target).parents().hasClass('btnOneday') && !$(e.target).parents().hasClass('popBody')){
            $(".popWrap").hide();
            $(".overlay").hide();
            $('html').attr('style', 'overflow: auto;'); // 팝업 표출시 배경 스크롤 제한
        }
    }) */


    //callArk("main");	//자동완성 call 

    var bUsr = "false";

    if (bUsr == "true") {
        // 로그인한 경우에는 등록한 즐겨찾는 서비스를 검색
        getMyFaveSvcList();
    }
    else {
        // 로그인 하지 않은 경우에는 기본 자주찾는 서비스 셋팅
        setMyFaveSvcList();
    }

    // 코로나 생활지원비 비로그인시 로그인후 실행 flag
    var cvdRec = "";
    if (cvdRec == "Y") {
        openCvdPopup(0);
    }

    //하루동안보지않기 초점이동 임시 해제 20230420
    //$(".btn-alldayclose").attr("tabindex","0").focus();
    $(".close-box .btn-dayclose").on("keypress", function () {
        $(".skip.skip_menu").attr("tabindex", "0").focus();
    });
});

// 다중팝업시 다음 팝업 호출
function mainPopupChange(popupId, nextPopupId) {

    if (cookieClickYn == "Y") {
        var expVar = parseInt($("#" + cookieNmGlobal).val());
        if (expVar == '' || isNaN(expVar)) {
            expVar = 1;
        }

        var today = new Date();
        today.setDate(today.getDate() + expVar);
        var cookieExp = today;
        //var cookieExpYYYMMDDHH = ''+cookieExp.getFullYear()+getMonthDayLenthConvert(cookieExp.getMonth()+1)+getMonthDayLenthConvert(cookieExp.getDate())+cookieExp.getHours();
        var cookieExpYYYMMDD = '' + cookieExp.getFullYear() + getMonthDayLenthConvert(cookieExp.getMonth() + 1) + getMonthDayLenthConvert(cookieExp.getDate());
        localStorage.setItem(cookieNmGlobal, cookieExpYYYMMDD);

        cookieSave(nextPopupId);
    }

    $("#popWrap_" + popupId).hide();
    $("#popWrap_" + nextPopupId).show();

    if ('N' == 'Y') {
        if ('N' == "Y") {
            $("#android_" + nextPopupId).attr('style', 'display: block;');
        } else if ('N' == "Y") {
            $("#ios_" + nextPopupId).attr('style', 'display: block;');
        } else {
            $("#mo_" + nextPopupId).attr('style', 'display: block;');
        }
    }
}

//주민번호로 생년 가져오기
function getJuminBirth(ihidnumVal) {
    if (ihidnumVal.length == 13) {
        // 1,2,5,6  19
        if (ihidnumVal[6] == 1 || ihidnumVal[6] == 2
            || ihidnumVal[6] == 5 || ihidnumVal[6] == 6
        ) {
            return "19" + ihidnumVal.substring(0, 6);
        } else {
            return "20" + ihidnumVal.substring(0, 6);
        }
    }
}

//팝업관리 기능 (팝업 오버레이 표출 여부 체크 메소드) 기존 쿠키방식으로 미사용
function popupCookieCheck(splitPopupCookieList) {
    //표출: true, 미표출: false
    var resultPopupYn = false;

    for (var i = 0; i < splitPopupCookieList.length; i++) {
        // 나의생활정보동의 팝업 쿠키 체크
        // 나의생활정보동의 팝업 쿠키 미존재
        //오버레이 표출
        // 나의생활정보동의 팝업 쿠키 존재
        //오버레이 미표출
        // 그외 팝업 쿠키 체크
        // 메인 팝업 쿠키 미존재
        //메인팝업 표츌
        // 메인 팝업 쿠키 존재
        //메인팝업 미표출
        //생활정보 동의 하지 않은 사용자 로그인 조건
        if ("false" == "true" && lvinfoAgree != 'Y' && userDtlSectCd == '101') {
            if (splitPopupCookieList[i] == 'checkPopup_oneday_lvInfo') {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            } else {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            }
        } else if ("false" == "true" && "" != '01' && (userDtlSectCd == '101' || userDtlSectCd == '102') && "" != "") { //보조금24 재조회

            if ("" > 364) {
                if (splitPopupCookieList[i] == 'checkPopup_nsReVw1y') {
                    if (($.cookie(splitPopupCookieList[i])) != "true") {
                        return resultPopupYn = true;
                    }
                } else {
                    if (($.cookie(splitPopupCookieList[i])) != "true") {
                        return resultPopupYn = true;
                    }
                }

            } else if ("" > 179) {
                if (splitPopupCookieList[i] == 'checkPopup_nsReVw6m') {
                    if (($.cookie(splitPopupCookieList[i])) != "true") {
                        return resultPopupYn = true;
                    }
                } else {
                    if (($.cookie(splitPopupCookieList[i])) != "true") {
                        return resultPopupYn = true;
                    }
                }

            } else if ("" > 89) {
                if (splitPopupCookieList[i] == 'checkPopup_nsReVw3m') {
                    if (($.cookie(splitPopupCookieList[i])) != "true") {
                        return resultPopupYn = true;
                    }
                } else {
                    if (($.cookie(splitPopupCookieList[i])) != "true") {
                        return resultPopupYn = true;
                    }
                }
            }

        } else if ("false" == "true" && "" == '01' && (userDtlSectCd == '101' || userDtlSectCd == '102')) { // 보조금 24 이용동의 N
            if (splitPopupCookieList[i] == 'checkPopup_nsAgre') {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            } else {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            }
        } else if ("false" == "true" && "" != '01' && (userDtlSectCd == '101' || userDtlSectCd == '102') && "" == "N") { // 보조금 24 이용동의 Y && 조회 N
            if (splitPopupCookieList[i] == 'checkPopup_nsGuideN') {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            } else {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            }
        } else if ("false" == "true") { // 보조금24 비회원
            if (splitPopupCookieList[i] == 'checkPopup_nsMemUsr') {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            } else {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            }
        } else if ("true" == "true" && "true" == "true") { // 보조금24 미로그인
            if (splitPopupCookieList[i] == 'checkPopup_nsMemLogin') {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            } else {
                if (($.cookie(splitPopupCookieList[i])) != "true") {
                    return resultPopupYn = true;
                }
            }
        } else {
            if (($.cookie(splitPopupCookieList[i])) != "true") {
                return resultPopupYn = true;
            }
        }
    }
    return resultPopupYn;
}

//팝업관리 기능 (팝업 오버레이 표출 여부 체크 메소드) localStorage
function popupCookieCheckLs(splitPopupCookie) {
    //표출: true, 미표출: false
    var resultPopupYn = false;

    var currDate = new Date();
    //var currYYYMMDDHH = ''+currDate.getFullYear()+getMonthDayLenthConvert(currDate.getMonth()+1)+getMonthDayLenthConvert(currDate.getDate())+currDate.getHours();
    var currYYYMMDD = '' + currDate.getFullYear() + getMonthDayLenthConvert(currDate.getMonth() + 1) + getMonthDayLenthConvert(currDate.getDate());

    //나의생활정보동의 팝업인 경우
    //나의생활정보 동의하지 않은 사용자인 경우
    //그외 팝업

    //TODO 생활지원비 선 검증
    if (splitPopupCookie == 'checkPopup_oneday_lvInfo' || splitPopupCookie == 'checkPopup_oneday_lvInfo_mo') {

        if ("false" == "true" && lvinfoAgree != 'Y' && userDtlSectCd == '101') {
            if (localStorage.getItem(splitPopupCookie) > currYYYMMDD) {
                return resultPopupYn = false; //미표출
            } else {
                localStorage.removeItem(splitPopupCookie)
                return resultPopupYn = true; //표출
            }
        }
    } else if (splitPopupCookie == 'checkPopup_simple_certi_guide' || splitPopupCookie == 'checkPopup_simple_certi_guide_m') {// 회원가입 간소화 추가
        if (("false" == "true" && "" == "N") && ("false" == "true" && "" == "N")) {
            if (localStorage.getItem(splitPopupCookie) > currYYYMMDD) {
                return resultPopupYn = false; //미표출
            } else {
                localStorage.removeItem(splitPopupCookie)
                return resultPopupYn = true; //표출
            }
        }
    } else {
        if (localStorage.getItem(splitPopupCookie) > currYYYMMDD) {
            return resultPopupYn = false; //미표출
        } else {
            localStorage.removeItem(splitPopupCookie)
            return resultPopupYn = true; //표출
        }
    }
    return resultPopupYn;
}

var cookieClickYn = "N";
var cookieNmGlobal = "";
var beforeCockieChk = "N";

//팝업관리기능 (팝업 하루동안 보지 않기 쿠키 저장)
function cookieSave(cookieNm) {

    cookieNmGlobal = cookieNm;

    if (beforeCockieChk == "N") {
        beforeCockieChk = "Y";
        cookieClickYn = "Y";
        $(".btn-alldayclose span").css("color", '#46a61a');
        $(".btn-alldayclose").css("background", 'url(https://www.gov.kr/renewMain/img/popup/pop_system_check01_hover.png) no-repeat center left');
    } else {
        beforeCockieChk = "N";
        cookieClickYn = "N";
        $(".btn-alldayclose span").css("color", '#666666');
        $(".btn-alldayclose").css("background", 'url(https://www.gov.kr/renewMain/img/popup/pop_system_check01.png) no-repeat center left');
    }

}

//팝업닫기 (팝업 하루동안 보지 않기 체크박스 형태의 팝업에 대한 설정) 기존 쿠키방식으로 미사용
function checkBoxCloseBtn() {
    var checkYn = $('.checkBoxNoShow').is(':checked');
    var cookieNm = $('.checkBoxNoShow').attr('id');
    if (checkYn == true) {
        var expVar = parseInt($("#" + cookieNm).val());
        if (expVar == '' || isNaN(expVar)) {
            expVar = 1;
        }
        $.cookie(cookieNm, "true", { path: "/", expires: expVar });
    }
    $(".popWrap").hide();
    $(".overlay").hide();
    $('html').attr('style', 'overflow: auto;'); // 팝업 표출시 배경 스크롤 제한
}

//팝업닫기 기존 쿠키방식으로 미사용
function mainPopupClose() {

    if (cookieClickYn == "Y") {
        var expVar = parseInt($("#" + cookieNmGlobal).val());
        if (expVar == '' || isNaN(expVar)) {
            expVar = 1;
        }
        $.cookie(cookieNmGlobal, "true", { path: "/", expires: expVar });

        if ('Y' == 'N') {
            location.reload();
        }
    }

    $(".popWrap").hide();
    $(".overlay").hide();
    $('html').attr('style', 'overflow: auto;'); // 팝업 표출시 배경 스크롤 제한
}

//팝업닫기 localStorage
function mainPopupCloseLs(id) {

    if (cookieClickYn == "Y") {
        var expVar = parseInt($("#" + cookieNmGlobal).val());
        if (expVar == '' || isNaN(expVar)) {
            expVar = 1;
        }

        var today = new Date();
        today.setDate(today.getDate() + expVar);
        var cookieExp = today;
        //var cookieExpYYYMMDDHH = ''+cookieExp.getFullYear()+getMonthDayLenthConvert(cookieExp.getMonth()+1)+getMonthDayLenthConvert(cookieExp.getDate())+cookieExp.getHours();
        var cookieExpYYYMMDD = '' + cookieExp.getFullYear() + getMonthDayLenthConvert(cookieExp.getMonth() + 1) + getMonthDayLenthConvert(cookieExp.getDate());
        localStorage.setItem(cookieNmGlobal, cookieExpYYYMMDD);
    }
    document.getElementById(id).remove();
    $(".popWrap").hide();
    $(".overlay").hide();
    $("body").find(".dim").remove();
    $('html').attr('style', 'overflow: auto;'); // 팝업 표출시 배경 스크롤 제한
}

//팝업닫기 localStorage
function mainPopupCloseLsForChkBox() {

    var checkYn = $('.checkBoxNoShow').is(':checked');
    var cookieNm = $('.checkBoxNoShow').attr('id');

    cookieNmGlobal = cookieNm;

    if (checkYn == true) {
        var expVar = parseInt($("#" + cookieNmGlobal).val());
        if (expVar == '' || isNaN(expVar)) {
            expVar = 1;
        }

        var today = new Date();
        today.setDate(today.getDate() + expVar);
        var cookieExp = today;
        //var cookieExpYYYMMDDHH = ''+cookieExp.getFullYear()+getMonthDayLenthConvert(cookieExp.getMonth()+1)+getMonthDayLenthConvert(cookieExp.getDate())+cookieExp.getHours();
        var cookieExpYYYMMDD = '' + cookieExp.getFullYear() + getMonthDayLenthConvert(cookieExp.getMonth() + 1) + getMonthDayLenthConvert(cookieExp.getDate());
        localStorage.setItem(cookieNmGlobal, cookieExpYYYMMDD);
    }

    $(".popWrap").hide();
    $(".overlay").hide();
    $('html').attr('style', 'overflow: auto;'); // 팝업 표출시 배경 스크롤 제한
}

//월일 날짜 길이 체크 후 가공
function getMonthDayLenthConvert(date) {
    var charDate = "" + date;
    if (charDate.length == 1) {
        charDate = '0' + charDate;
    }
    return charDate;
}

//웹품질진단 결과 개선 202006
function setTitle(id) {
    // 			$('.titlejob').removeAttr('title');
    var text = id + ' 선택됨';
    $('#' + id).attr('title', text);
}
function setTitle2(id) {
    $('.titlejob2').removeAttr('title');
    var text = id + ' 선택됨';
    $('#' + id).attr('title', text);
}
function setTitle3(id) {
    $('.titlejob3').removeAttr('title');
    var text = id + ' 선택됨';
    $('#' + id).attr('title', text);
}

//웹 품질 수준진단 결과 개선 202102
function setTitle4(name, id) {
    $('.linkAnchor1, .linkAnchor2, .linkAnchor3, .linkAnchor4').removeAttr('title');
    var text = name + ' 선택됨';
    $('#' + id).attr('title', text);
}

function loginImsi() {
    //if(confirm("비회원으로 로그인 하셨습니다.\n비회원을 종료하시겠습니까?")){				
    alert("나의 생활정보 이용은 인증서 로그인이 필요합니다. 로그인 화면으로 이동할까요? 화면이동 시 비회원 로그인 상태는 종료됩니다.");
    localStorage.setItem("tmpTabId", "certiLogin");
    location.href = "/nlogin/logout?Mcode=10011&curr_url=/nlogin/?curr_url=/mw/AA210LifeSvcInfo.do?Mcode=11158";

    //location.href = "/nlogin/?curr_url=/mw/AA210LifeSvcInfo.do?Mcode=11158";				
    return;
    //} 
}

//툴팁 박스 표출
function toolBoxOpen(toolBox) {
    $('.tooltip-box').css('visibility', 'hidden');
    $('#' + toolBox).css('visibility', 'visible');
}

//툴팁 박스 미표출
function toolBoxClose(toolBox) {
    $('#' + toolBox).css('visibility', 'hidden');
}

//주민등록등본 간편인증 팝업 표출 
function certPopup() {
    var loginType = '';
    if (loginType == 'certiLogin' || loginType == 'browserLogin') {
        location.href = "/mw/AA020InfoCappView.do?CappBizCD=13100000015&HighCtgCD=A01010001&Mcode=10200";
    } else {
        $('.pop_main_layer').css('display', 'block');
        $('#simpleCert').focus();
    }

}

// 20210125 팝업 닫기
function closePopup() {
    $('.pop_main_layer').hide();
    $('#juminMain').focus();
}

//웹 접근성 210215 (배너 시작, 정지 버튼 포커스 유지)
function autoplayFocus() {
    $(".visual-group .swiper-button-autoplay > button").click(function () {
        $(".visual-group .swiper-button-autoplay > button").focus();
    });
}

function autoplayFocus2() {
    $(".news-type03 .swiper-button-autoplay > button").click(function () {
        $(".news-type03 .swiper-button-autoplay > button").focus();
    });
}

function openPopup() {
    var usrSectCd = "";

    if (usrSectCd != "101" && usrSectCd != "102") {
        alert("개인회원만 이용가능한 서비스 입니다.");
        return false;
    }

    // 14세 미만 로그인시 보조금 24 이용동의 팝업 라디오 버튼 숨기기
    under14Agree();

    $("#mainPop01").show();
    $("#mainPop01").attr("tabindex", "0").focus(),
        $("body").append('<div class="dim"></div>'),
        $("body").css({
            overflow: "hidden",
            height: "100%"
        });
}

function closeLoginPop() {
    if (cookieClickYn == "Y") {
        var expVar = parseInt($("#" + cookieNmGlobal).val());
        if (expVar == '' || isNaN(expVar)) {
            expVar = 7;
        }

        var today = new Date();
        today.setDate(today.getDate() + expVar);
        var cookieExp = today;
        //var cookieExpYYYMMDDHH = ''+cookieExp.getFullYear()+getMonthDayLenthConvert(cookieExp.getMonth()+1)+getMonthDayLenthConvert(cookieExp.getDate())+cookieExp.getHours();
        var cookieExpYYYMMDD = '' + cookieExp.getFullYear() + getMonthDayLenthConvert(cookieExp.getMonth() + 1) + getMonthDayLenthConvert(cookieExp.getDate());
        localStorage.setItem(cookieNmGlobal, cookieExpYYYMMDD);
    }

    lifeSprtcost_flag = "N";
    $('.subsidy-layer').removeAttr("tabindex");
    $('.subsidy-layer').off("click");
    $(".subsidy-layer").hide();
    $("body").removeAttr("style");
    $("body").find(".dim").remove();
    $('html').attr('style', 'overflow: auto;'); // 팝업 표출시 배경 스크롤 제한
}

function closeLoginPopFocus(focusId) {
    if (cookieClickYn == "Y") {
        var expVar = parseInt($("#" + cookieNmGlobal).val());
        if (expVar == '' || isNaN(expVar)) {
            expVar = 7;
        }

        var today = new Date();
        today.setDate(today.getDate() + expVar);
        var cookieExp = today;
        //var cookieExpYYYMMDDHH = ''+cookieExp.getFullYear()+getMonthDayLenthConvert(cookieExp.getMonth()+1)+getMonthDayLenthConvert(cookieExp.getDate())+cookieExp.getHours();
        var cookieExpYYYMMDD = '' + cookieExp.getFullYear() + getMonthDayLenthConvert(cookieExp.getMonth() + 1) + getMonthDayLenthConvert(cookieExp.getDate());
        localStorage.setItem(cookieNmGlobal, cookieExpYYYMMDD);
    }

    lifeSprtcost_flag = "N";
    $('.subsidy-layer').removeAttr("tabindex");
    $('.subsidy-layer').off("click");
    $(".subsidy-layer").hide();
    $("body").removeAttr("style");
    $("body").find(".dim").remove();
    $('html').attr('style', 'overflow: auto;'); // 팝업 표출시 배경 스크롤 제한
    $("#" + focusId).focus();
}

function openCvdPopup(result) {
    /* if (result == "0") {
        //로그인 여부 확인
        var lsc_loginYn = "true";
        var usrSectCd = "";
        
        if(lsc_loginYn == "true"){
            alert("회원 로그인이 필요한 서비스 입니다.");
            location.href = '/nlogin/?curr_url=/portal/main?cvdRec=Y';
        } else if (usrSectCd != "101" && usrSectCd != "102") {
            alert("개인회원만 이용가능한 서비스 입니다.");
            return false;
        } else if (prscYn == "N") {
            lifeSprtcost_flag = "Y"; //동의 후 프로세스 구분하기 위함
            openPopup();
        } else {
            // 7.10 이전 신청 불가로 11일 이후 프로세스 실행
                    fn_lifesprtcost();
        }
    } else if(result == "1") {
        $("#cvd19Pop1").show();
                $("#cvd19Pop1").attr("tabindex", "0").focus(),
                $("body").append('<div class="dim"></div>'),
                $("body").css({
                    overflow: "hidden",
                    height: "100%"
                });
    } else if (result == "2"){
        $("#cvd19Pop2").show();
                $("#cvd19Pop2").attr("tabindex", "0").focus(),
                $("body").append('<div class="dim"></div>'),
                $("body").css({
                    overflow: "hidden",
                    height: "100%"
                });
    } */

    location.href = "/portal/rcvfvrSvc/dtlEx/179038700002";
}

function closeCvdPop() {
    $('.subsidy-layer').removeAttr("tabindex");
    $('.subsidy-layer').off("click");
    $(".subsidy-layer").hide();
    $("body").removeAttr("style");
    $("body").find(".dim").remove();
}

// 보조금24 동의
function setFixessvcAgre() {
    under14Agree();
    if ($("#chkFixessvcAgre").is(":checked")) {
        var agreeSttusCd = "N";
        if ($("#chkChildrenAgre").is(":checked")) {
            agreeSttusCd = "Y";
        }

        $.ajax({
            type: "post"
            , url: "/portal/rcvfvrSvc/mySvc/setFixessvcAgre.do"
            , data: { agreeSttusCd: agreeSttusCd }
            , success: function (result) {
                if (result == "SUCCESS") {
                    alert("국가보조금 맞춤형 서비스(보조금24) 이용 동의에 동의하였습니다.");
                    if (lifeSprtcost_flag == "Y") {
                        prscYn = "Y";
                        closeLoginPop();
                        openCvdPopup(0);
                    } else {
                        location.href = '/portal/rcvfvrSvc/main';
                    }
                } else if (result == "SESSION") {
                    alert("로그인이 필요한 서비스 입니다.");
                    if (lifeSprtcost_flag == "Y") {
                        location.href = "/nlogin/?curr_url=/portal/main";
                    } else {
                        location.href = "/nlogin/?curr_url=/portal/rcvfvrSvc/mySvc/myRcvfvrsvc";
                    }
                } else {
                    alert("서비스 오류가 발생하였습니다. 잠시후 이용 부탁드립니다.");
                }

            }
            , error: function (e) {
                alert("서비스 오류가 발생하였습니다. 잠시후 이용 부탁드립니다.");
            }
        });
    } else {
        alert("개인정보 수집·이용 조회에 동의해 주세요.");
        $("#allchk").focus();
        return false;
    }
}

function getTabView(cls) {
    wStorage = window.sessionStorage;

    wStorage.setItem("viewTab", cls);
    location.href = '/portal/rcvfvrSvc/mySvc/myRcvfvrsvc';
}

function under14Agree() {
    var nowStr = '20231223';
    var encRrn = '';
    var birthStr = getJuminBirth(encRrn);
    var rslt = parseInt(nowStr) - parseInt(birthStr) - 140000;

    if (rslt < 0) { //14세 미만
        $('#chkChildrenAgre').prop('checked', false);
        $('.chkChildren14Agre').hide();
        $('.layer-agree-head').hide();
    }
}

/* // 세션확인
function checkSession(){
    // 정보업데이트
    $.ajax({
          type: "post"
        , url: "/portal/rcvfvrSvc/mySvc/checkSession.do"
        , success:function(result) {
            if(result == "TRUE"){
                wStorage = window.sessionStorage;
                wStorage.setItem("myRcvfvrsvc",true);			
                location.href = '/portal/rcvfvrSvc/mySvc/myRcvfvrsvc';
            }else if(result == "FALSE"){
                alert("로그인이 필요한 서비스 입니다.");
                location.href = "/nlogin/?curr_url=/portal/rcvfvrSvc/mySvc/myRcvfvrsvc"
            }
        }
    , error:function(e) {}
    });
} */

// 기업생애주기 로그인 연계. 
function smesLoginPopup(flag) {
    if (flag == 'Y') {
        $('#smesPopup').css('display', 'block');
    } else {
        openSmesPopup('');
    }
};

function smesLoginPopupCallback(flag) {
    if (flag == 'Y') {
        $.ajax({
            type: "post"
            , url: "/portal/getLoginParameter.do"
            , success: function (result) {
                openSmesPopup(result);
            }
            , error: function (e) {
                openSmesPopup('');
            }
        });
    } else {
        openSmesPopup('');
    }
}

function openSmesPopup(param) {
    closeSmesPopup();
    window.open('https://www.smes.go.kr/lifeCyclePolicy' + param, '_blank');
}

function closeSmesPopup() {
    $('#smesPopup').css('display', 'none');
}

/* 조회한 자주찾는 서비스명 줄바꿈 처리 */
function cnvrtStrNm(str) {
    var cvtStr = str;

    if (str != null && str != "") {
        var nCnt = str.split(' ').length - 1;


        if (nCnt > 0) {
            var idx = parseInt(nCnt / 2);
            var tmpIdx = 0;

            for (var i = 0; i <= idx; i++) {
                tmpIdx = cvtStr.indexOf(' ', tmpIdx);
            }

            cvtStr = cvtStr.substr(0, tmpIdx) + "<br>" + cvtStr.substr(tmpIdx + 1);
        }
    }

    return cvtStr;
}


function fn_proLogin() {
    $.ajax({
        url: '/portal/service/publicResrceOpn/getUserInfo.json',
        type: "post",
        dataType: "json",
        async: false,
        success: function (data) {
            var userId = "";
            var userCi = "";

            var rsCode = data.resultCd;

            if (rsCode == 'success') {
                registrationObj = data.loginInfo;

                var jsonObj = JSON.parse(registrationObj);

                var userId = jsonObj.userId;
                var userCi = jsonObj.userCi;

                //OpenWindowWithPost('/portal/service/publicResrceOpn/login', "","NewFile",userId, userCi);  //test
                OpenWindowWithPostPro('https://www.eshare.go.kr/UserPortal/Upm/Main/index.do', "", "NewFile", userId, userCi);

                return;
            }
            else {
                //OpenWindowWithPost('/portal/service/publicResrceOpn/login', "","NewFile",userId, userCi);	//test
                //OpenWindowWithPostNoLogin('https://www.eshare.go.kr/UserPortal/Upm/Main/index.do', "width=1200,height=900,left=50,top=50,resizable=yes,scrollbars=yes","NewFile");  
                OpenWindowWithPostPro('https://www.eshare.go.kr/UserPortal/Upm/Main/index.do', "", "NewFile", userId, userCi);
                return;
            }
        },
        error: function (error) {
            alert("공유누리 접속 중 오류가 발생했습니다.\n시스템 관리자에게 문의 바랍니다.");
        }
    });

}

//팝업창에서 공유누리 화면 호출
function OpenWindowWithPostPro(url, windowoption, name, userId, userCi) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);

    if (mobileYn == 'Y') {
        form.setAttribute("target", "_self"); //모바일앱에서는 window.open 미지원
    } else {
        form.setAttribute("target", name);
    }

    //if (userId != "" || userCi != "" )
    //{
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'user_id';
    input.value = userId;
    //console.log("input.value = " + input.value);
    form.appendChild(input);

    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'user_ci';
    input.value = userCi;
    //console.log("input.value = " + input.value);
    form.appendChild(input);

    document.body.appendChild(form);
    //} 
    if (mobileYn == 'Y') {
        //현재창에서 진행
        setTimeout(function () {
            form.submit();
        }, 200);
    } else {
        window.open(url, name, windowoption); //모바일앱에서는 window.open 미지원

        setTimeout(function () {
            form.submit();
        }, 200);

        setTimeout(function () {
            document.body.removeChild(form);
        }, 400);

    }

}

//팝업창에서 공유누리 화면 호출
function OpenWindowWithPostNoLogin(url, windowoption, name) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);

    if (mobileYn == 'Y') {
        form.setAttribute("target", "_self"); //모바일앱에서는 window.open 미지원
    } else {
        form.setAttribute("target", name);
    }

    if (mobileYn == 'Y') {
        //현재창에서 진행
        setTimeout(function () {
            form.submit();
        }, 200);
    } else {
        window.open(url, name, windowoption); //모바일앱에서는 window.open 미지원

        setTimeout(function () {
            form.submit();
        }, 200);
    }

}