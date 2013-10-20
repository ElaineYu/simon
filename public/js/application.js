$(document).ready(function(){
	$( "#get_color" ).click(function( event ) {
    	console.log('submission');
    	 //prevent the default action for that event from happening
    	event.preventDefault();
    	// generate random color? color_me
        $.post('/color', function(response){
            $('li:nth-child(' + response.cell + ')')
                .css('background-color', response.color);
        }, "json");
    });
});