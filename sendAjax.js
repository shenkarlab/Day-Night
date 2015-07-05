
$( document ).ready(function() {



	var checkLock = document.getElementsByClassName("checkLoc");
	$('#locaBtnSend').hide();
     $('#newLocation').hide();
 


    for(var i=0; i<checkLock.length; i++){

    	checkLock[i].onchange = countFunction;
    }



	function countFunction(){

		var counter=0;


		for(var j=0; j<checkLock.length; j++){

    		if(checkLock[j].value != ""){
    			
    			counter++;
    		}
    	}


		if(counter == 13){

			$('#locaBtnSend').animate({left: "0px"});
			$('#locaBtnSend').show();
		}else{

			$('#locaBtnSend').animate({left: "300px"});
			$('#locaBtnSend').hide('slow');
		}

	}



$('#locaBtn').toggle(


    function(){

        $('#newLocation').animate({right: "47px"});
            $('#newLocation').show();
    },
    function() {

        $('#newLocation').animate({right: "-200px"});
            $('#newLocation').hide('slow');
    }
);





/* I used pure PHP at the end since i need to reload the page anyway so it doesnt matter

	function sendWithAjax(){


		$.ajax({

				type : "POST",
				//url : './updateJSON.php',
				url : './updateJSON.php',
				data : {
					name : checkLock[0].value,
					cat : checkLock[1].value,
					wOp : checkLock[2].value,
					wCl : checkLock[3].value,
					sOp : checkLock[4].value,
					sCl : checkLock[5].value,
					eOp : checkLock[6].value,
					eCl : checkLock[7].value,
					tel : checkLock[8].value,
					add : checkLock[9].value,
					url : checkLock[10].value,
					lat : checkLock[11].value,
					lng : checkLock[12].value
				},
				success : function(data) {

					console.log(data);
					location.reload();
				},
				error : function(req, errortype) {
					console.log("ERROR");		
				}

		});




	}
 */




});