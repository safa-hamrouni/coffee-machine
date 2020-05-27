var Coffee = function(){
	var coffee ={};

	coffee.start = start;
	coffee.water = water;
	coffee.cups = cups;
	coffee.stop = stop; 
	coffee.capsule = capsule;
	coffee.makeCoffee = makeCoffee;
	coffee.default1 = default1;

return coffee();
}

var start = function() {
	var that = this;
	$("#start").on("click", function(){
	if(!that.water && !that.capsule){
		alert('You need to add water or capsule !')
	}
	setTimeout(function(){
		alert('Your' + that.makeCoffee + 'is ready')
	},2000)
	})
}
var water = function() {
	$("#fill").on("click", function(){
		return true
	})
}
var capsule = function() {
	$(".caps").on('click', function(){
		return true
	})
}
var makeCoffee = function() {
	if (this.capsule === true){
		return $(".caps")[0].innerText
	}
}
var cups = function() {
	$(".cup").on("click", function(){
		this.hide()
		this.append($('.machine'))
		this.show()
	})
}