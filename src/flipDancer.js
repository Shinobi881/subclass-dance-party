var FlipDancer = function(top,left,time){
	Dancer.apply(this, arguments);

  this.time = time;

	this.$node = $('<img src="src/images/flip.gif"  class="dancer noborder spin">');
	this.setPosition(top, left);
  this.step();
}

FlipDancer.prototype = Object.create(Dancer.prototype);
FlipDancer.prototype.constructor = FlipDancer;

FlipDancer.prototype.step = function(){  
  this.$node.css({"-webkit-animation": "spin " + this.time/1000 + "s linear infinite",
  "-moz-animation": "spin " + this.time/1000 + "s linear infinite",
  "animation": "spin " + this.time/1000 + "s linear infinite" })
} ;  