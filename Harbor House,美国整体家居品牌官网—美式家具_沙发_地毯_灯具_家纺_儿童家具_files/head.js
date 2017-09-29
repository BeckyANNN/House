/*
搜索逻辑:
1. 搜索框获取焦点：空（不显示下拉框），反之（取数据）
2. 搜索框失去焦点：隐藏下拉框
3. 搜索框文字个数限制最大60个.
*/
var global_keydown = false;        // 当执行完，keydown后， 会触发keyup事件，此处做限制.
var global_show = true;
function searchBoxBlurEvent() {
    $(".search_menu").addClass("hide");
    $("#searchtext").animate({ width: '90px' });
}
function searchBoxFocusEvent() {
    $("#searchtext").animate({ width: "140" });
    searchMenuFillData($.trim($('#searchtext').val()));
}
function searchMenuFillData(keyword) {
    if ($.trim(keyword) == "") {
        $(".search_menu").addClass("hide");
    }
    else {
        if (global_keydown == false) {
            $.get('/Product/ShowKeyWords', { keyword: keyword }, function (data) {
                var json = $.parseJSON(data);
                if (json.length > 0) {
                    $(".search_menu").removeClass("hide");
                    var html = "";
                    for (var i = 0; i < json.length; i++) {
                        html += '<li><a href="/product-search/' + json[i].KeyWordBase64 + '">' + json[i].KeyWord + '</a></li>';
                    }
                    $('.search_menu ul').html(html);
                } else {
                    $(".search_menu").addClass("hide");
                }
            })
        } else {
            global_keydown = false;
        }
    }
}
function searchBoxKeyupEvent(e) {
    searchMenuFillData($.trim($(this).val()));
}
function searchBoxKeyPress(e) {
    switch (e.which) {
        case 13:
            if ($.trim($(this).val()) != "") {
                gotoSearchPage($.trim($(this).val()));
            } else {
                // Tool.alertMsg({ content: '请输入搜索内容', width: '300px', height: '150px' });
            }
            break;
    }
}
function searchBoxKeyDown(e) {
    switch (e.which) {
        case 38:
            var liarr = $('.search_menu ul li');
            var i_active = -1;
            $.each(liarr, function (index, item) {
                if ($(item).hasClass('active'))
                    i_active = index;
            });
            if (i_active == 0) i_active = liarr.length;
            i_active = i_active - 1;
            $.each(liarr, function (index, item) {
                $(item).removeClass('active');
                if (i_active == index) {
                    $(item).addClass('active');
                    $('#searchtext').val($(item).find('a').get(0).innerHTML.replace("&amp;", "&"));
                }
            });
            global_keydown = true;
            break;
        case 40:
            var liarr = $('.search_menu ul li');
            var i_active = -1;
            $.each(liarr, function (index, item) {
                if ($(item).hasClass('active'))
                    i_active = index;
            });
            if (i_active == liarr.length - 1) i_active = -1;
            i_active = i_active + 1;
            $.each(liarr, function (index, item) {
                $(item).removeClass('active');
                if (i_active == index) {
                    $(item).addClass('active');
                    $('#searchtext').val($(item).find('a').get(0).innerHTML.replace("&amp;","&"));
                }
            });
            global_keydown = true;
            break;
    }
}
function gotoSearchPage(keyword) {
    if (keyword != "") {
        location.href = '/product-search/' + Base64.encode(keyword).replace("/", "%2f");
    } else {
        // Tool.alertMsg({ content: '请输入搜索内容', width: '300px', height: '150px' });
    }
}
function initSearchMenu() {
    $("#searchtext").keypress(searchBoxKeyPress).keyup(searchBoxKeyupEvent).keydown(searchBoxKeyDown).focus(searchBoxFocusEvent).blur(searchBoxBlurEvent);

    $('.search_all div').mouseover(function () {
        $("#searchtext").unbind('blur');
    });

    $('.search_all div').mouseout(function () {
        $("#searchtext").bind('blur', searchBoxBlurEvent);
    });

    $('.search_menu ul li').live('mouseover', function () {
        $('.search_menu ul li').each(function () { $(this).removeClass("active"); })
        $(this).addClass("active");
    });

    $("#sbx_searchpage,#searchbox_foot").keyup(function (e) {
        if (e.which == 13) {
            if ($(this).val() != "") {
                gotoSearchPage($(this).val());
            } else {
                //Tool.alertMsg({ content: '请输入搜索内容', width: '300px', height: '150px' });
            }
        }
    });
}

function logout() {
    $.post("/Account/Logout", { t: "logout" }, function (data) {
        window.location.href = "/home/index";
    });
}

function getUserInfoCount() {
    $.get("/Customer/GetUserInfoCount", { t: Math.random() }, function (data) {
        var json = jQuery.parseJSON(data);
        if (json.status == "success") {
            $("#unUsedCouponNum").text(json.nuUsedNum);
            $("#needPayOrderNum").text(json.needPayNum);
        } else if (json.status == "notauthorized") {
            window.location.href = json.loginUrl;
        }
    });
}

function shopping_cart() {
    $("#cart").mouseover(function () {
        $(".shopping_cart_top").removeClass("hide");
        $(".shopping_cart_top").show();
        if (global_show) {
            getCartInfo(false);
            global_show = false;
        }
    }).mouseout(function () {
        $(".shopping_cart_top").hide();
    }).mouseleave(function () {
        if ($('.shopping_cart_top').css("display") == "none") {
            global_show = true;
        }
    });
}

function cartHide() {
    $(".shopping_cart_top").fadeOut();
}

function getCartInfo(isasync) {
    $.ajax({
        type: "get",
        url: "/Shopping/GetCartInfo",
        cache: false,
        async: isasync,
        success: function (msg) {
            var json = jQuery.parseJSON(msg);
            if (json.status == "success") {
                if (parseInt(json.productcount) > 0) {
                    $("#cartcount").text(json.productcount);
                    $("#pcount").text(json.productcount);
                    $("#ptotal").text("￥" + json.total);
                    $("#cartEmpty").addClass("hide");
                    $("#cartShow").removeClass("hide");
                } else {
                    $("#cartcount").text("0");
                    $("#cartEmpty").removeClass("hide");
                    $("#cartShow").addClass("hide");
                }
            } else {
                $("#cartcount").text("0");
                $("#cartEmpty").removeClass("hide");
                $("#cartShow").addClass("hide");
            }
        }
    });
}

function SetRootCss() {
    var order = $("#channelorder").val();
    if (order > 0) {
        $("dt").removeClass("active");
        $("#nav > dl").eq(order - 1).find("dt").addClass("active");
    }
}

function edit(channelId) {
    alert(channelId);
}

function isLoadCart() {
    var flag = true;
    var pathname = document.location.pathname;
    if (pathname.toLowerCase().indexOf("account") > -1) {
        flag = false;
    }
    else if (pathname.toLowerCase().indexOf("shopping") > -1) {
        flag = false;
    }
    return flag;
}

$(function () {
    var isLoadCard = isLoadCart();
    if (isLoadCard) {
        getCartInfo(false);
    }
    initSearchMenu();
    shopping_cart();
    SetRootCss();
});