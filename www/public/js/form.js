$(function(){
    $(".search-logo").on('click',function(){
        $(".search-box").toggle();
    });
    var data=$(".data-list");
    data.on('mouseover',function(){
        var index=$(this).index();
        data.removeClass('current');
        data.eq(index).addClass('current');
    });
    data.on('click',function(){
        var index=$(this).index();
        $(".search-box").hide();
    });
});