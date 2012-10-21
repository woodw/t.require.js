require(['jquery-1.8.2.min','less-1.3.1.min'],function($ww,less){
	$ww = jQuery.noConflict();
	console.log('$ww has been loaded');
	console.log('less file has been loaded');
	$ww('h1').click(function(){
		console.log('h1 elment was clicked');
	});
});