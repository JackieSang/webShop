function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj)[attr]
	}
}
function startMove(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var name in json){
			if(name == 'opacity'){
				var iTarget = json[name]*100;
				var cur = parseFloat(getStyle(obj,name))*100
			}
			var speed = (iTarget-cur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(name == 'opacity'){
				obj.style[name] = (cur + speed)/100
			}else if(name == 'zIndex'){
				obj.style[name] = cur + speed;
			}else{
				obj.style[name] = cur + speed + 'px';
			}
			if(iTarget != cur){
				bStop = false;
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fnEnd){
				fnEnd();
			}
		}
	},30)
}
