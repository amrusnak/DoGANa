<?php  
	header("Access-Control-Allow-Origin: *");

	$model = $_REQUEST["m"];
	$data = $_REQUEST["ds"];
	echo $model;
	if($model == 'BWModel'){
		echo 'here';
		if($data == 'DemoData'){
			$command = escapeshellcmd('python3 ../../../../../Model/test_dogana.py --dataroot ./datasets/demoGrey --name bwPhoto --CUT_mode CUT --selfAttn 1 --normG spectral --normD batch');
			$output = shell_exec($command);
		}
		else if($data == 'UploadData'){
			$command = escapeshellcmd('python3 ../../../../../Model/test_dogana.py --dataroot ./datasets/userImgs --name bwPhoto --CUT_mode CUT --selfAttn 1 --normG spectral --normD batch');
			$output = shell_exec($command);
		}
	} elseif ($model == 'ColorModel'){
		if($data == 'DemoData'){
			$command = escapeshellcmd('python3 ../../../../../Model/test_dogana.py --dataroot ./datasets/demoColor --name cPhoto --CUT_mode CUT --selfAttn 1 --normG spectral --normD batch');
			$output = shell_exec($command);
		}
		else if($data == 'UploadData'){
			$command = escapeshellcmd('python3 ../../../../../Model/test_dogana.py --dataroot ./datasets/userImgs --name cPhoto --CUT_mode CUT --selfAttn 1 --normG spectral --normD batch');
			$output = shell_exec($command);
		}
	} elseif ($model == 'UWModel'){
		if($data == 'DemoData'){
			$command = escapeshellcmd('python3 ../../../../../Model/test_dogana.py --dataroot ./datasets/demoUnderwater --name underwater --CUT_mode CUT --selfAttn 0 --normG spectral --normD batch');
			$output = shell_exec($command);
		}
		else if($data == 'UploadData'){
			$command = escapeshellcmd('python3 ../../../../../Model/test_dogana.py --dataroot ./datasets/userImgs --name underwater --CUT_mode CUT --selfAttn 0 --normG spectral --normD batch');
			$output = shell_exec($command);
		}
	}

	//echo $output;
?>
