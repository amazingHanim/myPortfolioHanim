/*
$(function () {
    $frame = $(".frame"),
        $wrapper = $frame.find(".section_wrap"),
        $leftBtn = $frame.find(".pageBtns>.left"),
        $rightBtn = $frame.find(".pageBtns>.right")
    // 
    function show(){
        $leftBtn.show();
        $rightBtn.show();
    }
    function reset() {
        $leftBtn.text("About Me");
        $rightBtn.text("My Projects");
    }
    function txtChange(){
        if(current==100){
            $leftBtn.hide();
            $rightBtn.text("Menu"); 
        }else if (current==0){
            reset();

        }else if(current==-100){
            $leftBtn.text("Menu");
            $rightBtn.text("detail"); 

        }else if(current ==-200){
            $leftBtn.text("My Projects");
            $rightBtn.hide(); 
        }
    }
    current = 0
    next = true;
    console.log(current)

    $rightBtn.click(function () {
            show();
            $wrapper.animate({
                marginLeft: (current - 100) + "%"
            }, 300);
            current = current-100;
            txtChange();

    });
    $leftBtn.click(function () {
        show();
        $wrapper.animate({
            marginLeft: (current + 100) + "%"
        }, 300);
        current = current + 100;
        console.log(current);
        txtChange();

    });

    reset();

});
*/
$(function () {
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
    function show(){
        $leftBtn.show();
        $rightBtn.show();
    }
    function txtChange(){
        if(clickNum==-1){
            $leftBtn.hide();
            $rightBtn.text("Menu"); 
        }else if (clickNum==0){
            reset();

        }else if(clickNum==1){
            $leftBtn.text("Menu");
            $rightBtn.text("detail"); 

        }else if(clickNum ==2){
            $leftBtn.text("My Projects");
            $rightBtn.hide(); 
        }
    }



    $rightBtn.click(function () {
        show();
        if (clickNum < 2) {
            clickNum++;
            $wrapper.animate({
                left: leftNum * (clickNum+1) + "%"
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
                left: leftNum * (clickNum +1) + "%"
            }, 300);
            console.log(clickNum);
            txtChange();
        }

    });
    reset();

});