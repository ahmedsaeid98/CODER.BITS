
let navItem =$(".top-nav-item");

navItem.click(function(){

  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let temp=$($(this).attr("href")).offset().top;
  $("body,html").animate({scrollTop: `${temp}`},2000);
})

$("#comment").keyup(function(){

  if($("#comment").val().length <100)
  {
     $("#Characyer").html( 100 - $("#comment").val().length ); 
  }   
  else
  {
      $("#Characyer").html("your available character finished"); 
  }  
})


$(window).scroll(function(){
  navActive();
})


$(window).ready(function(){

  navActive();
  $(".loading").fadeOut(1000);
})


let navActive = function(){

  let horHeight= $(window).scrollTop();

  if(horHeight >= $("#first-section").offset().top)
  {
    $("a[href='#first-section']").addClass("active");
    $("a[href='#first-section']").siblings().removeClass("active");
  }
  for(let i=2;i<=5;i++)
  {
    if(horHeight >= $("#section-"+i+"").offset().top)
    {
      $("a[href='#section-"+i+"']").addClass("active");
      $("a[href='#section-"+i+"']").siblings().removeClass("active");
    }
  }

}
