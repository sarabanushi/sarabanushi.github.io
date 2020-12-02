function toggleMenu() {
	var x = document.getElementById("top-navigation");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

$(document).ready(function(){ 
	$(".quick-links	li.has-child a").on('click', function(){
		$(this).siblings(".sub-menu").slideToggle();
	});
});