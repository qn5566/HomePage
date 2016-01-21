/**
 * Created by heran on 2016/1/4.
 */
$(function () {

    $("#goTop").click(function () {

        $("html,body").animate({scrollTop: 0}, 1200);

        return false;


    });
    $("#About").click(function () {

        $("html,body").animate({scrollTop: 400}, 1200);

        return false;


    });
    $("#Career").click(function () {

        $("html,body").animate({scrollTop: 850}, 1400);

        return false;


    });
    $("#Skills").click(function () {

        $("html,body").animate({scrollTop: 1110}, 1600);

        return false;


    });
    $("#Works").click(function () {

        $("html,body").animate({scrollTop: 1310}, 1800);

        return false;


    });
    $("#Project").click(function () {

        $("html,body").animate({scrollTop: 1710}, 2000);

        return false;


    });
    $("#Autobiography").click(function () {

        $("html,body").animate({scrollTop: 2600}, 2200);

        return false;


    });

    $('#lrtk').movingBoxes({
        startPanel: 1,       // 从第一个li开始
        reducedSize: .5,      // 缩小到原图50%的尺寸
        wrap: true,   // 无缝循环
        buildNav: true,	// 显示指示器效果
        navFormatter: function () {
            return "&#9679;";
        } // 指示器格式，为空即会显示123
    });
//這是產品資訊

    $("#pichuan .partener").mouseenter(function () {

        $(this).find("div").css("color", "red");
        $(this).find("img").delay(200).stop().clearQueue().animate({
            borderRadius: "20",
            opacity: 1
        }, "fast")


    }).mouseleave(function () {
        $(this).find("div").css("color", "black");
        $(this).find("img").delay(200).stop().clearQueue().animate({
            borderRadius: "60",
            opacity: 0.9
        }, "fast")

    })

    $("#pichuan .row1").click(function () {
        var picIndex = $("#pichuan .row1").index($(this));
        $(".parinforma").hide();
        $("#pichuan").hide();
        $(".parinforma").eq(picIndex).slideDown("normal");
    })
    $("#teamcont .closebtn").mouseenter(function () {

        $(this).css({'background': 'url(img/close-s.png)'});
    }).mouseleave(function () {
        $(this).css({'background': 'url(img/close-n.png)'});
    })
    $("#teamcont .closebtn").click(function () {
        $(".parinforma").hide();
        $("#pichuan").show();
    })

    //$(function () {
    //    $(window).load(function () {
    //        $(window).bind('scroll resize', function () {
    //            var $this = $(this);
    //            var $this_Top = $this.scrollTop();
    //            //當高度小於100時，關閉區塊
    //            if ($this_Top < 100) {
    //                $('#navigation').stop().animate({top: "0px"});
    //            }
    //            if ($this_Top > 100) {
    //                $('#navigation').stop().animate({top: "100px"});
    //            }
    //        }).scroll();
    //    });
    //});


});

