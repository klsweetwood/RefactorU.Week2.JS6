$(document).on('ready', function() {
	//SHOW FORM ON .EDITBUTTON CLICK
	var showForm = function() {
		$('.editForm').css('display','block');
		$(this).css('display','none');
		//NAME
		var savedText = $('.name').html().replace(/<br>/g, '\n');
		$('.nameIn').val(savedText);
		//BIO
		var savedText = $('.bio').html().replace(/<br>/g, '\n');
		$('.bioIn').val(savedText);
		//FAVORITE BOOKS
		var savedText = $('.favBooks').html().replace(/<br>/g, '\n');
		$('.favBooksIn').val(savedText);
		//FAVORITE JAVASCRIPT LIBRARIES
		var savedText = $('.favJS').html().replace(/<br>/g, '\n');
		$('.favJSIn').val(savedText);
	};
	$(document).on('click','.editButton',showForm);

	//HIDE FORM AND SAVE INPUT ON .SUBMITBUTTON CLICK
	var hideForm = function() {
		$('.editForm').css('display','none');
		$('.editButton').css('display','block');

		//SAVE INPUT
		$('.name').text( $('.nameIn').val() );
		$('.bio').text( $('.bioIn').val() );
		$('.favBooks').text( $('.favBooksIn').val() );
		$('.favJS').text( $('.favJSIn').val() );
		return false;
	};
	$(document).on('click','.saveButton',hideForm);

  
});