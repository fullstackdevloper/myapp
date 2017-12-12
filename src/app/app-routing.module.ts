import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { TrainingComponent } from './training/training.component';   
import { EditComponent } from './edit/edit.component';  

const appRoutes: Routes = [
  {
    path: '',
    component: TrainingComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}