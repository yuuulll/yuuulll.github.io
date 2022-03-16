$(function(){
    //start
    // $('선택').on('이벤트','할일')
    //일은 => fuction() {}
    //호이스팅 갈고리로 끌어올린다.


    // $(this) 나
    //  $(this).index()번호 

function 팝업창끄기() {
    $(this).parent.hide();
}

$('.popUp01 button').on('click',팝업창끄기)

    //end
////////////////////////////
});