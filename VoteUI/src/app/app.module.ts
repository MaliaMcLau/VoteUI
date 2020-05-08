import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectionItemComponent } from './election-item/election-item.component';
import { ElectionListComponent } from './election-list/election-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateItemComponent } from './candidate-item/candidate-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ElectionItemComponent,
    ElectionListComponent,
    CandidateListComponent,
    CandidateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
