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
  // ===========================================================================

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
  // ===========================================================================

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

  // $("li").replaceWith("<li>Replaced</li>");
  // $("li").replaceWith(function(){
  //     return "<li>Replaced with function.</li>"
  // });
  // let firstListItem = $("li:first");
  // $("p:first").replaceWith(firstListItem);
  // $("p").replaceWith(firstListItem);

  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");
  // $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");

  // $("li").remove();
  // $("form").children().not($("textarea, input:text, br")).remove();
  // $("form").children().not("textarea, input:text, br").remove();

  // let detachedListItem = $("li").detach();
  // $("#content").append(detachedListItem);

  // $("p:first").empty();
  // $(".red-box, .green-box, .blue-box").empty();

  // let specialLink = $("#special-link");
  // console.log(specialLink.attr("href"));
  // console.log(specialLink.attr("title"));
  // specialLink.attr("href", "https://nba.com");

  // let checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked"));
  // console.log(checkbox.attr("checked"));

  // let textInput = $("input:text");
  // textInput.val("Hello world");
  // console.log(textInput.val());
  // let rangeInput = $("input[type='range']");
  // console.log(rangeInput.val());

  // let galleryImage = $(".gallery").find("img").first();
  // let allImages = ["images/laptop-mobile_small.jpg", "images/laptop-on-table_small.jpg", "images/people-office-group-team_small.jpg"];
  //
  // let i = 0;
  // setInterval(function(){
  //   i = (i + 1) % allImages.length;
  //   galleryImage.fadeOut(1000, function() {
  //     $(this).attr("src", allImages[i]);
  //     $(this).fadeIn(1000);
  //   });
  // }, 4000);
  // ===========================================================================

  // $(".gallery").css("display", "none");  // .hide()
  // let redBox = $(".red-box");
  // console.log(redBox.css("width"));
  // console.log(redBox.width());
  //
  // redBox.css("background-color", "#AA7700");
  // $("p").css("font-size", "18px");
  // redBox.css("width", "+=20px");
  //
  // let properties = $("p").css(["font-size", "line-height", "color"]);
  // console.log(properties);
  // console.log(properties["font-size"]);

  // redBox.css("user-select", function() {
  //   return "none";
  // });
  // redBox.css("user-select", "none");
  // ===========================================================================

  // $("a").addClass("fancy-link"); // class="..."
  // $("p:first").addClass("large emphasize");
  //
  // $("li li").addClass(function(index){
  //   $(this).addClass("item-" + index);
  // });
  //
  // $("div").addClass(function(index, currentClass){
  //   if(currentClass === "dummy") {
  //     return "red-box";
  //   }
  // });
  //
  // $(".red-box").removeClass("red-box").addClass("blue-box");

  // $(".dummy").removeClass("dummy").addClass("green-box");

  // let gallery = $(".gallery");
  // let images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ];
  //
  // gallery.data("availableImages", images);
  // console.log(gallery.data("availableImages"));
  // gallery.data("name", "The Awesome Gallery");
  // console.log(gallery.data());
  // gallery.removeData("name");
  // console.log(gallery.data("name"));
  //
  // let firstP = $("p:first");
  // console.log(firstP.data("mydata"));

  // let firstP = $("p:first");
  // console.log(firstP.text());
  // console.log(firstP.html());
  // console.log($("p").html()); // only show the first one
  //
  // firstP.text("<strong>Hello World!</strong>");
  // firstP.html("<strong>Hello World!</strong>");

  // firstP.html(function(){
  //   return $(this).html() + " This is the append text!";
  // });
  // firstP.html(firstP.html() + "This is appended one");
  // ===========================================================================

  // $("#btn-click").click(function(event) {
  //   console.log(event);
  //   alert("Button was clicked");
  // });
  // $(".red-box").click(function(event) {
  //   $(this).fadeTo(500, 0.5);
  // });
  // $(".red-box").click();

  // $("#btn-hover").hover(function() {
  //   alert("Button was hovered")
  // });
  // $(".green-box").hover(function() {
  //   $(this).text("I was hovered");
  // });

  // let blueBox = $(".blue-box");
  // blueBox.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 0.7);
  // });
  //
  // blueBox.mouseleave(function() {
  //   $(this).stop().fadeTo(500, 1);
  // });

  // hover(handlerIn, handlerOut)
  // blueBox.hover(function() {
  //   $(this).stop().fadeTo(500, 0.7);
  // }, function() {
  //   $(this).stop().fadeTo(500, 1);
  // });

  // .on("click", function() {...})
  // function logEvent() {
  //   console.log("Mouse was clicked or key was pressed.");
  // }
  // $("html").on("click keydown", logEvent);
  //
  // let i = 0;
  // let allImages = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"];
  //
  // let galleryImage = $(".gallery").find("img");
  //
  // function switchToNextImage() {
  //   i = (i + 1) % allImages.length;
  //   galleryImage.fadeOut(function() {
  //     galleryImage.attr("src", allImages[i]).fadeIn();
  //   });
  // }
  // galleryImage.on("click", switchToNextImage);

  // without event delegation, the newly appended p would not have click handler attached
  // $("p").on("click", function() {
  //   $(this).slideUp();
  // });
  // $("#content").append("<p>This is a dynamically added paragraph.</p>");

  // Delegated Events
  // $("#content").on("click", "p", function() {
  //   $(this).slideUp(); // this here is p tags under $("#content")
  // });
  // $("#content").append("<p>This is a dynamically added paragraph.</p>");

  // $("body").on("mouseenter", "li", function() {
  //   $(this).css("color", "#666"); // this here is li under $("body")
  // });

  // Pass data to event, pass an object to .on and obtain data from event.data
  // function greetUser(userdata) {
  //   let username = userdata.username || "Anonymous";
  //   let domain = userdata.domain || "example.com";
  //   alert(`Hi ${username} from ${domain}`);
  // }
  //
  // $("#btn-click").on("click", {
  //   username: "Dave",
  //   domain: "davechang.com"
  // }, function(event) {
  //   greetUser(event.data);
  // });

  // let galleryItems = $(".gallery").find("img");
  // galleryItems.css("width", "30%").css("opacity", "0.7");
  //
  // galleryItems.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 1);
  // });
  // galleryItems.mouseleave(function() {
  //   $(this).stop().fadeTo(500, 0.7);
  // });
  //
  // galleryItems.click(function() {
  //   let source = $(this).attr("src");
  //   let image = $("<img>").attr("src", source).css("width", "100%");
  //   $(".lightbox").empty().append(image).fadeIn(2000);
  // });
  //
  // $(".lightbox").on("click", function() {
  //   $(this).stop().fadeOut(2000);
  // });

  // use event.which to know the key being pressed
  // let ARROW_RIGHT = 39;
  // let ARROW_LEFT = 37;
  // $("html").on("keydown", function(event) {
  //   console.log(event.which);
  //   if(event.which === ARROW_RIGHT) {
  //     $(".blue-box").stop().animate({
  //       "margin-left": "+=10px"
  //     }, 50);
  //   } else if(event.which === ARROW_LEFT) {
  //     $(".blue-box").stop().animate({
  //       "margin-left": "-=10px"
  //     }, 50);
  //   }
  // });
  // ===========================================================================

  // $(".gallery").hide();
  // let inputFields = $("input:text, textarea, input:password");
  // inputFields.focus(function() {
  //   $(this).css("box-shadow", "0 0 4px #666");
  // });
  // inputFields.blur(function() {
  //   $(this).css("box-shadow", "none");
  // });
  //
  // $("#name").blur(function() {
  //   if($(this).val().length < 3) {
  //     $(this).css("box-shadow", "0 0 4px #811");
  //   } else {
  //     $(this).css("box-shadow", "0 0 4px #181");
  //   }
  // });

  // $("#checkbox").change(function() {
  //   let isChecked = $(this).is(":checked"); // this is the same as $(this).prop("checked");
  //   if(isChecked) {
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
  //   } else {
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
  //   }
  // });
  //
  // $("#selection").change(function() {
  //   let selectedOption = $(this).find(":selected"); // this would find the only selected option in the select tag
  //   alert(selectedOption.text());
  // });

  // $("#form").submit(function(event) {
  //   let textarea = $("#message");
  //   if(textarea.val().trim() === "") {
  //     textarea.css("box-shadow", "0 0 4px #811");
  //     event.preventDefault(); // this is to prevent default handlers (like page reload or submit info to database) when validation failed
  //   } else {
  //     // form will be submitted
  //   }
  // });


  // $(".red-box, .blue-box, .green-box, .dummy").hide();
  //
  // let form = $("#form");
  // enableFastFeedback(form);
  //
  // form.submit(function(event) {
  //   let name = $("#name").val();
  //   let password = $("#password").val();
  //   let message = $("#message").val();
  //   let checkbox = $("#checkbox").is(":checked");
  //
  //   validateNameField(name, event);
  //   validatePasswordField(password, event);
  //   validateTextarea(message, event);
  //   validateCheckbox(checkbox, event);
  //
  // });
  //
  // function enableFastFeedback(formElement) {
  //   let nameInput = formElement.find("#name");
  //   let passwordInput = formElement.find("#password");
  //   let messageInput = formElement.find("#message");
  //   let checkboxInput = formElement.find("#checkbox");
  //
  //   fastFeedback(nameInput, validateNameField, isValidName);
  //   fastFeedback(passwordInput, validatePasswordField, isValidPassword);
  //   fastFeedback(messageInput, validateTextarea, isValidMessage);
  //   checkboxFastFeedback(checkboxInput);
  // }
  //
  // function fastFeedback(input, validField, validCheck) {
  //   input.blur(function(event) {
  //     let inputVal = $(this).val();
  //     validField(inputVal, event);
  //
  //     if(!validCheck(inputVal)) {
  //       $(this).css({
  //         "box-shadow": "0 0 4px #811",
  //         "border": "1px solid #600"
  //       });
  //     } else {
  //       $(this).css({
  //         "box-shadow": "0 0 4px #181",
  //         "border": "1px solid #060"
  //       });
  //     }
  //   });
  // }
  //
  // function checkboxFastFeedback(input) {
  //   input.change(function(event) {
  //     let isChecked = $(this).is(":checked");
  //     validateCheckbox(isChecked, event);
  //
  //     if(!isChecked) {
  //       $(this).add("label[for='cb']").css({
  //         "box-shadow": "0 0 4px #811",
  //         "border": "1px solid #600"
  //       });
  //     } else {
  //       $(this).add("label[for='cb']").css({
  //         "box-shadow": "0 0 4px #181",
  //         "border": "1px solid #060"
  //       });
  //     }
  //   });
  // }
  //
  // function validateNameField(name, event) {
  //   if(!isValidName(name)) {
  //     $("#name-feedback").text("Please enter at least two characters for name");
  //     event.preventDefault();
  //   } else {
  //     $("#name-feedback").empty();
  //   }
  // }
  //
  // function isValidName(name) {
  //   return name.length >= 2;
  // }
  //
  // function validatePasswordField(password, event) {
  //   if(!isValidPassword(password)) {
  //     $("#password-feedback").text("Password should at least have 6 characters and contain a number");
  //     event.preventDefault();
  //   } else {
  //     $("#password-feedback").empty();
  //   }
  // }
  //
  // function isValidPassword(password) {
  //   return password.length >= 6 && /.*[0-9].*/.test(password);
  // }
  //
  // function validateTextarea(message, event) {
  //   if(!isValidMessage(message)) {
  //     $("#message-feedback").text("Please enter some messages in textarea");
  //     event.preventDefault();
  //   } else {
  //     $("#message-feedback").empty();
  //   }
  // }
  //
  // function isValidMessage(message) {
  //   return message.trim() !== "";
  // }
  //
  // function validateCheckbox(checkbox, event) {
  //   if(!checkbox) {
  //     $("#checkbox-feedback").text("Please check the checkbox");
  //     event.preventDefault();
  //   } else {
  //     $("#checkbox-feedback").empty();
  //   }
  // }
  // ===========================================================================

  // $.load(), since we are loading local file, make sure do these:
  // at terminal: python -m SimpleHTTPServer
  // at browser: http://0.0.0.0:8000`
  // $("#code").load("js/scripts.js");
  // $("#code").load("js/script.js", function(response, status) {
  //   if(status === "error") {
  //     alert("Could not find the file");
  //   }
  //
  //   console.log(response);
  // });

  // // JSON, $.getJSON()
  // let flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; // need to add "?jsoncallback=?" to have a JSON-P request
  //
  // $.getJSON(flickrApiUrl, {
  //     tags: "sf",
  //     tagmode: "any",
  //     format: "json"
  // }).done(function(data) {
  //   // sucess
  //   // console.log(data);
  //   $.each(data.items, function(index, item) {
  //     // console.log(item);
  //     $("#flickr").append(`<img src="${item.media.m}" alt="">`);
  //     if(index === 9) {
  //       return false;
  //     }
  //   });
  // }).fail(function() {
  //   // failure
  //   alert("Ajax call failed.");
  // });

  // Use starwar api
  let starWarapiUrl = "https://swapi.co/api/";

  $.getJSON(starWarapiUrl + "people").done(function(data) {
    // console.log(data);
    $.each(data.results, function(index, character) {
      let name = character.name;
      let detailedUrl = character.url;
      let link = $("<a>").attr("href", "#").attr("id", name).append($("<strong>").text(name));
      // $("#starwar").append(`<p>StarWar Character no. ${index+1} is ${name}</p>`);
      let par = $("<p>").html(`StarWar Character no. ${index+1} is `).append(link);
      par.appendTo("#starwar");

      link.click(function(event) {
        $.getJSON(detailedUrl).done(function(details) {
          // console.log(details);
          let detailName = details.name;
          let height = details.height;
          let mass = details.mass;
          let gender = details.gender;
          let birthYear = details.birth_year;
          let detailDiv = $("#starwar-details");
          detailDiv.empty();
          detailDiv.append(`<h2>${detailName}</h2>`);
          detailDiv.append(`<p>Height: ${height}</p>`);
          detailDiv.append(`<p>Mass: ${mass}</p>`);
          detailDiv.append(`<p>Gender: ${gender}</p>`);
          detailDiv.append(`<p>Birth Year: ${birthYear}</p>`);
          detailDiv.append("<br>");
        });
        event.preventDefault();
      });

    });
  }).fail(function() {
    console.log("Request to StarWar API failed.");
  }).always(function() {
    console.log("StarWar is awesome!");
  });
});
