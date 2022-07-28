import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FisSkeletonLoadingComponent } from './skeleton-loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FisSkeletonLoadingComponent],
  exports: [FisSkeletonLoadingComponent]
})
export class FisSkeletonLoadingModule {}
