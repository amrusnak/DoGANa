<?php  
	header("Access-Control-Allow-Origin: *");

	$filesGrey = glob('demoImgs/bw/*');
	$filesUW = glob('demoImgs/underwater/*');
	$filesColor = glob('demoImgs/color/*');
	$filesUser = glob('datasets/userImgs/trainA/*');

	$fp = fopen('imageNamesGrey.json', 'w');
	fwrite($fp, json_encode($filesGrey));
	fclose($fp); 

	$fp = fopen('imageNamesColor.json', 'w');
	fwrite($fp, json_encode($filesColor));
	fclose($fp); 

	$fp = fopen('imageNamesUser.json', 'w');
	fwrite($fp, json_encode($filesUser));
	fclose($fp); 

	$fp = fopen('imageNamesUnderwater.json', 'w');
	fwrite($fp, json_encode($filesUW));
	fclose($fp); 

	$filesGenF_BW = glob('results/bwPhoto/train_latest/images/fake_B/*');
	$filesGenR_BW = glob('results/bwPhoto/train_latest/images/real_A/*');

	$filesGenF_U = glob('results/underwater/train_latest/images/fake_B/*');
	$filesGenR_U = glob('results/underwater/train_latest/images/real_A/*');

	$filesGenF_C = glob('results/cPhoto/train_latest/images/fake_B/*');
	$filesGenR_C = glob('results/cPhoto/train_latest/images/real_A/*');

	$combinedGen = array();

	if (!$filesGenF_BW) {
    	if (!$filesGenF_U) {
    		if (!$filesGenF_C) {
    				echo('No images generated.');
			} else {
	    		$count=sizeof($filesGenF_C);

	    		for($counter=0;$counter<$count;$counter++){
			
					array_push($combinedGen, $filesGenR_C[$counter]);
					array_push($combinedGen, $filesGenF_C[$counter]);

				}
			}	
		} else {
    		$count=sizeof($filesGenF_U);

    		for($counter=0;$counter<$count;$counter++){
		
				array_push($combinedGen, $filesGenR_U[$counter]);
				array_push($combinedGen, $filesGenF_U[$counter]);

			}
		}	
	} else {
    	$count=sizeof($filesGenF_BW);

    	for($counter=0;$counter<$count;$counter++){
		
			array_push($combinedGen, $filesGenR_BW[$counter]);
			array_push($combinedGen, $filesGenF_BW[$counter]);
		}
	}



	
    $fp = fopen('imageNamesGen.json', 'w');
	fwrite($fp, json_encode($combinedGen));
	fclose($fp); 
	
?>