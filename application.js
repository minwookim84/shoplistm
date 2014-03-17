$(document).ready(function(){
	
	//add item
	// Question: Delcaring variable here doesn't work...why?
	/* 
	var listitem = $('<li class="shop-items"><div class="icon check"></div><span>'+$("input").val()+'</span><div class="icon removeIcon"></div></li>');
	*/
	$('input').click(function(){
		$('.alert').slideUp('fast');
	});

	$(document).on('click','#add',function(add){
		if ($('input').val().length===0){
			$('.alert').slideDown();
			$('input').focus();
		} else {
			add.preventDefault();
		var listitem = $('<li class="shop-items"><div class="icon check"></div><span>'+$("input").val()+'</span><div class="icon removeIcon"></div></li>');
		$('.shopping-list').find('ul').append(listitem);
		$('input').val("");
		}
	});

	$('input').keydown(function(key){
		switch(parseInt(key.which,10)){
			case 13:
				$('#add').click();
		}
	});

	//remove item
	$(document).on('click','.removeIcon',function(del){
		del.preventDefault();
		$(this).closest('li').fadeOut(200, function(){
			$(this).closest('li').remove();
		});
	});

	// Question: I'd like to figure out why using $('.shop-items') instead of $(document) does not work. 
	/*
	$('.shop-items').on('click','.removeIcon',function(del){
		del.preventDefault();
		$(this).closest('li').remove();
	}); 
	*/

	//cross or uncross item
	$(document).on('click','.check',function(check){
		check.preventDefault();
		$(this).closest('li').find('span').toggleClass('checked-item');
	});

});