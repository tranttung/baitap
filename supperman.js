document.addEventListener("DOMContentLoaded",function(){
			var arrayColor = ["#FF6600", "#FF0000","#FF3300","#FF9933"]
			var body =document.body;
			setInterval(runStar,26);
			function createStar(){
				var right= Math.floor(Math.random()* 500);
				var top = Math.floor(Math.random()*screen.height);
				var star =document.createElement("div");
				star.classList.add("star");
				body.appendChild(star);
				star.style.background = arrayColor[Math.floor(Math.random()*6)];
				function runStar(){
				if(right >= screen.width)
					star.remove();
				right +=3;
				star.style.right = right +"px";
			}

			}
		

});