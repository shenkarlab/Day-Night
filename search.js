

$( document ).ready(function() {


    var myFullSearchArr = [];
    var myMiniSearchArr = [];
    var index = 0;
    var search = document.getElementById('search');
    var topBar = document.getElementById('topBar');


    var topHeight = ($(window).height()*42/100);
    var topMargin = topHeight*33.5/100;
    var topPosition = topMargin - topHeight + "px";

            $('#search').hide();


    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var range = document.getElementById('range');

    range.value = h+"."+m;


    $.getJSON("jsonTest.json", function(json) {


        for(var i =0; i< json.length ; i++){

            myFullSearchArr[i] = json[i];
        }



    });



    topBar.style.width =  $(window).width() + "px";
    topBar.style.height =  ($(window).height()*42/100) + "px";

    topBar.style.top =  topPosition;





$('#topBar').toggle(


    function(){

        $('#topBar').animate({top: "0px"});
    },
    function() {

        $('#topBar').animate({top: topPosition});
    }
);



$('#searchBtn').toggle(


    function(){

        $('#search').animate({right: "47px"});
            $('#search').show();
    },
    function() {

        $('#search').animate({right: "-180px"});
            $('#search').hide('slow');
    }
);









    search.onkeyup=function(e){  // Brutal Algorithm, used it since i have a small DB, and now since i made it on my own i can scale it for big data simply
    
    index = 0;
    myMiniSearchArr = [];


    
        for(var i =0; i< myFullSearchArr.length ; i++){

            var j=0



            for(j=0; j< myFullSearchArr[i].properties.title.length; j++){

                if(myFullSearchArr[i].properties.title[j] == " "){

                    j++;
                    break;
                }
            }






            if(this.value.length == 1){ // 1 letter inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] || myFullSearchArr[i].properties.title[j] == this.value[0]){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }


            }



            if(this.value.length == 2){ // 2 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1]){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }




            if(this.value.length == 3){ // 3 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] && myFullSearchArr[i].properties.title[2] == this.value[2] || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1] && myFullSearchArr[i].properties.title[j+2] == this.value[2] ){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }




            if(this.value.length == 4){ // 4 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] && myFullSearchArr[i].properties.title[2] == this.value[2] && myFullSearchArr[i].properties.title[3] == this.value[3] || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1] && myFullSearchArr[i].properties.title[j+2] == this.value[2]  && myFullSearchArr[i].properties.title[j+3] == this.value[3] ){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }



            if(this.value.length == 5){ // 5 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] && myFullSearchArr[i].properties.title[2] == this.value[2] && myFullSearchArr[i].properties.title[3] == this.value[3] && myFullSearchArr[i].properties.title[4] == this.value[4]  || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1] && myFullSearchArr[i].properties.title[j+2] == this.value[2] && myFullSearchArr[i].properties.title[j+3] == this.value[3] && myFullSearchArr[i].properties.title[j+4] == this.value[4] ){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }




            if(this.value.length == 6){ // 6 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] && myFullSearchArr[i].properties.title[2] == this.value[2] && myFullSearchArr[i].properties.title[3] == this.value[3] && myFullSearchArr[i].properties.title[4] == this.value[4] && myFullSearchArr[i].properties.title[5] == this.value[5] || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1] && myFullSearchArr[i].properties.title[j+2] == this.value[2] && myFullSearchArr[i].properties.title[j+3] == this.value[3] && myFullSearchArr[i].properties.title[j+4] == this.value[4] && myFullSearchArr[i].properties.title[j+5] == this.value[5]){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }




            if(this.value.length == 7){ // 7 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] && myFullSearchArr[i].properties.title[2] == this.value[2] && myFullSearchArr[i].properties.title[3] == this.value[3] && myFullSearchArr[i].properties.title[4] == this.value[4] && myFullSearchArr[i].properties.title[5] == this.value[5] && myFullSearchArr[i].properties.title[6] == this.value[6]  || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1] && myFullSearchArr[i].properties.title[j+2] == this.value[2] && myFullSearchArr[i].properties.title[j+3] == this.value[3] && myFullSearchArr[i].properties.title[j+4] == this.value[4] && myFullSearchArr[i].properties.title[j+5] == this.value[5] && myFullSearchArr[i].properties.title[j+6] == this.value[6]){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }




            if(this.value.length == 8){ // 8 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] && myFullSearchArr[i].properties.title[2] == this.value[2] && myFullSearchArr[i].properties.title[3] == this.value[3] && myFullSearchArr[i].properties.title[4] == this.value[4] && myFullSearchArr[i].properties.title[5] == this.value[5] && myFullSearchArr[i].properties.title[6] == this.value[6] && myFullSearchArr[i].properties.title[7] == this.value[7]  || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1] && myFullSearchArr[i].properties.title[j+2] == this.value[2] && myFullSearchArr[i].properties.title[j+3] == this.value[3] && myFullSearchArr[i].properties.title[j+4] == this.value[4] && myFullSearchArr[i].properties.title[j+5] == this.value[5] && myFullSearchArr[i].properties.title[j+6] == this.value[6] && myFullSearchArr[i].properties.title[j+7] == this.value[7]){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }




            if(this.value.length >= 9){ // 9 letters inserted


                if(myFullSearchArr[i].properties.title[0] == this.value[0] && myFullSearchArr[i].properties.title[1] == this.value[1] && myFullSearchArr[i].properties.title[2] == this.value[2] && myFullSearchArr[i].properties.title[3] == this.value[3] && myFullSearchArr[i].properties.title[4] == this.value[4] && myFullSearchArr[i].properties.title[5] == this.value[5] && myFullSearchArr[i].properties.title[6] == this.value[6] && myFullSearchArr[i].properties.title[7] == this.value[7] && myFullSearchArr[i].properties.title[8] == this.value[8]  || myFullSearchArr[i].properties.title[j] == this.value[0] && myFullSearchArr[i].properties.title[j+1] == this.value[1] && myFullSearchArr[i].properties.title[j+2] == this.value[2] && myFullSearchArr[i].properties.title[j+3] == this.value[3] && myFullSearchArr[i].properties.title[j+4] == this.value[4] && myFullSearchArr[i].properties.title[j+5] == this.value[5] && myFullSearchArr[i].properties.title[j+6] == this.value[6] && myFullSearchArr[i].properties.title[j+7] == this.value[7] && myFullSearchArr[i].properties.title[j+8] == this.value[8]){

                    myMiniSearchArr[index] = myFullSearchArr[i].properties.title;
                    index++;
                }

            }


        }





        if (e.keyCode == 13) {




            for(var i =0; i< myFullSearchArr.length ; i++){


                if(myFullSearchArr[i].properties.title == this.value){





            //         alert(myFullSearchArr[i].geometry.coordinates);

                        var curr;

                        if(range.value < 6){ curr = 5; }
                        else if(range.value < 12 && range.value >= 6 ){ curr=1; }
                        else if(range.value < 16 && range.value >= 12){ curr=2; }
                        else if(range.value < 20 && range.value >= 16){ curr=3; }
                        else if(range.value >= 20){ curr=4; }


                         if(myFullSearchArr[i]['map'+curr] == 1){

                        }else{

                                if(myFullSearchArr[i].map1 == 1){

                                    range.value = 10.001;
                                }
                                else if(myFullSearchArr[i].map2 == 1){

                                    range.value = 14.001;
                                }
                                else if(myFullSearchArr[i].map3 == 1){

                                    range.value = 18.001;
                                }
                                else if(myFullSearchArr[i].map4 == 1){

                                    range.value = 22.001;
                                }
                                else if(myFullSearchArr[i].map5 == 1){

                                    range.value = 3.001;
                                }

                        }
                        map.setView([myFullSearchArr[i].geometry.coordinates[1],myFullSearchArr[i].geometry.coordinates[0]], 16);




                         setTimeout(function(){
                            

                          dataMap1.eachLayer(function(marker) {

                                if (marker.feature.properties.title === myFullSearchArr[i].properties.title) {

                                   marker.openPopup();
                                }
                            });


                            }, 500);



                        break;
                }


            }







            return true;
        }




        $('#search').autocomplete({ source: myMiniSearchArr });



    };





});