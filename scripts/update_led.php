<?php

  // Create cURL call, make sure to change it with your Yun name
  // Commande d'une carte Relais shield v1.3
  $service_url = 'http://192.168.200.93/arduino/digital/11/'.$_GET["command"];
  $curl = curl_init($service_url);
   
  // Send cURL to Yun board
  curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 ); 
  $curl_response = curl_exec($curl);
  curl_close($curl);
?>