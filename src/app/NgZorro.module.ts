import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  exports: [
    NzIconModule,
    NzButtonModule,
  ],
})
export class NgZorroModule {}