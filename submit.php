<?php
// 1. Basic server-side validation (never trust client input)
$first = filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_SPECIAL_CHARS);
$last  = filter_input(INPUT_POST, 'lastName', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if (!$first || !$last || !$email) {
  http_response_code(400);
  exit;
}

// 2. For tomorrow’s demo just log to a file
$log = date('c').", $first $last, $email, ".$_SERVER['REMOTE_ADDR']."\n";
file_put_contents('log.txt', $log, FILE_APPEND);

// 3. Return OK (fetch() above checks .ok)
http_response_code(200);
?>