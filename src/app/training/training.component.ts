import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training }    from '../training';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})



export class TrainingComponent implements OnInit {
	
	public filterVar: any;
	public base_url: any='http://localhost/myapp/server/';
	results: string[];
	public item:any;
	public list:any;
	public tables:any;
	constructor(private http: HttpClient) {}
 
   ngOnInit(): void {
    this.http.get(this.base_url+'index.php/training/index').subscribe(data => {
      // Read the result field from the JSON response.
      this.item = data['results'];
    }); 
	
	this.http.get(this.base_url+'index.php/training/get_users').subscribe(data => {
      // Read the result field from the JSON response.
      this.tables = data['results'];
	  this.list =  data['results'];
    });
  }
  
    
  getPermission(ite, tables){
	if(ite == 0){
		this.tables = tables;
	}else{
		
		var test = tables.filter(function (el) {
			return (el.permission.indexOf(ite) !== -1);
		  });
		  this.tables = test;
	}
  }

}