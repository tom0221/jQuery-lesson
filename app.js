// $(document).ready(function () {
// 	$('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
// 	$('.box1').css({
// 		'background-color': '#0000FF',
// 		'height': '100px'
// 	});
// });

$(function(){
	$('.box1').mouseover(function(){
		$('.box1').css({'background-color': '#0000FF'});
	});
	$('.box1').mouseout(function(){
		$('.box1').css({'background-color': '#FF0000'});
	});
});