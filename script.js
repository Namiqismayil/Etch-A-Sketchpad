function get_input() {
	$('table').empty()
	var input = prompt('Type an integer between 1 and 128');
    
	if(input >= 1 && input <= 100) {
		return input;
	} else
		alert('Please enter the correct number');
}

function make_grid(value) {
	for (var $table = $("table"), i = 0; i < value; i++) {
        var $tr = $("<tr>");
		for(var j = 0; j < value; j++)
            $tr.append('<td><div class="table_data"></div></td>');
        $table.append($tr);
	}
    
    var size = $table.width() / value; 
    console.log(size);
	$('.table_data').css('width', size + "px");
	$('.table_data').css('height', size + "px");
}

$(document).ready(function(){
	$('#option_4').click(function(){
		$("table").empty();
		var input2 = prompt("Type new number");

		make_grid(input2);
		
	});
});
$(document).ready(function(){
	$('#option_1').click(function(){

		var num = get_input();
		make_grid(num);
		$('.table_data').hover(function(){
			$(this).css('background-color', 'white');
		});
		$("h3").text("This option changes color of grid from default to white");
	});
	
	$('#option_2').click(function(){
		num = get_input();
		make_grid(num);
		$('.table_data').mouseenter(function(){
			$(this).fadeTo(1000, 0.4);
		});
		$('.table_data').mouseleave(function(){
			$(this).fadeTo(400,1);
		});
		$("h3").text("This option changes color of grid from default to lighter version with mouse in and out");
	});
	
	$('#option_3').click(function(){
		num = get_input();
		make_grid(num);
		$('.table_data').mouseenter(function(){
		var currentOpacity = $(this).css('opacity');
			if(currentOpacity > 0){
				$(this).css('opacity', currentOpacity - 0.1);
			}
		});
		$("h3").text("This option changes color of grid from default to lighter version until it gets white");
	});
});