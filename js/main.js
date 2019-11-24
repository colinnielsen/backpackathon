var $arrowwipe = $('.arrow-wipe');
var $arrow = $('.position-arrow');
var $backpack = $('.position-backpack');
var $lightbulb = $('.position-lightbulb');
var $trigger1 = $('#trigger1');
var $introText = $('.position-introText');

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
   .add([
      TweenMax.to($arrowwipe, .8, {marginLeft: '102%', width: 0}),
      TweenMax.to($backpack, .8, {opacity: 1})
   ]);

var tween2 = new TimelineMax()
   .add(TweenMax.to($lightbulb, .4, {opacity: 1,visibility: 'visible'}));
   
var tween3 = new TimelineMax()
   .add([
      TweenMax.to('body', .9, {backgroundColor: 'white'})
   ])
   .add(TweenMax.to('body', .9, {backgroundColor: '#D9632B'}));

var tween4 = new TimelineMax()
   .add([
      TweenMax.to($arrow, 1, {opacity: 0}),
      TweenMax.to($backpack, 1, {opacity: 0}),
      TweenMax.to($lightbulb, 1, {opacity: 0}),
   ]);

var tween5 = new TimelineMax()
   .add([
      TweenMax.to($introText, 1, {opacity: 1}),
   ]);


var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300, tweenChanges: true})
   .setTween(tween)
   .addIndicators()
   .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 300, tweenChanges: true})
   .setTween(tween2)
   .addIndicators()
   .addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 300, tweenChanges: true})
   .setTween(tween3)
   .addIndicators()
   .addTo(controller);

var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 300, tweenChanges: true})
   .setTween(tween4)
   .addIndicators()
   .addTo(controller);

var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 300, tweenChanges: true})
   .setTween(tween5)
   .addIndicators()
   .addTo(controller);

//immediately triggered gsap animations
var t1 = new TimelineMax().from('.position-h2', 1, {opacity: 0})