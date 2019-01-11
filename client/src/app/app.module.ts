import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from "./material.module"
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule,ReactiveFormsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
