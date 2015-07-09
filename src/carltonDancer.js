var CarltonDancer = function(top, left, timeBetweenSteps){
	Dancer.apply(this, arguments);

	this.$node = $('<img src="https://33.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif" class="dancer noborder">');
	this.setPosition(top, left);
};

CarltonDancer.prototype = Object.create(Dancer.prototype);
CarltonDancer.prototype.constructor = CarltonDancer;