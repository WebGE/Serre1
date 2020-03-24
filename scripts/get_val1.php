<?php
  // Create cURL call, make sure to change it with your Wifi name
  $service_url = "http://192.168.200.93/arduino/analog/val1"; // IP à modifier
  $curl = curl_init($service_url);
   
  // Send cURL to Uno Wifi board
  curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4); 
  curl_exec($curl);
  curl_close($curl);
?>
