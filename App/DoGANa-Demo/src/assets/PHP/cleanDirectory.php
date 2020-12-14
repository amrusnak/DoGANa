<?php  
	header("Access-Control-Allow-Origin: *");

	

    $folder_path = "results"; 
   

    function deleteAll($dir) {
    foreach(glob($dir . '/*') as $file) {
        if(is_dir($file))
            deleteAll($file);
        else
            unlink($file);
    }
    rmdir($dir);
    }

    deleteAll($folder_path);




?>
