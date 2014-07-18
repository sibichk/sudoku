$(document).ready(function(){
	$('.home').click(function(){           //event for 'start' button
		$(this).css("display","none")
		$('table').css("display","block");
		//timer();
	});

	$('td').not('.filled').click(function(){   
		var current = $(this);                 //get the instance of the cell clicked and assign it to a variable
		unique(current);
		
	});



	function unique(current){                                            //function to check the values in the same row, column and region as the one clicked
		var arr=[];                                                      // so that a number is not repeated and is unique
		var horizontal_index = current.closest('tr').index()+1
		$('table tr:nth-child('+horizontal_index+') td').each(function(){ // getting elements present in the row and pushing them to an array
			arr.push($(this).text().trim())
		})
		//current.siblings().each(function() { arr.push($(this).text().trim()) });
		
		var vertical_index = current.index()+1;

		$('table tr td:nth-child('+vertical_index+')').each(function(){      // getting elements present in the column 
			var a = $(this).text().trim();
			var found = jQuery.inArray(a, arr);                              //combine the two arrays as one array and remove blank spaces
			if(found == -1){
				arr.push($(this).text().trim())
			} 
			
		}) 
		arr = jQuery.grep(arr, function(n, i){                             //remove null elements in the final array
		  return (n !== "");
		});
		console.log(horizontal_index, vertical_index);
		if (horizontal_index <=3){
			if(vertical_index <=3){
				for(i=1;i<4;i++){
				 	console.log($('table tr:nth-child('+ i +') td').nextUntil().eq(3).text());

				}
			}
		}
		//console.log($('table tr td:nth-child('+vertical_index+')').text());
		console.log(arr)
	}

	
});
