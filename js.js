


function showUser(){

    range = document.getElementById('range');
    globalVar = "super1";
    globalVar2 = "Sunday";


    var geoJson1 = [];
    var geoJson2 = [];
    var geoJson3 = [];
    var geoJson4 = [];
    var geoJson5 = [];

    var geoJson1Swapper = [];
    var geoJson2Swapper = [];
    var geoJson3Swapper = [];
    var geoJson4Swapper = [];
    var geoJson5Swapper = [];



        $.ajax({
                type : "POST",
                url : './getToday.php',
                data : {

                },
                success : function(data) {

                    globalVar2 = data;
                
                },
                error : function(req, errortype) {
                    console.log("ERROR"); 
                }
        });







	if (window.XMLHttpRequest) {

            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {

            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }


        xmlhttp.onreadystatechange = function(){

        	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        		var temp = JSON.parse(xmlhttp.responseText);



        		var m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0;


        		for (var i = 0; i < temp.length; i++) { // Was horrible to write that sort !
        												// I needed to look for a Deep copy instead of a shallow copy since JS os coping "by reference"        						
        												// while i needed to copy "by value"


                            if( temp[i].properties.icon.iconUrl[1] == "."){ // setting up the specific icon for the map



                    			if(temp[i].map1 == "1"){

                    				geoJson1[m1] =  jQuery.extend(true, {}, temp[i]);
                    				geoJson1[m1].properties.icon.iconUrl = "./img/"+geoJson1[m1].properties.icon.iconUrl[0]+"1.png";
                    				m1++;
                    			}

                    			if(temp[i].map2 == "1"){

                    				geoJson2[m2] = jQuery.extend(true, {}, temp[i]);
                    				geoJson2[m2].properties.icon.iconUrl = "./img/"+ geoJson2[m2].properties.icon.iconUrl[0]+"2.png";
                    				m2++;
                    			}

                    			if(temp[i].map3 == "1"){

                    				geoJson3[m3] = jQuery.extend(true, {}, temp[i]);
                    				geoJson3[m3].properties.icon.iconUrl = "./img/"+geoJson3[m3].properties.icon.iconUrl[0]+"3.png";
                    				m3++;
                    			}

                    			if(temp[i].map4 == "1"){

                    				geoJson4[m4] = jQuery.extend(true, {}, temp[i]);
                    				geoJson4[m4].properties.icon.iconUrl = "./img/"+geoJson4[m4].properties.icon.iconUrl[0]+"4.png";
                    				m4++;
                    			}

                    			if(temp[i].map5 == "1"){

                    				geoJson5[m5] = jQuery.extend(true, {}, temp[i]);
                    				geoJson5[m5].properties.icon.iconUrl = "./img/"+geoJson5[m5].properties.icon.iconUrl[0]+"5.png";
                    				m5++;
                    			}

                            }else{



                                if(temp[i].map1 == "1"){

                                    geoJson1[m1] =  jQuery.extend(true, {}, temp[i]);
                                    geoJson1[m1].properties.icon.iconUrl = "./img/"+geoJson1[m1].properties.icon.iconUrl[0]+geoJson1[m1].properties.icon.iconUrl[1]+"1.png";
                                    m1++;
                                }

                                if(temp[i].map2 == "1"){

                                    geoJson2[m2] = jQuery.extend(true, {}, temp[i]);
                                    geoJson2[m2].properties.icon.iconUrl = "./img/"+geoJson2[m2].properties.icon.iconUrl[0]+geoJson2[m2].properties.icon.iconUrl[1]+"2.png";
                                    m2++;
                                }

                                if(temp[i].map3 == "1"){

                                    geoJson3[m3] = jQuery.extend(true, {}, temp[i]);
                                    geoJson3[m3].properties.icon.iconUrl = "./img/"+geoJson3[m3].properties.icon.iconUrl[0]+geoJson3[m3].properties.icon.iconUrl[1]+"3.png";
                                    m3++;
                                }

                                if(temp[i].map4 == "1"){

                                    geoJson4[m4] = jQuery.extend(true, {}, temp[i]);
                                    geoJson4[m4].properties.icon.iconUrl = "./img/"+geoJson4[m4].properties.icon.iconUrl[0]+geoJson4[m4].properties.icon.iconUrl[1]+"4.png";
                                    m4++;
                                }

                                if(temp[i].map5 == "1"){

                                    geoJson5[m5] = jQuery.extend(true, {}, temp[i]);
                                    geoJson5[m5].properties.icon.iconUrl = "./img/"+ geoJson5[m5].properties.icon.iconUrl[0]+geoJson5[m5].properties.icon.iconUrl[1]+"5.png";
                                    m5++;
                                }


                            }



        		} // LOOP ENDS ##################################33



        	} // ############################################

        }


        xmlhttp.open("GET", "readJSON.php", true);
        xmlhttp.send();





        setTimeout(function(){

        	L.mapbox.accessToken = 'pk.eyJ1Ijoic2hsb21peW9zZWYiLCJhIjoiSi10RlE3NCJ9.baF6BpuYMLqeE-QJbD-ZmA#6/34.025/37.397';



                var southWest = L.latLng(32.15990417752976, 34.864768981933594),
                northEast = L.latLng(32.033400644301324, 34.692420959472656);
    
                bounds = L.latLngBounds(southWest, northEast);//maxBounds: bounds, 
                map = L.mapbox.map('map', null, { zoomControl:false, maxBounds: bounds, maxZoom: 17, minZoom: 14});


        //	 map = L.mapbox.map('map', null, { zoomControl:false, maxZoom: 20, minZoom: 14 });



        	var map1 = L.mapbox.tileLayer('ollyv.191299a5').addTo(map); // morning 

        	var map3 = L.mapbox.tileLayer('shlomiyosef.f21cd5cc').addTo(map); // afternone

        	var map4 = L.mapbox.tileLayer('shlomiyosef.1a36fdbc').addTo(map); //night

        	var map5 = L.mapbox.tileLayer('shlomiyosef.7ba46c50').addTo(map); // early morning/night

        	var map2 = L.mapbox.tileLayer('ollyv.3915bf6e').addTo(map); //none







        	dataMap1 = L.mapbox.featureLayer().addTo(map);





        	dataMap1.on('layeradd', function(e) {

        		var marker = e.layer,
        		feature = marker.feature;
                var popup;

                popup = L.popup(); 


                var popupContent =  '<div class="markerClass ' + globalVar +'" ><a href="'+feature.properties.url+'" target="_blank"><h1 id="hdr">'+feature.properties.title+'</h1></a><div id="cont">' +
                feature.properties.description +
                '</div></div>';


        		marker.bindPopup(popupContent,{
        			minWidth: 420,
        			closeButton: false,
        			className: "frame",
        		});





        		  marker.setIcon(L.icon(feature.properties.icon));

        	});


            map.on('popupopen', function() {  
              $('.markerClass').click(function(e){


                    map.closePopup();
              });
            });






        	function swapper() {




                if(range.value < 6){ //##################################################################### MAP 5

                     var myIndex2 =0;

                    map1.getContainer().style.display = 'none';
                    map2.getContainer().style.display = 'none'; 
                    map3.getContainer().style.display = 'none'; 
                    map4.getContainer().style.display = 'none'; 
                    map5.getContainer().style.display = 'block'; 

                           
                    globalVar = "super2";



                        if(globalVar2 == "Saturday"){ 

                            for(var myIndex=0; myIndex<geoJson5.length; myIndex++){ 

                                    if(geoJson5[myIndex].eopen > geoJson5[myIndex].eclose || geoJson5[myIndex].eclose > range.value || geoJson5[myIndex].eopen == 999){

                                        if(range.value <= 6 && range.value >= 0 && range.value > geoJson5[myIndex].eclose){}    
                                        else{

                                            geoJson5Swapper[myIndex2] = jQuery.extend(true, {},  geoJson5[myIndex] );
                                            myIndex2++;
                                        }

                                    }
                            }


                        }
                        else if(globalVar2 == "Friday"){


                            for(var myIndex=0; myIndex<geoJson5.length; myIndex++){ 

                                    if(geoJson5[myIndex].sopen > geoJson5[myIndex].sclose || geoJson5[myIndex].sclose > range.value || geoJson5[myIndex].sopen == 999){




                                        if(range.value <= 6 && range.value >= 0 && range.value > geoJson5[myIndex].sclose){}    
                                        else{
                                         
                                            geoJson5Swapper[myIndex2] = jQuery.extend(true, {},  geoJson5[myIndex] );
                                            myIndex2++;
                                        }

                                    }
                            }


                        }
                        else{ // middle of the week


                            for(var myIndex=0; myIndex<geoJson5.length; myIndex++){ 

                                    if(geoJson5[myIndex].wopen > geoJson5[myIndex].wclose || geoJson5[myIndex].wclose > range.value || geoJson5[myIndex].wopen == 999){


                                        if(range.value <= 6 && range.value >= 0 && range.value > geoJson5[myIndex].wclose){}    
                                        else{

                                            geoJson5Swapper[myIndex2] = jQuery.extend(true, {},  geoJson5[myIndex] );
                                            myIndex2++;
                                        }


                                 }

                            }

                        }



                    dataMap1.clearLayers();
                    dataMap1.setGeoJSON(geoJson5Swapper);

                }// #################################################################################################### MAP 1
        		else if(range.value < 12 && range.value >= 6 ){

                    var myIndex2 =0;

        			map1.getContainer().style.display = 'block';
        			map2.getContainer().style.display = 'none'; 
        			map3.getContainer().style.display = 'none'; 
        			map4.getContainer().style.display = 'none'; 
        			map5.getContainer().style.display = 'none'; 

                    globalVar = "super1";



                        if(globalVar2 == "Saturday"){

                                for(var myIndex=0; myIndex<geoJson1.length; myIndex++){ 


                                    if(geoJson1[myIndex].eopen > geoJson1[myIndex].eclose || geoJson1[myIndex].eclose > range.value  || geoJson1[myIndex].eopen == 999){

                                        geoJson1Swapper[myIndex2] = jQuery.extend(true, {},  geoJson1[myIndex] );
                                        myIndex2++;
                                    }

                                }

                        }
                        else if(globalVar2 =="Friday"){

                                for(var myIndex=0; myIndex<geoJson1.length; myIndex++){ 


                                    if(geoJson1[myIndex].sopen > geoJson1[myIndex].sclose || geoJson1[myIndex].sclose > range.value  || geoJson1[myIndex].sopen == 999){

                                        geoJson1Swapper[myIndex2] = jQuery.extend(true, {},  geoJson1[myIndex] );
                                        myIndex2++;
                                    }

                                }

                        }
                        else{


                                for(var myIndex=0; myIndex<geoJson1.length; myIndex++){ 


                                    if(geoJson1[myIndex].wopen > geoJson1[myIndex].wclose || geoJson1[myIndex].wclose > range.value  || geoJson1[myIndex].wopen == 999){

                                        geoJson1Swapper[myIndex2] = jQuery.extend(true, {},  geoJson1[myIndex] );
                                        myIndex2++;
                                    }

                                }
                          } 

        			dataMap1.clearLayers();
        			dataMap1.setGeoJSON(geoJson1Swapper);

        		}// ########################################################################################## MAP 2
        		else if(range.value < 16 && range.value >= 12){

                    var myIndex2 =0;

        			map1.getContainer().style.display = 'none';
        			map2.getContainer().style.display = 'block'; 
        			map3.getContainer().style.display = 'none'; 
        			map4.getContainer().style.display = 'none'; 
        			map5.getContainer().style.display = 'none'; 



                    globalVar = "super1";



                        if(globalVar2 == "Saturday"){

                                for(var myIndex=0; myIndex<geoJson2.length; myIndex++){ 


                                    if(geoJson2[myIndex].eopen > geoJson2[myIndex].eclose || geoJson2[myIndex].eopen < range.value && geoJson2[myIndex].eclose > range.value || geoJson2[myIndex].eopen == 999){

                                        
                                        geoJson2Swapper[myIndex2] = jQuery.extend(true, {},  geoJson2[myIndex] );
                                        myIndex2++;
                                    }


                                }

                        }
                        else if(globalVar2 =="Friday"){

                                for(var myIndex=0; myIndex<geoJson2.length; myIndex++){ 


                                    if(geoJson2[myIndex].sopen > geoJson2[myIndex].sclose || geoJson2[myIndex].sopen < range.value && geoJson2[myIndex].sclose > range.value || geoJson2[myIndex].sopen == 999){

                                        
                                        geoJson2Swapper[myIndex2] = jQuery.extend(true, {},  geoJson2[myIndex] );
                                        myIndex2++;
                                    }


                                }

                        }
                        else{

                                for(var myIndex=0; myIndex<geoJson2.length; myIndex++){ 


                                    if(geoJson2[myIndex].wopen > geoJson2[myIndex].wclose || geoJson2[myIndex].wopen < range.value && geoJson2[myIndex].wclose > range.value || geoJson2[myIndex].wopen == 999){

                                        
                                        geoJson2Swapper[myIndex2] = jQuery.extend(true, {},  geoJson2[myIndex] );
                                        myIndex2++;
                                    }


                                }
                        }

        			dataMap1.clearLayers();
        			dataMap1.setGeoJSON(geoJson2Swapper);

        		}//############################################################################################ MAP 3
        		else if(range.value < 20 && range.value >= 16){

                    var myIndex2 =0;

        			map1.getContainer().style.display = 'none';
        			map2.getContainer().style.display = 'none'; 
        			map3.getContainer().style.display = 'block'; 
        			map4.getContainer().style.display = 'none'; 
        			map5.getContainer().style.display = 'none'; 


                    globalVar = "super1";




                        if(globalVar2 == "Saturday"){


                            for(var myIndex=0; myIndex<geoJson3.length; myIndex++){ 


                                if(geoJson3[myIndex].eopen > geoJson3[myIndex].eclose || geoJson3[myIndex].eopen < range.value && geoJson3[myIndex].eclose > range.value || geoJson3[myIndex].eopen == 999){


                                        geoJson3Swapper[myIndex2] = jQuery.extend(true, {},  geoJson3[myIndex] );
                                        myIndex2++;
                                }

                            }

                        }
                        else if(globalVar2 =="Friday"){


                            for(var myIndex=0; myIndex<geoJson3.length; myIndex++){ 


                                if(geoJson3[myIndex].sopen > geoJson3[myIndex].sclose || geoJson3[myIndex].sopen < range.value && geoJson3[myIndex].sclose > range.value || geoJson3[myIndex].sopen == 999){

                                    geoJson3Swapper[myIndex2] = jQuery.extend(true, {},  geoJson3[myIndex] );
                                    myIndex2++;
                                }

                            }

                        }
                        else{


                            for(var myIndex=0; myIndex<geoJson3.length; myIndex++){ 


                                if( geoJson3[myIndex].wopen > geoJson3[myIndex].wclose || geoJson3[myIndex].wopen < range.value && geoJson3[myIndex].wclose > range.value || geoJson3[myIndex].wopen == 999){

                                    geoJson3Swapper[myIndex2] = jQuery.extend(true, {},  geoJson3[myIndex] );
                                    myIndex2++;
                                }

                            }

                        }





        			dataMap1.clearLayers();
        			dataMap1.setGeoJSON(geoJson3Swapper);

        		}// ######################################################################################################### MAP 4
        		else if(range.value >= 20){

                    var myIndex2 =0;

        			map1.getContainer().style.display = 'none';
        			map2.getContainer().style.display = 'none'; 
        			map3.getContainer().style.display = 'none'; 
        			map4.getContainer().style.display = 'block'; 
        			map5.getContainer().style.display = 'none'; 



                    globalVar = "super2";



/*
                        if(globalVar2 == "Saturday"){


                        }
                        else if(globalVar2 =="Friday"){


                        }
                        else{

*/





                        if(globalVar2 == "Saturday"){


                            for(var myIndex=0; myIndex<geoJson4.length; myIndex++){ 


                                if(geoJson4[myIndex].eopen < range.value && geoJson4[myIndex].eclose > range.value ||  geoJson4[myIndex].eopen > geoJson4[myIndex].eclose ||  geoJson4[myIndex].eopen == 999){

                                    geoJson4Swapper[myIndex2] = jQuery.extend(true, {},  geoJson4[myIndex] );
                                    myIndex2++;
                                }

                            }

                        }
                        else if(globalVar2 =="Friday"){


                            for(var myIndex=0; myIndex<geoJson4.length; myIndex++){ 


                                if(geoJson4[myIndex].sopen < range.value && geoJson4[myIndex].sclose > range.value || geoJson4[myIndex].sopen > geoJson4[myIndex].sclose ||  geoJson4[myIndex].sopen == 999){

                                    geoJson4Swapper[myIndex2] = jQuery.extend(true, {},  geoJson4[myIndex] );
                                    myIndex2++;
                                }

                            }

                        }
                        else{


                            for(var myIndex=0; myIndex<geoJson4.length; myIndex++){ 


                                if(geoJson4[myIndex].wopen < range.value && geoJson4[myIndex].wclose > range.value || geoJson4[myIndex].wopen > geoJson4[myIndex].wclose || geoJson4[myIndex].wopen == 999){

                                    geoJson4Swapper[myIndex2] = jQuery.extend(true, {},  geoJson4[myIndex] );
                                    myIndex2++;
                                }

                            }

                        }




        			dataMap1.clearLayers();
        			dataMap1.setGeoJSON(geoJson4Swapper);

        		}


            }


        	range['oninput' in range ? 'oninput' : 'onchange'] = swapper;
        	map.on('move', swapper);
        	map.setView([32.08063,34.7813725999999], 14);

        	swapper();


        }, 500);

}

