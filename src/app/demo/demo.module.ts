import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [TdFormComponent, ReactiveFormComponent, DemoComponent],
  imports: [FormsModule, ReactiveFormsModule, DemoRoutingModule, SharedModule]
})
export class DemoModule {}
