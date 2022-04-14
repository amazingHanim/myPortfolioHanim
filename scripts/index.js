$(function () {

    function index() {
        $frame = $(".frame"),
            $wrapper = $frame.find(".section_wrap"),
            $btn = $frame.find(".pageBtns>button"),
            $leftBtn = $frame.find(".pageBtns>.left"),
            $rightBtn = $frame.find(".pageBtns>.right");
        $header = $frame.find("header"),
            $menu = $header.find("li");



        //slide start
        leftNum = -100; //고정값
        clickNum = 0; //변동값
        function reset() {
            $leftBtn.text("About Me");
            $rightBtn.text("My Projects");
        }

        function btnShow() {
            $leftBtn.show();
            $rightBtn.show();
        }

        function txtChange() {
            if (clickNum == -1) {
                $btn.show();
                $leftBtn.hide();
                $rightBtn.text("Menu");
                $wrapper.css({
                    background: "linear-gradient(130deg, #f1f3ee 17%,#e0e6d9 25%,#d8ee77 40%,#abc04c 60%)"

                })

            } else if (clickNum == 0) {
                reset();
                $btn.show();
                $wrapper.css({
                    background: "linear-gradient(130deg, #f1f3ee 17%,#e0e6d9 25%,#d8ee77 40%,#abc04c 60%)"

                })

            } else if (clickNum == 1) {
                $btn.show();
                $rightBtn.hide();
                $leftBtn.text("Menu");
                $wrapper.css({
                    background: "linear-gradient(340deg, #853981 5%, #515ada 70%, #efd5ff 90%)"

                });
            }




            // else if (clickNum == 2) {
            //     $leftBtn.text("My Projects");
            //     $rightBtn.hide();
            // }
        }





        //header 글씨 start
        $menu.click(function () {
            $menu.removeClass("on");
            $(this).addClass("on")
        })

        function headerSelect(a) {
            var currentIndex = a + 1;
            $menu.removeClass("on");
            $menu.eq(currentIndex).addClass("on");
        }

        $rightBtn.click(function () {
            btnShow();
            if (clickNum < 1) {
                clickNum++;
                $wrapper.animate({
                    left: leftNum * (clickNum + 1) + "%"
                }, 300);
                txtChange();
            }
            headerSelect(clickNum)
        });
        $leftBtn.click(function () {
            btnShow();
            if (clickNum > -1) {
                clickNum--;
                $wrapper.animate({
                    left: leftNum * (clickNum + 1) + "%"
                }, 300);
                txtChange();
            }
            headerSelect(clickNum);

        });
        $menu.click(function () {
            var currentIndex = $(this).index();
            clickNum = currentIndex - 1;

            if (clickNum < 1) {
                $wrapper.animate({
                    left: leftNum * (clickNum + 1) + "%"
                }, 300);
                txtChange();
            } else if (-1 < clickNum) {
                $wrapper.animate({
                    left: leftNum * (clickNum + 1) + "%"
                }, 300);
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
        $titleList.click(function () {
            $titleList.removeClass("on");
            $(this).addClass("on")
        });
    }


    index();
    myProject();
});