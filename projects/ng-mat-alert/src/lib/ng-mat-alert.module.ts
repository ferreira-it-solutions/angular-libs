import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgMatAlertDialogComponent } from './component/ng-mat-alert-dialog.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    NgMatAlertDialogComponent
  ],
  exports: [
  ]
})
export class NgMatAlertModule { }
