<?php
echo "why:";
//extract data from the post
extract($_GET);

//set POST variables
$url = 'https://orteil.dashnet.org/patreon/grab.php';
$fields_string = "";
$fields = array(
        'lname'=>urlencode($last_name), // Assuming there was something like $_POST[last_name]
        'fname'=>urlencode($first_name)
    );

//url-ify the data for the POST
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
$fields_string = rtrim($fields_string,'&');

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL,$url.$fields_string);
curl_setopt($ch,CURLOPT_HTTPGET,true);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_HTTPHEADER,array (
    "Accept: application/json"
));


//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);
header("Access-Control-Allow-Origin: https://xvarmkorv2.github.io");
echo $result;
echo ":why";
exit;
?>