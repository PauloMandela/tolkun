
var div1 = $("<div></div>");

$(div1).prependTo("body").attr({"class" : "bubbles"});

var $bubbles = $('.bubbles');
function bubbles() {
 
  var min_bubble_count = 1, 
      max_bubble_count = 20, 
      min_bubble_size = 5, 
      max_bubble_size = 30,
      min_speed = 1,
      max_speed = 20; //more is less
  
  var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
  
  for (var i = 0; i < bubbleCount; i++) {
      $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div></div>').append('<div class="bubble-container"><div class="bubble2"></div></div></div>');
    }
  $bubbles.find('.bubble-container').each(function(){
  var pos_rand = Math.floor(Math.random() * 99);
  var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));
    var delay_rand = Math.floor(Math.random() * 17);
    var speed_rand = min_speed + Math.floor(Math.random() * (max_speed + 1));
    
    var $this = $(this);

    $this.css({
      'left' : pos_rand + '%',
      '-webkit-animation-duration' : speed_rand + 's',
      '-moz-animation-duration' : speed_rand + 's',
      '-ms-animation-duration' : speed_rand + 's',
      'animation-duration' : speed_rand + 's',
      '-webkit-animation-delay' : delay_rand + 's',
      '-moz-animation-delay' : delay_rand + 's',
      '-ms-animation-delay' : delay_rand + 's',
      'animation-delay' : delay_rand + 's'
    });
    $this.children('.bubble, .bubble2').css({
      'width' : size_rand + 'px',
      'height' : size_rand + 'px'
    });
  });
}
bubbles();