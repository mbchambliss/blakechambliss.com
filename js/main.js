//Toggle open and close hamburger menu
$('#menu-icon').click(function(){
	$('.mobile-menu-div').toggle();
	$('#icon-nav').toggle();

	let ham = document.querySelector('#menu-icon');
	if (ham.classList.contains("fa-bars")){
		ham.classList.remove('fa-bars');
	 	ham.classList.add('fa-times');
	} else {
		ham.classList.remove('fa-times');
		ham.classList.add('fa-bars');
	}
})

