import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Edit }    from '../edit';
//import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] 
})
export class EditComponent { 

constructor( private route: ActivatedRoute)
{
	//this.route.params.subscribe(res);
}
 
}
