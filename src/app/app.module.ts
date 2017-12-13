import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent }          from './app.component';
import { TrainingComponent } from './training/training.component';   
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    TrainingComponent,
    EditComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

 export class PipeModule {

   static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
   }
 } 