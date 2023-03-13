import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
  declarations: [AppComponent, TestComponent, TwowaybindingComponent, StructuralDirectivesComponent, PipesComponent, ServicesComponent, ServiceListComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
