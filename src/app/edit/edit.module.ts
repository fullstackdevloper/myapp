import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { EditComponent }    from './edit.component';

import { EditRoutingModule } from './edit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditRoutingModule
  ],
  declarations: [
   
  ],
  providers: [  ]
})
export class EditModule {}
