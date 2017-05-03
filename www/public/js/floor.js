$(function(){
    var floli=$(".floli.nor");
    var flo=$(".flo");
    var nor=$(".floli");
    nor.on('click',function(){
        var index=$(this).index();
        nor.removeClass('active');
        nor.eq(index).addClass('active');
    });
    floli.on('click',function(){
        var index=$(this).index();
        var wid=flo.eq(index).offset().top;
        $('html body').animate({scrollTop:flo.eq(index).offset().top},500);
    });
    $(".turn").on('click',function(){
        $("html body").animate({scrollTop:0},500);
    })
});