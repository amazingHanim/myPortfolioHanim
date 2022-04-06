$(function () {

    function indexSlide() {
        $frame = $(".frame"),
            $wrapper = $frame.find(".section_wrap"),
            $leftBtn = $frame.find(".pageBtns>.left"),
            $rightBtn = $frame.find(".pageBtns>.right")
        leftNum = -100; //고정값
        clickNum = 0; //변동값
        function reset() {
            $leftBtn.text("About Me");
            $rightBtn.text("My Projects");
        }

        function show() {
            $leftBtn.show();
            $rightBtn.show();
        }

        function txtChange() {
            if (clickNum == -1) {
                $leftBtn.hide();
                $rightBtn.text("Menu");
            } else if (clickNum == 0) {
                reset();

            } else if (clickNum == 1) {
                $leftBtn.text("Menu");
                $rightBtn.text("detail");

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
            $article = $artWrap.children();

        $artNum = $article.length;
        $artSize = $article.innerHeight();
        console.log($artSize);


console.log($content.scrollTop())

        nowTop = $content.scrollTop();
        console.log(nowTop)

        // $content.animate({scrollTop:$artSize},500);
        var num = 0
        $content.scroll(
            
            function(){
                console.log(nowTop)

                // num++;
                // console.log(num)
                // if($nowTop>$artSize){

                // }
            }
        )

        // console.log($artSize)
        // $content.animate({scrollTop:-$artSize},500); 


    }

    indexSlide();
    myProject();
});