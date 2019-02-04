var labels = ["Smileys and People", "Animals and Nature", "Food and Drink", "Activity and Sports", "Travel and Places", "Objects", "Symbols", "Flags"];
var pos = [];
var timer = 30;
var moving = false;
var timerDown = false;
var fullTimer = 30;

$(document).ready(function() {
  var size = 46;
  
  var x = 0;
  var top = 5 * size;
  var y = top;
  
  var emojies = ["Smileys and People"].concat(smileysAndPeople, ["Animals and Nature"], animalsAndNature, ["Food and Drink"], foodAndDrink, ["Activity and Sports"], activityAndSports, ["Travel and Places"], travelAndPlaces, ["Objects"], objects, ["Symbols"], symbols, ["Flags"], flags);
  
  emojies.forEach(function(e) {
    var n = 0;
    if(labels.indexOf(e) != -1) {
      n++;
      
      if(y != top) {
        x+= (size*1.5);
        y = top;
      } else {
        x+=(size * 0.5);
      }
    
      pos.push(x - (size * 0.5));
      return;
    }
    var i = $("<i/>");
    i.html(e);
    i.css({left: x - (size / 4) + "px", bottom: y - size + "px"});
    $("#picker").append(i);
    y-=size;
    
    if(y <= 0) {
      y = top;
      x+=size;
    }
  });
  
  setInterval(updateLabel, 1);
  
  setInterval(updateTimer, 1000);
 
  $("#picker i").click(addToDisplay);
 
  $("#timer").click(setTimer);
  
  $("#reset").click(function() {
    timerDown = false;
    timer = fullTimer;
    $("#text").html("");
  });
  
  $(document).keydown(keydown);
  
  $(".category").click(function() {
    var id = $(this).attr('id');
    id = id.replace("_", " ").replace("_", " ");
    var index = labels.indexOf(id);
    var scroll = pos[index];
    $("#picker").animate( {scrollLeft: scroll}, 1000);
    if(!moving) {
      moving = true;
      $(".marker").animate({
          left: $(this).offset().left - 4
      }, 1000, function() {
        moving = false;
      });
    }
  })
});

function updateLabel() {
  var label = $("#label");
  var scroll = $("#picker").scrollLeft();
  
  var l;
  for(var i = 0 ; i < labels.length; i++) {
    if((scroll >= pos[i] && scroll <= pos[i +1]) || (scroll >= pos[i] && i == labels.length - 1)) {
      label.html(labels[i]);
      l = labels[i];
    }
  }
  l = l.replace(" ", "_").replace(" ", "_");
  if(!moving) {
    var marker = $(".marker").offset().left;
    var left = $("#" + l).offset().left - 4;
    if(marker != left) {
      moving = true;
      $(".marker").animate({
        left: left
      }, 500, function() {
        moving = false;
      });
    }
  }
}

function updateTimer() {
  if(timer > 0 && timerDown) timer--;
  $("#timer").html(timer == -1 ? "unset": timer);
}

function addToDisplay() {
  if(timer === 0) return;
  var i = $(this).clone();
  $("#text").append(i);
  timerDown = true;
}

function keydown(e) {
  if(timer==0)return;
  if(e.keyCode == 32) {
    $("#text").append(("<i>&nbsp;</i>"));
  }
  if(e.keyCode == 8) {
    var html = $("#text").html();
    html = html.substring(0, html.lastIndexOf("<i"));
    $("#text").html(html);
  }
}

function setTimer() {
  fullTimer = prompt("timer");
  timer = fullTimer;
  timerDown = false;
  $("#timer").html(timer == -1 ? "unset": timer);
}