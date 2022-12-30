import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTabs } from './router-tab/router-tabs.directive';
import { RouterTab } from './router-tab/router-tab.directive';
import { SharedServiceService } from './shared-service.service';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  declarations: [PageNotFoundComponent, RouterTabs, RouterTab],
  exports: [
    CommonModule,
    FlexLayoutModule,
    PageNotFoundComponent,
    RouterTabs,
    RouterTab,
  ],
  providers : [SharedServiceService]

})
export class SharedModule {}
