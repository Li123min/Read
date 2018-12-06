$(function(){
//点击事件改变样式
$(".assortment span a").click(function(){
    // $(this).addClass("assortment_span").siblings().removeClass("assortment_span");//同等效果;
    $(".assortment span a").removeClass("assortment_span");
    $(this).addClass("assortment_span");
});


//home_page
$(".centert_meun_book a").click(function(){
    $(".centert_meun_author a").removeClass("centert_meun_book");
    $(this).addClass("centert_meun_book");
    $(".book_display_div1").show();
    $(".book_display_div2").hide();
});
$(".centert_meun_author a").click(function(){
    $(".centert_meun_book").removeClass("centert_meun_book");
    $(this).addClass("centert_meun_book");
    $(".book_display_div1").hide();
    $(".book_display_div2").show();
});

//Ranking_List 点击分类
$(".centert_classify_assortment span a").click(function(){
    $(".centert_classify_assortment span a").removeClass("centert_classify_assortment_span");
    $(this).addClass("centert_classify_assortment_span");
});
$(".centert_degree_right span a").click(function(){
    $(".centert_degree_right span a").removeClass("degree_right_aa");
    $(this).addClass("degree_right_aa");
});

});

