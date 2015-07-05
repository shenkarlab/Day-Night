<?PHP


$today = jddayofweek ( cal_to_jd(CAL_GREGORIAN, date("m"),date("d"), date("Y")) , 1 ); 

echo $today;
?>