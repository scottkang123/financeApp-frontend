import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
  exports: [
    NzIconModule,
    NzButtonModule,
    NzAutocompleteModule
  ],
})
export class NgZorroModule {}