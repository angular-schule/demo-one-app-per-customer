import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { AwesomeButtonComponent } from './awesome-button.component';

@NgModule({
  imports: [
  ],
  declarations: [SharedLibComponent, AwesomeButtonComponent],
  exports: [SharedLibComponent, AwesomeButtonComponent]
})
export class SharedLibModule { }
