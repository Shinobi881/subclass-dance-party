// class constructor
var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left) 
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};


// pseudoclassical plumbing / boilerplate
makeDancer.prototype = Object.create(makeDancer.prototype);
makeDancer.prototype.constructor = makeDancer;


// class methods
makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.lineUp = function(time){
  this.$node.animate({left:10},time);
}

makeDancer.prototype.shuffle = function(top, left, time){
  this.$node.animate({left: left, top: top,},time);
};