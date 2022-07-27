import { ModuleWithProviders, NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgMatAlertDialogComponent } from './component/ng-mat-alert-dialog.component';
import { CommonModule } from '@angular/common';
import { NgMatAlertService } from '../public-api';


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
})
export class NgMatAlertModule {
  static forRoot(): ModuleWithProviders<NgMatAlertModule> {
    return {
      ngModule: NgMatAlertModule,
      providers: [NgMatAlertService],
    };
  }
}
