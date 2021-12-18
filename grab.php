<?php 
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
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_GET,count($fields));
curl_setopt($ch,CURLOPT_GETFIELDS,$fields_string);

//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);
echo $result;

exit
?>
<?php
header("Access-Control-Allow-Origin: https://xvarmkorv2.github.io")
$url = "https://orteil.dashnet.org/patreon/grab.php";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);
?>