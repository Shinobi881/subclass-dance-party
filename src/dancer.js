// class constructor
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left) 
  this.step();
};


// pseudoclassical plumbing / boilerplate
Dancer.prototype = Object.create(Dancer.prototype);
Dancer.prototype.constructor = Dancer;


// class methods
Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(time){
  this.$node.animate({left:10},time);
}

Dancer.prototype.shuffle = function(top, left, time){
  this.$node.animate({left: left, top: top,},time);
};