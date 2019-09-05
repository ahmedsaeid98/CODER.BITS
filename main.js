


let navItem =$(".top-nav-item");

navItem.click(function(){

  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let temp=$($(this).attr("href")).offset().top;
  console.log(temp);
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









