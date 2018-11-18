import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { TwittTableComponent } from './twitt-table/twitt-table.component';
import { TwittComponent } from './twitt/twitt.component';
import { TwittEditorComponent } from './twitt-editor/twitt-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TwittTableComponent,
    TwittComponent,
    TwittEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
