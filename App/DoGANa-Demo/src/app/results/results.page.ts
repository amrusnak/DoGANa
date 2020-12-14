import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  public demoImgsGen: string[] = [];
  constructor(private router: Router) { 

  	var request1 = new XMLHttpRequest();
	request1.open("POST", "http://0.0.0.0:8000/demoImageRetrieval.php", true);
	request1.send();

	var request = new XMLHttpRequest();
    request.open("GET", "../assets/PHP/imageNamesGen.json", false);
    request.send(null)
    this.demoImgsGen = JSON.parse(request.responseText);


	}

	returnModel(){

		

		var request1 = new XMLHttpRequest();
		request1.open("POST", "http://0.0.0.0:8000/cleanDirectory.php", true);
	    request1.send();
		
      	this.router.navigate(['home']);
	}

  ngOnInit() {
  }

}
