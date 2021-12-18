<?php
/*
* Author: Ojas Ojasvi
* Released: September 25, 2007
* Description: An example of the disguise_curl() function in order to grab contents from a website while remaining fully camouflaged by using a fake user agent and fake headers.
*/

$url = 'https://orteil.dashnet.org/patreon/grab.php';

// disguises the curl using fake headers and a fake user agent.
function disguise_curl($url)
{
  $curl = curl_init();

  // Setup headers - I used the same headers from Firefox version 2.0.0.6
  // below was split up because php.net said the line was too long. :/
  $header[0] = "Accept: text/xml,application/xml,application/xhtml+xml,";
  $header[0] .= "text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5";
  $header[] = "Cache-Control: max-age=0";
  $header[] = "Connection: keep-alive";
  $header[] = "Keep-Alive: 300";
  $header[] = "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7";
  $header[] = "Accept-Language: en-us,en;q=0.5";
  $header[] = "Pragma: "; // browsers keep this blank.

  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.45 Safari/537.3');
  curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
  curl_setopt($curl, CURLOPT_REFERER, 'https://orteil.dashnet.org/cookieclicker/');
  curl_setopt($curl, CURLOPT_ENCODING, 'gzip,deflate,br');
  curl_setopt($curl, CURLOPT_AUTOREFERER, true);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HEADER, 1);
  curl_setopt($curl, CURLOPT_TIMEOUT, 10);

  $html = curl_exec($curl); // execute the curl command
  $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
  $header = substr($response, 0, $header_size);
  $body = substr($response, $header_size);
  echo $header;
  curl_close($curl); // close the connection

  return $body; // and finally, return $html
}

// uses the function and displays the text off the website
$text = disguise_curl($url);
header("Access-Control-Allow-Origin: https://xvarmkorv2.github.io");
echo $text;
?>