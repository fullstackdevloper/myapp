import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training }    from '../training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  item = [{'name':'All','val':'0'},{'name':'Admin','val':'1'},{'name':'Inpatient','val':'2'},{'name':'Meta','val':'3'},{'name':'Surgical','val':'4'}]
  goalText = ['goalText':'my life goal'];
  
  tables = [
  {'username':"admin@analysisiworks.com",'firstname':"admin",'lastname':"admin",'action':"1"},
  {'username':"demo@analysisiworks.com",'firstname':"demo",'lastname':"demo",'action':"2"},
  {'username':"jazzy@analysisiworks.com",'firstname':"jazzy",'lastname':"jazzy",'action':"3"},
  {'username':"test@analysisiworks.com",'firstname':"test",'lastname':"test",'action':"4"},
  
  ]
  
  ngOnInit()
  {
	  
  }

}
