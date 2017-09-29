(function ($) {
    
    $.fn.alertmsg = function (options) {
        var defaults = {
            width: '400px',
            height: '500px',
            title: '',
            content: '',
            button: false
        };
        
        var opts = $.extend(defaults, options);
        //alert(opts.button);
        var btncontent;
        if (opts.button == false) {
           btncontent = '';
        } else if (opts.button == true) {
            btncontent = '<div class="layer_footer"><button class="btn btn_gray btn_130 clause">确 定</button><button class="btn btn_white btn_130 cancel">取 消</button></div>';
        }
        var mag_layer = '<div class="msg_tplayer"></div><div class="msg_outLayer dialog_box" style="width:' + opts.width + ';height:' + opts.height + '"><a class="layer_close" href="javascript:;">Close X</a><h3 class="layer_hd ac">' + opts.title + '</h3><div class="layer_con">' + opts.content + '</div>' + btncontent + '</div>';
        
        $("body").append(mag_layer); 
        var w = $(window).width();
        var h = $(window).height();
        $('.msg_tplayer').css({ width: w, height: h });
        var l = (w - $('.msg_outLayer').width()) / 2;
        var t = (h - $('.msg_outLayer').height() - 100) / 2;
        $('.msg_outLayer').css({ top: t, left: l });

        if ($('.msg_tplayer').css('display') == 'none') {
            $('.msg_tplayer').show().stop().animate({ opacity: 0.7 }, 500, function () {
                $('.msg_outLayer').show().animate({ opacity: 1 }, 500);
            });
        }

        /*
        //修改人：jessica
        //时间：2014/10/23
        //点蒙版层关闭弹层

        $('.msg_tplayer').click(function () {
            if (!$('.msg_tplayer').is(':animated')) {
                $('.msg_outLayer').stop().animate({ opacity: 0 }, 500, function () {
                    $('.msg_outLayer').remove();
                    $('.msg_tplayer').stop().animate({ opacity: 0 }, 500, function () {
                        $('.msg_tplayer').remove();
                    });
                });
            }
        });
        */
        $('.msg_outLayer .layer_close').click(function () {
            $('.msg_outLayer').stop().animate({ opacity: 0 }, 500, function () {
                $('.msg_outLayer').remove();
                $('.msg_tplayer').stop().animate({ opacity: 0 }, 500, function () {
                    $('.msg_tplayer').remove();
                });
            });
        });
        $('.cancel').click(function () {
            $('.msg_outLayer').stop().animate({ opacity: 0 }, 500, function () {
                $('.msg_outLayer').remove();
                $('.msg_tplayer').stop().animate({ opacity: 0 }, 500, function () {
                    $('.msg_tplayer').remove();
                });
            });
        });
    }
})(jQuery);
