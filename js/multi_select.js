/* 멀티셀렉트 메뉴 누르면 화면변경 */
$(function(){
    var index = 0;
    var menu_img = $(".ms-menu");
    var menu_box = $(".ms-middle-box .ms-lower-box");

    menu_img.no(".ms-menu-img").hide();
    menu_img.css({backgroundColor:""});
    
});

/* 멀테셀렉트 도서 부분 화면전환 */
$(function(){
    var index = 1;
    var middle_box = $(".middle-box-book");
    var middle_num = $(".middle-box-book-num");


    var slide = function(){
        middle_box.hide();
        middle_box.eq(index).show();
        middle_num.text((index+1)+"/5");
        index++;
        if(index >= 5){index = 0;}
    }

    var setBookSlide = setInterval(slide,1111);
});