$(document).ready(function(){
	$( "#get_color" ).click(function( event ) {
    	console.log('submission');
    	 //prevent the default action for that event from happening
    	event.preventDefault();
    	// generate random color? color_me
    	$.post('/color', function(data) {
    		//use jQuery to submit an AJAX post to the form's action
    		$("#color_me").html(data);
    
    });
  });
});