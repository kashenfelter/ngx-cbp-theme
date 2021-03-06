import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CBPHeaderComponent} from './cbp-header.component';
import {MatIconModule, MatListModule, MatMenuModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CBPUserModule} from '../../user/user.module';
import {CBPApplicationsModule} from '../../applications/applications.module';
import {CBPToolbarModule} from '../cbp-toolbar/cbp-toolbar.module';


@NgModule({
  imports: [
      CommonModule,
      MatListModule,
      MatMenuModule,
      MatToolbarModule,
      FlexLayoutModule,
      MatIconModule,
      MatButtonModule,
      CBPUserModule,
      CBPApplicationsModule,
      CBPToolbarModule
  ],
  declarations: [CBPHeaderComponent],
  exports: [CBPHeaderComponent, MatButtonModule, CBPUserModule, CBPApplicationsModule, CBPToolbarModule]
})
export class CBPHeaderModule { }
