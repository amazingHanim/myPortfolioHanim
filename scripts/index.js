$(function () {

    function indexSlide() {
        $frame = $(".frame"),
            $wrapper = $frame.find(".section_wrap"),
            $leftBtn = $frame.find(".pageBtns>.left"),
            $rightBtn = $frame.find(".pageBtns>.right"),
            $intro = $frame.find(".intro");
        leftNum = -100; //고정값
        clickNum = 0; //변동값
        function reset() {
            $leftBtn.text("About Me");
            $rightBtn.text("My Projects");

        }

        function show() {
            $leftBtn.show();
            $rightBtn.show();
            $intro.show(200)
        }

        function txtChange() {
            if (clickNum == -1) {
                $leftBtn.hide();
                $rightBtn.text("Menu");
                $intro.hide(200)
                $wrapper.css({background: "linear-gradient(82deg, rgba(34,195,178,1) 20%, rgba(223,255,94,1) 90%)"})

            } else if (clickNum == 0) {
                reset();
                $wrapper.css({background: "radial-gradient(circle, rgba(3,145,241,1) 3%, rgba(13,158,255,1) 9%, rgba(109,187,241,1) 20%, rgba(251,233,224,1) 34%, rgba(254,204,176,1) 38%, rgba(62,187,254,1) 51%, rgba(49,176,255,1) 81%, rgba(235,222,212,1) 94%)"})

            } else if (clickNum == 1) {
                $leftBtn.text("Menu");
                $rightBtn.text("detail");
                $intro.hide(200)
                $wrapper.css({background: "linear-gradient(135deg, rgba(250, 253, 255, 1) 0%, rgba(45, 145, 208, 1) 16%, rgba(60, 165, 231, 1) 34%, rgba(255, 253, 246, 1) 66%, rgba(235, 222, 212, 1) 100%)"})


            } else if (clickNum == 2) {
                $leftBtn.text("My Projects");
                $rightBtn.hide();
            }
        }


        $rightBtn.click(function () {
            show();
            if (clickNum < 2) {
                clickNum++;
                $wrapper.animate({
                    left: leftNum * (clickNum + 1) + "%"
                }, 300);
                console.log(clickNum);
                txtChange();
            }
        });
        $leftBtn.click(function () {
            show();
            if (clickNum > -1) {
                clickNum--;
                $wrapper.animate({
                    left: leftNum * (clickNum + 1) + "%"
                }, 300);
                console.log(clickNum);
                txtChange();
            }

        });
        reset();
    }

    function myProject() {
        var $myPjc = $("section.myPjt"),
            $content = $myPjc.find(".content"),
            $artWrap = $content.children(),
            $article = $artWrap.children(),
            $list = $myPjc.find("ul.list"),
            $listItem = $list.children();
        var $artNum = $article.length;

        $listItem.click(
            function () {
                $artSize = $article.innerHeight();
                num = $(this).index();
                $artWrap.animate({
                    top: -$artSize * num
                }, 300)
            }
        )

        var $titleList = $myPjc.find(".title li");
        $titleList.click(function(){
            $titleList.removeClass("on");
            $(this).addClass("on")
        });
    }
    

    indexSlide();
    myProject();
});