window.onload = function(){
	var list = document.getElementById("list");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	function animate(offset){
       var newleft = parseInt(list.style.left) + offset;
       list.style.left = newleft + 'px';
       if (newleft < -4000) {
       	list.style.left = -800 + 'px';
       }
       if (newleft > -800) {
       	list.style.left = -4000 + 'px';
       }
	}
    prev.onclick = function(){
    	animate(800);
    }
    next.onclick = function(){
    	animate(-800);
    }

    var timer;
    function play(){
    	timer = setInterval(function(){
    		next.onclick();
    	},3000)
    }
    play();
    var container = document.getElementById("container");
    function stop(){
    	clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var index = 1;
    function buttonsShow(){
    	for(var i = 0;i<buttons.length;i++){
    		if (buttons[i].className = 'on') {
    			buttons[i].className = '';
    		}
    	}
    	buttons[index-1].className = 'on';
    }
    prev.onclick = function(){
    	index -= 1;
    	if (index < 1) {
    		index = 5;
    	}
    	buttonsShow();
    	animate(800);
    }
    next.onclick = function(){
    	index += 1;
    	if (index>5) {
    		index = 1;
    	}
    	buttonsShow();
    	animate(-800);
    }
    for(var i = 0;i<buttons.length;i++){
        (function(i){
            buttons[i].onclick = function(){
    		console.log(i);
    		var clickIndex = parseInt(this.getAttribute('index'));
    		var offset = 800 * (index - clickIndex);
    		animate(offset);
    		index = clickIndex;
    		buttonsShow();
    	}
        })(i)


    	    
    }
}