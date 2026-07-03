$().ready(function () {

    $("#container>ul li a").mousemove(function () {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        $(this).addClass("nav-hover").parent().siblings('li').children('a').removeClass("nav-hover");
    });



    $(".Education-news-title li").mousemove(function () {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
        //让内容框的第 _index 个显示出来，其他的被隐藏
        $("#Education-list").find("ul").eq(_index).show().siblings().hide();
        //改变选中时候的选项框的样式，移除其他几个选项的样式
        $(this).addClass("Education-news-title-hover").siblings().removeClass("Education-news-title-hover");
    });

    //教育动态-list 更多
    $(".Education-news-title li").mousemove(function () {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
        //让内容框的第 _index 个显示出来，其他的被隐藏
        $("#more-list").find("a").eq(_index).show().siblings().hide();
    });


    $(".content-listPublic-one li").mousemove(function () {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
        //让内容框的第 _index 个显示出来，其他的被隐藏
        $("#listPublic-one-list").find("ul").eq(_index).show().siblings().hide();
        //改变选中时候的选项框的样式，移除其他几个选项的样式
        $(this).addClass("listPublic-title-hover").siblings().removeClass("listPublic-title-hover");
    });

    $(".content-listPublic-two li").mousemove(function () {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
        //让内容框的第 _index 个显示出来，其他的被隐藏
        $("#listPublic-two-list").find("ul").eq(_index).show().siblings().hide();
        //改变选中时候的选项框的样式，移除其他几个选项的样式
        $(this).addClass("listPublic-title-hover").siblings().removeClass("listPublic-title-hover");
    });

    $(".content-listPublic-three li").mousemove(function () {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
        //让内容框的第 _index 个显示出来，其他的被隐藏
        $("#listPublic-three-list").find("ul").eq(_index).show().siblings().hide();
        //改变选中时候的选项框的样式，移除其他几个选项的样式
        $(this).addClass("listPublic-title-hover").siblings().removeClass("listPublic-title-hover");
    });

})