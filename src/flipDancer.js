var makeFlipDancer = function(top,left){
	makeDancer.apply(this, arguments);

	this.$node = $('<img src="src/images/flip.gif" id="backFlip" class="dancer noborder">');
	this.setPosition(top, left);
}

makeFlipDancer.prototype = Object.create(makeDancer.prototype);
makeFlipDancer.prototype.constructor = makeFlipDancer;

makeFlipDancer.prototype.step = function(){};


   