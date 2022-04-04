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