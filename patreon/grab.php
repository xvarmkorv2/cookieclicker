<?php
header("Access-Control-Allow-Origin: https://xvarmkorv2.github.io");
//set POST variables
$url = 'https://orteil.dashnet.org/patreon/grab.php';
$fields_string = "";
/url-ify the data for the POST
foreach($_GET as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
$fields_string = rtrim($fields_string,'&');

//open connection
$ch = curl_init();
$headers = getallheaders()

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL,$url.$fields_string);
curl_setopt($ch,CURLOPT_HTTPGET,true);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
#curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"]);

//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);
echo $result;
exit;
?>