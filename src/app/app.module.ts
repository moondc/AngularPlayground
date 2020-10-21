import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './Routes/dashboard/dashboard.component';
import { BasicComponent } from './Routes/basic-component/basic.component';
import { TemplateModule } from './Routes/template/template.module';
import { DirectiveModule } from './Routes/directive/directive.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
