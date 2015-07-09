var makeFlipDancer = function(top,left,time){
	makeDancer.apply(this, arguments);

  this.time = time;

	this.$node = $('<img src="src/images/flip.gif"  class="dancer noborder spin">');
	this.setPosition(top, left);
  this.step();
}

makeFlipDancer.prototype = Object.create(makeDancer.prototype);
makeFlipDancer.prototype.constructor = makeFlipDancer;

makeFlipDancer.prototype.step = function(){  
  this.$node.css({"-webkit-animation": "spin " + this.time/1000 + "s linear infinite",
  "-moz-animation": "spin " + this.time/1000 + "s linear infinite",
  "animation": "spin " + this.time/1000 + "s linear infinite" })
} ;  