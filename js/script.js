$(document).ready(function(){
	$('.home').click(function(){           //event for 'start' button
		$(this).css("display","none")
		$('table').css("display","block");
		//timer();
	});

	/*$("td").not(".filled").hover(function(){
	  $(this).css("background-color","pink");
	  },function(){
	  $(this).css("background-color","#F1F1F1");
	}); */
	//var butt  = $('td').not('.filled');
	//$('table td').not('.filled').on('click', function(){
	$('td').not('.filled').on('click',function(e){
		current = $(this); 
		//get the instance of the cell clicked and assign it to a variable
		current.empty();
			unique(current);
		
		})



	function unique(current){                                            //function to check the values in the same row, column and region as the one clicked
		var arr=[];                                                      // so that a number is not repeated and is unique
		var horizontal_index = current.closest('tr').index()+1
		$('table tr:nth-child('+horizontal_index+') td').each(function(){ // getting elements present in the row and pushing them to an array
			arr.push($(this).text().trim())
		})
		//current.siblings().each(function() { arr.push($(this).text().trim()) });
		
		var vertical_index = current.index()+1;
		unique_index= "" + horizontal_index + vertical_index;
		$('table tr td:nth-child('+vertical_index+')').each(function(){      // getting elements present in the column 
			var column_ele = $(this).text().trim();
			var match = jQuery.inArray(column_ele, arr);                              //combine the two arrays as one array and remove blank spaces
			if(match == -1){
				arr.push($(this).text().trim());
			} 
			
		}) 
		
		/*-------------first three rows --------------*/
		if (horizontal_index <=3){
			if(vertical_index <=3){
				for(i=1;i<4;i++){
					var block_ele =$('table tr:nth-child('+ i +') td:nth-child(1)').text().trim();
					var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
					if(match == -1){
						arr.push(block_ele.trim());
					}
					var block_ele = $('table tr:nth-child('+ i +') td:nth-child(2)').text().trim();
			 		var match = jQuery.inArray(block_ele, arr);
			 		if(match == -1){
						arr.push(block_ele.trim());
					}	
					var block_ele = $('table tr:nth-child('+ i +') td:nth-child(3)').text().trim();
					var match = jQuery.inArray(block_ele, arr);
					if(match == -1){
						arr.push(block_ele.trim());
					}
				}
			}
			else if(vertical_index >3 && vertical_index <=6){
					for(i=1;i<4;i++){
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(4)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(5)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(6)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
						                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					}
			}
			else if(vertical_index >6){
				for(i=1;i<4;i++){
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(7)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(8)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(9)').text().trim();
					var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}

				}
			}
		}
		/*------------------------middle rows--------------------*/
		else if(horizontal_index >3 && horizontal_index <=6){
				if(vertical_index <=3){
				for(i=4;i<7;i++){
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(1)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(2)').text().trim(); 
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(3)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				}
			}
			else if(vertical_index >3 && vertical_index <=6){
					for(i=4;i<7;i++){
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(4)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(5)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(6)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}

					}
			}
			else if(vertical_index >6){
				for(i=4;i<7;i++){
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(7)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(8)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(9)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}

				}
			}
		}
		/*-------------------------last three rows------------------*/
		else if(horizontal_index >6){
				if(vertical_index <=3){
				for(i=7;i<10;i++){
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(1)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(2)').text().trim(); 
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(3)').text().trim();
					var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}

				}
			}
			else if(vertical_index >3 && vertical_index <=6){
					for(i=7;i<10;i++){
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(4)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(5)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
					 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(6)').text().trim();
					 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}

					}
			}
			else if(vertical_index >6){
				for(i=7;i<10;i++){
				 	var block_ele = $('table tr:nth-child('+ i +') td:nth-child(7)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	$('table tr:nth-child('+ i +') td:nth-child(8)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}
				 	$('table tr:nth-child('+ i +') td:nth-child(9)').text().trim();
				 	var match = jQuery.inArray(block_ele, arr);  
					                          //combine the two arrays as one array and remove blank spaces
						if(match == -1){
							arr.push(block_ele.trim());
						}

				}
			}
		}
		//console.log($('table tr td:nth-child('+vertical_index+')').text());
		arr = jQuery.grep(arr, function(n, i){                           //remove null elements in the final array
		  return (n !== "");
		});
		dropdown(current,arr,unique_index);
	}

	/*------------function to pop dropdown and display selected value --------*/
	function dropdown(current, arr,unique_index){
		var digits = [" ","1","2","3","4","5","6","7","8","9"];
		var rem = $(digits).not(arr).get();
		
		//current.empty();
		current.append("<button class='rst'>reset</button>");
		current.append("<select class='db' id=index"+unique_index+"></select>");
		$('.db').fadeIn('slow');
		$('.rst').on('click',function(event){
			current.empty();
			event.stopPropagation();
		})
		for(i=0;i<rem.length;i++){
			$('<option/>').val(rem[i]).html(rem[i]).appendTo('select#index'+unique_index);
		}
		$('select').on('click',function(event){
			event.stopPropagation();
		})
		$('select').on('change', function() {

			//	if($("select").val().length != 0){
			
    		$('select#index'+unique_index).replaceWith($(this).val());
    		$('.rst, select').remove();
    		//current.bind("click")
    		/*current.on('click',function(){
    			current.empty();
    			unique(current);
    		}); */
		});


	}	
});
