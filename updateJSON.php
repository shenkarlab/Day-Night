<?php

header('Content-Type: text/html; charset=utf-8');



if(!isset($_POST['inp'])){


		include('./mysql.php');


		if (!$con) {

		    die('Could not connect: ' . mysqli_error($con));
		}
		mysqli_query($con, "SET NAMES 'utf8'");





		if(isset($_POST['name'])){

		// ###################################################################################################################################


		// update the database with the new location

		$name = $_POST['name'];
		$cat = "בית קפה"; // for any case 

		$wOp = $_POST['wOp'];
		$wCl = $_POST['wCl'];

		$sOp = $_POST['sOp'];
		$sCl = $_POST['sCl'];

		$eOp = $_POST['eOp'];
		$eCl = $_POST['eCl'];


		$tel = $_POST['tel'];
		$add = $_POST['add'];
		$lat = (double)$_POST['lat'];
		$lng = (double)$_POST['lng'];
		$url = $_POST['url'];

		$map1 = 0;
		$map2 = 0;
		$map3 = 0;
		$map4 = 0;
		$map5 = 0;

		$openAt=0;
		$temp2 = "";

		$closeAt=0;
		$tempCL2 = "";


		// ################################### map handler START

		if($wOp[1] == ":"){

			$openAt = (int)$wOp[0];
		}
		else{

			$temp2 = $wOp[0].$wOp[1];
			$openAt = (int)$temp2;
		}

		if($wCl[1] == ":"){

			$closeAt = (int)$wCl[0];
		}
		else{

			$temp2CL = $wCl[0].$wCl[1];
			$closeAt = (int)$temp2;
		}


		if($openAt < 5){ $map5 = 1; }

		if($openAt < 12 && $closeAt >=5 ){ $map1 = 1; }

		if($openAt < 16 && $closeAt >= 12 ){ $map2 = 1; }

		if($openAt < 20 && $closeAt >= 16 ){ $map3 = 1; }

		if($closeAt >= 20){ $map4 = 1; }

		// ###################################  map handler END



		$icn = (int)$_POST['cat']; 



		if($_POST['cat'] == "1"){ $cat = "בית קפה"; }
		else if($_POST['cat'] == "2"){ $cat = "פאב"; }
		else if($_POST['cat'] == "3"){ $cat = "מסעדה"; }
		else if($_POST['cat'] == "4"){ $cat = "מוזאון"; }
		else if($_POST['cat'] == "5"){ $cat = "פנאי"; $icn = "5";}
		else if($_POST['cat'] == "6"){ $cat = "קניון"; $icn = "5"; }
		else if($_POST['cat'] == "7"){ $cat = "גלידריה"; }
		else if($_POST['cat'] == "8"){ $cat = "לונה פארק"; }
		else if($_POST['cat'] == "9"){ $cat = "קולנוע"; }
		else if($_POST['cat'] == "10"){ $cat = "חופים"; }
		else if($_POST['cat'] == "11"){ $cat = "ג'אנק פוד"; }
		else if($_POST['cat'] == "12"){ $cat = "פארק"; }




		$res = mysqli_query($con, "INSERT INTO info (url, name, icn, cat, w_open, w_close, s_open, s_close, e_open, e_close, address, tel, lng, lat, map1, map2, map3, map4, map5) VALUES ('$url', '$name', '$icn', '$cat', '$wOp', '$wCl', '$sOp', '$sCl', '$eOp', '$eCl', '$add', '$tel', '$lng', '$lat', '$map1', '$map2', '$map3', '$map4', '$map5')" );
									

			if($res){
									
									
				echo 'Successfully Added';	
			}
			else{
										
				echo 'Failed, Adding Unknown Reason';		
			}


		}



		// ###################################################################################################################################







		$check = "SELECT * FROM info WHERE 1=1 ";
		$result = mysqli_query($con, $check);




		for($i=0; $getInfo = mysqli_fetch_array($result) ;$i++){



		 	if($getInfo['w_open']+0 == 0){  // Close Checking

		 		$wOpen = "סגור";
		 		$wClose = "";
		 	}
		 	else{

		 		$wOpen = $getInfo['w_open'];
		 		$wClose = "-".$getInfo['w_close'];
		 	}

		 	if($getInfo['s_open']+0 == 0){

		 		$sOpen = "סגור";
		 		$sClose = "";
		 	}
		 	else{

		 		$sOpen = $getInfo['s_open'];
		 		$sClose = "-".$getInfo['s_close'];
		 	}

		 	if($getInfo['e_open']+0 == 0){

		 		$eOpen = "סגור";
		 		$eClose = "";
		 	}
		 	else{

		 		$eOpen = $getInfo['e_open'];
		 		$eClose = "-".$getInfo['e_close'];
		 	}



			if($getInfo['w_open'] == "24/7"){   // 24/7 Checking

		 		$wOpen = "24/7";
		 		$wClose = "";

		 		$sOpen = "24/7";
		 		$sClose = "";

		 		$eOpen = "24/7";
		 		$eClose = "";


		 	}


		 		if($getInfo['w_open'] == "0B"){   // 24/7 Checking

		 		$wOpen = "סגור לרחצה";
		 		$wClose = "";

		 		$sOpen = "סגור לרחצה";
		 		$sClose = "";

		 		$eOpen = "סגור לרחצה";
		 		$eClose = "";


		 	}








		 	$wHRs = $wOpen.$wClose;
		 	$sHRs = $sOpen.$sClose;
		 	$eHRs = $eOpen.$eClose;









			$des = "קטגוריה: " . $getInfo['cat'] . "<br>א-ה: " . $wHRs . "<br>ו: " . $sHRs . "<br>ש: " .$eHRs.
			"<br>כתובת: " . $getInfo['address'] . "<br>טלפון: " . $getInfo['tel'] ;



			$img = $getInfo['icn'].".png";

			$geo = array('type' => "Point", 'coordinates' => [ $getInfo['lng']+0, $getInfo['lat']+0 ]);

			$icn = array('iconUrl' => $img, 'iconSize' => [67, 74], 'iconAnchor' => [25, 25], 'popupAnchor' => [0, 10], 'className' => "dot", 'id' => $getInfo['icn']."A" );

			$pro = array('description' => $des, 'title' =>  $getInfo['name'], "icon" => $icn, 'url' => $getInfo['url']);




			$arr[$i] = array('map1' => $getInfo['map1'], 'map2' => $getInfo['map2'], 'map3' => $getInfo['map3'], 'map4' => $getInfo['map4'], 'map5' => $getInfo['map5'], 'type' => 'Feature', 'geometry' => $geo, 'properties' => $pro);





		}

		mysqli_close($con);

		file_put_contents('jsonTest.json', json_encode($arr, JSON_UNESCAPED_UNICODE)); // Write

}

header('Location: ./');

?>