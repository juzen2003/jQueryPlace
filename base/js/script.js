$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeTo(3000, 0.2);
  // $(".green-box").fadeTo(2000, 0.5);
  // $(".blue-box").fadeTo(1000, 0.8);
  //
  // $(".red-box").fadeToggle(2000);
  // $(".red-box").fadeToggle(2000);

  // $(".red-box").fadeOut(3000);
  // $(".red-box").fadeTo(3000, 1);

  // $(".blue-box").hide(1000);
  // $(".blue-box").show(1000);
  // $(".blue-box").toggle(2000);

  // $(".blue-box").slideUp(2000);
  // $(".blue-box").slideDown(2000);
  // $("p").hide();
  // $("p").slideDown(2000);
  // $(".blue-box").slideToggle(2000);

  // $(".blue-box").animate({
  //   "margin-left": "+=200px"
  // }, 1000, "linear");
  // $(".blue-box").animate({
  //   "margin-left": "-=200px"
  // }, 1000, "linear");

  // $(".blue-box").animate({
  //   "margin-left": "+=200px",
  //   "opacity": "0",
  //   "width": "50px",
  //   "height": "50px",
  //   "margin-top": "25px"
  // }, 1000);
  // $("p").animate({
  //   "font-size": "20px"
  // }, 1000);

  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut(1000).delay(1000).fadeIn(1000);

  // $(".blue-box").animate({
  //   "margin-left": "+=200px",
  //   "opacity": "0"
  // }, 1000, function() {
  //   $(".green-box").animate({
  //     "margin-left": "+=200px",
  //     "opacity": "0"
  //   }, 1000, function() {
  //     $(".red-box").animate({
  //       "margin-left": "+=200px",
  //       "opacity": "0"
  //     }, 1000);
  //   });
  // });

  // $(".lightbox").fadeIn(1000);

  // $("p").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $(".red-box").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("input[type='text']").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("h2, p, input").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li:first").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li:odd").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("input:text").css("background-color", "rgb(180, 180, 30, 0.8)");

  // $("#list").find("li").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").children("li").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").parents("body").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").parent().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").siblings().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").next().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("#list").prev().css("background-color", "rgb(180, 180, 30, 0.8)");

  // $(":header").next().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("form").children(":password").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $(":password").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("input[type='password']").css("background-color", "rgb(180, 180, 30, 0.8)");

  // $("#list").children("li").filter(":even").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li").filter(function(index){
  //   return index % 3 === 2;
  // }).css("background-color", "rgb(180, 180, 30, 0.8)");

  // $("li").first().css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li").last().css("background-color", "rgb(180, 180, 30, 0.8)");

  // $("li").eq(3).css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgb(180, 180, 30, 0.8)");

  // $("li").not(":first").css("background-color", "rgb(180, 180, 30, 0.8)");
  // $("li").not(function(index){
  //   return index % 3 === 0;
  // }).css("background-color", "rgb(180, 180, 30, 0.8)");

  // $(".red-box").after("<div class='red-box'>Red 2</div>");
  // $(".green-box").after("<div class='green-box'>Another Green</div>");
  // $(".blue-box").after("<div class='blue-box'>Blue Friend</div>");
  // let colorBoxes = [{"class": "red-box", "color": "Red 2"}, {"class": "green-box", "color": "Green 2"}, {"class": "blue-box", "color": "Blue 2"}];
  // for(let i = 0; i < colorBoxes.length; i++) {
  //   $("." + colorBoxes[i].class).after(`<div class='${colorBoxes[i].class}'>${colorBoxes[i].color}</div>`);
  // }

  // $("ul ul:first").append("<li>I'm gonna be the last sub itme</li>");
  // $("<li>I'm gonna be the last sub itme</li>").appendTo("ul ul:first");

  // $("ul ul:first").prepend("<li>I'm gonna be the first sub itme</li>");
  // $("<li>I'm gonna be the first sub itme</li>").prependTo("ul ul:first");
  // $("ul ul:first").prepend(function() {
  //   let target = "";
  //   for(let i = 0; i < 3; i++) {
  //     target += `<li>I'm gonna be added sub item: ${i}</li>`;
  //   }
  //
  //   return target;
  // });

  // $(".red-box").after("<div class='red-box'>Red 2</div>");
  // $(".green-box").before("<div class='green-box'>Another Green</div>");
  // $(".blue-box").before(function(){
  //   return "<div class='blue-box'>Blue Friend</div>";
  // });
  // $(".blue-box").before($(".red-box"));



});
