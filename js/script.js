$(document).ready(function(){
	var filled= '.filled'
	$('.home').click(function(){                 //event for 'start' button
		$(this).css("display","none");
		$('table, #timer, #start, #stop, #clear').css("display","table");
		timer();
	});
	$('td').not(filled).hover(function(){        //'hover' event for user-filled cells 
	  $(this).css("background-color","pink");
	  },function(){
	  $(this).css("background-color","#F1F1F1");
	}); 
	$('td').not(filled).on('click',function(e){     
		$('td select, td .rst').remove();
		current = $(this);                       //get the instance of the cell object clicked and assign it to a variable 'current'
		current.empty();
		unique(current);
		})

	function unique(current){                                            //function to check the values in the same row, column and region as the one clicked
		var arr=[];                                                      // so that a number is not repeated and is unique
		var horizontal_index = current.closest('tr').index()+1;
		$('table tr:nth-child('+horizontal_index+') td').each(function(){          // getting all elements present in the row corresponding to the cell clicked
			                                                                      //and pushing them to an array
			arr.push($(this).text().trim());
		})
		var vertical_index = current.index()+1;
		$('table tr td:nth-child('+vertical_index+')').each(function(){      // getting elements present in the same column 
			var column_ele = $(this).text().trim();
			var match = jQuery.inArray(column_ele, arr);                              //combine the two arrays as one array and remove blank spaces
			if(match == -1){
				arr.push($(this).text().trim());
			} 
			
		}) 
		unique_index= "" + horizontal_index + vertical_index;
		/*-------------first three rows --------------*/
		if (horizontal_index <=3){                                        //condition to get the nine numbers in the region in which the clicked cell is present
			if(vertical_index <=3){
				for(i=1;i<4;i++){
					for(j=1;j<4;j++){
						var block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
						match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
			else if(vertical_index >3 && vertical_index <=6){
				for(i=1;i<4;i++){
					for(j=4;j<7;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
						match = jQuery.inArray(block_ele, arr);  
				                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
			else{
				for(i=1;i<4;i++){
					for(j=7;j<10;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
				 		match = jQuery.inArray(block_ele, arr);  
					    if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
		}
		/*------------------------middle rows--------------------*/
		else if(horizontal_index >3 && horizontal_index <=6){
			if(vertical_index <=3){
				for(i=4;i<7;i++){
					for(j=1;j<4;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
				 		match = jQuery.inArray(block_ele, arr);  
					    if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
			else if(vertical_index >3 && vertical_index <=6){
				for(i=4;i<7;i++){
					for(j=4;j<7;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
					 	match = jQuery.inArray(block_ele, arr);  
					    if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
			else{
				for(i=4;i<7;i++){
					for(j=7;j<10;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
				 		match = jQuery.inArray(block_ele, arr);  
					    if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
		}
		/*-------------------------last three rows------------------*/
		else {
			if(vertical_index <=3){
				for(i=7;i<10;i++){
					for(j=1;j<4;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
				 		match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}	
			else if(vertical_index >3 && vertical_index <=6){
				for(i=7;i<10;i++){
					for(j=4;j<7;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
					 	match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
			else{
				for(i=7;i<10;i++){
					for(j=7;j<10;j++){
						block_ele = $('table tr:nth-child('+ i +') td:nth-child('+ j +')').text().trim();
				 		match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					}
				}
			}
		}
		arr = jQuery.grep(arr, function(n, i){                           //remove null elements in the final array
		  return (n !== "");
		});
		dropdown(current,arr,unique_index);
	}

	/*------------function to pop dropdown and display selected value --------*/
	function dropdown(current, arr, unique_index){
		var full= 0;
		var digits = [" ","1","2","3","4","5","6","7","8","9"];
		var rem = $(digits).not(arr).get();                                            
		current.append("<div class='rst'></div>");
		current.append("<select class='dd' id=index"+unique_index+"></select>");               
		$('.dd, .rst').fadeIn('slow');
		$('.rst').on('click',function(event){                                                 //clears current cell
			$(this).closest('td').empty();
			event.stopPropagation();
		})
		for(i=0;i<rem.length;i++){                                                           // dropdown has numbers not present in the row, column or region
			$('<option/>').val(rem[i]).html(rem[i]).appendTo('select#index'+unique_index);
		}
		$('select').on('click',function(event){
			event.stopPropagation();
		})
		$('select').on('change', function() {                                         //everytime a value is changed a new array is generated reflecting the change
			$('select#index'+unique_index).replaceWith($(this).val());
    		$('.rst, select').remove();
    		if($('table').find('td:empty').length) {
			}
		else{
			alert('eureka! you did it!!');                               //if the entire table is full alert box with a message appears
			stop.onclick();
			}
    	});
    	
	}	


/*-----------------stop watch -----------------*/
var watch = document.getElementById('timer'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {                          //function to add up seconds, minutes, hours
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    watch.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

/* Start button */ 
start.onclick = function(){                        
	$('#start').attr("disabled", true);
	$('#stop').attr("disabled", false);
	$('.overlay').css("display","none")
	timer();
}

/* Stop button */
stop.onclick = function() {
	$('#start').attr("disabled", false);
	$('#stop').attr("disabled", true);
	$('.overlay').css("display","block")
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
	$('td').not(filled).empty();
    watch.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

});


