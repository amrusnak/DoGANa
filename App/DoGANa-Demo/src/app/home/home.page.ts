import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  public demoImgsGrey: string[] = [];
  public demoImgsUser: string[] = [];
  public demoImgsColor: string[] = [];
  public demoImgsGen: string[] = [];
  public demoImgsUnderwater: string[] = [];
  public modelUsed: string = '';
  constructor(private router: Router) {
  	
  	var request1 = new XMLHttpRequest();
	request1.open("POST", "http://0.0.0.0:8000/demoImageRetrieval.php", true);
	request1.send();

	var request = new XMLHttpRequest();
    request.open("GET", "../assets/PHP/imageNamesGrey.json", false);
    request.send(null)
    this.demoImgsGrey = JSON.parse(request.responseText);

    var request = new XMLHttpRequest();
    request.open("GET", "../assets/PHP/imageNamesColor.json", false);
    request.send(null)
    this.demoImgsColor = JSON.parse(request.responseText);

    var request = new XMLHttpRequest();
    request.open("GET", "../assets/PHP/imageNamesUser.json", false);
    request.send(null)
    this.demoImgsUser = JSON.parse(request.responseText);

    var request = new XMLHttpRequest();
    request.open("GET", "../assets/PHP/imageNamesUnderwater.json", false);
    request.send(null)
    this.demoImgsUnderwater = JSON.parse(request.responseText);

    var request = new XMLHttpRequest();
    request.open("GET", "../assets/PHP/imageNamesGen.json", false);
    request.send(null)
    this.demoImgsGen = JSON.parse(request.responseText);

   	//if (this.demoImgsGen && this.demoImgsGen.length) {
    	
    	//document.getElementById("demoGenDisplay").style.display = "block";
	//}

  	//alert(this.demoImgs)
  }

  displayColor() {  
  		
	    document.getElementById("colorDemoDatasetDisplay").style.display = "block";
	    document.getElementById("greyDemoDatasetDisplay").style.display = "none";
	    document.getElementById("underwaterDemoDatasetDisplay").style.display = "none";
	    
    }  

   displayGrey() {  
      
      document.getElementById("colorDemoDatasetDisplay").style.display = "none";
      document.getElementById("greyDemoDatasetDisplay").style.display = "block";
      document.getElementById("underwaterDemoDatasetDisplay").style.display = "none";
    }  

  displayUnderwater() {  
      
      document.getElementById("colorDemoDatasetDisplay").style.display = "none";
      document.getElementById("greyDemoDatasetDisplay").style.display = "none";
      document.getElementById("underwaterDemoDatasetDisplay").style.display = "block";
    }  

  displayDemo() {  
  		
	    document.getElementById("demoDatasetDisplay").style.display = "block";
	    document.getElementById("ownDatasetDisplay").style.display = "none";
    }  

   displayOwn() {  
      
      document.getElementById("demoDatasetDisplay").style.display = "none";
      document.getElementById("ownDatasetDisplay").style.display = "block";
    }  

   getFile(){
		  const form = document.getElementById('fileForm');
		  const formData = new FormData();
		  try{
		    const files = (<HTMLInputElement>document.querySelector('#imageFile')).files;
		    for (let i = 0; i < files.length; i++) {
		      let file = files[i];
		      formData.append('files[]', file);
		    } 
		  } catch(err){}
		  
		  
		 const url = 'http://0.0.0.0:8000/fileupload.php'
		  fetch(url, {
		    method: 'POST',
		    body: formData,
		  }).then(response => {
		    console.log(response)
		  })

		 var request1 = new XMLHttpRequest();
		 request1.open("POST", "http://0.0.0.0:8000/demoImageRetrieval.php", true);
	     request1.send();

	    var request = new XMLHttpRequest();
    	request.open("GET", "../assets/PHP/imageNamesUser.json", false);
    	request.send(null)
    	this.demoImgsUser = JSON.parse(request.responseText);
    	alert('File Uploaded!');

	}

	testModel(){
		var modelRadio = (<HTMLInputElement>document.querySelector('input[name="model"]:checked')).value;
		var dataRadio = (<HTMLInputElement>document.querySelector('input[name="dataset"]:checked')).value;

		alert('Starting image conversion, please wait a few seconds!');
		var request = new XMLHttpRequest();
    	request.open("POST", "http://0.0.0.0:8000/runModel.php?m=" + modelRadio + "&ds=" + dataRadio, true);
    	request.send();

    	var delayInMilliseconds = 25000; 
    	this.modelUsed = modelRadio;
		setTimeout(function() {
  			
  			alert('Finished image conversion!');
  			var request1 = new XMLHttpRequest();
			request1.open("POST", "http://0.0.0.0:8000/demoImageRetrieval.php", true);
	    	request1.send();

		}, delayInMilliseconds);

		


	}

	viewResults(){


		let navigationExtras = {
        		queryParams: {
          		id: JSON.stringify(this.modelUsed)
        		}
      		};
      		this.router.navigate(['results'], navigationExtras);


	}
	
}
