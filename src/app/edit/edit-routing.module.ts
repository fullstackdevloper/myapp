import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent }    from './edit.component';

const editRoutes: Routes = [
  { path: 'edit',  component: EditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(editRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditRoutingModule { }
