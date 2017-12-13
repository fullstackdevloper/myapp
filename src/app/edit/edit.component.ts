import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Edit }    from '../edit';
import * as c3 from 'c3';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] 
})
export class EditComponent implements OnInit  { 

	public userid:any;
	public userdetails:any;
	public base_url: any='http://localhost/myapp/server/';
	public results: string[];
	public modules:any;
	
	
	constructor( private route: ActivatedRoute, private http: HttpClient)
	{		
	   this.route.params.subscribe(res=>{this.userid=res.id} );
	 
	}
	ngOnInit(): void {
		let chart = c3.generate({
		bindto: '#chart',
			data: {
			columns: [
				['visits', 2]
			],
			type: 'bar'
			},
			point: {
				show: false
			},
			grid: {
					x: {
						lines: [
							{value: 0, text: '2017-11-21', position: 'start'},
						]
					}
			},
/* 			tooltip: {
				format: {
					title: function (d) { return '2017-11-21'; },
					value: function (value, ratio, id) {
						var format = id === 'visits' ? d3.format(',') : d3.format('$');
						return format(value);
					}
				}
			},	 */		
			bar: {
				width: 50
			}			
		});
		this.http.get(this.base_url+'index.php/training/user/?id='+this.userid).subscribe(data => {
		  // Read the result field from the JSON response.
		  this.userdetails = data['results'];
		});
		this.http.get(this.base_url+'index.php/training/index').subscribe(data => {
		  // Read the result field from the JSON response.
		  this.modules = data['results'];
		}); 
	}	
}