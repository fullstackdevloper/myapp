import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import { TrainingComponent } from './training/training.component';   
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';  


const appRoutes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    TrainingComponent,
    EditComponent,
    AboutComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }