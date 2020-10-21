import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DirectiveDashboardComponent } from './directive-dashboard/directive-dashboard.component';
import { NgClassComponent } from './Routes/ng-class/ng-class.component';
import { DirectiveRoutingModule } from './directive-routing.module';
import { NgModelComponent } from './Routes/ng-model/ng-model.component';
import { NgIfComponent } from './Routes/ng-if/ng-if.component';
import { NgForComponent } from './Routes/ng-for/ng-for.component';
import { NgSwitchComponent } from './Routes/ng-switch/ng-switch.component';
import { AttributeDirectiveComponent } from './Routes/attribute-directive/attribute-directive.component';
import { HighlightDirectiveDirective } from './Routes/attribute-directive/highlight-directive.directive';
import { NgContainerComponent } from './Routes/ng-container/ng-container.component';



@NgModule({
  declarations: [DirectiveDashboardComponent, NgClassComponent, NgModelComponent, NgIfComponent, NgForComponent, NgSwitchComponent, AttributeDirectiveComponent, HighlightDirectiveDirective, NgContainerComponent],
  imports: [
    CommonModule,
    DirectiveRoutingModule,
    FormsModule
  ]
})
export class DirectiveModule { }
