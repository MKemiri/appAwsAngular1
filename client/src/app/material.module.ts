import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import "hammerjs/hammer";
import { MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSliderModule,
 MatDatepickerModule,
 MatNativeDateModule} from "@angular/material";

const MATERIAL = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSliderModule,
  MatNativeDateModule,
  MatDatepickerModule
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...MATERIAL],
  exports:MATERIAL
})
export class MaterialModule {}
