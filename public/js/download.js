$( document ).ready(function() {


	var checkEmail = function() {
		var email = $('#inputEmail').val();
		if(!email.includes('@')) {
			$('#check').fadeIn();
		} else {
		console.log(email);
			$.ajax({type: "POST",
				data: {
					'email': email
				}, url: "/storeemail",
					success:function(response){
						if (response.success) {
							saveAs("../downloads/VRXRTG.pdf", "VINCIVR_XRTrainingGuide.pdf");
							$('#inputEmail').fadeOut();
							$('#thankyou').fadeIn();
						}
					}
			})
		}
	}


    $("#download").click(function(){
    	checkEmail();
    })
});