var makeFlipDancer = function(top,left,time){
	makeDancer.apply(this, arguments);

	this.$node = $('<img src="src/images/flip.gif"  class="dancer noborder spin">');
	this.setPosition(top, left);
  this.step();
  this.$node.css({"-webkit-animation": "spin " + time/1000 + "s linear infinite",
  "-moz-animation": "spin " + time/1000 + "s linear infinite",
  "animation": "spin " + time/1000 + "s linear infinite" })
}

makeFlipDancer.prototype = Object.create(makeDancer.prototype);
makeFlipDancer.prototype.constructor = makeFlipDancer;

makeFlipDancer.prototype.step = function(){
  //   this.$node.rotate({
  //   angle:0,
  //   animateTo:360
  // }, this.time);

  //console.log(this.$node)
  //makeDancer.prototype.step.call(this);

  //this.$node.toggleClass("rotate", this.time);
 //this.$node.animate({opacity: 0.25}, 1000);
};


   