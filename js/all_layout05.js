$(function(){
    //start
    // $('선택').on('이벤트','할일')
    //일은 => fuction() {}
    //호이스팅 갈고리로 끌어올린다.


    // $(this) 나
    //  $(this).index()번호 


function tabMenu() {
    var idx = $(this).index(); //0,1,2,3 
    $('tabLink li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent>div').removeClass('active');
    $('.tabContent>div').eq(idx).addClass('active');
    // $('.tabContent>div').eq(idx).addClass('active').siblings().removeClass('active');
}


$('.tabLink li').on('click', tabMenu);

$('.xi-close').on('click', function(){
    $('.headerWrap').slideToggle();
})


    /////////////////////////////
})