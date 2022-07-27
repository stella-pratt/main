var counter = 0;
$(document).bind("mousewheel",function(event){
	if(event.originalEvent.wheelDelta >0){
		counter += 10
		console.log(counter)
		$(".gallery_box_outer").css({"transform":"perspective(1000px) rotateX(-8deg) rotateY("+counter+"deg)"});
	}else{
		counter -= 10
		console.log(counter)
		$(".gallery_box_outer").css({"transform":"perspective(1000px) rotateX(-8deg) rotateY("+counter+"deg)"});
	}
})

document.getElementById("colour").setAttribute("onclick", "location.href =" +
	" '../Subpages/Colour%20Picker/colour.html'");

document.getElementById("weather").setAttribute("onclick", "location.href =" +
	" '../Subpages/Weather/weather.html'");

document.getElementById("enviro").setAttribute("onclick", "location.href =" +
	" '../Subpages/Enviro/index.html'");

document.getElementById("recipe").setAttribute("onclick", "location.href =" +
	" '../Subpages/Recipies/Recipies.html'");

document.getElementById("wallpapers").setAttribute("onclick", "location.href =" +
	" 'https://seb420.github.io/Wallpapers/'");