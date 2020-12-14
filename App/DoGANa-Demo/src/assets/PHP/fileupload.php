<?php
header("Access-Control-Allow-Origin: *");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['files'])) {
		$fp = fopen('resultsTest.json', 'w');

		$errors = [];
       
        $path = 'datasets/userImgs/trainA/';
        $extensions = ['jpg', 'jpeg', 'png'];

        $all_files = count($_FILES['files']['tmp_name']);
        $file_name = $_FILES['files']['name'][0];
        $file_tmp = $_FILES['files']['tmp_name'][0];
        $file_type = $_FILES['files']['type'][0];
        $file_size = $_FILES['files']['size'][0];
        $file_ext = strtolower(end(explode('.', $_FILES['files']['name'][0])));
        $file = $path . $file_name;
        
        fwrite($fp, json_encode($file_name));
        
        move_uploaded_file($file_tmp, $file);

    }
    
}

?> 
