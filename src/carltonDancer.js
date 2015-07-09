var makeCarltonDancer = function(top, left, timeBetweenSteps){
	makeDancer.apply(this, arguments);

	this.$node = $('<img src="https://33.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif" class="dancer noborder">');
	this.setPosition(top, left);
};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);
makeCarltonDancer.prototype.constructor = makeCarltonDancer;