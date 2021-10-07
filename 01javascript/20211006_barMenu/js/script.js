function nowMenu(menu){ //menu ="main" 메인이 메뉴로/ 메뉴는 변수 menu="main"일때 menu="0"일때
    if(menu == "main"){
        $(".bar").css("opacity",0)
        console.log("메인연결됨");
    }else{ //메인이아니면
        $(".menu li").eq(menu).addClass("active")
                           //document.querySelectorAll(".menu li")[menu].classList.add("acitve")
        $(".bar").css("left",200*menu)
        console.log("서브페이지");
   }


// $(".menu li").hover(function(){},function(){} ) 호버(마우스엔터 마우스리브)

$(".menu li").hover(function(){
    let menuLi =$(this).index( );
$(this).css("background-color","pink");
    if(menu == "main"){
 $(".bar").css("opacity",1)    
    }
    $(".bar").css("left",200*menuLi)

    },function(){
        $(this).css("background-color","initial");
        if(menu == "main"){
        $(".bar").css("opacity",0)
    }
        
    $(".bar").css("left",200*menu)
    });


}
